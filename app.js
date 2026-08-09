const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const contents={english:window.studyContent,hinglish:window.studyContentHinglish};
let units=contents.english.units;
let currentUnit='';
let topicData={};
const viewport=$('#viewport'),world=$('#world'),menu=$('#menu'),menuPanel=$('#topic-menu'),toolbar=$('.toolbar'),studyNav=$('#study-nav'),zoomLabel=$('#zoom');
let currentTopic='';

const unitList=$('#unit-list'),topicList=$('#topic-list'),menuTitle=$('#menu-title'),backUnits=$('#back-units');
function buttonFor(name,handler){
  const button=document.createElement('button');
  button.textContent=name;
  button.onclick=()=>handler(button);
  return button;
}
function showUnits(){currentUnit='';currentTopic='';topicData={};menuTitle.textContent='Units';menuTitle.hidden=false;unitList.hidden=false;topicList.hidden=true;topicList.replaceChildren();backUnits.hidden=true;unitList.replaceChildren(...Object.keys(units).map(name=>buttonFor(name,()=>showUnit(name))));}
function showUnit(name){currentUnit=name;topicData=units[name].topics;menuTitle.textContent=name;menuTitle.hidden=false;unitList.hidden=true;topicList.hidden=false;backUnits.hidden=false;topicList.replaceChildren(...Object.keys(topicData).map(topic=>buttonFor(topic,()=>showFlashcard(topic))));}
backUnits.onclick=showUnits;

function formatAnswer(container,text){
  const parts=text.split(/\r?\n/).flatMap(line=>{
    line=line.trim();
    return /^[-*•]\s/.test(line)?[line]:line.match(/[^.!?]+(?:[.!?]+|$)/g)||[];
  }).map(line=>line.trim()).filter(Boolean);
  container.replaceChildren();
  let list;
  parts.forEach(part=>{
    const bullet=part.match(/^[-*•]\s*(.+)$/);
    if(bullet){
      if(!list){list=document.createElement('ul');container.append(list)}
      const item=document.createElement('li');item.textContent=bullet[1];list.append(item);
    }else{
      list=null;
      const paragraph=document.createElement('p');paragraph.textContent=part;container.append(paragraph);
    }
  });
}
function formatAnswerSafe(container,text){
  const parts=text.split(/\r?\n/).map(line=>line.trim()).filter(Boolean);
  container.replaceChildren();
  let list;
  parts.forEach(part=>{
    const bullet=part.match(/^[-*]\s*(.+)$/);
    if(bullet){
      if(!list){list=document.createElement('ul');container.append(list)}
      const item=document.createElement('li');item.textContent=bullet[1];list.append(item);
    }else{
      list=null;
      const paragraph=document.createElement('p');paragraph.textContent=part;container.append(paragraph);
    }
  });
}
function renderFlashcards(){
  $('.topic h1').textContent=currentTopic.replace(/\?$/,'');
  const cards=topicData[currentTopic].cards;
  $$('.card').forEach((card,index)=>{
    if(index>=cards.length){card.hidden=true;return}
    const [question,answer]=cards[index];
    card.hidden=false;
    card.style.setProperty('--shift-y','0px');
    card.querySelector('.question').textContent=question;
    formatAnswerSafe(card.querySelector('.answer>div'),answer);
    card.classList.remove('open');
    card.querySelector('.question').setAttribute('aria-expanded','false');
  });
}
function relayoutCards(){
  const cards=$$('.card').filter(card=>!card.hidden).sort((a,b)=>parseFloat(a.style.getPropertyValue('--y'))-parseFloat(b.style.getPropertyValue('--y')));
  const placed=[];
  cards.forEach(card=>{
    const left=parseFloat(card.style.getPropertyValue('--x'))-card.offsetWidth/2;
    const right=left+card.offsetWidth;
    const top=parseFloat(card.style.getPropertyValue('--y'));
    const height=card.querySelector('.question').offsetHeight+(card.classList.contains('open')?card.querySelector('.answer>div').scrollHeight:0);
    let shift=0;
    placed.forEach(other=>{if(left<other.right&&right>other.left&&top+shift<other.bottom+50)shift=Math.max(shift,other.bottom+50-top)});
    card.style.setProperty('--shift-y',`${shift}px`);
    placed.push({left,right,bottom:top+shift+height});
  });
}
function updateFocus(){world.classList.toggle('focused',Boolean(world.querySelector('.card.open')))}
function closeCard(card){
  if(!card?.classList.contains('open'))return;
  card.classList.remove('open');
  card.querySelector('.question').setAttribute('aria-expanded','false');
  updateFocus();
  const answer=card.querySelector('.answer');
  let done=false;
  const finish=()=>{if(done)return;done=true;answer.removeEventListener('transitionend',finish);relayoutCards()};
  answer.addEventListener('transitionend',finish);
  setTimeout(finish,260);
}
function toggleCard(card,button){
  if(card.classList.contains('open'))return closeCard(card);
  $$('.card.open').forEach(closeCard);
  card.classList.add('open');
  button.setAttribute('aria-expanded','true');
  updateFocus();
  requestAnimationFrame(relayoutCards);
}
function showFlashcard(topic){
  currentTopic=topic;menu.hidden=true;world.hidden=false;studyNav.hidden=false;toolbar.classList.add('study-mode');renderFlashcards();updateFocus();
  const topics=Object.keys(topicData),index=topics.indexOf(topic);
  $('#previous-topic').disabled=index<=0;
  $('#next-topic').disabled=index>=topics.length-1;
}
$('#back-questions').onclick=()=>{world.hidden=true;studyNav.hidden=true;menu.hidden=false;toolbar.classList.remove('study-mode');showUnit(currentUnit)};
$('#previous-topic').onclick=()=>{const topics=Object.keys(topicData),index=topics.indexOf(currentTopic);if(index>0)showFlashcard(topics[index-1])};
$('#next-topic').onclick=()=>{const topics=Object.keys(topicData),index=topics.indexOf(currentTopic);if(index<topics.length-1)showFlashcard(topics[index+1])};

const fittedScale=()=>innerWidth<=600?Math.min(.55,Math.max(.35,(innerWidth-24)/840)):.8;
const initialScale=fittedScale();
const view={x:innerWidth/2-820*initialScale,y:innerHeight/2-530*initialScale,scale:initialScale};
const menuView={x:0,y:0};
function renderView(){
  const ratio=devicePixelRatio||1,x=Math.round(view.x*ratio)/ratio,y=Math.round(view.y*ratio)/ratio;
  world.style.transform=`translate(${x}px,${y}px) scale(${view.scale})`;
  menuPanel.style.transform=`translate(${menuView.x}px,${menuView.y}px) scale(${view.scale/fittedScale()})`;
  zoomLabel.value=`${Math.round(view.scale*100)}%`;
}
function setZoom(next,cx=innerWidth/2,cy=innerHeight/2){
  next=Math.min(1.6,Math.max(.35,next));
  const wx=(cx-view.x)/view.scale,wy=(cy-view.y)/view.scale;
  view.x=cx-wx*next;view.y=cy-wy*next;view.scale=next;renderView();
}
let drag=null;
viewport.onpointerdown=event=>{
let drag = null;
  let pinch = null;
  const pointers = new Map();

  function pointerDistance([a, b]) {
    return Math.hypot(b.x - a.x, b.y - a.y);
  }

  function pointerCenter([a, b]) {
    return {
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2
    };
  }

  viewport.onpointerdown = event => {
    const coarse =
      innerWidth <= 600 ||
      matchMedia('(pointer:coarse)').matches;

    const card = event.target.closest('.card');

    if (
      event.target.closest('.study-nav') ||
      (!coarse && card) ||
      (!card && event.target.closest('button'))
    ) return;

    pointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY
    });

    viewport.setPointerCapture(event.pointerId);

    if (pointers.size === 2) {
      const points = [...pointers.values()];
      const center = pointerCenter(points);

      pinch = {
        distance: pointerDistance(points),
        scale: view.scale,
        worldX: (center.x - view.x) / view.scale,
        worldY: (center.y - view.y) / view.scale
      };

      drag = null;
      viewport.classList.add('dragging');
      return;
    }

    drag = !menu.hidden
      ? {
          menu: true,
          x: event.clientX,
          y: event.clientY,
          vx: menuView.x,
          vy: menuView.y
        }
      : {
          x: event.clientX,
          y: event.clientY,
          vx: view.x,
          vy: view.y,
          toggle: event.target.closest('.question'),
          dismiss: !card
        };

    viewport.classList.add('dragging');
  };

  viewport.onpointermove = event => {
    if (pointers.has(event.pointerId)) {
      pointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY
      });
    }

    if (pinch && pointers.size >= 2) {
      const points = [...pointers.values()].slice(0, 2);
      const center = pointerCenter(points);

      const nextScale = Math.min(
        1.6,
        Math.max(
          0.35,
          pinch.scale * pointerDistance(points) / pinch.distance
        )
      );

      view.scale = nextScale;
      view.x = center.x - pinch.worldX * nextScale;
      view.y = center.y - pinch.worldY * nextScale;

      renderView();
      return;
    }

    if (!drag) return;

    if (drag.menu) {
      menuView.x = drag.vx + event.clientX - drag.x;
      menuView.y = drag.vy + event.clientY - drag.y;
    } else {
      view.x = drag.vx + event.clientX - drag.x;
      view.y = drag.vy + event.clientY - drag.y;
    }

    renderView();
  };

  function clearViewportDrag() {
    drag = null;
    viewport.classList.remove('dragging');
  }

  viewport.onpointerup = event => {
    const wasPinching = Boolean(pinch);

    pointers.delete(event.pointerId);

    if (wasPinching) {
      pinch = null;
      pointers.clear();
      clearViewportDrag();
      return;
    }

    if (
      drag &&
      Math.hypot(
        event.clientX - drag.x,
        event.clientY - drag.y
      ) <= 8
    ) {
      if (drag.toggle) {
        toggleCard(
          drag.toggle.closest('.card'),
          drag.toggle
        );
      } else if (drag.dismiss) {
        closeCard(world.querySelector('.card.open'));
      }
    }

    clearViewportDrag();
  };

  function cancelViewportGesture() {
    pointers.clear();
    pinch = null;
    clearViewportDrag();
  }

  viewport.onpointercancel = cancelViewportGesture;
  viewport.onlostpointercapture = event => {
    pointers.delete(event.pointerId);

    if (!pointers.size) {
      pinch = null;
      clearViewportDrag();
    }
  };
};
viewport.onpointermove=event=>{if(drag){
  if(drag.menu){menuView.x=drag.vx+event.clientX-drag.x;menuView.y=drag.vy+event.clientY-drag.y}
  else{view.x=drag.vx+event.clientX-drag.x;view.y=drag.vy+event.clientY-drag.y}
  renderView();
}};
function clearViewportDrag(){drag=null;viewport.classList.remove('dragging')}
viewport.onpointerup=event=>{
  if(drag&&Math.hypot(event.clientX-drag.x,event.clientY-drag.y)<=8){
    if(drag.toggle)toggleCard(drag.toggle.closest('.card'),drag.toggle);
    else if(drag.dismiss)closeCard(world.querySelector('.card.open'));
  }
  clearViewportDrag();
};
viewport.onpointercancel=clearViewportDrag;viewport.onlostpointercapture=clearViewportDrag;
viewport.onwheel=event=>{event.preventDefault();setZoom(view.scale*(event.deltaY>0?.9:1.1),event.clientX,event.clientY)};
onresize=renderView;

$$('.card').forEach(card=>{
  let movement=null;
  card.onpointerdown=event=>{
    if(innerWidth<=600||matchMedia('(pointer:coarse)').matches)return;
    movement={x:event.clientX,y:event.clientY,left:parseFloat(card.style.getPropertyValue('--x')),top:parseFloat(card.style.getPropertyValue('--y')),toggle:Boolean(event.target.closest('.question'))};
    card.classList.add('moving');card.setPointerCapture(event.pointerId);
  };
  card.onpointermove=event=>{if(movement){
    card.style.setProperty('--x',`${movement.left+(event.clientX-movement.x)/view.scale}px`);card.style.setProperty('--y',`${movement.top+(event.clientY-movement.y)/view.scale}px`)
  }};
  const clearCardDrag=()=>{movement=null;card.classList.remove('moving')};
  card.onpointerup=event=>{if(!movement)return;if(!movement.toggle||Math.hypot(event.clientX-movement.x,event.clientY-movement.y)>8)return clearCardDrag();toggleCard(card,card.querySelector('.question'));clearCardDrag()};
  card.onpointercancel=clearCardDrag;card.onlostpointercapture=clearCardDrag;
});

$('#minus').onclick=()=>setZoom(view.scale-.1);
$('#plus').onclick=()=>setZoom(view.scale+.1);
$('#center').onclick=()=>{view.scale=fittedScale();view.x=innerWidth/2-820*view.scale;view.y=innerHeight/2-530*view.scale;menuView.x=menuView.y=0;renderView()};
const styleSelect=$('#text-style'),fontSelect=$('#text-font'),sizeInput=$('#text-size'),colorInput=$('#text-color'),widthInput=$('#text-width'),focusOpacity=$('#focus-opacity');
$('#language').onchange=event=>{units=contents[event.target.value].units;world.hidden=true;studyNav.hidden=true;menu.hidden=false;toolbar.classList.remove('study-mode');showUnits()};
const textStyles={question:{size:21,color:'#29282d',font:'Excalifont'},answer:{size:17,color:'#6e6b73',font:'Excalifont'}};
styleSelect.onchange=()=>{const style=textStyles[styleSelect.value];sizeInput.value=style.size;colorInput.value=style.color;fontSelect.value=style.font};
fontSelect.onchange=()=>{const name=styleSelect.value;textStyles[name].font=fontSelect.value;document.documentElement.style.setProperty(`--${name}-font`,fontSelect.value)};
sizeInput.oninput=()=>document.documentElement.style.setProperty(`--${styleSelect.value}-size`,`${sizeInput.value}px`);
widthInput.oninput=()=>{document.documentElement.style.setProperty('--card-width',`${widthInput.value}px`);relayoutCards()};
function darkColor(hex){
  const rgb=hex.match(/\w\w/g).map(value=>parseInt(value,16));
  const luminance=rgb.reduce((sum,value,index)=>sum+(value/255)*[.2126,.7152,.0722][index],0);
  const mix=luminance<.65?(.65-luminance)/.65:0;
  return `rgb(${rgb.map(value=>Math.round(value+(255-value)*mix)).join(' ')})`;
}
colorInput.oninput=()=>{
  const name=styleSelect.value;
  document.documentElement.style.setProperty(`--${name}-color`,colorInput.value);
  document.documentElement.style.setProperty(`--${name}-dark-color`,darkColor(colorInput.value));
};
focusOpacity.oninput=()=>document.documentElement.style.setProperty('--focus-opacity',`${focusOpacity.value}%`);
const themeButton=$('#theme');
const brand=toolbar.querySelector('strong');
function toggleToolbar(force){const expanded=force??!toolbar.classList.contains('expanded');toolbar.classList.toggle('expanded',expanded);brand.setAttribute('aria-expanded',expanded)}
brand.onclick=()=>{toggleToolbar();brand.blur()};
brand.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleToolbar()}};
document.addEventListener('pointerdown',event=>{if(toolbar.classList.contains('expanded')&&!event.target.closest('.toolbar'))toggleToolbar(false)});
toolbar.onwheel=event=>{
  if(innerWidth<=700||!toolbar.classList.contains('expanded'))return;
  event.preventDefault();
  toolbar.scrollLeft+=Math.abs(event.deltaX)>Math.abs(event.deltaY)?event.deltaX:event.deltaY;
};
let toolbarDrag;
toolbar.onpointerdown=event=>{
  if(innerWidth<=700||!toolbar.classList.contains('expanded')||(event.target!==toolbar&&!event.target.classList.contains('divider')))return;
  toolbarDrag={x:event.clientX,left:toolbar.scrollLeft};
  toolbar.classList.add('dragging-toolbar');
  toolbar.setPointerCapture(event.pointerId);
};
toolbar.onpointermove=event=>{if(toolbarDrag)toolbar.scrollLeft=toolbarDrag.left+toolbarDrag.x-event.clientX};
function clearToolbarDrag(){toolbarDrag=null;toolbar.classList.remove('dragging-toolbar')}
toolbar.onpointerup=clearToolbarDrag;
toolbar.onpointercancel=clearToolbarDrag;
toolbar.onlostpointercapture=clearToolbarDrag;
function setTheme(dark){document.documentElement.classList.toggle('dark',dark);themeButton.title=themeButton.ariaLabel=dark?'Use light mode':'Use dark mode';themeButton.setAttribute('aria-pressed',dark);localStorage.setItem('theme',dark?'dark':'light')}
setTheme((localStorage.getItem('theme')||matchMedia('(prefers-color-scheme: dark)').matches&&'dark')==='dark');
themeButton.onclick=()=>setTheme(!document.documentElement.classList.contains('dark'));
renderView();
world.hidden=true;
showUnits();
