"""
MindCards Document Ingestion Script
Usage:
    python scripts/ingest.py --input "notes.docx" --category "Question" --title "Machine Learning" --output "data/my_set.js"
"""
import sys
import os
import json
import re
import argparse
import zipfile
import xml.etree.ElementTree as ET

def extract_docx_lines(docx_path):
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)
    lines = []
    for p in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        texts = [node.text for node in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
        line = ''.join(texts).strip()
        if line:
            lines.append(line)
    return lines

def chunk_into_topics(questions, part_name):
    topics = {}
    for i in range(0, len(questions), 4):
        chunk = questions[i:i+4]
        q_start = i + 1
        q_end = i + len(chunk)
        topic_title = f"{part_name}: Q{q_start} - Q{q_end}"
        cards = []
        for idx, (q_text, a_text) in enumerate(chunk, start=1):
            cards.append([f"{idx}. {q_text}", a_text])
        topics[topic_title] = {"cards": cards}
    return topics

def main():
    parser = argparse.ArgumentParser(description="Ingest docx into MindCards dataset")
    parser.add_argument("--input", required=True, help="Path to .docx or .txt")
    parser.add_argument("--category", default="Question", choices=["Question", "Subject"], help="Category")
    parser.add_argument("--title", required=True, help="Subject or Question set title")
    parser.add_argument("--output", help="Output .js file path (defaults to data/<slug>.js)")
    args = parser.parse_args()

    if not os.path.exists(args.input):
        print(f"File not found: {args.input}")
        sys.exit(1)

    lines = extract_docx_lines(args.input) if args.input.endswith('.docx') else open(args.input, encoding='utf-8').read().splitlines()
    text = '\n'.join(lines)

    # Parse sections (e.g. PART A, PART B...)
    section_splits = re.split(r'(PART [A-Z0-9\s:]+QUESTIONS?)', text, flags=re.IGNORECASE)
    units = {}

    if len(section_splits) > 1:
        for i in range(1, len(section_splits), 2):
            sec_header = section_splits[i].strip()
            sec_body = section_splits[i+1].strip()
            # Split Q1, Q2...
            q_matches = re.split(r'(Q\d+\.?[^\n]+)', sec_body)
            qs = []
            for j in range(1, len(q_matches), 2):
                q_line = q_matches[j].strip().lstrip('Q').lstrip('0123456789. ')
                ans_body = q_matches[j+1].strip()
                qs.append((q_line, ans_body))
            if qs:
                units[sec_header] = {"topics": chunk_into_topics(qs, sec_header.split(':')[0])}
    else:
        # Single unit fallback
        q_matches = re.split(r'(Q\d+\.?[^\n]+)', text)
        qs = []
        for j in range(1, len(q_matches), 2):
            q_line = q_matches[j].strip().lstrip('Q').lstrip('0123456789. ')
            ans_body = q_matches[j+1].strip()
            qs.append((q_line, ans_body))
        if qs:
            units["Unit 1"] = {"topics": chunk_into_topics(qs, "Unit 1")}

    slug = re.sub(r'[^a-z0-9]+', '_', args.title.lower()).strip('_')
    out_file = args.output or f"data/{slug}.js"
    cat_key = "questions" if args.category.lower().startswith("q") else "subjects"

    js_code = f"""window.studyData = window.studyData || {{}};
window.studyData.english = window.studyData.english || {{}};
window.studyData.english.{cat_key} = window.studyData.english.{cat_key} || {{}};
window.studyData.english.{cat_key}[{json.dumps(args.title)}] = {json.dumps({"units": units}, indent=2, ensure_ascii=False)};
"""
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(js_code)

    print(f"Success! Generated {out_file} with {len(units)} units.")

if __name__ == "__main__":
    main()

