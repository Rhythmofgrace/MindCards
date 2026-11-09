window.studyData = window.studyData || {};
window.studyData.hinglish = window.studyData.hinglish || {};
window.studyData.hinglish.questions = window.studyData.hinglish.questions || {};
window.studyData.hinglish.questions["Machine Learning"] = {
  "units": {
    "1 Mark Questions": {
      "topics": {
        "Q1 - Q4": {
          "cards": [
            [
              "Q1. Machine Learning ko define karein.",
              "Machine Learning (ML) Artificial Intelligence (AI) ki ek aisi branch hai jo computers ko data se sikhne aur bina har task ke liye explicitly code kiye apni performance improve karne ki permission deti hai.\nExample: Gmail spam emails ko automatically ML ke through detect kar leta hai."
            ],
            [
              "Q2. Machine Learning ka father kise kaha jata hai?",
              "Arthur Samuel ko Machine Learning ka father mana jata hai. Unhone 1959 me 'Machine Learning' term introduce kiya tha."
            ],
            [
              "Q3. Artificial Intelligence kya hai?",
              "Artificial Intelligence (AI) computer science ki ek branch hai jo machines ko human intelligence jaise tasks (jaise learning, reasoning aur decision-making) perform karne ke kabil banati hai."
            ],
            [
              "Q4. Dataset kya hota hai?",
              "Dataset related data ka ek collection hota hai jiska use Machine Learning model ko train, test aur evaluate karne ke liye kiya jata hai.\nExample: Students ke names, marks, ages aur attendance records ka table."
            ]
          ]
        },
        "Q5 - Q8": {
          "cards": [
            [
              "Q5. Algorithm ko define karein.",
              "Algorithm kisi specific problem ko solve karne ya particular task complete karne ke liye step-by-step instructions ka finite set hota hai."
            ],
            [
              "Q6. Supervised Learning kya hai?",
              "Supervised Learning ML ka ek type hai jisme model labelled data se sikhta hai, jahan input features ke sath unka correct output label bhi provided hota hai."
            ],
            [
              "Q7. Unsupervised Learning kya hai?",
              "Unsupervised Learning ML ka ek type hai jisme model unlabelled data se patterns aur hidden structures discover karta hai, jahan koi predefined target output nahi hota."
            ],
            [
              "Q8. Machine Learning applications ke do examples dein.",
              "Email spam detection.\nFace recognition system."
            ]
          ]
        },
        "Q9 - Q12": {
          "cards": [
            [
              "Q9. Machine Learning me Feature kya hota hai?",
              "Feature data ki ek individual measurable property ya characteristic hoti hai jise ML model me input variable ke roop me pass kiya jata hai.\nExample: Kisi person ki age, height aur weight uske features hain."
            ],
            [
              "Q10. Machine Learning me Label kya hota hai?",
              "Label woh correct output ya target value hoti hai jise supervised learning me model predict karna sikhta hai.\nExample: Email classification me 'Spam' ya 'Not Spam' label hota hai."
            ],
            [
              "Q11. Matrix ko define karein.",
              "Matrix numbers ya elements ka rows aur columns me rectangular arrangement hota hai.\nExample: A = [[1, 2], [3, 4]]."
            ],
            [
              "Q12. Tensor kya hota hai?",
              "Tensor ek multidimensional mathematical data structure hai jo multiple dimensions me numerical data represent kar sakta hai. Scalars (0D), vectors (1D), aur matrices (2D) sabhi tensors ke examples hain."
            ]
          ]
        },
        "Q13 - Q16": {
          "cards": [
            [
              "Q13. Vector kya hota hai?",
              "Vector numbers ka ek ordered collection hota hai jo single row ya single column me arranged hota hai.\nExample: V = [2, 4, 6]ᵀ."
            ],
            [
              "Q14. Eigenvalue ko define karein.",
              "Eigenvalue ek scalar value hoti hai jo batati hai ki matrix transformation ke doran eigenvector kitna stretch ya compress (scale) hua hai."
            ],
            [
              "Q15. Eigenvector ko define karein.",
              "Eigenvector ek non-zero vector hota hai jiski direction matrix transformation apply karne par change nahi hoti, sirf uska magnitude change ho sakta hai."
            ],
            [
              "Q16. Scalar kya hota hai?",
              "Scalar ek single numerical value hoti hai jo kisi quantity ke magnitude ko represent karti hai.\nExample: 5, 10, 20 aur 3.5."
            ]
          ]
        },
        "Q17 - Q20": {
          "cards": [
            [
              "Q17. Linear Algebra kya hai?",
              "Linear Algebra mathematics ki ek aisi branch hai jo vectors, matrices, linear equations aur unke mathematical operations ko deal karti hai."
            ],
            [
              "Q18. Square matrix kya hoti hai?",
              "Square matrix ek aisi matrix hoti hai jisme rows aur columns ki count exact barabar (equal) hoti hai.\nExample: [[1, 2], [3, 4]] jisme 2 rows aur 2 columns hain."
            ],
            [
              "Q19. Matrix ka transpose kya hota hai?",
              "Matrix ka transpose uske rows aur columns ko aapas me interchange karke calculate kiya jata hai. Isko Aᵀ se represent karte hain."
            ],
            [
              "Q20. Machine Learning ke do types ke naam batayein.",
              "Supervised Learning.\nUnsupervised Learning."
            ]
          ]
        }
      }
    },
    "2 Mark Questions": {
      "topics": {
        "Q1 - Q4": {
          "cards": [
            [
              "Q1. Machine Learning ko define karein aur iski importance explain karein.",
              "Machine Learning AI ki ek aisi branch hai jo computers ko historical data se sikhne aur bina har situation ke liye explicitly code kiye predictions ya decisions lene deti hai.\nImportance:\nAutomation: Yeh repetitive tasks ko automate karta hai.\nAccuracy: Prediction accuracy ko improve karta hai.\nDecision-making: Data ke base par better aur faster decisions leta hai.\nTime-saving: Human effort reduce karta hai aur time bachta hai.\nExample: E-commerce sites user preferences ke base par products recommend karti hain."
            ],
            [
              "Q2. Machine Learning ki koi do applications likhein.",
              "Healthcare: ML doctors ko diseases detect karne aur medical reports analyze karne me help karta hai.\nBanking: Yeh fraudulent transactions ko detect karta hai aur unusual financial activities ko flag karta hai.\nOther applications: Self-driving cars, face recognition, weather forecasting, aur recommendation systems."
            ],
            [
              "Q3. Artificial Intelligence aur Machine Learning me difference batayein.",
              "Artificial Intelligence (AI):\nAI computer science ki broad field hai.\nIska main focus machines ko intelligent banana hai.\nYeh rules, logic, aur learning techniques teeno use kar sakta hai.\nExample: Ek rule-based chess expert system.\nMachine Learning (ML):\nML AI ka ek specific subset hai.\nIska main focus machines ko data se sikhne me capable banana hai.\nYeh primary roop se data aur learning algorithms par depend karta hai.\nExample: Email spam filter model."
            ],
            [
              "Q4. Machine Learning ki history briefly explain karein.",
              "Machine Learning ka development 1950s me start hua tha:\n1950: Alan Turing ne machine intelligence test karne ke liye Turing Test propose kiya.\n1952: Arthur Samuel ne checkers game sikhne wala computer program develop kiya.\n1959: Arthur Samuel ne 'Machine Learning' term coin kiya.\n1980s: Neural networks aur learning techniques popular hui.\n2000s onwards: Big Data, GPUs aur advanced algorithms ki wajah se ML bohot tezi se develop hua.\nToday: ML healthcare, banking, education aur daily life me widely use ho raha hai."
            ]
          ]
        },
        "Q5 - Q8": {
          "cards": [
            [
              "Q5. Machine Learning ke do advantages likhein.",
              "Automation: Machine Learning tasks ko automate karta hai aur manual human effort ko drastically reduce karta hai.\nImproved predictions: Yeh large volumes of data ko analyze karke high-accuracy predictions generate karta hai.\nOther advantages: Fast decision-making, continuous model improvement, aur complex multi-variable problems solve karna."
            ],
            [
              "Q6. Supervised aur Unsupervised learning me differentiate karein.",
              "Supervised Learning:\nLabelled data use karta hai.\nTarget outputs training ke time provided hote hain.\nPrediction aur classification tasks ke liye use hota hai.\nExample: Email spam detection.\nUnsupervised Learning:\nUnlabelled data use karta hai.\nTarget outputs provide nahi kiye jate.\nHidden patterns, clusters aur relationships find karne ke liye use hota hai.\nExample: Customer segmentation."
            ],
            [
              "Q7. Machine Learning ke key elements kya hain?",
              "Data: Model ko train karne ke liye historical information.\nFeatures: Data ke input variables jinhe model use karta hai.\nAlgorithm: Data se patterns sikhne ka mathematical method.\nModel: Trained mathematical structure jo new data par predictions karta hai.\nTraining: Data ke through model ke weights ko adjust karne ka process.\nEvaluation: Test data par model ki performance aur accuracy measure karna."
            ],
            [
              "Q8. Machine Learning ka future scope explain karein.",
              "Machine Learning ka future bohot bright hai kyunki har industry ise adopt kar rahi hai:\nSelf-driving autonomous vehicles.\nAdvanced healthcare me early disease detection aur personalized medicine.\nSmart robotics aur industrial automation.\nBanking me instant fraud detection aur risk analytics.\nAdaptive personalized education systems jo student pace par chalte hain."
            ]
          ]
        },
        "Q9 - Q12": {
          "cards": [
            [
              "Q9. Scalar, Vector aur Matrix ko examples ke sath define karein.",
              "Scalar: Single numerical value (0-dimensional). Example: 5.\nVector: 1-dimensional array of numbers jo row ya column me hota hai. Example: V = [2, 4, 6]ᵀ.\nMatrix: Rows aur columns me arranged 2-dimensional numbers ka table. Example: A = [[1, 2], [3, 4]].\nYeh mathematical structures ML me data ko represent aur process karne ke core blocks hain."
            ],
            [
              "Q10. Tensor kya hai? Example dein.",
              "Tensor ek multidimensional mathematical structure hai jo numerical data store aur process karne ke liye use hota hai:\nScalar: 5 (0D tensor).\nVector: [1, 2, 3] (1D tensor).\nMatrix: Numbers ka table (2D tensor).\nHigher-dimensional tensor: Matrices ka collection (jaise color images me 3D tensor: Height × Width × Channels).\nApplication: Deep Learning frameworks me complex images aur video data tensors ke roop me process hote hain."
            ],
            [
              "Q11. Matrices ki koi do properties likhein.",
              "Commutative property of addition: A + B = B + A.\nAssociative property of addition: (A + B) + C = A + (B + C).\nYeh properties tab valid hoti hain jab dono matrices ke dimensions bilkul same (compatible) hon."
            ],
            [
              "Q12. Eigenvalues aur Eigenvectors kya hote hain?",
              "Eigenvalue: Ek scalar (λ) jo matrix transformation ke doran eigenvector ke scaling factor ko represent karta hai.\nEigenvector: Ek non-zero vector (v) jiski direction matrix transformation ke baad bhi unchanged rehti hai.\nEquation: Av = λv (jahan A square matrix, v eigenvector aur λ eigenvalue hai).\nML Application: Principal Component Analysis (PCA) aur dimensionality reduction me critical use hota hai."
            ]
          ]
        },
        "Q13 - Q15": {
          "cards": [
            [
              "Q13. Matrix multiplication kya hota hai?",
              "Matrix multiplication ek aisa operation hai jisme do matrices ko multiply karke ek new matrix banti hai. Isme pehli matrix ke columns doosri matrix ke rows ke barabar hone zaroori hain.\nExample: [1, 2] × [3, 4]ᵀ = (1 × 3) + (2 × 4) = 3 + 8 = 11."
            ],
            [
              "Q14. Machine Learning me Linear Algebra ka role explain karein.",
              "Linear Algebra data ko mathematically represent aur process karne me foundational role play karta hai:\nVectors single data points ya sample features ko represent karte hain.\nMatrices entire datasets ko rows aur columns me compactly store karti hain.\nMatrix multiplication neural networks aur optimization me multiply operations speedup karta hai.\nEigenvalues aur eigenvectors dimensionality reduction (PCA) me use hote hain."
            ],
            [
              "Q15. Matrix ka transpose kya hai? Example dein.",
              "Matrix ka transpose uske rows ko columns me aur columns ko rows me convert karke obtain kiya jata hai. Isko Aᵀ se denote karte hain.\nExample: Agar A = [[1, 2], [3, 4]], toh Aᵀ = [[1, 3], [2, 4]]."
            ]
          ]
        }
      }
    },
    "5 Mark Questions": {
      "topics": {
        "Q1 - Q4": {
          "cards": [
            [
              "Q1. Machine Learning ki definition, history aur evolution explain karein.",
              "Definition: Machine Learning Artificial Intelligence ki ek branch hai jo computers ko data se patterns sikhne aur explicitly program kiye bina predictions karne ki capability deti hai.\nHistory and evolution:\n1950s (Early Development): Alan Turing ne machine intelligence ka concept diya. Arthur Samuel ne checkers program banaya aur 1959 me Machine Learning term diya.\n1980s (Neural Networks): Backpropagation ke aane se neural networks aur learning models research me popular hue.\n1990s (Statistical ML): Decision Trees, SVMs aur statistical learning methods dominate karne lage.\n2000s (Big Data Era): Internet aur high-speed computers ne massive data processing practical banaya.\n2010s onwards (Modern Deep Learning): Deep neural networks ne computer vision, speech aur NLP ko completely revolutionize kar diya."
            ],
            [
              "Q2. Machine Learning ke basic concepts aur key elements discuss karein.",
              "Machine Learning is fundamental principle par work karta hai ki computers historical data se patterns identify karte hain aur future data predict karte hain.\nBasic concepts:\nData: Model train karne ke liye raw factual observations.\nFeatures: Data ke input attributes (e.g. study hours, attendance).\nLabels: Supervised learning me expected ground-truth target outputs.\nAlgorithm: Patterns sikhne ka mathematical optimization method.\nModel: Trained system jo new input par inference deta hai.\nKey elements process:\nData collection aur cleaning.\nFeature selection aur engineering.\nModel selection aur parameter training.\nModel evaluation test data par metrics ke sath."
            ],
            [
              "Q3. Real-world scenarios me Machine Learning ki different applications explain karein.",
              "Healthcare: Disease diagnosis, cancer detection medical scans se, aur drug discovery me.\nBanking and Finance: Real-time credit card fraud detection aur loan credit risk analysis.\nEducation: Students ki performance ke hisab se customized adaptive learning pathways.\nE-commerce: Browsing history ke base par personal product recommendations.\nTransportation: Autonomous self-driving vehicles, route optimization aur traffic congestion forecasting.\nEntertainment: Netflix aur Spotify par movies aur songs ka personalization engine."
            ],
            [
              "Q4. Supervised aur Unsupervised learning me suitable examples ke sath differentiate karein.",
              "Supervised Learning: Model labelled pairs (X, Y) se mapping function Y = f(X) sikhta hai. Target outputs explicitly diye jate hain. Tasks: Classification aur Regression. Examples: Spam detection, house price prediction. Algorithms: Linear Regression, Decision Trees, SVM.\nUnsupervised Learning: Model unlabelled data (X) se intrinsic clusters aur hidden distributions discover karta hai. Target output provide nahi hota. Tasks: Clustering aur Dimensionality Reduction. Examples: Customer segmentation, anomaly detection. Algorithms: K-Means, PCA.\nMain differences:\nData: Labelled vs Unlabelled.\nTarget Output: Known vs Unknown.\nGoal: Prediction vs Hidden Pattern Discovery."
            ]
          ]
        },
        "Q5 - Q8": {
          "cards": [
            [
              "Q5. Machine Learning ka future scope aur importance explain karein.",
              "Importance:\nAutomation manual repetitive workflows ko eliminate karta hai.\nLarge big data se superhuman insights extract karta hai.\nReal-time decision making aur accurate forecasting provide karta hai.\nFuture scope:\nHealthcare: Early stage oncology detection aur personalized genomic medicine.\nRobotics: Hazardous environments me intelligent autonomous robotic agents.\nTransportation: Fully driverless commercial logistics aur AI smart traffic management.\nAgriculture: Satellite imagery se crop-disease prediction aur automated soil analytics.\nEducation: Intelligent personalized AI tutoring har student ke pace ke mutabiq."
            ],
            [
              "Q6. Linear Algebra ke different data structures: Scalar, Vector, Matrix aur Tensor explain karein.",
              "Linear Algebra ML ka core mathematical infrastructure provide karta hai:\nScalar: Single numeric entity (0-dimensional tensor). Example: s = 5. Hyperparameters jaise learning rate (α) represent karta hai.\nVector: 1D ordered array of numbers (1-dimensional tensor). Example: v = [2, 4, 6]ᵀ. Ek individual data instance ke features represent karta hai.\nMatrix: Rows aur columns ka 2D grid (2-dimensional tensor). Example: A = [[1, 2], [3, 4]]. Multiple samples ka design dataset store karta hai.\nTensor: Arbitrary N-dimensional array. Matrix 2D tensor hai, jabki color image 3D tensor (H × W × Channels) hoti hai. Deep Learning models tensor computations par run hote hain."
            ],
            [
              "Q7. Tensor operations ko suitable examples ke sath explain karein.",
              "Tensor operations multidimensional arrays ko manipulate karne ke liye use hote hain:\nLet A = [[1, 2], [3, 4]] aur B = [[5, 6], [7, 8]].\nAddition: A + B = [[6, 8], [10, 12]] (corresponding elements add hote hain, shapes identical honi chahiye).\nSubtraction: A − B = [[−4, −4], [−4, −4]].\nElement-wise (Hadamard) Multiplication: A ⊙ B = [[5, 12], [21, 32]].\nMatrix Multiplication: Dot product AB = [[19, 22], [43, 50]].\nTranspose: Aᵀ = [[1, 3], [2, 4]].\nReshaping: 1D array [1, 2, 3, 4] ko 2 × 2 matrix me shape change karna bina elements ko modify kiye."
            ],
            [
              "Q8. Matrices ki important properties describe karein.",
              "Matrix algebra ke foundational rules:\nCommutative Addition: A + B = B + A.\nAssociative Addition: (A + B) + C = A + (B + C).\nAssociative Multiplication: (AB)C = A(BC).\nDistributive Property: A(B + C) = AB + AC.\nIdentity Property: AI = IA = A (jahan I identity matrix hai).\nTranspose Properties: (A + B)ᵀ = Aᵀ + Bᵀ, (Aᵀ)ᵀ = A, aur (AB)ᵀ = BᵀAᵀ.\nNon-Commutative Multiplication: General case me AB ≠ BA hota hai, order matter karta hai."
            ]
          ]
        },
        "Q9 - Q10": {
          "cards": [
            [
              "Q9. Eigenvalues aur Eigenvectors ko suitable example ke sath explain karein.",
              "Eigenvectors linear transformations me invariant direction rakhte hain, aur unke scaling magnitude ko eigenvalues kehte hain:\nEquation: Av = λv ya (A − λI)v = 0.\nExample: A = [[2, 0], [0, 3]].\nStep 1 (Eigenvalues): |A − λI| = 0 solve karein:\n|(2 − λ)  0; 0  (3 − λ)| = 0 ⇒ (2 − λ)(3 − λ) = 0 ⇒ λ₁ = 2, λ₂ = 3.\nStep 2 (Eigenvectors): For λ = 2, (A − 2I)v = [[0, 0], [0, 1]][x, y]ᵀ = [0, 0]ᵀ ⇒ y = 0, choose x = 1 ⇒ v₁ = [1, 0]ᵀ.\nFor λ = 3, (A − 3I)v = [[−1, 0], [0, 0]][x, y]ᵀ = [0, 0]ᵀ ⇒ x = 0, choose y = 1 ⇒ v₂ = [0, 1]ᵀ.\nApplications: Principal Component Analysis (PCA), dimensionality reduction aur feature projection."
            ],
            [
              "Q10. Machine Learning me matrix operations ki importance discuss karein.",
              "Matrix operations ML algorithms ka core computational backbone form karte hain:\nData representation: Large multi-feature datasets N × D dimensional matrices me store hote hain.\nLinear Regression: Normal equation w = (XᵀX)⁻¹Xᵀy se optimal weights directly analytically calculate hote hain.\nNeural Networks: Har dense layer ka forward pass vectorized matrix multiplication a = σ(Wx + b) se execute hota hai.\nCovariance & PCA: Feature variance aur correlation capture karne ke liye covariance matrices calculate kiye jate hain.\nGPU hardware acceleration: Matrix math GPUs ke tensor cores par massively parallel scale par execute hota hai."
            ]
          ]
        }
      }
    },
    "8 Mark Questions": {
      "topics": {
        "Q1 - Q4": {
          "cards": [
            [
              "Q1. Machine Learning define karein. Iski history, evolution, future scope aur real-world applications detail me explain karein.",
              "Introduction: ML AI ki ek field hai jo systems ko empirical data se sikhne aur adapt karne ki capability deti hai bina manual hard-coded rules ke.\nHistory & Milestones:\n1950: Alan Turing ne Turing Test propose kiya machine intelligence verify karne ke liye.\n1952-1959: Arthur Samuel ne checkers learning model banaya aur ML term coin kiya.\n1980s: Backpropagation discovery se multilayer neural networks popular hue.\n1990s: Support Vector Machines (SVM), Random Forests aur statistical learning develop hue.\n2010s-Present: Big Data, GPUs aur Deep Learning ne vision, NLP aur Generative AI create kiya.\nReal-world applications:\nHealthcare: Cancerous tumor detection aur genomic drug discovery.\nBanking: Real-time fraud detection aur automated algorithmic trading.\nAutonomous Transport: Self-driving cars, lane detection aur obstacle avoidance.\nE-commerce: User purchase history par based personalized recommendation engines.\nFuture scope: Fully autonomous industrial robots, precision AI oncology, aur smart autonomous electrical grids."
            ],
            [
              "Q2. Machine Learning ke basic concepts aur key elements explain karein. Modern technology me iski importance discuss karein.",
              "Core Concepts:\nData: ML system ka raw fuel aur historical experience.\nFeatures: Data ke quantifiable input parameters (X).\nLabels: Supervised setting me correct target ground-truth outcomes (Y).\nModel: Hypothesis function jo inputs ko predicted targets me map karta hai.\nPipeline Key Elements:\n1. Data collection & cleaning: Missing values aur noisy records remove karna.\n2. Feature engineering: Most discriminative signals ko select karna.\n3. Training: Cost loss function minimize karke internal parameters tune karna.\n4. Evaluation & Validation: Unseen validation/test sets par accuracy aur precision measure karna.\nImportance in Technology:\nCognitive tasks automate karta hai jo classical code me impossible the.\nUnstructured data (images, voice, text) se actionable patterns nikalta hai.\nReal-time hyper-personalization har user ke liye dynamically enable karta hai."
            ],
            [
              "Q3. Supervised aur Unsupervised learning detail me explain karein. Differentiate karein suitable examples aur applications ke sath.",
              "Supervised Learning:\nModel input features X aur ground-truth output labels Y ke pairs (X, Y) par train hota hai.\nObjective: Mapping function Y = f(X) learn karna taaki new input par correct label predict ho sake.\nTypes:\nClassification: Discrete categories predict karna (e.g. Spam/Not Spam, Pass/Fail). Algorithms: Logistic Regression, Decision Tree, KNN, SVM.\nRegression: Continuous numerical outputs predict karna (e.g. House price, Salary). Algorithms: Linear Regression, Ridge, Polynomial Regression.\nApplications: Medical diagnostics, stock forecasting, spam filtering.\nUnsupervised Learning:\nModel sirf unlabelled inputs X par train hota hai, koi target output Y nahi hota.\nObjective: Data ke intrinsic structure, clusters, ya density distribution discover karna.\nTypes:\nClustering: Similar data points ko group karna (e.g. K-Means, DBSCAN).\nDimensionality Reduction: Redundant features compress karna (e.g. PCA, t-SNE).\nApplications: Customer segmentation, anomaly detection, genomic sequence grouping.\nKey Differences:\nData: Labelled vs Unlabelled.\nSupervision: External ground truth signal vs Autonomous pattern discovery."
            ],
            [
              "Q4. Machine Learning ke mathematical foundations explain karein: Linear Algebra, Scalars, Vectors, Matrices aur Tensors ke context me.",
              "Linear Algebra Machine Learning ka mathematical foundation provide karta hai:\nScalars (0D): Pure magnitude; learning rate (α), regularization lambda (λ), aur scalar loss values represent karte hain.\nVectors (1D): Single sample instance ka multi-feature array; dot product wᵀx linear models aur cosine similarity calculate karta hai.\nMatrices (2D): N samples × D features ka design dataset; linear transformations feature space ko rotate aur project karti hain.\nTensors (3D+): Generalized multidimensional array containers; color image batches (Batch × Channels × Height × Width) represent karne ke liye standard structure.\nFoundational Operations:\nMatrix Inversion: Linear Regression ke analytical solution w = (XᵀX)⁻¹Xᵀy me use hoti hai.\nEigendecomposition & SVD: High-dimensional data ko low-dimensional principal variance directions par project karta hai (PCA).\nNorms (L1, L2): Overfitting prevent karne ke liye regularization penalty formulate karti hain."
            ]
          ]
        },
        "Q5 - Q8": {
          "cards": [
            [
              "Q5. Tensors kya hain? Different tensor operations suitable examples ke sath explain karein.",
              "Tensor Definition: Multidimensional array data structure jo Deep Learning aur scientific computing me numerical values ko organize karta hai.\nRank Hierarchy:\nRank 0: Scalar (single value e.g. 5).\nRank 1: Vector (1D list e.g. [1, 2, 3]).\nRank 2: Matrix (2D table e.g. [[1, 2], [3, 4]]).\nRank 3+: Higher-order tensors (e.g. RGB color image Height × Width × 3).\nTensor Operations:\nElement-wise operations: A + B, A − B, aur element-wise product A ⊙ B jo identical shape par execute hote hain.\nMatrix Multiplication (Contraction): Rows aur columns ka dot product: [[1, 2], [3, 4]] × [[5, 6], [7, 8]] = [[19, 22], [43, 50]].\nTranspose & Permute: Dimension axes ko swap karna (e.g. PyTorch channels-first se TensorFlow channels-last me convert karna).\nReshaping: Data memory ko maintain karke tensor structure change karna (e.g. flatten operation).\nRole in Deep Learning: Neural network layers, weights, biases aur gradient backpropagation tensors ke roop me execute hote hain."
            ],
            [
              "Q6. Matrices ki different properties explain karein aur Machine Learning me unki importance discuss karein.",
              "Mathematical Properties:\nCommutative Addition: A + B = B + A (same dimensions).\nAssociative Laws: (A + B) + C = A + (B + C) aur (AB)C = A(BC).\nDistributive Law: A(B + C) = AB + AC.\nIdentity Matrix: AI = IA = A (diagonal par 1, baaki sab 0).\nTranspose Rules: (A + B)ᵀ = Aᵀ + Bᵀ, (AB)ᵀ = BᵀAᵀ, aur (Aᵀ)ᵀ = A.\nNon-Commutative: General setting me AB ≠ BA hota hai.\nInvertibility: A square matrix invertible hoti hai agar uska determinant det(A) ≠ 0 ho (AA⁻¹ = I).\nImportance in ML:\nVectorized computation: Loops ke bina high-speed multi-sample operations.\nOptimization closed-form: Ordinary Least Squares (OLS) closed-form matrix calculations se solve hota hai.\nDimensionality Reduction: Covariance matrix ke eigen-decomposition se data variance optimize hoti hai."
            ],
            [
              "Q7. Eigenvalues aur Eigenvectors define karein. Matrix ke eigenvalues aur eigenvectors kaise calculate karte hain, example ke sath explain karein.",
              "Definition: Square matrix A ke liye non-zero vector v eigenvector hota hai agar Av = λv ho, jahan scalar λ eigenvalue hai.\nCalculation Steps:\nStep 1 (Characteristic Equation): Det |A − λI| = 0 solve karke characteristic polynomial ke roots (eigenvalues) find karein.\nStep 2 (Eigenvectors): Har eigenvalue λ ke liye linear system (A − λI)v = 0 solve karke non-zero vector v find karein.\nWorked Example: Let A = [[2, 0], [0, 3]].\n|[[2 − λ, 0], [0, 3 − λ]]| = (2 − λ)(3 − λ) = 0 ⇒ λ₁ = 2, λ₂ = 3.\nFor λ₁ = 2:\n(A − 2I)v = [[0, 0], [0, 1]][x, y]ᵀ = [0, 0]ᵀ ⇒ y = 0. Choose x = 1 ⇒ v₁ = [1, 0]ᵀ.\nFor λ₂ = 3:\n(A − 3I)v = [[−1, 0], [0, 0]][x, y]ᵀ = [0, 0]ᵀ ⇒ x = 0. Choose y = 1 ⇒ v₂ = [0, 1]ᵀ.\nML Significance: Principal Component Analysis (PCA) me data ke maximum variance directions identify karne ka main algorithm hai."
            ],
            [
              "Q8. Machine Learning me use hone wale different matrix operations (Addition, Subtraction, Multiplication, Transpose, Inverse) explain karein.",
              "Matrix Operations in ML:\n1. Addition & Subtraction: Corresponding elements par calculate hoti hai. Let A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]].\nA + B = [[6, 8], [10, 12]]. ML me bias update aur residual error difference nikalne me use hota hai.\n2. Matrix Multiplication: Rows aur columns ka dot product.\nAB = [[(1×5 + 2×7), (1×6 + 2×8)], [(3×5 + 4×7), (3×6 + 4×8)]] = [[19, 22], [43, 50]].\nNeural networks ke forward pass me activations Z = WX + b calculate karta hai.\n3. Transpose: Rows ko columns me interchange karna: Aᵀ = [[1, 3], [2, 4]]. Vector alignment aur gram matrices (XᵀX) banane me use hota hai.\n4. Matrix Inverse: A⁻¹ calculate karta hai jisse AA⁻¹ = I ho. 2 × 2 matrix ke liye formula: A⁻¹ = (1 / (ad − bc)) [[d, −b], [−c, a]].\nFor A = [[1, 2], [3, 4]], determinant = (1×4 − 2×3) = −2 ≠ 0.\nA⁻¹ = (1 / −2) [[4, −2], [−3, 1]] = [[−2, 1], [1.5, −0.5]].\nML use: Normal equation w = (XᵀX)⁻¹Xᵀy me analytical optimization ke liye use hota hai."
            ]
          ]
        }
      }
    }
  }
};
