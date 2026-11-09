window.studyData = window.studyData || {};
window.studyData.english = window.studyData.english || {};
window.studyData.english.subjects = window.studyData.english.subjects || {};

window.studyData.english.subjects["Introduction to Data Science"] = {
  "units": {
    "UNIT 1: DATA SCIENTIST'S TOOL BOX": {
      "topics": {
        "Data Science & Actionable Knowledge": {
          "cards": [
            [
              "1. What is Data Science and how does it turn raw data into actionable knowledge?",
              "Data Science is an interdisciplinary field combining statistics, computing, and domain expertise to extract meaningful insights from data.\n- Ingestion: Collecting and storing raw structured, semi-structured, or unstructured data.\n- Processing & Cleaning: Removing noise, missing values, and anomalies.\n- Modeling & Interpretation: Applying statistical models and algorithms to guide business decision-making."
            ],
            [
              "2. Explain the key stages of the Data Science Lifecycle.",
              "The Data Science lifecycle comprises five iterative phases:\n- Problem Formulation: Defining business objectives and key questions.\n- Data Acquisition & Cleaning: Gathering, formatting, and vetting data quality.\n- Exploratory Data Analysis (EDA): Uncovering patterns, correlations, and anomalies.\n- Predictive Modeling: Training and evaluating machine learning or statistical models.\n- Deployment & Communication: Translating results into interactive dashboards and actionable strategies."
            ],
            [
              "3. Compare Structured, Semi-Structured, and Unstructured Data.",
              "Data exists in three primary structural formats:\n- Structured: Tabular data with rigid schemas (SQL databases, CSV files, Excel spreadsheets).\n- Semi-Structured: Data with self-describing tags or markers without a rigid tabular schema (JSON, XML, NoSQL).\n- Unstructured: Data with no predefined conceptual structure (raw text, audio, images, video)."
            ],
            [
              "4. Explain the Data Science Venn Diagram (Drew Conway).",
              "Data Science lies at the intersection of three foundational disciplines:\n- Hacking / Computer Science Skills: Writing clean, scalable code and working with data pipelines.\n- Math & Statistics Knowledge: Selecting the right metrics, distributions, and inferential models.\n- Substantive Domain Expertise: Understanding the business or scientific context to pose the right questions and interpret findings."
            ]
          ]
        },
        "Version Control, Git, and GitHub": {
          "cards": [
            [
              "1. What is Version Control and why is it essential in Data Science?",
              "Version control is a system that records changes to code and files over time so specific versions can be recalled later.\n- Collaboration: Enables teams to work simultaneously on code without overwriting each other's work.\n- Reproducibility: Preserves history of scripts, models, and data pipelines for peer review and audits.\n- Rollback & Branching: Allows safe testing of experimental models on isolated branches without breaking production."
            ],
            [
              "2. Explain the three main states and areas of a Git repository.",
              "Git tracks files through three primary local states and sections:\n- Working Directory: Local filesystem where files are actively edited and modified.\n- Staging Area (Index): Intermediate buffer where modifications are indexed with `git add` before committing.\n- Repository (.git directory): Permanent database storing snapshot commits permanently."
            ],
            [
              "3. What is the fundamental difference between Git and GitHub?",
              "Git and GitHub serve distinct but complementary roles in software development:\n- Git: A local, distributed version control tool executed via terminal commands to track file history.\n- GitHub: A cloud-based hosting platform for Git repositories providing issue tracking, Pull Requests, CI/CD, and team collaboration."
            ],
            [
              "4. State and explain the essential Git commands used in a project.",
              "Key Git commands for daily data science workflows include:\n- `git clone <url>`: Copies an existing remote repository onto the local machine.\n- `git add <file>`: Moves modified files from working tree into the staging area.\n- `git commit -m \"msg\"`: Takes a permanent snapshot of staged files with a descriptive message.\n- `git push` & `git pull`: Syncs local commits to remote repository and pulls remote updates locally."
            ]
          ]
        },
        "R, RStudio, and R Markdown": {
          "cards": [
            [
              "1. What is R and what makes it suitable for Data Science?",
              "R is an open-source programming language and software environment specifically designed for statistical computing and data graphics.\n- Rich package ecosystem: Comprehensive CRAN repository with libraries like dplyr, ggplot2, tidyr, and caret.\n- First-class vector operations: Native matrix math and statistical distributions built into core syntax.\n- Active community: Deep adoption in bioinformatics, academic research, finance, and enterprise analytics."
            ],
            [
              "2. Describe the four primary panes of the RStudio IDE.",
              "RStudio is the standard Integrated Development Environment for R organized into four synchronized panes:\n- Source / Editor (Top-Left): Writing, editing, and executing scripts and Markdown documents.\n- Console / Terminal (Bottom-Left): Interactive R command execution and standard output.\n- Environment / History (Top-Right): Displays active objects, dataframes, variables, and previous command history.\n- Files / Plots / Packages / Help (Bottom-Right): File browsing, rendering graphical plots, managing packages, and viewing docs."
            ],
            [
              "3. What is R Markdown and how does it support Reproducible Research?",
              "R Markdown (.Rmd) integrates narrative text (formatted in Markdown) with executable R code chunks:\n- Reproducibility: Re-running the file regenerates plots, calculations, and tables dynamically.\n- Multi-format output: Knits directly into HTML reports, PDF documents, Word files, and slide decks.\n- Literate programming: Eliminates manual copying of figures and statistical results into external reports."
            ],
            [
              "4. Explain how knitr and Code Chunks operate in R Markdown.",
              "Knitr processes dynamic reports by evaluating embedded R code chunks surrounded by triple backticks ```{r} ... ```:\n- Chunk options: Control chunk behavior using parameters like `echo=FALSE` (hide code), `eval=TRUE` (run code), and `warning=FALSE`.\n- Inline code: Embeds dynamic variables inside text using syntax like `r mean(x)`.\n- Rendering pipeline: knitr executes code chunks, outputs plain markdown, and pandoc converts it to final documents."
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
              "1. What are the five atomic data types in R?",
              "Every basic object in R is built upon five fundamental atomic data types:\n- Numeric (double): Real numbers with decimal values (e.g., 3.14, 42).\n- Integer: Whole numbers explicitly designated with an 'L' suffix (e.g., 5L).\n- Character: Text strings enclosed in single or double quotes (e.g., \"hello\").\n- Logical: Boolean values `TRUE` (or `T`) and `FALSE` (or `F`).\n- Complex: Numbers with imaginary components (e.g., 2 + 3i)."
            ],
            [
              "2. Compare Vectors, Matrices, and Arrays in R.",
              "These dimensional objects in R require homogeneous elements of the exact same atomic type:\n- Vector: 1-dimensional array created with `c()`; automatically coerced to the most flexible type.\n- Matrix: 2-dimensional rectangular array with `nrow` and `ncol` attributes.\n- Array: Multi-dimensional extension of matrices capable of handling 3 or more dimensions."
            ],
            [
              "3. What are Lists and Data Frames, and how do they differ?",
              "Lists and Data Frames handle heterogeneous data structures containing mixed types:\n- List: Generic 1D container where each element can be of different type and length (e.g., list of vectors, strings, matrices).\n- Data Frame: Special 2D list where each column is an equal-length vector; standard tabular format for statistical datasets."
            ],
            [
              "4. What are Factors in R and how are they used?",
              "Factors represent categorical data with predefined unique levels, stored as integers with text labels:\n- Nominal Factors: Unordered categories (e.g., male/female, state names).\n- Ordinal Factors: Ordered categories with explicit ranking (e.g., low < medium < high).\n- Created using `factor()`: Memory efficient and essential for linear modeling and ANOVA in R."
            ]
          ]
        },
        "Reading, Writing Data, and Control Structures": {
          "cards": [
            [
              "1. How do you read and write tabular data in R?",
              "R provides robust functions to import and export tabular text files:\n- `read.table()` / `read.csv()`: Reads plain-text files into data frames; handles headers, separators (`sep=\",\"`), and comment chars.\n- `write.table()` / `write.csv()`: Writes data frames to disk, optionally omitting row indices with `row.names=FALSE`.\n- Performance packages: `readr::read_csv()` and `data.table::fread()` read large datasets up to 10x faster."
            ],
            [
              "2. Explain the standard Control Structures in R.",
              "Control structures direct the logic and execution flow of R scripts:\n- `if-else`: Conditional branching evaluating a single logical scalar.\n- `for` loop: Iterates over a sequence or vector (e.g., `for (i in 1:10)`).\n- `while` loop: Executes repeatedly while a logical test condition remains `TRUE`.\n- `repeat`: Executes an infinite loop that must be explicitly terminated using `break`."
            ],
            [
              "3. What is the role of `break` and `next` statements in R loops?",
              "Loop execution control keywords modify standard iterative behavior:\n- `break`: Immediately terminates the innermost loop and transfers execution to the statement immediately following the loop.\n- `next`: Skips the remainder of the current loop iteration and advances directly to the next iteration."
            ],
            [
              "4. How are Missing Values represented and handled in R?",
              "R differentiates between distinct types of undefined or missing values:\n- `NA` (Not Available): Represents missing or unobserved data; tested with `is.na()`.\n- `NaN` (Not a Number): Represents undefined mathematical operations (e.g., 0/0); tested with `is.nan()`.\n- Filtering: Functions like `na.omit()` or `complete.cases()` filter out rows with missing data."
            ]
          ]
        },
        "Functions, Scoping Rules, Dates and Times": {
          "cards": [
            [
              "1. How are user-defined functions constructed in R?",
              "Functions in R are first-class objects created using the `function` directive:\n- Syntax: `my_func <- function(arg1, arg2 = default_val) { ... return(result) }`.\n- Positional & Named Arguments: Can be supplied by order or by explicit parameter name.\n- Lazy Evaluation: Function arguments are evaluated only when actively needed inside the function body."
            ],
            [
              "2. Explain Lexical Scoping and how Free Variables are resolved in R.",
              "R uses lexical (static) scoping to resolve free variables not defined inside a function's arguments or local body:\n- Search Path: R looks in the environment where the function was created (defined), not where it was called.\n- Nested Environments: If not found in the parent environment, R searches upward until reaching the global environment, then attached packages."
            ],
            [
              "3. How does R represent Dates and Times?",
              "R uses distinct object classes with numerical backing for temporal arithmetic:\n- `Date`: Represents calendar dates, stored internally as number of days since 1970-01-01.\n- `POSIXct`: Represents date-times as a single large integer (seconds since 1970-01-01 UTC); ideal for data frames.\n- `POSIXlt`: Stores date-times as a named list of components (sec, min, hour, mday, mon, year) for easy component extraction."
            ],
            [
              "4. What is the difference between Lexical Scoping and Dynamic Scoping?",
              "The distinction lies in which calling frame resolves unbound variables:\n- Lexical Scoping: Free variables are bound to the environment where the function was originally written/defined.\n- Dynamic Scoping: Free variables are resolved in the calling environment from which the function was invoked at runtime."
            ]
          ]
        },
        "Loop Functions and Debugging Tools": {
          "cards": [
            [
              "1. What are Loop Functions in R and why are they preferred over for-loops?",
              "Loop functions (the *apply family) implement compact functional programming patterns:\n- Conciseness: Executes repetitive operations across arrays, lists, or matrices in a single line.\n- Speed: Leverages optimized C-level internals rather than manual interpreted R for-loop overhead.\n- Readability: Expresses operations declaratively without managing manual indexing variables."
            ],
            [
              "2. Compare `lapply`, `sapply`, and `apply` in R.",
              "These core functional iteration tools yield different output shapes:\n- `lapply(X, FUN)`: Applies a function over a list or vector and always returns a list of identical length.\n- `sapply(X, FUN)`: Variant of `lapply` that simplifies results into a vector, matrix, or array when possible.\n- `apply(X, MARGIN, FUN)`: Applies a function over margins of an array/matrix (MARGIN=1 for rows, MARGIN=2 for columns)."
            ],
            [
              "3. Explain the operation of `tapply` and `mapply` in R.",
              "Specialized apply functions handle grouped subsets and multivariate inputs:\n- `tapply(X, INDEX, FUN)`: Applies a function over subsets of a vector defined by a factor or category list (e.g., group-wise means).\n- `mapply(FUN, ...)`: Multivariate apply that passes parallel elements of multiple vectors or lists as arguments to a function."
            ],
            [
              "4. Name and explain essential Debugging Tools in R.",
              "R provides interactive inspection utilities to diagnose runtime errors:\n- `traceback()`: Prints the function call stack at the moment the last unhandled error occurred.\n- `debug(f)`: Flags function `f` to pause execution and enter line-by-line interactive step-through mode.\n- `browser()`: Inserts a breakpoint anywhere in code to inspect active environment variables.\n- `recover()`: Error handler that prompts user to select any frame on the call stack to browse."
            ]
          ]
        },
        "Simulation and Code Profiling": {
          "cards": [
            [
              "1. How does R generate Random Numbers and Probability Distributions?",
              "R provides four prefix functions for each standard statistical distribution (d, p, q, r):\n- `r<dist>()`: Generates random variates (e.g., `rnorm(n, mean, sd)`, `runif()`, `rbinom()`).\n- `d<dist>()`: Evaluates probability density / mass function.\n- `p<dist>()` & `q<dist>()`: Computes cumulative distribution and quantile functions.\n- `set.seed(n)`: Sets the pseudo-random generator state to ensure exact reproducibility across runs."
            ],
            [
              "2. What is Code Profiling and why is it important in Data Science?",
              "Code profiling systematically measures execution time and resource consumption across functions:\n- Bottleneck Detection: Identifies specific lines or loops consuming disproportionate CPU time.\n- Optimization Focus: Directs refactoring efforts toward computationally expensive bottlenecks.\n- Memory Profiling: Identifies unnecessary copying or RAM bloat during large data manipulations."
            ],
            [
              "3. How does `system.time()` measure execution duration in R?",
              "The `system.time()` expression evaluates an R statement and returns three timing components:\n- User Time: CPU seconds spent executing your user process code.\n- System Time: CPU seconds spent on operating system kernel tasks (e.g., disk I/O, memory allocation).\n- Elapsed Time: Total clock / wall time perceived by the user from start to completion."
            ],
            [
              "4. How do `Rprof()` and `summaryRprof()` profile R scripts?",
              "R's native statistical sampling profiler monitors the call stack at regular intervals:\n- `Rprof(\"profile.out\")`: Begins writing call stack snapshots (typically every 20ms) to disk until `Rprof(NULL)` is called.\n- `summaryRprof()`: Tabulates sampling output into total execution time (`by.self` and `by.total`) per function.\n- Helps pin down exact bottlenecks without modifying or instrumenting individual function definitions."
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
              "1. How do you download files and scrape web data in R?",
              "R provides built-in and external tools to acquire web assets:\n- `download.file(url, destfile, method=\"curl\")`: Reliably downloads remote files over HTTP/HTTPS.\n- `readLines()`: Reads raw HTML or text lines directly from a web URL.\n- `rvest` package: Modern web scraper using `read_html()`, `html_elements()`, and `html_text()` to extract structured data via CSS selectors."
            ],
            [
              "2. How do you obtain data from RESTful APIs using R?",
              "REST APIs exchange structured data over HTTP protocols using GET and POST methods:\n- `httr` package: Uses `GET(url, query=list(...))` to send parameterized requests and inspect HTTP status codes (200 OK, 404 Not Found).\n- `jsonlite` package: Uses `fromJSON()` to automatically parse returned JSON text payloads into native R data frames.\n- Pagination: Uses iterative API loops with offset/page parameters to retrieve large datasets in chunks."
            ],
            [
              "3. How does R connect to relational databases (SQL)?",
              "Database connectivity is standardized using the `DBI` interface and database-specific drivers:\n- `dbConnect(drv, ...)`: Establishes a database connection (e.g., `RSQLite::SQLite()`, `RMySQL::MySQL()`).\n- `dbGetQuery(conn, \"SELECT ...\")`: Sends a SQL query string and fetches results directly as a data frame.\n- `dbDisconnect(conn)`: Closes database connection to prevent connection leaks."
            ],
            [
              "4. Explain Authentication methods used when querying Web APIs.",
              "Public and commercial APIs require identity validation to throttle and authorize queries:\n- API Keys / Tokens: Secret strings passed as URL query parameters or HTTP header fields (`Authorization: Bearer <token>`).\n- Basic Auth: Base64-encoded username and password sent via HTTP headers.\n- OAuth 1.0 / 2.0: Multi-step token exchange mechanism granting secure scoped access without exposing client credentials."
            ]
          ]
        },
        "Data Cleaning Basics and Formats": {
          "cards": [
            [
              "1. What raw data formats are commonly encountered in Data Science?",
              "Raw data arrives in multiple structural and binary formats:\n- CSV / TSV: Flat comma- or tab-separated text files; ubiquitous and human-readable.\n- JSON: Lightweight hierarchical key-value structure standard in web APIs.\n- XML: Tag-based hierarchical format with strict schema definitions.\n- Excel (.xlsx) / Binary: Proprietary multi-sheet workbooks read using packages like `readxl`."
            ],
            [
              "2. What are common Data Quality issues encountered during ingestion?",
              "Raw data rarely arrives analysis-ready and typically suffers from five primary issues:\n- Inconsistent formatting: Mixed date formats, trailing whitespaces, and capitalization discrepancies.\n- Missing & placeholder values: Unrecorded observations encoded as `NA`, `NULL`, `999`, or empty strings.\n- Duplicates & redundant rows: Multiple identical records caused by data logging errors.\n- Type mismatch: Numerical measurements incorrectly imported as text characters."
            ],
            [
              "3. How are String Manipulation and Regular Expressions performed in R?",
              "Text cleaning relies on base R string utilities and the modern `stringr` package:\n- Base R: `grep()` and `grepl()` search for regex patterns; `sub()` and `gsub()` replace matches; `strsplit()` splits strings.\n- `stringr`: Consistent API built on stringi (`str_detect()`, `str_extract()`, `str_replace_all()`, `str_trim()`).\n- Regular Expressions: Metacharacters (`^`, `$`, `[0-9]`, `\\w+`) specify search patterns for dates, phone numbers, or emails."
            ],
            [
              "4. Explain Type Conversion and Coercion in R.",
              "Data types often require explicit casting to preserve analytical accuracy:\n- Implicit Coercion: Occurs automatically when mixing types (e.g., `c(1, \"a\")` forces numeric 1 to string `\"1\"`).\n- Explicit Casting: Using `as.numeric()`, `as.character()`, `as.factor()`, or `as.Date()`.\n- Coercion Hazards: Converting factors directly to numeric extracts internal integer codes rather than numeric values (fix: `as.numeric(as.character(f))`)."
            ]
          ]
        },
        "Tidy Data Principles and Data Reshaping": {
          "cards": [
            [
              "1. State the three fundamental rules of \"Tidy Data\" (Hadley Wickham).",
              "Tidy Data provides a standard tabular layout where structure matches semantics:\n- 1. Each variable must have its own column.\n- 2. Each observation must have its own row.\n- 3. Each type of observational unit forms a table.\n- Consistency allows standardized tools (dplyr, ggplot2) to work together seamlessly without bespoke reshaping."
            ],
            [
              "2. Compare Wide Format and Long (Tall) Format data.",
              "Tabular data can be structured in two opposing dimensions:\n- Wide Format: Multiple measurement variables are spread across distinct columns (convenient for human data entry).\n- Long Format: Multiple measurement columns are collapsed into a key-value pair (`variable` and `value` columns); required for tidy analysis and ggplot2 plotting."
            ],
            [
              "3. How do `pivot_longer()` and `pivot_wider()` reshape data in `tidyr`?",
              "The `tidyr` package provides paired functions to convert between wide and long representations:\n- `pivot_longer()`: Gathers multiple columns into key-value pairs, lengthening data and reducing columns.\n- `pivot_wider()`: Spreads key-value pairs into multiple column headers, widening data and reducing rows.\n- Modern replacements for older legacy functions `gather()` / `spread()` and `melt()` / `dcast()`."
            ],
            [
              "4. Explain the core `dplyr` verbs for data manipulation.",
              "The `dplyr` package provides a grammar of data manipulation with five core verbs:\n- `select()`: Picks specific columns by name.\n- `filter()`: Subsets rows matching logical conditions.\n- `mutate()`: Adds new computed columns or transforms existing variables.\n- `summarize()`: Collapses multiple values into single statistical summaries.\n- `arrange()`: Reorders rows; piped together seamlessly using the `%>%` or `|>` pipe operator."
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
              "1. What is Exploratory Data Analysis (EDA) and its primary objective?",
              "EDA is an investigative philosophy developed by John Tukey to analyze datasets before formal statistical modeling:\n- Maximizes insight into data structure, underlying variables, and relationships.\n- Detects outliers, anomalies, missing patterns, and measurement errors.\n- Tests foundational assumptions (e.g., normality, homoscedasticity) to select appropriate models."
            ],
            [
              "2. Explain the Five-Number Summary and common statistical measures in R.",
              "The Five-Number Summary provides a non-parametric summary of distribution spread:\n- Minimum, 1st Quartile (Q25), Median (Q50), 3rd Quartile (Q75), and Maximum.\n- Computed in R using `fivenum()` or `summary()` (which also includes the arithmetic Mean).\n- Interquartile Range (`IQR = Q3 - Q1`): Measures dispersion resistant to extreme outliers."
            ],
            [
              "3. How does EDA help eliminate or sharpen hypotheses?",
              "EDA acts as an evidence-based filter before committing resources to formal modeling:\n- Disproving false premises: Early scatter plots and correlations reveal whether assumed linear relationships exist.\n- Refining target questions: Exposes unexpected clustering or subgroup differences requiring distinct hypotheses.\n- Feature selection: Identifies collinear or uninformative predictors before model training."
            ],
            [
              "4. How are Outliers detected using IQR and Boxplots?",
              "Tukey's standard rule uses the Interquartile Range (IQR) to establish upper and lower fences:\n- Lower Fence: `Q1 - 1.5 * IQR`.\n- Upper Fence: `Q3 + 1.5 * IQR`.\n- Any data point lying beyond these fences is classified as an outlier and plotted as an individual point outside the boxplot whiskers."
            ]
          ]
        },
        "Univariate and Bivariate Visualization in R": {
          "cards": [
            [
              "1. Compare Base Graphics, Lattice, and ggplot2 in R.",
              "R supports three major graphics paradigms with distinct philosophies:\n- Base Graphics: Canvas/pen model (`plot()`, `hist()`); quick and simple, but difficult to modify once drawn.\n- Lattice: Trellis graphics (`xyplot()`); optimized for multi-panel conditional plots across factor levels.\n- ggplot2: Grammar of Graphics (`ggplot()`); builds plots layer by layer (data, aesthetics, geoms, scales) with supreme customization."
            ],
            [
              "2. Compare Histograms and Density Plots for inspecting distributions.",
              "Both tools visualize univariate continuous distributions but present data differently:\n- Histogram: Bins continuous data into discrete intervals and plots frequency bars; sensitive to bin width choice.\n- Density Plot: Smoothed non-parametric estimate of the underlying probability density function (kernel density estimate); provides a continuous curve independent of rigid bin boundaries."
            ],
            [
              "3. Explain the visual components of a Boxplot.",
              "A boxplot provides a compact graphical depiction of the five-number summary:\n- Central Box: Spans the interquartile range from Q1 to Q3 (containing the middle 50% of data).\n- Solid Line inside Box: Marks the Median (50th percentile).\n- Whiskers: Extend to the furthest data points within 1.5 * IQR of the quartiles.\n- Individual Points: Flag observations lying beyond whiskers as potential outliers."
            ],
            [
              "4. How do Scatter Plots and Correlation Matrices examine bivariate relationships?",
              "Bivariate analysis evaluates associations between two continuous variables:\n- Scatter Plot: Plots pairs of observations as Cartesian points; visually reveals linearity, curvature, spread, and clustering.\n- Pearson Correlation (r): Quantifies linear strength from -1 (perfect negative) to +1 (perfect positive).\n- Correlation Matrix / Correlogram: Grid of correlation coefficients visualized via color-coded tiles to spot multicollinearity across all variable pairs."
            ]
          ]
        },
        "Multivariate Visualization of High-Dimensional Data": {
          "cards": [
            [
              "1. What challenges arise when exploring High-Dimensional Data?",
              "High-dimensional datasets (many features p relative to samples n) introduce distinct hurdles:\n- Curse of Dimensionality: Data becomes sparse in high-dimensional space, diminishing distance metrics.\n- Perceptual Limits: Humans cannot directly visualize data spaces beyond 3 dimensions.\n- Multicollinearity: Redundant inter-variable correlations obscure distinct feature contributions."
            ],
            [
              "2. How do Aesthetics and Faceting represent multi-dimensional data in ggplot2?",
              "Grammar of Graphics maps additional variables onto distinct visual channels:\n- Aesthetic Mappings: Encode categorical and numerical dimensions via color, shape, size, alpha (transparency), and linetype.\n- Faceting (`facet_wrap`, `facet_grid`): Splits data into a matrix of smaller subplots based on one or two discrete conditioning factors (Trellis / small multiples)."
            ],
            [
              "3. What is Principal Component Analysis (PCA) and how is it used in EDA?",
              "PCA is an unsupervised dimensionality reduction technique that transforms correlated variables into orthogonal components:\n- Principal Components: Linear combinations of original features ordered by the amount of variance they explain.\n- Dimensionality Reduction: Projects high-dimensional data onto the top 2 or 3 components (Biplot).\n- Visualizes overall cluster structure and sample separation without losing major variance patterns."
            ],
            [
              "4. What is a Heatmap with Hierarchical Clustering and how does it reveal patterns?",
              "A heatmap visualizes matrix data where individual values are represented as color gradients:\n- Color Intensity: Encodes magnitude of measurements across rows (samples) and columns (features).\n- Dendrograms: Hierarchical clustering trees displayed along row/column axes group similar samples and co-expressed variables together.\n- Pattern Discovery: Instantly reveals block-like correlations and multi-variable clusters in complex datasets."
            ]
          ]
        }
      }
    }
  }
};

window.studyData.english.subjects["Time Series Analysis"] = {
  "units": {
    "Unit 1: Fundamentals of Time Series": {
      "topics": {
        "Introduction to Time Series": {
          "cards": [
            [
              "1. What is a Time Series and why is it important in Computer Science and Business?",
              "A time series is a sequential set of data observations recorded at successive, uniform intervals of time (e.g., hourly, daily, monthly).\n- Computer Science: Monitors server workload, CPU/memory usage, network bandwidth traffic, and detects cybersecurity anomalies.\n- Business & Finance: Tracks stock market fluctuations, sales forecasts, inventory demands, and economic indicators over time.\n- Core Purpose: Analyzes past patterns to understand underlying dynamics and forecast future behavior."
            ],
            [
              "2. State the primary objectives and key applications of Time Series Analysis.",
              "Time series analysis serves four principal objectives across engineering and commerce:\n- Description: Identifying and isolating structural patterns such as trends, cycles, and seasonal variations.\n- Explanation: Understanding how correlated external factors influence variable behavior over time.\n- Forecasting: Predicting future values to optimize resource scheduling, capacity planning, and budgets.\n- Control: Setting threshold alerts in automated systems (e.g., automated server scaling upon traffic surge)."
            ],
            [
              "3. What is the difference between Continuous and Discrete Time Series?",
              "Time series data is classified by how observations are sampled along the time continuum:\n- Continuous Time Series: Observations are recorded continuously over every infinitesimal instant of time (e.g., analog seismograph signals, continuous ECG monitors, barometric pressure charts).\n- Discrete Time Series: Observations are sampled and recorded at fixed, discrete temporal points (e.g., daily stock closing price, monthly website page views, annual GDP)."
            ],
            [
              "4. Distinguish between Cross-Sectional, Time Series, and Panel Data.",
              "Data structures differ based on temporal depth and cross-sectional entity breadth:\n- Cross-Sectional Data: Observations collected across multiple subjects (e.g., 500 companies) at a single fixed point in time.\n- Time Series Data: Observations collected for a single subject across multiple successive time intervals.\n- Panel (Longitudinal) Data: Hybrid structure combining both, tracking multiple subjects repeatedly across multiple successive time intervals."
            ]
          ]
        },
        "Components of Time Series (Four Forces)": {
          "cards": [
            [
              "1. What are the \"Four Forces\" (Components) of a Time Series?",
              "A classical time series is governed by four distinct underlying behavioral components:\n- Secular Trend (T): Long-term upward, downward, or steady movement over extended periods.\n- Seasonal Variations (S): Short-term, regular periodic fluctuations repeating within a span of one year.\n- Cyclical Variations (C): Medium-to-long term wave-like oscillations around the trend associated with business cycles.\n- Irregular / Random Fluctuations (I): Unpredictable, erratic shocks caused by random exogenous events."
            ],
            [
              "2. Define Secular Trend (T) and describe its long-term characteristics.",
              "Secular trend represents the smooth, underlying long-term direction of a series over decades or years:\n- Sustained Direction: Exhibits a consistent upward movement (e.g., global population, e-commerce adoption) or downward movement (e.g., death rates from eradicated diseases).\n- Isolates Noise: Ignores short-term seasonal blips and daily market volatility.\n- Forms Baseline: Serves as the foundational baseline around which other short-term forces oscillate."
            ],
            [
              "3. Explain Seasonal Variations (S) and contrast them with Cyclical Variations (C).",
              "Seasonal and cyclical components differ in their periodicity and underlying drivers:\n- Seasonal Variations (S): Strict periodic rhythm with cycles completing within ≤ 1 year (e.g., retail surge during festivals, ice cream sales in summer); driven by climate or institutional conventions.\n- Cyclical Variations (C): Long-term non-periodic wave oscillations spanning 3 to 10+ years; driven by economic business cycles (Prosperity, Recession, Depression, Recovery)."
            ],
            [
              "4. What are Irregular or Random Fluctuations (I) and what causes them?",
              "Irregular fluctuations represent unpredictable, random residual variations left after accounting for T, S, and C:\n- Unforeseen Shocks: Triggered by unpredictable events such as natural disasters (earthquakes, floods), wars, sudden strikes, or pandemics.\n- Non-Mathematical: Cannot be predicted mathematically or modeled deterministically.\n- Short-Lived: Causes sharp temporary disruptions that gradually subside as systems return to baseline equilibrium."
            ]
          ]
        },
        "Mathematical Decomposition Models": {
          "cards": [
            [
              "1. Explain the Additive Decomposition Model (Y = T + S + C + I).",
              "The Additive Model assumes the observed series value is the linear sum of all four independent components:\n- Equation: Y_t = T_t + S_t + C_t + I_t.\n- Measurement Unit: All components (T, S, C, I) are expressed in identical original units of measurement as Y.\n- Core Assumption: Seasonal swings maintain a constant absolute magnitude regardless of whether the trend level rises or falls."
            ],
            [
              "2. Explain the Multiplicative Decomposition Model (Y = T * S * C * I).",
              "The Multiplicative Model assumes components interact proportionally rather than operating independently:\n- Equation: Y_t = T_t * S_t * C_t * I_t.\n- Measurement Unit: Trend (T) is in original physical units; Seasonal (S), Cyclical (C), and Irregular (I) are dimensionless indices or percentage ratios.\n- Core Assumption: The magnitude of seasonal fluctuations is directly proportional to the overall level of the secular trend."
            ],
            [
              "3. Compare the merits and demerits of the Additive Model.",
              "The additive framework offers simplicity but carries operational limitations:\n- Merits: Highly intuitive, easy to compute by direct subtraction, and simple to interpret when seasonal swings are uniform.\n- Demerits: Unrealistic when economic growth inflates seasonal variances over time; does not capture compounding percentage growth rates."
            ],
            [
              "4. When should you choose the Multiplicative Model over the Additive Model?",
              "Model selection depends on the visual relationship between seasonal amplitude and trend level:\n- Choose Multiplicative: When seasonal peaks and troughs grow wider as the overall trend increases (most economic, sales, and web traffic series).\n- Choose Additive: When seasonal oscillation amplitude remains virtually constant over time regardless of trend elevation.\n- Transformation: A multiplicative model can be converted into an additive model by taking logarithms: log(Y) = log(T) + log(S) + log(C) + log(I)."
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
              "1. What is the Free-Hand Curve Method and what are its primary limitations?",
              "The Free-Hand Curve method plots original data on a Cartesian graph and manually sketches a smooth trend line:\n- Procedure: Visualizes raw points and manually draws an overarching smooth curve through the center of fluctuations.\n- Advantages: Extremely simple, fast, and does not require complex statistical computations.\n- Major Limitations: Highly subjective and arbitrary; different analysts draw different lines, making objective mathematical forecasting impossible."
            ],
            [
              "2. Explain the Method of Semi-Averages for determining linear trend.",
              "The Method of Semi-Averages divides the entire time series dataset into two equal halves:\n- Step 1: Split data into two equal temporal parts (e.g., two 4-year periods for an 8-year dataset).\n- Step 2: Compute the arithmetic mean (semi-average) of values in each half.\n- Step 3: Plot each semi-average against the mid-point of its respective time sub-period.\n- Step 4: Connect the two plotted points with a straight line to establish the secular linear trend."
            ],
            [
              "3. How do you apply the Method of Semi-Averages when the number of periods is odd?",
              "When total time periods N is odd, data cannot be divided into two equal integers:\n- Omission Method: The central middle year/period is completely omitted from calculations.\n- Division: The remaining (N - 1) years are then split into two perfectly equal halves.\n- Example: In an 11-year series (2010–2020), omit the 6th year (2015); calculate the semi-average for 2010–2014 and for 2016–2020."
            ],
            [
              "4. State the merits and demerits of the Method of Semi-Averages.",
              "The Semi-Average technique balances simplicity with objectivity:\n- Merits: Completely objective (yields identical results regardless of who computes it); simple arithmetic without calculus.\n- Demerits: Strictly presumes a linear trend line; completely inappropriate if underlying trend is curvilinear, exponential, or parabolic."
            ]
          ]
        },
        "Mathematical Trend Fitting (Least Squares)": {
          "cards": [
            [
              "1. Explain the Principle of Least Squares for fitting a Linear Trend line (y = a + bx).",
              "The Method of Least Squares minimizes the sum of squared vertical residuals between observed data and trend values:\n- Trend Equation: y = a + bx, where 'a' is the y-intercept at x = 0, and 'b' is the constant rate of growth (slope).\n- Normal Equations: \n  1) Σy = Na + bΣx\n  2) Σxy = aΣx + bΣx²\n- Objective: Ensures that Σ(y - y_hat) = 0 and Σ(y - y_hat)² is minimum."
            ],
            [
              "2. How are Least Squares normal equations simplified by shifting the origin (Σx = 0)?",
              "By setting origin x = 0 at the temporal center of the dataset, Σx evaluates to zero:\n- Intercept Formula: a = Σy / N (arithmetic mean of y).\n- Slope Formula: b = Σxy / Σx².\n- Even Periods: When N is even, scale deviations in half-year units: x = ..., -3, -1, +1, +3, ... so Σx = 0 remains valid.\n- Advantage: Decouples normal equations, eliminating simultaneous matrix elimination."
            ],
            [
              "3. Explain the procedure for fitting a Second-Degree Parabolic Curve (y = a + bx + cx²).",
              "A parabolic quadratic curve models non-linear trends exhibiting acceleration or turning points:\n- Equation: y = a + bx + cx².\n- Normal Equations (when origin is shifted such that Σx = 0):\n  1) Σy = Na + cΣx²\n  2) Σxy = bΣx²\n  3) Σx²y = aΣx² + cΣx⁴\n- Parameter 'b' is determined directly as b = Σxy / Σx²; parameters 'a' and 'c' are solved simultaneously from equations 1 and 3."
            ],
            [
              "4. Explain the formulation and fitting of an Exponential Trend Curve (y = ab^x).",
              "An exponential trend models geometric compounding growth common in IT adoption and population:\n- Equation: y = a * b^x.\n- Log-Linearization: Taking logarithms on both sides converts the exponential into a linear equation: log(y) = log(a) + x * log(b).\n- Let Y = log(y), A = log(a), and B = log(b); the linear equation becomes Y = A + Bx.\n- Solved via standard least squares equations for A and B; then a = antilog(A) and b = antilog(B)."
            ]
          ]
        },
        "Moving Average Method": {
          "cards": [
            [
              "1. What is the Moving Average Method and how does it smooth out fluctuations?",
              "The Moving Average method computes successive overlapping arithmetic means over a fixed time window 'm':\n- Smoothing Action: Averages out short-term seasonal and irregular oscillations, highlighting the underlying trend.\n- Window Selection: Setting window 'm' equal to the period of cyclical or seasonal oscillations completely neutralizes that cycle.\n- Non-Parametric: Does not assume any rigid mathematical function (linear, quadratic), adapting dynamically to local curvature."
            ],
            [
              "2. How do you calculate Odd-Period Moving Averages (3-yearly and 5-yearly)?",
              "For an odd period 'm', the calculated average directly aligns with the exact central year:\n- 3-Yearly Moving Average: Average of y1, y2, y3 is placed against year 2; average of y2, y3, y4 placed against year 3.\n- 5-Yearly Moving Average: Average of y1 to y5 placed against year 3; average of y2 to y6 placed against year 4.\n- Boundary Loss: A 3-yearly moving average loses 1 year at each end; a 5-yearly moving average loses 2 years at each end."
            ],
            [
              "3. Why is Centering required for Even-Period Moving Averages (4-yearly centered)?",
              "When period 'm' is even, the arithmetic mean falls between two calendar years:\n- Step 1: Calculate 4-yearly moving totals and 4-yearly moving averages; they sit halfway between years (e.g., between years 2 and 3).\n- Step 2: Average two consecutive 4-yearly moving averages together; this 'centered' value now aligns directly with an exact calendar year (year 3).\n- Eliminates phase distortion and temporal misalignment with original observations."
            ],
            [
              "4. State the key merits and demerits of the Moving Average Method.",
              "Moving averages provide robust local smoothing with specific operational trade-offs:\n- Merits: Highly flexible, simple to compute, effectively dampens periodic cycles when cycle length is known.\n- Demerits: Loses data points at the beginning and end of the series; cannot provide mathematical forecast values for future unobserved periods."
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
              "1. What is a Seasonal Index and what does it measure?",
              "A Seasonal Index is a normalized percentage ratio measuring the relative seasonal intensity for a given sub-period:\n- Baseline: The annual average across all seasons is normalized to 100%.\n- Interpretation: An index of 130% for Q4 indicates sales in Q4 are typically 30% above the average quarterly level.\n- Balance: For quarterly data, the sum of four seasonal indices must equal 400 (or mean = 100); for monthly data, the sum must equal 1200."
            ],
            [
              "2. Explain the Method of Simple Averages for calculating seasonal indices.",
              "The simplest technique for isolating seasonal variations from quarterly or monthly data:\n- Step 1: Arrange data in a two-dimensional grid with years in rows and seasons (quarters/months) in columns.\n- Step 2: Compute the average value for each column across all years (Quarterly Averages x_bar).\n- Step 3: Compute the Grand Average G_bar of all quarterly averages.\n- Step 4: Seasonal Index for Quarter i = (x_bar_i / G_bar) * 100 (adjusted so sum = 400).\n- Assumption: Presumes the secular trend is flat; biased if strong long-term trend exists."
            ],
            [
              "3. Explain the Ratio-to-Trend Method for isolating seasonal variations.",
              "Ratio-to-Trend accounts for an underlying secular trend before extracting seasonal indices:\n- Step 1: Fit a mathematical trend line (e.g., least squares line y = a + bx) and compute trend values T for each period.\n- Step 2: Divide each actual observation Y by its corresponding trend value T: (Y / T) * 100.\n- Step 3: Group ratios by season across years and eliminate irregular outliers by taking medians or trimmed means.\n- Step 4: Adjust final seasonal indices so their sum equals 400 (quarterly) or 1200 (monthly)."
            ],
            [
              "4. Explain the Ratio-to-Moving Average Method and why it is considered the most reliable.",
              "Ratio-to-Moving Average isolates seasonal indices by eliminating both trend and cyclical components:\n- Step 1: Compute a 12-month (or 4-quarter centered) moving average; this captures combined Trend and Cyclical forces (T * C).\n- Step 2: Divide original observations Y by centered moving averages: Y / (T * C) = (T * S * C * I) / (T * C) = S * I.\n- Step 3: Average the resulting (S * I) ratios for each season across years to smooth out random noise (I), leaving pure Seasonal Index (S).\n- Step 4: Normalize indices to 100% baseline; widely considered the gold standard in decomposition."
            ]
          ]
        },
        "Deseasonalization and Link Relatives Method": {
          "cards": [
            [
              "1. What is Deseasonalization and how is a time series seasonally adjusted?",
              "Deseasonalization removes regular seasonal swings from raw data to expose underlying trend and cyclical movements:\n- Additive Adjustment: Deseasonalized Series = Y - S.\n- Multiplicative Adjustment: Deseasonalized Series = (Y / S) * 100.\n- Purpose: Enables fair comparison of performance across consecutive periods (e.g., comparing Q4 holiday sales against Q1 baseline without seasonal bias)."
            ],
            [
              "2. Explain Pearson's Method of Link Relatives for computing seasonal indices.",
              "The Method of Link Relatives expresses each period's value as a percentage of the immediately preceding period:\n- Step 1: Calculate Link Relative = (Current Period Value / Preceding Period Value) * 100.\n- Step 2: Average link relatives for each season across all years (using median or mean).\n- Step 3: Convert link relatives into Chain Relatives with the first period fixed at 100: Chain Relative = (Current Link Relative * Preceding Chain Relative) / 100.\n- Step 4: Correct for trend discrepancy between initial and final chain relative, then normalize."
            ],
            [
              "3. Compare the four methods of measuring seasonal variations.",
              "Each method of measuring seasonal variations balances simplicity with statistical rigor:\n- Simple Averages: Easiest, but valid only when trend is absent or negligible.\n- Ratio-to-Trend: Effective when trend follows an exact known mathematical curve (linear/quadratic).\n- Ratio-to-Moving Average: Most robust and flexible; eliminates unknown trends without assuming strict linearity.\n- Link Relatives: Comprehensive, but computationally intensive and sensitive to extreme boundary values."
            ],
            [
              "4. How do businesses and economists interpret seasonally adjusted time series?",
              "Seasonally adjusted figures provide clear insight into true business momentum:\n- Real Growth vs. Calendar Effect: Reveals whether a sales spike represents actual business expansion or merely an expected annual holiday pattern.\n- Policy Decisions: Central banks and government agencies use seasonally adjusted unemployment and inflation data to formulate economic policies.\n- Forecasting: Future baseline projections are obtained by forecasting deseasonalized trend, then multiplying by seasonal index."
            ]
          ]
        },
        "Growth Curves in IT and Technology Adoption": {
          "cards": [
            [
              "1. What are Growth Curves and why are they used to model IT and Technology Adoption?",
              "Growth curves are mathematical models depicting the non-linear trajectory of growth towards a saturation ceiling:\n- Asymptotic Ceiling: Unlike linear trends, technology products cannot grow indefinitely; they are constrained by total market capacity (saturation).\n- IT Lifecycle: Models internet user adoption, smartphone penetration, cloud migration, and software user registration over time.\n- Stages: Characterized by an initial slow incubation phase, an exponential acceleration phase, and eventual deceleration towards maturity."
            ],
            [
              "2. Explain the Modified Exponential Growth Curve (y = k + ab^x).",
              "The Modified Exponential curve models growth where the rate of growth declines exponentially towards an asymptote:\n- Equation: y = k + a * b^x, where k is the upper asymptotic ceiling (k > 0), a is negative, and 0 < b < 1.\n- Property: The difference between the ceiling k and actual value y decreases by a constant percentage ratio 'b' each period.\n- Application: Models adoption of technologies that experience immediate early takeoff followed by steady deceleration."
            ],
            [
              "3. Explain the Gompertz Growth Curve (y = k * a^(b^x)) and its applications in IT.",
              "The Gompertz curve models asymmetrical S-shaped growth where percentage growth declines at a constant rate:\n- Equation: y = k * a^(b^x), where k is the saturation limit, 0 < a < 1, and 0 < b < 1.\n- Asymmetry: Inflection point occurs early (at y = k / e ≈ 37% of saturation ceiling), meaning growth slows down sooner than in logistic models.\n- IT Application: Widely used to predict new software licensing adoption, mobile subscriber base, and organizational cloud transformation."
            ],
            [
              "4. Explain the Logistic Growth Curve (S-Curve) and its three adoption phases.",
              "The Logistic Curve produces a perfectly symmetrical S-shaped diffusion curve widely used in tech adoption:\n- Equation: y = k / (1 + b * e^(-ax)), where k is the carrying capacity / market saturation limit.\n- Symmetry: Point of inflection occurs precisely at the midpoint y = k / 2, where maximum growth velocity is attained.\n- Three Phases: 1) Slow initial adoption (Innovators/Early Adopters), 2) Rapid exponential takeoff (Early/Late Majority), 3) Saturation plateau (Laggards)."
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
              "1. What is Simple Exponential Smoothing (SES) and why is it preferred over moving averages?",
              "SES is a weighted averaging technique that assigns exponentially declining weights to progressively older observations:\n- Recursive Formula: F_(t+1) = α * Y_t + (1 - α) * F_t, where α is the smoothing constant (0 ≤ α ≤ 1).\n- Recency Weighting: Recent data receives the highest weight; older data decays exponentially: α(1 - α)^k.\n- Memory Efficiency: Requires storing only the latest observation Y_t and current forecast F_t rather than a long historical window."
            ],
            [
              "2. How does the smoothing parameter α influence forecast responsiveness vs. stability?",
              "The choice of smoothing constant α governs the trade-off between speed and noise filtering:\n- High α (close to 1): Gives heavy weight to the most recent observation; highly responsive to sudden shifts, but vulnerable to noisy spikes.\n- Low α (close to 0): Gives heavy weight to historical smoothed forecast; produces a very smooth, stable baseline, but lags behind genuine structural shifts.\n- Typical Values: Commonly calibrated between 0.1 and 0.3 via error minimization (MSE)."
            ],
            [
              "3. Explain Holt's Linear Exponential Smoothing method and how it handles trends.",
              "Holt's two-parameter exponential smoothing extends SES to handle series containing secular linear trends:\n- Level Equation: L_t = α * Y_t + (1 - α) * (L_(t-1) + T_(t-1)), smoothing the baseline level.\n- Trend Equation: T_t = β * (L_t - L_(t-1)) + (1 - β) * T_(t-1), updating the trend slope using parameter β (0 ≤ β ≤ 1).\n- Forecast Formula: Forecast for h steps ahead is F_(t+h) = L_t + h * T_t."
            ],
            [
              "4. What is Holt-Winters Exponential Smoothing?",
              "Holt-Winters is a three-parameter smoothing model capturing level, trend, and seasonal patterns simultaneously:\n- Three Smoothing Parameters: α for level, β for trend slope, and γ for seasonal indices.\n- Multiplicative Holt-Winters: F_(t+h) = (L_t + h * T_t) * S_(t+h-m), standard for economic and business forecasting.\n- Capable of generating accurate multi-step seasonal forecasts with low computational overhead."
            ]
          ]
        },
        "Stationarity and White Noise": {
          "cards": [
            [
              "1. What is a Stationary Time Series and why is stationarity a prerequisite for modeling?",
              "A stationary time series is one whose statistical properties do not depend on the specific point in time at which it is observed:\n- Model Stability: Forecasting algorithms (like ARIMA) assume underlying generative parameters remain constant across time.\n- Reliable Inference: Without stationarity, statistical metrics (mean, variance, auto-correlation) vary over time, rendering past observations useless for predicting the future."
            ],
            [
              "2. Define Weak (Covariance) Stationarity in terms of Mean, Variance, and Autocovariance.",
              "A series Y_t is weakly (second-order) stationary if it satisfies three strict criteria:\n- Constant Mean: E[Y_t] = μ for all time t (no secular trend).\n- Constant Variance: Var(Y_t) = σ² for all time t (homoscedasticity, no volatility explosions).\n- Time-Invariant Autocovariance: Cov(Y_t, Y_(t+k)) depends solely on temporal lag k, not on absolute time t."
            ],
            [
              "3. What is White Noise and what are its key statistical properties?",
              "White Noise is a purely random, uncorrelated process representing irreducible residual noise:\n- Zero Mean: E[ε_t] = 0 for all t.\n- Constant Variance: Var(ε_t) = σ²_ε for all t.\n- Zero Autocorrelation: Cov(ε_t, ε_s) = 0 for all t ≠ s (variables at different times are completely uncorrelated).\n- Essential Diagnostic: In an optimal forecasting model, all model residuals must behave as white noise."
            ],
            [
              "4. How are Non-Stationary time series transformed into Stationary series?",
              "Non-stationary series are stabilized using mathematical transformations:\n- Differencing: First-order differencing (ΔY_t = Y_t - Y_(t-1)) removes linear trends; seasonal differencing removes seasonal patterns.\n- Log / Power Transforms: Box-Cox or natural logarithm (log(Y_t)) stabilizes non-constant (heteroscedastic) variance.\n- De-trending: Fitting and subtracting a mathematical polynomial trend line."
            ]
          ]
        },
        "Forecasting Accuracy Metrics & ARIMA Overview": {
          "cards": [
            [
              "1. Define and compare MAE (Mean Absolute Error) and MSE (Mean Squared Error).",
              "Both metrics evaluate error magnitude (e_t = Y_t - F_t) across N test forecasts:\n- MAE = (1/N) * Σ |Y_t - F_t|: Measures average absolute magnitude of errors in original physical units; robust to extreme outliers.\n- MSE = (1/N) * Σ (Y_t - F_t)²: Squares individual errors; heavily penalizes rare, large errors, making it sensitive to severe forecasting mistakes."
            ],
            [
              "2. What is RMSE (Root Mean Squared Error) and how does it compare to MAE?",
              "RMSE is the square root of Mean Squared Error: RMSE = sqrt((1/N) * Σ (Y_t - F_t)²):\n- Interpretable Units: Square root returns the metric to the original physical scale of the observations (unlike MSE).\n- Quadratic Penalty: Because errors are squared before averaging, RMSE is always ≥ MAE; the gap between RMSE and MAE highlights the presence and frequency of large outlier errors."
            ],
            [
              "3. Provide a conceptual overview of the Box-Jenkins ARIMA Modeling Framework.",
              "The Box-Jenkins methodology is an iterative 4-stage framework for building AutoRegressive Integrated Moving Average models:\n- 1. Identification: Testing stationarity (ADF test) and examining ACF/PACF plots to choose orders p, d, q.\n- 2. Estimation: Estimating model coefficients using maximum likelihood estimation (MLE).\n- 3. Diagnostic Checking: Verifying that model residuals conform to white noise (Ljung-Box test).\n- 4. Forecasting: Generating probabilistic confidence intervals for future horizons."
            ],
            [
              "4. What do the parameters (p, d, q) represent in an ARIMA(p, d, q) model?",
              "ARIMA models integrate three distinct modeling components:\n- p (AutoRegressive Order - AR): Number of lagged historical observations used as linear predictors (Y_(t-1), ..., Y_(t-p)).\n- d (Degree of Differencing - I): Number of consecutive differencing steps required to achieve stationarity.\n- q (Moving Average Order - MA): Number of lagged forecast error terms (ε_(t-1), ..., ε_(t-q)) incorporated into the prediction."
            ]
          ]
        }
      }
    }
  }
};

// -----------------------------------------------------------------------------
// DSE303: Machine Learning - Unit 1: Complete Exam Question Bank Flashcards
// -----------------------------------------------------------------------------
window.studyData = window.studyData || {};
window.studyData.english = window.studyData.english || {};
window.studyData.english.subjects = window.studyData.english.subjects || {};

window.studyData.english.questions = window.studyData.english.questions || {};

window.studyData.english.questions["Machine Learning"] = {
  "units": {
    "Part A: 1 Mark Questions": {
      "topics": {
        "Q1 - Q4: ML Basics & Definitions": {
          "cards": [
            [
              "1. Define Machine Learning.",
              "Machine Learning (ML) is a branch of Artificial Intelligence (AI) enabling computers to learn from data.\n- Core Mechanism: Learns patterns from experience without being explicitly programmed for every task.\n- Example: Gmail automatically detects and filters spam emails using ML models."
            ],
            [
              "2. Who is known as the father of Machine Learning?",
              "Arthur Samuel is recognized as the father of Machine Learning.\n- Historical Milestone: He coined the term 'Machine Learning' in 1959.\n- Breakthrough: Developed a self-learning computer checkers program in 1952."
            ],
            [
              "3. What is Artificial Intelligence?",
              "Artificial Intelligence (AI) is a branch of computer science focused on building smart machines.\n- Primary Goal: Enables machines to perform tasks requiring human intelligence.\n- Core Capabilities: Reasoning, problem-solving, learning, perception, and automated decision-making."
            ],
            [
              "4. What is a dataset?",
              "A dataset is an organized collection of related data used to build Machine Learning models.\n- Purpose: Serves as the source for training, testing, and evaluating ML algorithms.\n- Example: A student table containing Roll No, Age, Attendance, and Exam Marks."
            ]
          ]
        },
        "Q5 - Q8: Algorithms, Learning Types & Applications": {
          "cards": [
            [
              "5. Define an algorithm.",
              "An algorithm is a finite, step-by-step sequence of well-defined computational instructions.\n- Function: Takes inputs, processes them through logical steps, and produces a valid output.\n- In ML: Optimizes mathematical parameters to recognize patterns from training data."
            ],
            [
              "6. What is supervised learning?",
              "Supervised Learning is a category of ML where algorithms learn from labelled training data.\n- Input & Target: Both input features (X) and correct output labels (Y) are provided during training.\n- Objective: Learns a mapping function Y = f(X) to accurately predict labels for new, unseen data."
            ],
            [
              "7. What is unsupervised learning?",
              "Unsupervised Learning is a category of ML where algorithms analyze unlabelled data.\n- No Supervision: Data has input features (X) without any target labels (Y).\n- Objective: Discovers inherent groupings, hidden patterns, and data distributions (e.g. clustering)."
            ],
            [
              "8. Give two examples of Machine Learning applications.",
              "Machine Learning powers diverse everyday real-world systems:\n- Email Spam Filtering: Automatically identifies and diverts spam messages.\n- Facial Recognition: Biometric verification in smartphones, security checkpoints, and surveillance."
            ]
          ]
        },
        "Q9 - Q12: Features, Labels, Matrices & Tensors": {
          "cards": [
            [
              "9. What is a feature in Machine Learning?",
              "A feature is an individual measurable property or variable used as an input to a model.\n- Representation: Forms columns in structured datasets, denoted as input vector x.\n- Example: Age, height, weight, and blood pressure are features for predicting health status."
            ],
            [
              "10. What is a label in Machine Learning?",
              "A label is the final ground-truth target variable that a supervised model learns to predict.\n- Role: Provides the correct output answer during training to compute prediction error.\n- Example: 'Spam' or 'Not Spam' in email classification; 'Pass' or 'Fail' in student results."
            ],
            [
              "11. Define a matrix.",
              "A matrix is a two-dimensional rectangular array of numbers arranged into rows and columns.\n- Notation: An m × n matrix has m rows and n columns.\n- Example: A = [[1, 2], [3, 4]] represents a 2 × 2 square matrix storing numerical features."
            ],
            [
              "12. What is a tensor?",
              "A tensor is a generalized multidimensional mathematical data container.\n- Dimension Hierarchy: 0D tensor is a scalar, 1D is a vector, 2D is a matrix, 3D+ is a higher-order tensor.\n- Deep Learning: Color images are represented as 3D tensors (Height × Width × RGB Channels)."
            ]
          ]
        },
        "Q13 - Q16: Vectors, Eigenvalues, Eigenvectors & Scalars": {
          "cards": [
            [
              "13. What is a vector?",
              "A vector is an ordered 1-dimensional array of numbers representing magnitude and direction.\n- Types: Row vector [x₁, x₂] or column vector [x₁, x₂]ᵀ.\n- ML Role: Represents a single data sample's feature values in an n-dimensional feature space."
            ],
            [
              "14. Define eigenvalue.",
              "An eigenvalue is a scalar scalar factor (λ) by which an eigenvector scales during transformation.\n- Scaling Effect: Indicates how much the eigenvector stretches, shrinks, or reverses.\n- Formula: Av = λv (where A is square matrix, v is eigenvector, λ is eigenvalue)."
            ],
            [
              "15. Define eigenvector.",
              "An eigenvector is a non-zero vector (v) whose spatial direction remains unchanged under transformation.\n- Invariant Direction: Matrix multiplication only scales its length, never rotating its line of action.\n- Characteristic Equation: Av = λv (only valid for square matrices)."
            ],
            [
              "16. What is a scalar?",
              "A scalar is a single numeric quantity having only magnitude with no directional component.\n- Dimension: A 0-dimensional tensor.\n- Examples: 5, -12, 3.14; hyper-parameters like learning rate (α) and regularization factor (λ)."
            ]
          ]
        },
        "Q17 - Q20: Linear Algebra & Matrix Types": {
          "cards": [
            [
              "17. What is Linear Algebra?",
              "Linear Algebra is the mathematical branch dealing with linear equations, vectors, and matrices.\n- ML Foundation: Serves as the primary computational language for handling multi-variable data.\n- Core Tools: Vector spaces, matrix transformations, dot products, eigenvalues, and decompositions."
            ],
            [
              "18. What is a square matrix?",
              "A square matrix is a matrix having an identical number of rows and columns (m = n).\n- Order: An n × n matrix is called a square matrix of order n.\n- Properties: Required for calculating determinants, matrix inverses, and eigenvalues/eigenvectors."
            ],
            [
              "19. What is the transpose of a matrix?",
              "The transpose of matrix A (denoted Aᵀ) is obtained by flipping rows and columns.\n- Transformation: The element at row i, column j moves to row j, column i (Aᵀ_ji = A_ij).\n- Dimension Swap: If A is m × n, then Aᵀ is n × m."
            ],
            [
              "20. Name two types of Machine Learning.",
              "The two primary foundational paradigms of Machine Learning are:\n- Supervised Learning: Models trained using paired inputs and ground-truth output labels.\n- Unsupervised Learning: Models trained to detect patterns and groupings on unlabelled data."
            ]
          ]
        }
      }
    },
    "Part B: 2 Mark Questions": {
      "topics": {
        "Q1 - Q4: ML Foundations, Applications & History": {
          "cards": [
            [
              "1. Define Machine Learning and explain its importance.",
              "Machine Learning enables computers to learn from historical data and make automated decisions without manual programming.\n- Automation: Automates repetitive, complex data processing workflows.\n- Predictive Accuracy: Continuously updates internal parameters to refine forecast accuracy.\n- Scalability & Speed: Analyzes massive big-data volumes beyond human capacity.\n- Example: E-commerce platforms recommend tailored products based on browsing behavior."
            ],
            [
              "2. Write any two applications of Machine Learning.",
              "Machine Learning provides critical automated decision-making across modern domains:\n- Healthcare: Diagnostic models analyze radiological scans to detect tumors and predict patient health risks.\n- Banking & Fraud Detection: Real-time fraud detection engines analyze card transactions to flag suspicious activity.\n- Other Applications: Self-driving vehicles, speech assistants, facial recognition, and algorithmic trading."
            ],
            [
              "3. Differentiate between Artificial Intelligence and Machine Learning.",
              "Artificial Intelligence and Machine Learning operate at different levels of abstraction:\n- Scope: AI is the broad science of creating intelligent machines; ML is a specialized subset of AI.\n- Mechanism: AI includes rule-based logic and symbolic systems; ML specifically learns models from empirical data.\n- Dependency: AI can function on static heuristic rules; ML requires training datasets and learning algorithms.\n- Examples: Rule-based chess solver (AI); email spam classifier trained on user inbox data (ML)."
            ],
            [
              "4. Explain the history of Machine Learning briefly.",
              "Machine Learning evolved over seven decades of theoretical and technological breakthroughs:\n- 1950: Alan Turing proposed the Turing Test for testing machine intelligence.\n- 1952-1959: Arthur Samuel built a self-learning checkers program and coined 'Machine Learning'.\n- 1980s: Backpropagation popularized Multi-Layer Perceptrons and neural network research.\n- 2000s-Present: Big Data, GPUs, and Deep Learning powered breakthroughs in vision, speech, and generative AI."
            ]
          ]
        },
        "Q5 - Q8: Advantages, Paradigms, Elements & Scope": {
          "cards": [
            [
              "5. Write two advantages of Machine Learning.",
              "Machine Learning offers transformative operational advantages over traditional programming:\n- Automated Pattern Discovery: Discovers non-linear, multi-variable patterns hidden in high-dimensional data.\n- Continuous Improvement: Automatically refines performance and adapts over time as new data is ingested.\n- Operational Efficiency: Reduces manual human labor and delivers rapid real-time predictions."
            ],
            [
              "6. Differentiate between supervised and unsupervised learning.",
              "Supervised and Unsupervised Learning differ fundamentally in data annotation and learning goals:\n- Training Data: Supervised uses labelled data (input X + output Y); Unsupervised uses unlabelled data (input X only).\n- Feedback Mechanism: Supervised uses direct loss feedback between prediction and label; Unsupervised has no label feedback.\n- Core Tasks: Supervised solves classification and regression; Unsupervised solves clustering and dimensionality reduction.\n- Examples: Spam email detection (Supervised) vs customer market basket segmentation (Unsupervised)."
            ],
            [
              "7. What are the key elements of Machine Learning?",
              "A robust Machine Learning system depends on six interconnected pipeline elements:\n- Data: Raw historical information collected for model training.\n- Features: Individual measurable explanatory variables extracted from raw data.\n- Algorithm: The optimization procedure used to discover patterns (e.g. SVM, Decision Tree).\n- Model: The trained mathematical function with learned weights ready for inference.\n- Training & Evaluation: Optimizing weights via loss minimization and validating on test data."
            ],
            [
              "8. Explain the future scope of Machine Learning.",
              "Machine Learning is poised to revolutionize industrial and societal operations:\n- Autonomous Mobility: Safe navigation for level-5 self-driving cars, delivery drones, and logistics robots.\n- Precision Medicine: Early biomarker detection, personalized cancer therapies, and automated drug discovery.\n- Smart Automation & Energy: AI-driven smart power grids, automated crop monitoring, and climate forecasting.\n- Human-AI Collaboration: Conversational agents, code assistants, and personalized educational systems."
            ]
          ]
        },
        "Q9 - Q12: Linear Algebra Concepts & Eigenpairs": {
          "cards": [
            [
              "9. Define scalar, vector and matrix with examples.",
              "Linear Algebra provides structural hierarchy for representing numerical data in ML:\n- Scalar (0D): A single numeric value representing magnitude. Example: Learning rate α = 0.01.\n- Vector (1D): An ordered 1D sequence of numbers representing an instance. Example: Feature vector v = [24, 70, 175]ᵀ.\n- Matrix (2D): A 2D rectangular grid of rows and columns storing datasets. Example: Design matrix X = [[1, 2], [3, 4]].\n- Practical Role: Entire datasets are ingested and transformed using matrix operations."
            ],
            [
              "10. What is a tensor? Give an example.",
              "A tensor is a generalized multidimensional array containing numerical data of uniform type:\n- Rank-0 Tensor: Scalar (e.g., single loss value).\n- Rank-1 Tensor: Vector (e.g., 1D embedding with 300 dimensions).\n- Rank-2 Tensor: Matrix (e.g., tabular dataset of 1000 rows × 10 features).\n- Rank-3+ Tensor: Multi-channel data (e.g., RGB image represented as Height × Width × 3 channels)."
            ],
            [
              "11. Write any two properties of matrices.",
              "Matrix addition satisfies foundational algebraic properties under dimension conformity:\n- Commutative Property of Addition: A + B = B + A (order of addition does not alter outcome).\n- Associative Property of Addition: (A + B) + C = A + (B + C) (grouping does not affect result).\n- Key Condition: Both matrices A and B must share identical row and column dimensions (m × n)."
            ],
            [
              "12. What are eigenvalues and eigenvectors?",
              "Eigenvalues and eigenvectors describe fundamental linear transformations of square matrices:\n- Mathematical Equation: Av = λv (where A is n × n matrix, v ≠ 0 is eigenvector, λ is scalar eigenvalue).\n- Eigenvector (v): A non-zero vector whose spatial direction remains invariant under transformation by A.\n- Eigenvalue (λ): The scalar scaling factor that stretches, compresses, or reverses eigenvector v.\n- ML Application: Principal Component Analysis (PCA) uses eigenvectors to identify axes of maximum data variance."
            ]
          ]
        },
        "Q13 - Q15: Matrix Multiplication, Role & Transpose": {
          "cards": [
            [
              "13. What is matrix multiplication?",
              "Matrix multiplication computes the dot product of rows from matrix A with columns of matrix B:\n- Dimensional Requirement: Columns in A must equal rows in B (if A is m × k and B is k × n, product AB is m × n).\n- Non-Commutative: In general, matrix multiplication is not commutative: AB ≠ BA.\n- Concrete Example: [1, 2] × [3, 4]ᵀ = (1 × 3) + (2 × 4) = 3 + 8 = 11.\n- In Neural Networks: Forward pass computation calculates layer activations as Z = WX + b."
            ],
            [
              "14. Explain the role of Linear Algebra in Machine Learning.",
              "Linear Algebra is the core mathematical engine driving machine learning algorithms:\n- Compact Data Representation: Tabular datasets are modeled as design matrices (X) and target vectors (y).\n- High-Speed Vectorized Computing: GPU hardware accelerates parallel matrix multiplications in deep networks.\n- Dimensionality Reduction: PCA extracts dominant feature directions via eigendecomposition and SVD.\n- Parameter Optimization: Ordinary Least Squares (OLS) calculates optimal weights using (XᵀX)⁻¹Xᵀy."
            ],
            [
              "15. What is the transpose of a matrix? Give an example.",
              "The transpose of matrix A (denoted Aᵀ) exchanges row indices with column indices:\n- Rule: Element at row i and column j moves to row j and column i: (Aᵀ)_ji = A_ij.\n- Dimension Change: An m × n matrix becomes an n × m transposed matrix.\n- Example: If A = [[1, 2], [3, 4]], then Aᵀ = [[1, 3], [2, 4]].\n- ML Usage: Transpose aligns vector dimensions to compute inner products and dot products (xᵀw)."
            ]
          ]
        }
      }
    },
    "Part C: 5 Mark Questions": {
      "topics": {
        "Q1 - Q4: ML Evolution, Elements, Apps & Learning Types": {
          "cards": [
            [
              "1. Explain the definition, history and evolution of Machine Learning.",
              "Machine Learning enables computational systems to infer patterns from data and generalize to unseen instances.\n- Definition: A field of AI where algorithms improve performance on task T through experience E measured by P.\n- 1950s (Foundations): Alan Turing proposed machine intelligence; Arthur Samuel created the checkers program (1952) and coined ML (1959).\n- 1980s (Connectionism): Resurgence of artificial neural networks via backpropagation optimization.\n- 1990s (Statistical ML): Rigorous mathematical algorithms dominated (SVM, Decision Trees, Random Forests).\n- 2000s-Present (Deep Learning): Massive datasets, cloud computing, and GPU parallelism spurred modern Deep Learning and LLMs."
            ],
            [
              "2. Discuss the basic concepts and key elements of Machine Learning.",
              "Machine Learning relies on systematic concepts to transform empirical data into predictive models:\n- Core Concepts: Data (historical observations), Features (input attributes X), Labels (ground truth Y), and Model (hypothesis function).\n- 1. Data Collection & Preprocessing: Ingestion, cleaning missing values, handling outliers, and scaling.\n- 2. Feature Engineering: Selecting and extracting high-impact predictive variables.\n- 3. Training & Optimization: Algorithms minimize empirical loss by updating internal model parameters.\n- 4. Evaluation & Inference: Assessing generalization error on unseen test splits using accuracy, precision, and RMSE."
            ],
            [
              "3. Explain the different applications of Machine Learning in real-world scenarios.",
              "Machine Learning powers intelligent automation across critical economic and scientific sectors:\n- Healthcare: Automated diagnostic image classification (MRI/CT scans), patient deterioration forecasting, and drug discovery.\n- Finance & Banking: Credit scoring, high-frequency algorithmic trading, anti-money laundering, and fraud detection.\n- Retail & E-Commerce: Personalized collaborative-filtering recommendation engines and dynamic inventory pricing.\n- Autonomous Transportation: Computer vision and reinforcement learning driving self-driving vehicles and route optimization.\n- Digital Assistants & NLP: Speech recognition, language translation, and conversational generative AI."
            ],
            [
              "4. Differentiate between supervised and unsupervised learning with suitable examples.",
              "Supervised and Unsupervised Learning represent the two foundational pillars of machine learning:\n- Input Data: Supervised requires paired inputs with ground-truth target labels (x_i, y_i); Unsupervised operates strictly on unlabelled inputs (x_i).\n- Core Objective: Supervised learns mapping function y = f(x) for prediction; Unsupervised models underlying data structure, clusters, or probability distributions.\n- Common Tasks: Supervised handles Classification and Regression; Unsupervised handles Clustering, Dimensionality Reduction, and Association Rules.\n- Representative Algorithms: Supervised uses Linear/Logistic Regression, Decision Trees, SVM; Unsupervised uses K-Means, DBSCAN, and PCA.\n- Concrete Examples: Predicting house prices based on square footage (Supervised) vs clustering customer personas by purchasing habits (Unsupervised)."
            ]
          ]
        },
        "Q5 - Q8: Future Scope, Linear Algebra & Matrices": {
          "cards": [
            [
              "5. Explain the future scope and importance of Machine Learning.",
              "Machine Learning has evolved from academic theory into a foundational driver of technological progress:\n- Operational Importance: Eliminates manual heuristic rule writing, scales decision-making, and uncovers non-linear insights.\n- Autonomous Robotics: Next-generation robots performing hazardous manufacturing, warehouse logistics, and surgical interventions.\n- Precision Healthcare: Genomic sequencing analysis, personalized medicine plans, and proactive epidemic modeling.\n- Climate & Sustainable Energy: Optimizing smart electric grids, wind-turbine efficiency, and hyper-local crop-yield forecasts.\n- Education: Adaptive learning platforms tailoring lesson pacing and curriculum difficulty to individual student capabilities."
            ],
            [
              "6. Explain the different data structures used in Linear Algebra: Scalar, Vector, Matrix and Tensor.",
              "Linear Algebra structures represent and manipulate numerical data across dimensional hierarchies:\n- Scalar (0D Tensor): Single numerical value; represents parameters such as loss value or learning rate α (e.g. s = 5).\n- Vector (1D Tensor): 1D array of ordered numbers; represents a single instance's feature attributes (e.g. v = [x₁, x₂, x₃]ᵀ).\n- Matrix (2D Tensor): 2D array of m rows and n columns; standard tabular design matrix where rows represent samples and columns represent features.\n- Tensor (Rank-3+): Higher-order multidimensional array; represents spatial and temporal data such as RGB images (H × W × C) or video batches (B × T × H × W × C).\n- Significance: Unified tensor abstractions allow deep learning frameworks (TensorFlow, PyTorch) to optimize computations."
            ],
            [
              "7. Explain tensor operations with suitable examples.",
              "Tensor operations provide the algebraic foundation for calculating neural layer outputs:\n- Element-wise Addition & Subtraction: Evaluates corresponding elements across identical shapes: A + B and A − B.\n- Element-wise Multiplication (Hadamard): Denoted as A ⊙ B; for [[1, 2], [3, 4]] ⊙ [[5, 6], [7, 8]] = [[5, 12], [21, 32]].\n- Matrix/Dot Multiplication: Dot product of rows and columns: [[1, 2], [3, 4]] × [[5, 6], [7, 8]] = [[19, 22], [43, 50]].\n- Transpose & Reshaping: Swapping axes (Aᵀ) and rearranging dimensions without mutating underlying memory (e.g. flat vector of 4 elements to 2 × 2 matrix).\n- Neural Applications: Used in convolutional filters, attention mechanisms, and backpropagation gradient flow."
            ],
            [
              "8. Describe the important properties of matrices.",
              "Matrix algebra exhibits distinct properties that govern data transformations and algorithms:\n- Commutative Addition: A + B = B + A (valid when dimensions match).\n- Associative Addition & Multiplication: (A + B) + C = A + (B + C) and (AB)C = A(BC).\n- Distributive Law: A(B + C) = AB + AC.\n- Identity Element: Multiplying by identity matrix leaves matrix unchanged: AI = IA = A.\n- Transpose Properties: (A + B)ᵀ = Aᵀ + Bᵀ, (Aᵀ)ᵀ = A, and (AB)ᵀ = BᵀAᵀ (reverses order).\n- Non-Commutative Multiplication: In general, AB ≠ BA (order of transformation matters fundamentally)."
            ]
          ]
        },
        "Q9 - Q10: Eigenvalues, Eigenvectors & Matrix Operations": {
          "cards": [
            [
              "9. Explain eigenvalues and eigenvectors with a suitable example.",
              "Eigenvalues and eigenvectors identify invariant directions and scale factors during linear transformations:\n- Characteristic Equation: Av = λv or (A − λI)v = 0. Non-trivial solutions exist if determinant |A − λI| = 0.\n- Concrete Example: Let diagonal matrix A = [[2, 0], [0, 3]].\n- Finding Eigenvalues: |[[2 − λ, 0], [0, 3 − λ]]| = (2 − λ)(3 − λ) = 0 ⇒ λ₁ = 2, λ₂ = 3.\n- Finding Eigenvectors: For λ₁ = 2: (A − 2I)v = [[0, 0], [0, 1]][x, y]ᵀ = [0, 0]ᵀ ⇒ y = 0, choosing x = 1 yields v₁ = [1, 0]ᵀ.\n- For λ₂ = 3: (A − 3I)v = [[−1, 0], [0, 0]][x, y]ᵀ = [0, 0]ᵀ ⇒ x = 0, choosing y = 1 yields v₂ = [0, 1]ᵀ.\n- ML Application: Principal Component Analysis (PCA) uses eigenvectors of the covariance matrix as principal axes of variance."
            ],
            [
              "10. Discuss the importance of matrix operations in Machine Learning.",
              "Matrix operations form the core computational framework of machine learning algorithms:\n- Tabular Data Organization: Datasets with N samples and D features are stored compactly as N × D matrices.\n- Linear Regression Closed-Form: Normal Equation solves optimal weights analytically: w = (XᵀX)⁻¹Xᵀy.\n- Neural Network Forward Pass: Layer outputs are computed in one vectorized operation: a = σ(W · x + b).\n- Covariance & Correlation: Covariance matrix C = (1/N) XᵀX captures pairwise feature relationships.\n- Hardware Optimization: Matrix operations map natively onto SIMD vector units, GPUs, and TPUs for extreme parallelism."
            ]
          ]
        }
      }
    },
    "Part D: 8 Mark Questions": {
      "topics": {
        "Q1 - Q4: ML Comprehensive Overview, Key Elements, Paradigms & Math": {
          "cards": [
            [
              "1. Define Machine Learning. Explain its history, evolution, future scope and real-world applications in detail.",
              "Machine Learning is the subfield of AI focused on building systems that learn and adapt from data without following static rule-based instructions.\n- History & Evolution: 1950 (Turing Test) → 1959 (Arthur Samuel coins ML) → 1980s (Backpropagation) → 1990s (SVMs & Random Forests) → 2010s+ (Deep Learning & Generative AI).\n- Paradigm Shift: Traditional software takes Rules + Data → Answers; Machine Learning takes Data + Answers → Rules.\n- Real-World Applications: Healthcare (cancer detection), Finance (fraud alerts, algorithmic trading), Autonomous Vehicles, E-commerce recommendation engines, and Computer Vision.\n- Future Horizons: Fully autonomous robotic agents, personalized precision oncology, generative multi-modal reasoning, and smart climate management."
            ],
            [
              "2. Explain the basic concepts and key elements of Machine Learning. Also discuss its importance in modern technology.",
              "Machine Learning structures complex inductive reasoning through a formal end-to-end pipeline:\n- Foundational Concepts: Data (experience), Features (attributes X), Labels (targets Y), Hypothesis Space (model family), and Objective Function (loss).\n- 1. Data Collection & Preprocessing: Cleans noise, imputes missing values, and normalizes feature distributions.\n- 2. Feature Selection & Extraction: Identifies most discriminative variables to overcome the curse of dimensionality.\n- 3. Training & Validation: Iteratively optimizes weights via gradient descent while tuning hyperparameters via cross-validation.\n- 4. Evaluation & Deployment: Validates generalization on test sets using F1-score, ROC-AUC, or MAE before deploying as API.\n- Technological Importance: Automates cognitive tasks, unlocks actionable value from unstructured data, and enables real-time hyper-personalization."
            ],
            [
              "3. Explain supervised and unsupervised learning in detail. Differentiate between them with suitable examples and applications.",
              "Supervised and Unsupervised Learning represent distinct paradigms governing how models extract knowledge from datasets:\n- Supervised Learning: Learns from pairs (x_i, y_i) to approximate mapping y = f(x). Subdivided into Classification (discrete categories, e.g. Logistic Regression, Random Forest) and Regression (continuous values, e.g. Linear Regression, Gradient Boosting).\n- Unsupervised Learning: Operates on unlabelled inputs (x_i) to detect intrinsic clustering, density, or low-dimensional manifolds. Subdivided into Clustering (K-Means, Hierarchical), Association Rules (Apriori), and Dimensionality Reduction (PCA, t-SNE).\n- Key Differences: Supervised has explicit teacher signal/ground truth; Unsupervised discovers latent patterns autonomously without target metrics.\n- Supervised Applications: Credit risk scoring, spam filtering, tumor classification, and stock price forecasting.\n- Unsupervised Applications: Customer market segmentation, anomaly/fraud detection in network traffic, and genomic sequence clustering."
            ],
            [
              "4. Explain the mathematical foundations of Machine Learning with reference to Linear Algebra, Scalars, Vectors, Matrices and Tensors.",
              "Linear Algebra provides the language and mathematical scaffolding for formulating and solving machine learning problems:\n- Scalars (0D): Measure magnitude; define hyper-parameters like learning rate (α), regularization constants (λ), and loss values.\n- Vectors (1D): Represent individual feature records; vector dot products compute similarity metrics (cosine similarity) and linear combinations (wᵀx).\n- Matrices (2D): Form design matrices (X) where rows are instances and columns are features; matrix transformations rotate, scale, and project feature spaces.\n- Tensors (Rank-3+): Multidimensional containers essential for deep learning (e.g., image batches represented as Batch × Channels × Height × Width).\n- Core Mathematical Operations: Matrix inversion (XᵀX)⁻¹, eigendecomposition (A = VΛV⁻¹), Singular Value Decomposition (SVD), and vector norms (L1/L2 regularization)."
            ]
          ]
        },
        "Q5 - Q8: Tensors, Matrix Properties, Eigenvalues & Matrix Computations": {
          "cards": [
            [
              "5. What are tensors? Explain different tensor operations with suitable examples.",
              "A tensor is a geometric object that maps geometric vectors, scalars, and other tensors to numerical arrays across arbitrary dimensions:\n- Structural Hierarchy: Rank-0 (Scalar), Rank-1 (Vector), Rank-2 (Matrix), Rank-3 (Volume/Color Image), Rank-4 (Batch of Video Frames).\n- Element-Wise Arithmetic: Addition, subtraction, and Hadamard multiplication (A ⊙ B) performed on identical tensor shapes.\n- Tensor Contraction & Matrix Multiplication: Summing over specified index pairs; for matrices C_ij = Σ_k A_ik B_kj.\n- Transposition & Permutation: Rearranging tensor coordinate axes (e.g. PyTorch channel-first NCHW to TensorFlow channel-last NHWC).\n- Broadcasting & Reshaping: Automatically expanding lower-rank tensors across compatible dimensions during operations without memory replication.\n- Deep Learning Role: Forms the fundamental computational primitive in PyTorch, TensorFlow, and TPU hardware."
            ],
            [
              "6. Explain the different properties of matrices and discuss their importance in Machine Learning.",
              "Matrix algebra provides the formal algebraic rules enabling scalable data representation and manipulation:\n- Algebraic Properties: Addition is commutative (A + B = B + A) and associative ((A + B) + C = A + (B + C)); Multiplication is associative ((AB)C = A(BC)) and distributive (A(B + C) = AB + AC).\n- Non-Commutative Multiplication: In general, AB ≠ BA; transformations applied in different sequences yield different spatial mappings.\n- Transpose Identities: (A + B)ᵀ = Aᵀ + Bᵀ, (AB)ᵀ = BᵀAᵀ, and (Aᵀ)ᵀ = A.\n- Invertibility: A square matrix has an inverse A⁻¹ such that AA⁻¹ = I if and only if determinant det(A) ≠ 0.\n- Importance in ML: Enables closed-form linear regression solutions, vectorized neural network propagation, covariance matrix analysis, and spectral clustering."
            ],
            [
              "7. Define eigenvalues and eigenvectors. Explain how to calculate eigenvalues and eigenvectors of a matrix with an example.",
              "Eigenvalues and eigenvectors describe axes of invariant direction and their corresponding scaling factors under linear transformation:\n- Definition: For an n × n matrix A, a non-zero vector v is an eigenvector if Av = λv for scalar eigenvalue λ.\n- Step 1 (Characteristic Equation): Solve |A − λI| = 0 to obtain the characteristic polynomial and roots (eigenvalues).\n- Step 2 (Eigenvectors): For each λ, substitute into (A − λI)v = 0 and solve the homogeneous system for non-trivial vector v.\n- Worked Example: Let A = [[2, 0], [0, 3]]. Characteristic equation: |[[2 − λ, 0], [0, 3 − λ]]| = (2 − λ)(3 − λ) = 0 ⇒ λ₁ = 2, λ₂ = 3.\n- For λ₁ = 2: [[0, 0], [0, 1]][x, y]ᵀ = [0, 0]ᵀ ⇒ y = 0, choosing x = 1 gives v₁ = [1, 0]ᵀ.\n- For λ₂ = 3: [[−1, 0], [0, 0]][x, y]ᵀ = [0, 0]ᵀ ⇒ x = 0, choosing y = 1 gives v₂ = [0, 1]ᵀ.\n- ML Significance: Core mechanism of Principal Component Analysis (PCA) to project data along directions of maximal variance."
            ],
            [
              "8. Explain different matrix operations used in Machine Learning, such as matrix addition, subtraction, multiplication, transpose and inverse.",
              "Matrix operations provide the core computational building blocks of machine learning algorithms:\n- Addition & Subtraction: C = A ± B where C_ij = A_ij ± B_ij; used for updating neural layer bias vectors and computing residual errors.\n- Matrix Multiplication: Product C = AB where C_ij = Σ_k A_ik B_kj; powers dense layer forward passes, embedding projections, and convolutional filters.\n- Matrix Transpose: Aᵀ flips axes (row i ↔ col j); aligns vector shapes for inner products and calculates gram matrices (XᵀX).\n- Matrix Inverse: A⁻¹ satisfies AA⁻¹ = I; for 2 × 2 matrix [[a, b], [c, d]], A⁻¹ = (1/(ad − bc)) [[d, −b], [−c, a]] when det(A) ≠ 0.\n- Analytical Solutions: Closed-form parameter estimation in Ordinary Least Squares: w = (XᵀX)⁻¹Xᵀy.\n- Hardware Acceleration: Highly optimized BLAS/cuBLAS libraries execute these operations across massively parallel GPU CUDA cores."
            ]
          ]
        }
      }
    },
    "Part E: Exam Strategy & Priority Topics": {
      "topics": {
        "Exam Revision & High-Yield Strategy": {
          "cards": [
            [
              "1. What are the highest priority topics for 5-mark and 8-mark questions?",
              "The complete question bank highlights key high-yield topics recurring across 5 and 8 marks:\n- Definition, History & Evolution of Machine Learning.\n- Supervised vs. Unsupervised Learning (Comparison, Algorithms & Examples).\n- Linear Algebra Hierarchy: Scalars, Vectors, Matrices, and Tensors.\n- Eigenvalues and Eigenvectors (Definition, Properties & Step-by-Step Calculation).\n- Matrix Operations & Properties (Addition, Multiplication, Transpose, Inverse & Invertibility)."
            ],
            [
              "2. How should you structure your answers for 1, 2, 5, and 8-mark questions?",
              "Maximize scoring by adopting exam-calibrated answer structures:\n- 1 Mark: Precise 1-sentence technical definition plus a crisp real-world example.\n- 2 Marks: Clear definition followed by 2 to 3 distinct bullet points and an application.\n- 5 Marks: Introduction, 5-7 numbered explanatory points, mathematical formula or diagram, and conclusion.\n- 8 Marks: Comprehensive structure: Introduction, formal definitions, detailed subheadings, comparison table or step-by-step math derivation, and conclusion."
            ],
            [
              "3. What mathematical derivations and calculation steps must be practiced?",
              "Examiners evaluate systematic step-by-step mathematical working:\n- Characteristic Equation: Setting up |A − λI| = 0 and writing the characteristic polynomial.\n- Eigenvalue Solutions: Finding roots λ₁ and λ₂.\n- Eigenvector Substitution: Setting up (A − λI)v = 0 for each eigenvalue and solving the linear equations.\n- Matrix Inversion: Computing determinant (ad − bc) and applying the adjoint matrix formula."
            ],
            [
              "4. What conceptual distinctions are essential to master across Unit 1?",
              "Ensure conceptual clarity on foundational dichotomies:\n- Supervised vs Unsupervised: Labelled data mapping y = f(x) vs unlabelled structure discovery.\n- AI vs ML: Broad field of intelligent agents vs specific data-driven pattern learning.\n- Matrix vs Tensor: 2D tabular array vs generalized N-dimensional container (e.g. RGB image as 3D tensor).\n- Feature vs Label: Independent input variable (X) vs dependent prediction target (Y)."
            ]
          ]
        }
      }
    }
  }
};

