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
