window.studyData = window.studyData || {};
window.studyData.hinglish = window.studyData.hinglish || {};
window.studyData.hinglish.subjects = window.studyData.hinglish.subjects || {};
window.studyData.hinglish.subjects["Introduction to Data Science"] = {
  "units": {
    "UNIT 1: DATA SCIENTIST'S TOOL BOX": {
      "topics": {
        "Data Science & Actionable Knowledge": {
          "cards": [
            [
              "1. Data Science kya hai aur yeh raw data ko actionable knowledge me kaise badalta hai?",
              "Data Science ek interdisciplinary field hai jo statistics, computer science, aur domain expertise ko combine karke raw data se meaningful insights nikalti hai.\n- Ingestion: Structured, semi-structured, ya unstructured data ko collect aur store karna.\n- Cleaning & Processing: Missing values, noise, aur anomalies ko remove karna.\n- Modeling & Interpretation: Algorithms aur statistical models se actionable business decisions lena."
            ],
            [
              "2. Data Science Lifecycle ke key stages ko explain karein.",
              "Data Science lifecycle me 5 main iterative stages hote hain:\n- Problem Formulation: Business goal aur primary questions define karna.\n- Data Acquisition & Cleaning: Data collect karna aur data quality fix karna.\n- Exploratory Data Analysis (EDA): Patterns, correlations, aur outliers detect karna.\n- Predictive Modeling: Machine learning ya statistical models train aur evaluate karna.\n- Deployment & Communication: Dashboards aur actionable insights ke through decisions implement karna."
            ],
            [
              "3. Structured, Semi-Structured, aur Unstructured Data me kya difference hai?",
              "Data teen main categories me exist karta hai:\n- Structured: Strict tabular schema me organized data (SQL databases, CSV, Excel).\n- Semi-Structured: Tags aur keys par based data jiska rigid table format nahi hota (JSON, XML, NoSQL).\n- Unstructured: Jisme koi predefined structural schema nahi hota (raw text, audio, images, videos)."
            ],
            [
              "4. Drew Conway ke Data Science Venn Diagram ko explain karein.",
              "Data Science teen primary skills ke intersection par stand karta hai:\n- Hacking / Computer Science Skills: Scalable code likhna aur data pipelines manage karna.\n- Math & Statistics Knowledge: Sahi metrics, hypothesis testing, aur probability models use karna.\n- Domain Expertise: Business context ko samajhna taaki right questions frame kiye ja sakein."
            ]
          ]
        },
        "Version Control, Git, and GitHub": {
          "cards": [
            [
              "1. Version Control kya hai aur Data Science me iski kya importance hai?",
              "Version control ek aisa system hai jo time ke saath files aur code me hone wale changes ko record karta hai:\n- Collaboration: Multiple data scientists bina conflict ke ek hi project par ek saath kaam kar sakte hain.\n- Reproducibility: Data pipelines aur model experiments ka complete audit trail preserve karta hai.\n- Rollback & Branching: Production code ko disturb kiye bina experimental models ko isolated branch par test karna."
            ],
            [
              "2. Git repository ke three main states aur sections ko explain karein.",
              "Git local machine par files ko 3 stages me track karta hai:\n- Working Directory: Local folder jahan code files actively edit aur modify hoti hain.\n- Staging Area (Index): Buffer area jahan modified files ko `git add` karke commit ke liye prepare kiya jata hai.\n- Repository (.git): Permanent database jahan committed snapshot permanent store ho jaate hain."
            ],
            [
              "3. Git aur GitHub me fundamental difference kya hai?",
              "Git aur GitHub dono ka project management me alag role hota hai:\n- Git: Ek local distributed version control software hai jo command-line se code history track karta hai.\n- GitHub: Cloud-based hosting platform hai jo Git repositories ko online store karta hai, issue tracking aur collaboration provide karta hai."
            ],
            [
              "4. Essential Git commands aur unke functions batayein.",
              "Data science workflow me use hone wali key Git commands:\n- `git clone <url>`: Remote online repository ko local system par copy karta hai.\n- `git add <file>`: Modified files ko working directory se staging area me le jaata hai.\n- `git commit -m \"msg\"`: Staged changes ka snapshot permanent record ke saath save karta hai.\n- `git push` & `git pull`: Local commits ko remote server par upload aur remote changes ko download karta hai."
            ]
          ]
        },
        "R, RStudio, and R Markdown": {
          "cards": [
            [
              "1. R programming language kya hai aur yeh Data Science ke liye suitable kyun hai?",
              "R ek open-source programming language aur environment hai jo statistical computing aur graphics ke liye build hui hai:\n- Package ecosystem: CRAN repository par thousands of specialized packages available hain (dplyr, ggplot2, tidyr).\n- Native vectorization: Built-in vector aur matrix math operations jo high-speed computing provide karte hain.\n- Scientific community: Statistics, bioinformatics, aur data science research me standard choice hai."
            ],
            [
              "2. RStudio IDE ke chaar primary panes ko describe karein.",
              "RStudio R ka most popular GUI IDE hai jo 4 panes me divided hota hai:\n- Source / Script Pane (Top-Left): R scripts aur R Markdown files likhna aur edit karna.\n- Console / Terminal (Bottom-Left): Commands directly run karna aur output dekhna.\n- Environment / History (Top-Right): Active variables, dataframes, aur command history track karna.\n- Files / Plots / Packages / Help (Bottom-Right): Directory browse karna, graphs dekhna, packages manage karna."
            ],
            [
              "3. R Markdown kya hai aur yeh Reproducible Research me kaise help karta hai?",
              "R Markdown (.Rmd) plain text narrative aur executable R code chunks ko combine karta hai:\n- Reproducibility: Code rerun karne par saare plots aur statistical tables automatically update ho jaate hain.\n- Multi-format output: Ek hi file se HTML reports, PDF documents, aur slides generate ki ja sakti hain.\n- Literate programming: Analysis aur documentation ko ek single document me merge kar deta hai."
            ],
            [
              "4. R Markdown me knitr aur Code Chunks kaise kaam karte hain?",
              "Knitr triple backticks ```{r} ... ``` ke andar likhe code chunks ko execute karta hai:\n- Chunk options: Parameters jaise `echo=FALSE` (code hide karna), `eval=TRUE` (code run karna), aur `warning=FALSE`.\n- Inline code: Text ke andar dynamic values embed karna syntax `r mean(x)` ke zariye.\n- Rendering workflow: Knitr code execute karta hai, plain markdown banata hai, aur pandoc final file generate karta hai."
            ]
          ]
        }
      }
    },
    "UNIT 2: R PROGRAMMING BASICS": {
      "topics": {
        "R Data Types and Objects": {
          "cards": [
            [
              "1. R ke five atomic data types kaunse hain?",
              "R me sabhi basic objects in 5 fundamental atomic types par build hote hain:\n- Numeric: Decimal real numbers (jaise 3.14, 42).\n- Integer: Whole numbers jinke peeche 'L' likha hota hai (jaise 10L).\n- Character: Text strings jo quotes me hoti hain (jaise \"data science\").\n- Logical: Boolean values `TRUE` (T) aur `FALSE` (F).\n- Complex: Imaginary numbers (jaise 2 + 5i)."
            ],
            [
              "2. Vectors, Matrices, aur Arrays me kya difference hai?",
              "Yeh teeno homogeneous data structures hain jisme ek hi data type hota hai:\n- Vector: 1-dimensional array jise `c()` function se banaya jata hai.\n- Matrix: 2-dimensional tabular array jisme `nrow` aur `ncol` attributes hote hain.\n- Array: Matrix ka multi-dimensional extension jo 3 ya usse zyada dimensions handle kar sakta hai."
            ],
            [
              "3. Lists aur Data Frames me kya difference hota hai?",
              "Yeh dono heterogeneous data structures hain jo multiple data types store kar sakte hain:\n- List: 1D collection jisme har element alag data type aur alag length ka ho sakta hai.\n- Data Frame: Special 2D list jisme har column equal length ka vector hota hai; standard tabular dataset format."
            ],
            [
              "4. R me Factors kya hote hain aur inka use kyun kiya jata hai?",
              "Factors categorical data ko represent karne ke liye use hote hain jo predefined levels par based hote hain:\n- Nominal Factors: Unordered categories (jaise Male/Female, City names).\n- Ordinal Factors: Ordered categories jinme natural ranking hoti hai (jaise Low < Medium < High).\n- Memory efficient: Internally integers ke roop me store hote hain with text labels; statistical modeling me critical hain."
            ]
          ]
        },
        "Reading, Writing Data, and Control Structures": {
          "cards": [
            [
              "1. R me tabular data ko read aur write kaise kiya jata hai?",
              "R tabular text files ko import aur export karne ke liye built-in functions provide karta hai:\n- `read.csv()` / `read.table()`: CSV aur text files ko read karke data frames me convert karta hai.\n- `write.csv()` / `write.table()`: Data frame ko disk par CSV file me export karta hai (`row.names=FALSE` ke saath).\n- Fast alternatives: `readr::read_csv()` aur `data.table::fread()` large datasets ko 10x tezi se read karte hain."
            ],
            [
              "2. R ke standard Control Structures explain karein.",
              "Control structures code execution ke decision aur flow ko control karte hain:\n- `if-else`: Single logical condition ke basis par conditional branching.\n- `for` loop: Sequence ya vector ke elements par iterate karta hai (jaise `for(i in 1:n)`).\n- `while` loop: Jab tak test condition TRUE rehti hai, tab tak loop execute hota hai.\n- `repeat`: Infinite loop jo tab tak chalta hai jab tak andar se `break` call na kiya jaye."
            ],
            [
              "3. Loops me `break` aur `next` statements ka kya role hai?",
              "Iteration flow ko modify karne ke liye do key statements use hoti hain:\n- `break`: Current loop ko immediately terminate karke loop ke bahar execution transfer karta hai.\n- `next`: Current iteration ke remaining code ko skip karke seedha agle iteration par jump karta hai."
            ],
            [
              "4. R me Missing Values ko kaise represent aur handle kiya jata hai?",
              "R missing data ko clearly distinguish karta hai:\n- `NA` (Not Available): Missing ya unobserved values; ise check karne ke liye `is.na()` use hota hai.\n- `NaN` (Not a Number): Undefined math operations (jaise 0/0); ise check karne ke liye `is.nan()` use hota hai.\n- Cleaning: `complete.cases()` ya `na.omit()` se missing values wali rows filter ki jaati hain."
            ]
          ]
        },
        "Functions, Scoping Rules, Dates and Times": {
          "cards": [
            [
              "1. R me user-defined functions kaise create kiye jaate hain?",
              "R me functions first-class objects hote hain jo `function()` keyword se bante hain:\n- Syntax: `my_func <- function(x, y = 10) { ... return(result) }`.\n- Arguments: Arguments ko order se ya unke explicit names se pass kiya ja sakta hai.\n- Lazy Evaluation: Function arguments tab tak evaluate nahi hote jab tak unka use function ke andar na ho."
            ],
            [
              "2. R me Lexical Scoping aur Free Variables resolution kaise kaam karta hai?",
              "R me free variables (jo function body ya arguments me defined nahi hain) lexical scoping se resolve hote hain:\n- Environment search: R variable ko us environment me dhoondhta hai jahan function create (define) hua tha, na ki jahan call hua tha.\n- Search path: Agar parent environment me nahi milta, toh upward search karke global environment aur attached packages tak jata hai."
            ],
            [
              "3. R me Dates aur Times kaise represent kiye jaate hain?",
              "R temporal data ke liye specific classes provide karta hai:\n- `Date`: Calendar dates represent karta hai, internally 1970-01-01 se number of days count karta hai.\n- `POSIXct`: Date-time ko large integer (seconds since 1970) ke roop me store karta hai; data frames ke liye fast hai.\n- `POSIXlt`: Date-time ko named list (sec, min, hour, mday, year) ke roop me store karta hai jisse components extract karna easy hota hai."
            ],
            [
              "4. Lexical Scoping aur Dynamic Scoping me kya difference hai?",
              "Dono scoping models me unbound variables resolve hone ka origin alag hota hai:\n- Lexical Scoping: Free variable us environment se bind hota hai jahan function originally likha/define kiya gaya tha.\n- Dynamic Scoping: Free variable us calling environment se bind hota hai jahan se function runtime par invoke kiya gaya tha."
            ]
          ]
        },
        "Loop Functions and Debugging Tools": {
          "cards": [
            [
              "1. R me Loop Functions kya hain aur for-loops ke comparison me inhein prefer kyun kiya jata hai?",
              "Loop functions (*apply family) compact functional programming patterns provide karte hain:\n- Clean syntax: For-loop ke multiple lines ka kaam single line me ho jata hai.\n- Speed: Internally C-level optimized code execute karte hain jo interpreted R loops se tez hota hai.\n- Readability: Index variables manage kiye bina direct data transformations express karte hain."
            ],
            [
              "2. `lapply`, `sapply`, aur `apply` ko compare karein.",
              "Yeh functions alag-alag return formats provide karte hain:\n- `lapply(X, FUN)`: List ya vector par function apply karke hamesha ek List return karta hai.\n- `sapply(X, FUN)`: `lapply` ka simplified version jo output ko vector ya matrix me convert kar deta hai.\n- `apply(X, MARGIN, FUN)`: Matrix ya array ke rows (MARGIN=1) ya columns (MARGIN=2) par function execute karta hai."
            ],
            [
              "3. `tapply` aur `mapply` ka working mechanism explain karein.",
              "Grouped operations aur multi-variable execution ke liye yeh specialized functions use hote hain:\n- `tapply(X, INDEX, FUN)`: Vector ko factor levels ke basis par split karke har group par function apply karta hai (jaise category-wise mean).\n- `mapply(FUN, ...)`: Multivariate apply jo multiple vectors ke parallel elements ko ek function me pass karta hai."
            ],
            [
              "4. R ke essential Debugging Tools kaunse hain?",
              "Runtime errors aur bugs identify karne ke liye R interactive tools deta hai:\n- `traceback()`: Error aane ke time par call stack print karta hai ki error kis function ke andar aayi.\n- `debug(f)`: Function `f` ko line-by-line step-through mode me chalata hai.\n- `browser()`: Code me breakpoint laga kar execution pause karta hai taaki variables inspect kiye ja sakein.\n- `recover()`: Error aane par user ko call stack me kisi bhi frame me enter karne ka menu deta hai."
            ]
          ]
        },
        "Simulation and Code Profiling": {
          "cards": [
            [
              "1. R me Random Numbers aur Distributions kaise generate kiye jaate hain?",
              "R standard statistical distributions ke liye 4 standard prefixes use karta hai (d, p, q, r):\n- `r<dist>()`: Random variates generate karta hai (jaise `rnorm(n)`, `runif()`, `rbinom()`).\n- `d<dist>()`: Probability density ya mass value calculate karta hai.\n- `p<dist>()` & `q<dist>()`: Cumulative probability aur quantile values return karta hai.\n- `set.seed(n)`: Random number generator ka seed fix karta hai taaki results exact reproduce ho sakein."
            ],
            [
              "2. Code Profiling kya hai aur Data Science me iski kya importance hai?",
              "Code profiling systematically measure karta hai ki script execution me kitna time aur memory use ho rahi hai:\n- Bottleneck Detection: Pata lagata hai ki kaunsa function ya loop CPU ka maximum time le raha hai.\n- Targeted Optimization: Sabse slow code parts ko optimize karne par focus karta hai.\n- Memory Profiling: Large datasets par memory leaks aur excessive copying ko identify karta hai."
            ],
            [
              "3. `system.time()` R me execution time kaise measure karta hai?",
              "Expression `system.time(expr)` execution ke teen time components return karta hai:\n- User Time: Aapke R process aur code me spend hua CPU time.\n- System Time: OS kernel tasks (disk read/write, memory allocation) me laga CPU time.\n- Elapsed Time: Total clock time jo code start hone se end hone tak laga."
            ],
            [
              "4. `Rprof()` aur `summaryRprof()` R scripts ko profile kaise karte hain?",
              "R ka native profiler regular time interval par call stack ko sample karta hai:\n- `Rprof(\"out.txt\")`: Profiling shuru karta hai aur har 20ms par active stack snapshot file me likhta hai.\n- `summaryRprof()`: Output file ko analyze karke `by.self` aur `by.total` time ke according functions rank karta hai.\n- Code me changes kiye bina exact execution bottleneck locate karne me help karta hai."
            ]
          ]
        }
      }
    },
    "UNIT 3: GETTING AND CLEANING DATA": {
      "topics": {
        "Obtaining Data from Web, APIs, and Databases": {
          "cards": [
            [
              "1. R me web se files download aur data scrape kaise kiya jata hai?",
              "Web se data extract karne ke liye R built-in aur dedicated packages provide karta hai:\n- `download.file(url, destfile)`: HTTP/HTTPS links se direct remote files download karta hai.\n- `readLines()`: Web page ka raw HTML text format me read karta hai.\n- `rvest` package: `read_html()`, `html_elements()`, aur `html_text()` ke through CSS selectors use karke webpage scrape karta hai."
            ],
            [
              "2. R me RESTful APIs se data kaise fetch kiya jata hai?",
              "REST APIs web ke over structured data exchange karne ka standard mechanism hain:\n- `httr` package: `GET()` method se API endpoints ko call karta hai aur HTTP status codes (200, 404) verify karta hai.\n- `jsonlite` package: `fromJSON()` function use karke API se aayi JSON response ko seedha R data frame me convert karta hai.\n- Pagination: While loop ya loop functions use karke multiple pages ka data batch me download kiya jata hai."
            ],
            [
              "3. R relational databases (SQL) se kaise connect karta hai?",
              "Database connectivity `DBI` interface aur specific drivers se manage hoti hai:\n- `dbConnect(drv, ...)`: SQL database (jaise SQLite, MySQL, PostgreSQL) ke saath connection open karta hai.\n- `dbGetQuery(conn, \"SELECT ...\")`: SQL queries run karke direct R data frame me output receive karta hai.\n- `dbDisconnect(conn)`: Data lene ke baad connection safely close karta hai."
            ],
            [
              "4. Web APIs me use hone wale Authentication methods explain karein.",
              "APIs authorized access aur rate-limiting ke liye credentials require karti hain:\n- API Keys / Tokens: Secret unique strings jo URL query parameters ya HTTP header me send ki jaati hain.\n- Basic Auth: Username aur password ko Base64 encode karke HTTP header me bhejna.\n- OAuth 1.0 / 2.0: Multi-step authorization framework jisme credentials expose kiye bina scoped access token milta hai."
            ]
          ]
        },
        "Data Cleaning Basics and Formats": {
          "cards": [
            [
              "1. Data Science me common Raw Data Formats kaunse hote hain?",
              "Data analysis ke dauran diverse structural formats handle karne hote hain:\n- CSV / TSV: Simple comma ya tab separated flat text files jo universal hain.\n- JSON: Lightweight key-value hierarchical format jo web APIs ka standard hai.\n- XML: Tree-structure wala tag-based data format.\n- Excel (.xlsx) / Binary: Proprietary multi-sheet files jinhe `readxl` package se read kiya jata hai."
            ],
            [
              "2. Data Ingestion ke time aam taur par kaunse Data Quality issues aate hain?",
              "Raw data directly analysis-ready nahi hota aur in issues se suffer karta hai:\n- Inconsistent formats: Alag-alag date formats, extra spaces, aur mixed lowercase/uppercase.\n- Missing values: Data me blanks, `NA`, `NULL`, ya dummy numbers (jaise 999) hona.\n- Duplicate records: Logging errors ki wajah se multiple identical rows generate hona.\n- Type mismatch: Numbers ka character string ke roop me import ho jana."
            ],
            [
              "3. R me String Manipulation aur Regular Expressions kaise perform hote hain?",
              "Text cleaning base R aur modern `stringr` package se ki jaati hai:\n- Base R: `grep()` / `grepl()` pattern search karte hain; `gsub()` text replace karta hai; `strsplit()` text divide karta hai.\n- `stringr`: Consistent API provide karta hai (`str_detect()`, `str_replace_all()`, `str_trim()`).\n- Regular Expressions: Special patterns (`^`, `$`, `\\d+`, `\\w+`) emails, dates, aur codes extract karne ke liye use hote hain."
            ],
            [
              "4. R me Type Conversion aur Coercion ko explain karein.",
              "Accurate analysis ke liye data types ko explicitly convert karna padta hai:\n- Implicit Coercion: Jab alag types mix hote hain toh R automatically unhe common type me convert karta hai (`c(1, \"text\")` character ban jata hai).\n- Explicit Casting: Functions jaise `as.numeric()`, `as.character()`, `as.factor()`, `as.Date()`.\n- Factor to Numeric trap: Factor ko direct numeric cast karne par internal integer codes aate hain; correct way `as.numeric(as.character(f))` hai."
            ]
          ]
        },
        "Tidy Data Principles and Data Reshaping": {
          "cards": [
            [
              "1. Hadley Wickham ke \"Tidy Data\" ke 3 fundamental rules kya hain?",
              "Tidy Data ek standardized format hai jahan tabular structure data semantics se match karta hai:\n- 1. Har variable ka apna ek separate Column hona chahiye.\n- 2. Har observation ka apna ek separate Row hona chahiye.\n- 3. Har type ki observational unit ka apna ek Table hona chahiye.\n- Is consistency se dplyr aur ggplot2 seamlessly kaam karte hain."
            ],
            [
              "2. Wide Format aur Long (Tall) Format me kya difference hai?",
              "Datasets ko do main layouts me represent kiya ja sakta hai:\n- Wide Format: Ek observation ke multiple measurements alag-alag columns me spread hote hain (human viewing ke liye easy).\n- Long Format: Multiple measurement columns ko collapse karke key-value pairs (`variable` aur `value`) me rakha jata hai (tidy analysis aur ggplot2 ke liye required)."
            ],
            [
              "3. `tidyr` package me `pivot_longer()` aur `pivot_wider()` kaise kaam karte hain?",
              "Data ko wide aur long formats ke beech reshape karne ke liye `tidyr` functions use hote hain:\n- `pivot_longer()`: Multiple columns ko rows me collapse karta hai, table ki length badhti hai aur columns kam hote hain.\n- `pivot_wider()`: Key-value rows ko alag-alag column headers me spread karta hai, table wider banta hai.\n- Yeh modern functions purane `gather()`/`spread()` aur `melt()`/`dcast()` ko replace karte hain."
            ],
            [
              "4. Data manipulation ke core `dplyr` verbs explain karein.",
              "The `dplyr` package data manipulation ke liye 5 core grammar verbs provide karta hai:\n- `select()`: Desired columns ko name ke through choose karta hai.\n- `filter()`: Logical conditions ke basis par specific rows select karta hai.\n- `mutate()`: Naye calculated columns add karta hai ya existing modify karta hai.\n- `summarize()`: Data ko single statistical summaries (mean, sum) me collapse karta hai.\n- `arrange()`: Rows ko ascending ya descending order me sort karta hai."
            ]
          ]
        }
      }
    },
    "UNIT 4: EXPLORATORY DATA ANALYSIS": {
      "topics": {
        "Essential Exploratory Summarization": {
          "cards": [
            [
              "1. Exploratory Data Analysis (EDA) kya hai aur iska primary objective kya hota hai?",
              "EDA John Tukey dwara develop ki gayi data investigation methodology hai jo formal modeling se pehle apply hoti hai:\n- Data ke underlying structure, variables, aur relationships ko deeply explore karna.\n- Anomalies, missing patterns, aur outliers identify karna.\n- Statistical assumptions (jaise normality, variance equality) verify karna taaki right model pick ho sake."
            ],
            [
              "2. Five-Number Summary aur basic statistical measures explain karein.",
              "Five-Number Summary non-parametric distribution shape summarize karta hai:\n- Minimum, 1st Quartile (Q1), Median (Q2), 3rd Quartile (Q3), aur Maximum.\n- R me `fivenum()` ya `summary()` se calculate hota hai (jo Mean bhi include karta hai).\n- Interquartile Range (`IQR = Q3 - Q1`): Data spread measure karta hai jo extreme outliers se affect nahi hota."
            ],
            [
              "3. EDA hypotheses ko eliminate ya sharpen karne me kaise help karta hai?",
              "Formal modeling se pehle EDA evidence-based screening karta hai:\n- False assumptions reject karna: Initial scatter plots dikha dete hain ki assumed linear relation actual me exist karta hai ya nahi.\n- Hypotheses refine karna: Data me unexpected sub-clusters dikhne par focused hypotheses banti hain.\n- Feature selection: Non-informative aur multicollinear variables ko pehle hi drop karne me guide karta hai."
            ],
            [
              "4. IQR aur Boxplots se Outliers kaise detect hote hain?",
              "Tukey's standard rule IQR ke basis par upper aur lower boundaries banata hai:\n- Lower Fence: `Q1 - 1.5 * IQR`.\n- Upper Fence: `Q3 + 1.5 * IQR`.\n- Jo data points in fences ke bahar lie karte hain, unhe outliers classify kiya jata hai aur boxplot whiskers ke bahar individual dots me dikhaya jata hai."
            ]
          ]
        },
        "Univariate and Bivariate Visualization in R": {
          "cards": [
            [
              "1. R ke Base Graphics, Lattice, aur ggplot2 systems ko compare karein.",
              "R me visualization ke 3 main graphics systems hain:\n- Base Graphics: Canvas/pen model (`plot()`, `hist()`); quick exploration ke liye simple, par bad me modify karna difficult.\n- Lattice: Trellis graphics (`xyplot()`); multiple categorical panels/facets ke saath conditioned plots banane me strong.\n- ggplot2: Grammar of Graphics par based layer-by-layer system (data + aesthetics + geoms); highly customizable aur publication-ready."
            ],
            [
              "2. Distribution shape dekhne ke liye Histograms aur Density Plots me kya difference hai?",
              "Dono continuous single variable ki distribution display karte hain:\n- Histogram: Continuous data ko fixed bins me divide karke frequency bars plot karta hai; bin size par sensitive hota hai.\n- Density Plot: Continuous probability distribution curve estimate karta hai (kernel density); binning ke bina smooth curve provide karta hai."
            ],
            [
              "3. Boxplot ke visual components kya represent karte hain?",
              "Boxplot Five-Number Summary ko visually display karta hai:\n- Central Box: Q1 se Q3 tak span hota hai (data ka middle 50% IQR hold karta hai).\n- Middle Line: Median (50th percentile) ko show karti hai.\n- Whiskers: Quartiles se 1.5 * IQR distance tak ke extreme valid points ko reach karte hain.\n- Individual Points: Whiskers ke bahar wale points outliers ko indicate karte hain."
            ],
            [
              "4. Scatter Plots aur Correlation Matrices bivariate relationships kaise reveal karte hain?",
              "Bivariate analysis do continuous variables ka relation measure karta hai:\n- Scatter Plot: Data points ko Cartesian plane par plot karke linear trends, clusters, aur spread visually dikhata hai.\n- Pearson Correlation (r): -1 (negative linear) se +1 (positive linear) tak relation ki strength batata hai.\n- Correlation Matrix / Correlogram: Multiple variables ke pairwise correlation coefficients ka color-coded grid jo multicollinearity identify karta hai."
            ]
          ]
        },
        "Multivariate Visualization of High-Dimensional Data": {
          "cards": [
            [
              "1. High-Dimensional Data ko explore karne me kaunse challenges aate hain?",
              "Jab features (p) samples (n) ke comparison me bohot zyada hote hain, toh yeh hurdles aati hain:\n- Curse of Dimensionality: High dimensions me data sparse ho jata hai, jisse distance metrics ineffective ho jaate hain.\n- Human Perception Limit: Humans 3D se upar visually comprehend nahi kar sakte.\n- Multicollinearity: Correlated features ek doosre ke effect ko mask kar dete hain."
            ],
            [
              "2. ggplot2 me Aesthetics aur Faceting multi-dimensional data ko kaise represent karte hain?",
              "Grammar of Graphics visual channels use karke 3+ dimensions encode karta hai:\n- Aesthetic Mappings: Variables ko color, shape, size, aur alpha (transparency) se encode karna.\n- Faceting (`facet_wrap`, `facet_grid`): Data ko categorical variables ke according multiple subplots (small multiples) me split karna taaki high-dimensional patterns clearly dikhein."
            ],
            [
              "3. Principal Component Analysis (PCA) kya hai aur EDA me iska kya role hai?",
              "PCA ek unsupervised dimensionality reduction technique hai jo correlated variables ko orthogonal components me convert karti hai:\n- Principal Components: Original features ke linear combinations jo maximum variance capture karte hain.\n- Dimensionality Reduction: Complex high-dimensional data ko 2D ya 3D space (Biplot) me project karta hai.\n- Clustering aur separation visual inspection ke zariye quickly identify ho jaati hai bina heavy variance loss ke."
            ],
            [
              "4. Hierarchical Clustering wala Heatmap multivariate patterns kaise reveal karta hai?",
              "Heatmap matrix values ko color gradients ke roop me display karta hai:\n- Color Gradient: Rows (samples) aur columns (features) ke exact values ko color intensity se represent karta hai.\n- Dendrograms: Rows aur columns ke borders par tree structures similar samples aur correlated features ko cluster karte hain.\n- Pattern Discovery: Multi-variable datasets me co-regulated blocks aur natural groupings ko instantly spotlight karta hai."
            ]
          ]
        }
      }
    }
  }
};

window.studyData.hinglish.subjects["Time Series Analysis"] = {
  "units": {
    "Unit 1: Fundamentals of Time Series": {
      "topics": {
        "Introduction to Time Series": {
          "cards": [
            [
              "1. Time Series kya hai aur Computer Science aur Business me iski kya importance hai?",
              "Time series sequential data observations ka ek set hota hai jo uniform, continuous time intervals (hourly, daily, monthly) par record hota hai:\n- Computer Science: Server workload, CPU/RAM utilization, network traffic patterns monitor karne aur cybersecurity anomalies detect karne me use hota hai.\n- Business & Finance: Stock market prices, monthly sales trends, inventory requirements, aur economic indicators track karta hai.\n- Core Purpose: Past historical patterns analyze karke future trends aur values forecast karna."
            ],
            [
              "2. Time Series Analysis ke primary objectives aur applications kya hain?",
              "Time series analysis ke chaar main objectives hote hain:\n- Description: Data me mojood structural patterns (trends, seasonal cycles) ko identify aur isolate karna.\n- Explanation: Samajhna ki external factors variable ko time ke saath kaise impact kar rahe hain.\n- Forecasting: Resource scheduling aur capacity planning ke liye future values predict karna.\n- Control: Automated systems me threshold alerts set karna (jaise traffic spike aane par cloud servers auto-scale karna)."
            ],
            [
              "3. Continuous aur Discrete Time Series me kya difference hai?",
              "Observations time continuum me kaise record hoti hain, is basis par classification hoti hai:\n- Continuous Time Series: Har ek point of time par continuously record hoti hai (jaise analog ECG machine, continuous seismograph, temperature sensors).\n- Discrete Time Series: Fixed discrete time intervals par sample aur record ki jaati hai (jaise daily closing stock price, monthly sales revenue, yearly GDP)."
            ],
            [
              "4. Cross-Sectional, Time Series, aur Panel Data me kya fark hai?",
              "Temporal depth aur subject breadth ke basis par teen formats hote hain:\n- Cross-Sectional Data: Multiple entities (jaise 500 companies) ka data ek single fixed point of time par collect karna.\n- Time Series Data: Ek single entity ka data multiple successive time intervals par observe karna.\n- Panel (Longitudinal) Data: Dono ka hybrid, jahan multiple entities ko multiple time periods me track kiya jata hai."
            ]
          ]
        },
        "Components of Time Series (Four Forces)": {
          "cards": [
            [
              "1. Time Series ke \"Four Forces\" (Components) kaunse hain?",
              "Classical time series chaar basic behavioral forces se drive hoti hai:\n- Secular Trend (T): Long-term upward, downward, ya steady movement.\n- Seasonal Variations (S): Short-term regular periodic fluctuations jo 1 year ke andar repeat hoti hain.\n- Cyclical Variations (C): Medium-to-long term wave-like oscillations jo business cycles se related hoti hain.\n- Irregular / Random Fluctuations (I): Unpredictable erratic shocks jo sudden random events se aate hain."
            ],
            [
              "2. Secular Trend (T) kya hai aur iske long-term characteristics kya hote hain?",
              "Secular trend time series ki overall smooth long-term direction ko represent karta hai:\n- Sustained Direction: Long period me continuous growth (jaise tech adoption, world population) ya decline (jaise fatal disease death rate) show karta hai.\n- Noise Filter: Daily market volatility aur short-term seasonal spikes ko ignore karta hai.\n- Baseline Foundation: Yeh foundational baseline banta hai jiske around baaki components oscillate karte hain."
            ],
            [
              "3. Seasonal Variations (S) aur Cyclical Variations (C) me kya difference hai?",
              "Dono me cycle length aur driving forces ka main difference hota hai:\n- Seasonal Variations (S): Strict regular rhythm jo 1 year ke andar complete hoti hai (jaise festivals me retail shopping spike, summer me AC sales); weather ya cultural calendar se driven.\n- Cyclical Variations (C): Long-term non-periodic wave oscillations jo 3 se 10+ saal tak chalti hain; economic business cycles (Boom, Recession, Depression, Recovery) se driven."
            ],
            [
              "4. Irregular ya Random Fluctuations (I) kya hote hain aur inka reason kya hai?",
              "Irregular fluctuations random residual variations hoti hain jo T, S, aur C ke baad bachti hain:\n- Sudden Shocks: Unpredictable events jaise natural disasters (earthquake, flood), war, strikes, ya pandemics se trigger hoti hain.\n- Non-Deterministic: Inhein mathematically predict ya model nahi kiya ja sakta.\n- Short-Lived: Short temporary shock create karti hain, jiske baad system gradually normal baseline par recover ho jata hai."
            ]
          ]
        },
        "Mathematical Decomposition Models": {
          "cards": [
            [
              "1. Additive Decomposition Model (Y = T + S + C + I) ko explain karein.",
              "Additive model assume karta hai ki observed value chaaro independent components ka linear sum hai:\n- Formula: Y_t = T_t + S_t + C_t + I_t.\n- Measurement Units: Sabhi components (T, S, C, I) original data units me measure hote hain.\n- Core Assumption: Seasonal swings ka absolute magnitude constant rehta hai, chahe overall trend level badhe ya ghate."
            ],
            [
              "2. Multiplicative Decomposition Model (Y = T * S * C * I) ko explain karein.",
              "Multiplicative model assume karta hai ki components independently nahi, balki proportionally interact karte hain:\n- Formula: Y_t = T_t * S_t * C_t * I_t.\n- Units: Trend (T) original units me hota hai; Seasonal (S), Cyclical (C), aur Irregular (I) percentages ya relative ratios hote hain.\n- Core Assumption: Seasonal fluctuations ka amplitude directly trend level ke proportional hota hai (growth ke saath seasonal peaks bhi badi hoti jaati hain)."
            ],
            [
              "3. Additive Model ke merits aur demerits kya hain?",
              "Additive model calculation me simple hai par practical constraints ke saath aata hai:\n- Merits: Intuitive hai, simple subtraction se compute hota hai, aur uniform seasonal swings me accurate rehta hai.\n- Demerits: Exponential growth ya percentage compounding cases me fail ho jata hai jahan business size badhne par seasonal variation bhi expand hoti hai."
            ],
            [
              "4. Multiplicative Model kab choose karna chahiye aur iska Additive se kya relation hai?",
              "Model selection seasonal swing aur trend ke visual relation par depend karta hai:\n- Choose Multiplicative: Jab trend badhne ke saath seasonal peaks aur troughs bhi bade hote ja rahe hon (aam business aur web traffic data).\n- Choose Additive: Jab seasonal variation ki absolute height saal-dar-saal lagbhag constant rahe.\n- Log Transform: Log lene par multiplicative model additive me convert ho jata hai: log(Y) = log(T) + log(S) + log(C) + log(I)."
            ]
          ]
        }
      }
    },
    "Unit 2: Measurement of Trend": {
      "topics": {
        "Non-Mathematical Trend Estimation": {
          "cards": [
            [
              "1. Free-Hand Curve Method kya hai aur iski main limitations kya hain?",
              "Free-hand curve method me data points ko graph par plot karke visual estimate se smooth curve banaya jata hai:\n- Procedure: Raw data ko plot karke visual center ke through smooth continuous trend line draw karte hain.\n- Advantage: Simple aur fast hai, koi mathematical formulas calculate nahi karne padte.\n- Major Limitations: Highly subjective hai; alag-alag analysts alag curve banayenge, jisse objective forecasting possible nahi hoti."
            ],
            [
              "2. Method of Semi-Averages se linear trend kaise find kiya jata hai?",
              "Method of Semi-Averages poore dataset ko do equal halves me divide karta hai:\n- Step 1: Data ko do equal parts me divide karein (jaise 8 saal ke data ko do 4-4 saal ke parts me).\n- Step 2: Dono parts ka arithmetic mean (semi-average) calculate karein.\n- Step 3: Har semi-average ko uske corresponding time interval ke midpoint par plot karein.\n- Step 4: Dono points ko straight line se connect karke secular linear trend line extend karein."
            ],
            [
              "3. Odd number of years hone par Semi-Averages method kaise apply hota hai?",
              "Jab total years N odd hon (jaise 7 ya 9 saal), toh data directly do equal integers me split nahi ho sakta:\n- Omission Method: Bilkul center wale middle year ko calculation se omit (drop) kar dete hain.\n- Equal Split: Remaining (N - 1) years ko do perfectly equal halves me divide kiya jata hai.\n- Example: Agar 9 saal ka data hai (1 to 9), toh 5th year drop karke 1–4 aur 6–9 ke semi-averages nikaale jaate hain."
            ],
            [
              "4. Method of Semi-Averages ke merits aur demerits kya hain?",
              "Semi-Averages technique objectivity aur simplicity ka balance provide karti hai:\n- Merits: Completely objective hai (sabka exact same answer aayega); complex formulas ke bina easy arithmetic.\n- Demerits: Strictly straight line trend assume karta hai; agar actual trend curved, exponential, ya parabolic ho toh fail ho jata hai."
            ]
          ]
        },
        "Mathematical Trend Fitting (Least Squares)": {
          "cards": [
            [
              "1. Linear Trend (y = a + bx) fit karne ke liye Principle of Least Squares explain karein.",
              "Least Squares method actual values aur trend line values ke beech ke squared differences ko minimize karta hai:\n- Equation: y = a + bx, jahan 'a' y-intercept hai aur 'b' constant rate of change (slope) hai.\n- Normal Equations:\n  1) Σy = Na + bΣx\n  2) Σxy = aΣx + bΣx²\n- Objective: Σ(y - y_hat) = 0 aur Σ(y - y_hat)² minimum hona ensure karta hai."
            ],
            [
              "2. Origin shift karke (Σx = 0) normal equations ko kaise simplify kiya jata hai?",
              "Origin x = 0 ko middle year par shift karne se Σx zero ho jata hai, jisse calculations bohot easy ho jaati hain:\n- Direct Formulas: a = Σy / N (y ka arithmetic mean) aur b = Σxy / Σx².\n- Even Periods: Jab N even ho, toh half-year units use karte hain: x = ..., -3, -1, +1, +3, ... taaki Σx = 0 bana rahe.\n- Advantage: Equations ko simultaneously solve karne ki zaroorat nahi padti."
            ],
            [
              "3. Second-Degree Parabolic Curve (y = a + bx + cx²) fit karne ka procedure kya hai?",
              "Parabolic quadratic curve accelerating ya turning-point trends ko model karta hai:\n- Equation: y = a + bx + cx².\n- Normal Equations (origin centered at Σx = 0):\n  1) Σy = Na + cΣx²\n  2) Σxy = bΣx²\n  3) Σx²y = aΣx² + cΣx⁴\n- Parameter 'b' directly b = Σxy / Σx² se nikalta hai; 'a' aur 'c' equations 1 aur 3 ko simultaneously solve karke nikaale jaate hain."
            ],
            [
              "4. Exponential Trend Curve (y = ab^x) kaise fit ki jaati hai?",
              "Exponential trend compounding geometric growth (jaise tech adoption, user growth) model karta hai:\n- Equation: y = a * b^x.\n- Log Transformation: Dono side log lene par linear equation banti hai: log(y) = log(a) + x * log(b).\n- Let Y = log(y), A = log(a), aur B = log(b); equation Y = A + Bx ban jati hai.\n- Standard least squares se A aur B find karke antilog se original 'a' aur 'b' calculate kiye jaate hain."
            ]
          ]
        },
        "Moving Average Method": {
          "cards": [
            [
              "1. Moving Average Method kya hai aur yeh fluctuations ko kaise smooth karta hai?",
              "Moving Average method fixed time window 'm' ke successive overlapping averages calculate karta hai:\n- Smoothing Effect: Short-term seasonal aur irregular noise ko average out karke underlying secular trend expose karta hai.\n- Cycle Elimination: Agar window 'm' exact cycle length ke barabar ho, toh wo specific periodic cycle completely neutralize ho jaata hai.\n- Non-Parametric: Linear ya quadratic ka rigid assumption nahi rakhta, local data ke according bend ho jata hai."
            ],
            [
              "2. Odd-Period Moving Averages (3-yearly aur 5-yearly) kaise calculate hote hain?",
              "Odd period 'm' hone par average exact middle calendar year ke saamne align hota hai:\n- 3-Yearly Moving Average: y1, y2, y3 ka average year 2 ke saamne; y2, y3, y4 ka average year 3 ke saamne likhte hain.\n- 5-Yearly Moving Average: y1 se y5 ka average year 3 ke saamne; y2 se y6 ka average year 4 ke saamne likhte hain.\n- Boundary Loss: 3-yearly me start aur end ka 1-1 saal loss hota hai; 5-yearly me start aur end ke 2-2 saal loss hote hain."
            ],
            [
              "3. Even-Period Moving Averages (4-yearly centered) me Centering kyun zaroori hoti hai?",
              "Even period 'm' me average do calendar years ke beech me fall karta hai:\n- Step 1: 4-yearly moving averages calculate karein; yeh do saalon ke midpoint (jaise year 2 aur 3 ke beech) me aate hain.\n- Step 2: Do consecutive 4-yearly averages ka mean (centering) nikaalein; yeh centered value exact calendar year (year 3) ke aage align ho jaati hai.\n- Temporal alignment maintain karke original data ke saath direct comparison possible karta hai."
            ],
            [
              "4. Moving Average Method ke merits aur demerits kya hain?",
              "Moving averages simple aur effective local smoothing deta hai par forecasting me limit hota hai:\n- Merits: Highly flexible hai, compute karna easy hai, cycle length pata hone par oscillations smoothly cancel karta hai.\n- Demerits: Start aur end periods ke data points lost ho jaate hain; future periods ke liye mathematical forecast formula provide nahi karta."
            ]
          ]
        }
      }
    },
    "Unit 3: Seasonal Variations & Growth Curves": {
      "topics": {
        "Measurement of Seasonal Indices": {
          "cards": [
            [
              "1. Seasonal Index kya hota hai aur yeh kya measure karta hai?",
              "Seasonal Index ek normalized percentage ratio hai jo kisi season ki relative intensity measure karta hai:\n- Baseline 100%: Poore saal ke average ko 100% baseline set kiya jata hai.\n- Interpretation: Agar Q4 ka seasonal index 130% hai, iska matlab Q4 ki sales annual quarterly average se 30% higher rehti hai.\n- Normalized Sum: Quarterly data me chaaro indices ka sum 400 hona chahiye; monthly data me 1200 hona chahiye."
            ],
            [
              "2. Method of Simple Averages se Seasonal Indices kaise nikaale jaate hain?",
              "Seasonal index calculate karne ka sabse basic method:\n- Step 1: Data ko table me arrange karein jahan rows me years aur columns me quarters/months hon.\n- Step 2: Har quarter column ka average across all years (Quarterly Average x_bar) calculate karein.\n- Step 3: Sabhi quarterly averages ka Grand Average G_bar nikaalein.\n- Step 4: Seasonal Index = (x_bar / G_bar) * 100 (aur total 400 par adjust karein).\n- Assumption: Tabhi valid hai jab koi long-term trend na ho."
            ],
            [
              "3. Ratio-to-Trend Method seasonal variations kaise isolate karta hai?",
              "Ratio-to-Trend method underlying secular trend ko account karke seasonal index nikaalta hai:\n- Step 1: Least squares method se linear trend line fit karein aur har period ke liye trend value T calculate karein.\n- Step 2: Actual value Y ko corresponding trend value T se divide karein: (Y / T) * 100.\n- Step 3: Har season ke ratios ka median ya mean lekar irregular variations ko eliminate karein.\n- Step 4: Final indices ko 400 (quarterly) ya 1200 (monthly) total ke according normalize karein."
            ],
            [
              "4. Ratio-to-Moving Average Method sabse reliable kyun mana jaata hai?",
              "Ratio-to-Moving Average trend aur cyclical dono components ko eliminate karta hai:\n- Step 1: Centered 12-month (ya 4-quarter) moving average calculate karein; yeh (T * C) ko capture karta hai.\n- Step 2: Original value Y ko moving average se divide karein: Y / (T * C) = (T * S * C * I) / (T * C) = S * I.\n- Step 3: Different years ke S * I ratios ka average lekar random noise (I) cancel karein, jisse pure Seasonal Index (S) bachta hai.\n- Global Standard: Most robust decomposition technique mani jaati hai."
            ]
          ]
        },
        "Deseasonalization and Link Relatives Method": {
          "cards": [
            [
              "1. Deseasonalization kya hai aur time series ko seasonally adjust kaise kiya jata hai?",
              "Deseasonalization seasonal effects ko remove karke underlying trend aur cyclical movement ko spotlight karta hai:\n- Additive Adjustment: Deseasonalized Series = Y - S.\n- Multiplicative Adjustment: Deseasonalized Series = (Y / S) * 100.\n- Purpose: Successive periods ke true performance ko compare karna bina seasonal festival ya weather spikes ke bias ke."
            ],
            [
              "2. Pearson ka Method of Link Relatives kaise kaam karta hai?",
              "Link Relatives method har period ko pichhle immediate period ke percentage ke roop me express karta hai:\n- Step 1: Link Relative = (Current Period Value / Preceding Period Value) * 100.\n- Step 2: Har season ke link relatives ka average (median) calculate karein.\n- Step 3: Chain Relatives calculate karein jahan period 1 ko 100 rakha jata hai: Chain Relative = (Link Relative * Preceding Chain Relative) / 100.\n- Step 4: End period ke trend discrepancy ko correct karke final seasonal indices normalize karein."
            ],
            [
              "3. Seasonal variations measure karne ke chaar methods ko compare karein.",
              "Har method simplicity aur accuracy me different trade-off rakhta hai:\n- Simple Averages: Sabse easy, par tabhi accurate jab trend zero ya negligible ho.\n- Ratio-to-Trend: Effective jab trend mathematical equation (linear/parabolic) follow karta ho.\n- Ratio-to-Moving Average: Sabse powerful aur flexible; bina mathematical line assume kiye trend aur cycle filter karta hai.\n- Link Relatives: Thorough method hai par calculations thodi complex aur extensive hoti hain."
            ],
            [
              "4. Business aur Economy me seasonally adjusted time series ka kya role hai?",
              "Seasonally adjusted figures true operational health evaluate karne me critical hote hain:\n- Real Growth vs Calendar Spike: Samajhna ki sales badhna real business expansion hai ya normal festival seasonal peak.\n- Policy Decisions: Government agencies inflation aur employment data ko seasonally adjust karke policy interest rates decide karti hain.\n- Forecasting: Future baseline trend forecast karke use seasonal index se multiply karke realistic targets banaye jaate hain."
            ]
          ]
        },
        "Growth Curves in IT and Technology Adoption": {
          "cards": [
            [
              "1. Growth Curves kya hain aur IT / Tech Adoption me inka kya role hai?",
              "Growth curves non-linear models hote hain jo saturation ceiling ki taraf badhti growth trajectory ko represent karte hain:\n- Asymptotic Ceiling: Linear trend ki tarah tech products forever grow nahi kar sakte; market capacity limit (saturation) hoti hai.\n- IT Applications: Internet users growth, smartphone penetration, cloud adoption, software licensing diffusion.\n- S-Shape Pattern: Slow start (incubation), tezi se exponential growth, aur finally market saturation par plateau."
            ],
            [
              "2. Modified Exponential Growth Curve (y = k + ab^x) explain karein.",
              "Modified Exponential curve me growth rate upper asymptote ki taraf exponentially slow hoti hai:\n- Formula: y = k + a * b^x, jahan k upper saturation limit hai, 'a' negative hota hai, aur 0 < b < 1.\n- Property: Saturation ceiling k aur actual value y ke beech ka gap har period constant percentage 'b' se reduce hota jata hai.\n- Application: Un tech products ke liye jo market launch hote hi fast adoption lete hain aur phir gradually stabilize hote hain."
            ],
            [
              "3. Gompertz Growth Curve (y = k * a^(b^x)) kya hai aur IT me kahan use hoti hai?",
              "Gompertz curve ek asymmetrical S-shaped curve hai jisme percentage growth constant rate se decline karti hai:\n- Formula: y = k * a^(b^x), jahan k saturation limit hai, 0 < a < 1, aur 0 < b < 1.\n- Asymmetry: Inflection point jaldi aa jata hai (y = k / e ≈ 37% of saturation par), jisse growth logistic curve se pehle slow hona shuru hoti hai.\n- IT Use: Mobile subscriber count, commercial software replacement, aur enterprise SaaS customer growth predict karne me."
            ],
            [
              "4. Logistic Growth Curve (S-Curve) aur iske teen adoption phases explain karein.",
              "Logistic Curve perfectly symmetrical S-shaped diffusion curve provide karta hai jo technology adoption ka standard hai:\n- Formula: y = k / (1 + b * e^(-ax)), jahan k market carrying capacity / ceiling hai.\n- Symmetry: Inflection point exact midpoint y = k / 2 par hota hai jahan growth velocity maximum hoti hai.\n- Three Phases: 1) Slow initial incubation (Innovators), 2) Rapid exponential growth (Early/Late Majority), 3) Saturation plateau (Laggards)."
            ]
          ]
        }
      }
    },
    "Unit 4: Introduction to Forecasting & Errors": {
      "topics": {
        "Smoothing Techniques & Exponential Smoothing": {
          "cards": [
            [
              "1. Simple Exponential Smoothing (SES) kya hai aur moving averages se better kyun hai?",
              "SES ek weighted average method hai jo purane observations ko exponentially declining weights assign karta hai:\n- Formula: F_(t+1) = α * Y_t + (1 - α) * F_t, jahan α smoothing constant hai (0 ≤ α ≤ 1).\n- Recency Weighting: Recent data ko maximum weight milta hai; purana data exponentially decay hota hai.\n- Storage Efficient: Long historical window store karne ki jagah sirf current forecast aur latest actual value store karni hoti hai."
            ],
            [
              "2. Smoothing parameter α forecast responsiveness aur stability ko kaise affect karta hai?",
              "Smoothing parameter α responsiveness aur noise filtering ke beech balance control karta hai:\n- High α (close to 1): Recent observation ko heavy weight deta hai; rapid changes ko quickly catch karta hai par noise se easily disturb hota hai.\n- Low α (close to 0): Historical smoothed forecast ko heavy weight deta hai; stable rehta hai par actual shifts ko catch karne me lag karta hai.\n- Standard Practice: Error metrics (MSE) minimize karke α usually 0.1 se 0.3 ke beech select kiya jata hai."
            ],
            [
              "3. Holt's Linear Exponential Smoothing method trend ko kaise handle karta hai?",
              "Holt's two-parameter smoothing SES ko extend karke secular linear trends ko incorporate karta hai:\n- Level Equation: L_t = α * Y_t + (1 - α) * (L_(t-1) + T_(t-1)), baseline level update karta hai.\n- Trend Equation: T_t = β * (L_t - L_(t-1)) + (1 - β) * T_(t-1), trend slope ko parameter β se update karta hai.\n- Forecast Formula: Future h steps ahead ka forecast F_(t+h) = L_t + h * T_t hota hai."
            ],
            [
              "4. Holt-Winters Exponential Smoothing kya hai?",
              "Holt-Winters teen parameters use karke Level, Trend, aur Seasonality ko ek saath forecast karta hai:\n- Three Parameters: α (Level), β (Trend slope), aur γ (Seasonal indices).\n- Multiplicative Formula: F_(t+h) = (L_t + h * T_t) * S_(t+h-m).\n- Industry Standard: Fast computation aur low memory ke saath accurate multi-period seasonal economic forecasts deta hai."
            ]
          ]
        },
        "Stationarity and White Noise": {
          "cards": [
            [
              "1. Stationary Time Series kya hai aur forecasting me iski kya importance hai?",
              "Stationary time series wo hoti hai jiske statistical properties time par depend nahi karte:\n- Constant Structure: Modeling algorithms (jaise ARIMA) assume karte hain ki underlying rules time ke saath badal nahi rahe.\n- Predictability: Agar mean aur variance time ke saath constantly change ho rahe hon, toh past data future ke behavior ko predict nahi kar sakta."
            ],
            [
              "2. Weak (Covariance) Stationarity ko Mean, Variance, aur Autocovariance ke terms me define karein.",
              "Ek time series Y_t weakly stationary hoti hai agar wo teen conditions satisfy kare:\n- Constant Mean: Sabhi time t par E[Y_t] = μ constant ho (koi trend na ho).\n- Constant Variance: Sabhi time t par Var(Y_t) = σ² constant ho (homoscedasticity).\n- Time-Invariant Autocovariance: Cov(Y_t, Y_(t+k)) sirf lag k par depend kare, absolute time t par nahi."
            ],
            [
              "3. White Noise kya hai aur iski key properties kya hain?",
              "White Noise ek purely random aur uncorrelated stochastic process hai jo residual error represent karta hai:\n- Zero Mean: Har time t par E[ε_t] = 0.\n- Constant Variance: Har time t par Var(ε_t) = σ²_ε.\n- Zero Autocorrelation: Kisi bhi time t ≠ s ke liye Cov(ε_t, ε_s) = 0.\n- Ideal Model Residual: Perfect forecasting model ka residual hamesha white noise hona chahiye."
            ],
            [
              "4. Non-Stationary time series ko Stationary kaise banaya jata hai?",
              "Non-stationary series ko stable karne ke liye mathematical transformations lagate hain:\n- Differencing: First-order differencing (ΔY_t = Y_t - Y_(t-1)) linear trend remove karti hai; seasonal differencing seasonality remove karti hai.\n- Log Transforms: Natural logarithm (log(Y_t)) non-constant variance (heteroscedasticity) ko stabilize karta hai.\n- De-trending: Trend line fit karke actual data se subtract kar dena."
            ]
          ]
        },
        "Forecasting Accuracy Metrics & ARIMA Overview": {
          "cards": [
            [
              "1. MAE (Mean Absolute Error) aur MSE (Mean Squared Error) ko compare karein.",
              "Dono metrics forecast error (e_t = Y_t - F_t) ka magnitude measure karte hain:\n- MAE = (1/N) * Σ |Y_t - F_t|: Absolute errors ka mean; original units me hota hai aur extreme outliers se easily distort nahi hota.\n- MSE = (1/N) * Σ (Y_t - F_t)²: Errors ko square karta hai; bade errors ko heavily penalize karta hai, isliye sensitive to outliers hota hai."
            ],
            [
              "2. RMSE (Root Mean Squared Error) kya hai aur yeh MAE se kaise different hai?",
              "RMSE Mean Squared Error ka square root hota hai: RMSE = sqrt((1/N) * Σ (Y_t - F_t)²):\n- Original Scale: Square root lene se unit MSE ki tarah squared nahi rehti, original data units me aati hai.\n- Outlier Sensitivity: Squaring ki wajah se RMSE hamesha ≥ MAE hota hai; RMSE aur MAE ka gap jitna bada ho, model me utne zyada extreme outlier errors hote hain."
            ],
            [
              "3. Box-Jenkins ARIMA Modeling Framework ka conceptual overview dein.",
              "Box-Jenkins methodology AutoRegressive Integrated Moving Average models build karne ka 4-stage process hai:\n- 1. Identification: Stationarity check karna (ADF test) aur ACF/PACF plots se orders p, d, q determine karna.\n- 2. Estimation: Maximum Likelihood Estimation (MLE) se model coefficients calculate karna.\n- 3. Diagnostic Checking: Model residuals ka check karna ki wo white noise hain ya nahi (Ljung-Box test).\n- 4. Forecasting: Validated model se future periods ke confidence intervals ke saath forecasts generate karna."
            ],
            [
              "4. ARIMA(p, d, q) model me parameters (p, d, q) kya represent karte hain?",
              "ARIMA model teen components ka combination hota hai:\n- p (AutoRegressive - AR): Past lagged observations (Y_(t-1), ..., Y_(t-p)) ki number jo current value predict karne me use hoti hain.\n- d (Integrated - I): Stationarity achieve karne ke liye kitni baar differencing ki gayi.\n- q (Moving Average - MA): Past forecast error terms (ε_(t-1), ..., ε_(t-q)) ki number jo model me include hoti hain."
            ]
          ]
        }
      }
    }
  }
};
