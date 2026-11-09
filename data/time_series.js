window.studyData = window.studyData || {};
window.studyData.english = window.studyData.english || {};
window.studyData.english.subjects = window.studyData.english.subjects || {};
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
