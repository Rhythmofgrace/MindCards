window.studyData = window.studyData || {};
window.studyData.hinglish = window.studyData.hinglish || {};
window.studyData.hinglish.questions = window.studyData.hinglish.questions || {};
window.studyData.hinglish.questions["Machine Learning"] = {
  "units": {
    "Slot 1: ML Foundations & History": {
      "topics": {
        "Foundations, Origins & Evolution": {
          "cards": [
            [
              "1. Machine Learning kya hai aur iski importance kya hai?",
              "Machine Learning (ML) Artificial Intelligence (AI) ki ek aisi branch hai jo computers ko data se sikhne aur bina explicitly program kiye apni performance improve karne ki capability deti hai.\nImportance:\nAutomation: Repetitive aur complex cognitive tasks ko automate karta hai.\nPrediction Accuracy: Naye data ke sath continuously parameters update karke accuracy badhata hai.\nDecision-Making: Badi datasets me patterns identify karke data-driven decisions leta hai.\nScalability: Human capacity se zyada massive data volumes ko instantly process karta hai.\nExample: Gmail spam emails ko automatically filter karta hai; shopping sites browsing history ke base par product recommend karti hain."
            ],
            [
              "2. Machine Learning ka father kise kaha jata hai aur iska origin kaise hua?",
              "Arthur Samuel ko Machine Learning ka father mana jata hai.\nOrigins & Milestones:\n1950: Alan Turing ne machine intelligence verify karne ke liye Turing Test propose kiya.\n1952: Arthur Samuel ne self-learning checkers program develop kiya jo khud se khel kar improve karta tha.\n1959: Arthur Samuel ne official taur par 'Machine Learning' term introduce aur coin kiya."
            ],
            [
              "3. Artificial Intelligence (AI) aur Machine Learning (ML) me kya difference hai?",
              "Artificial Intelligence (AI):\nComputer science ki broad field jo machines ko human intelligence, reasoning aur logic simulate karne ke kabil banati hai.\nIsme rule-based systems, heuristics aur learning techniques sabhi aate hain.\nExample: Rule-based medical diagnosis system ya chess solver engine.\nMachine Learning (ML):\nAI ka ek specific subset jo algorithms ko historical data se patterns sikhne par focus karta hai.\nYeh pre-written rules ki jagah data aur statistical models par depend karta hai.\nCore Shift: Traditional coding me Rules + Data → Answers hota hai, jabki ML me Data + Answers → Rules banti hain.\nExample: Email inbox data se train hua spam classifier."
            ],
            [
              "4. Machine Learning ki historical evolution explain karein.",
              "1950s (Early Development): Turing Test (1950) aur Arthur Samuel ka checkers program (1952) aur ML term (1959).\n1980s (Connectionism): Backpropagation algorithm ne multilayer artificial neural networks ko revive kiya.\n1990s (Statistical Learning): SVMs, Decision Trees aur Random Forests dominant ban gaye.\n2000s (Big Data Era): Internet expansion aur computing power ne large-scale practical ML possible banaya.\n2010s–Present (Deep Learning & GenAI): GPUs aur Transformers ne computer vision, speech aur Large Language Models (LLMs) me breakthroughs create kiye."
            ]
          ]
        }
      }
    },
    "Slot 2: Core Elements & Lifecycle Pipeline": {
      "topics": {
        "Basic Concepts & Machine Learning Pipeline": {
          "cards": [
            [
              "1. Machine Learning ke foundational concepts (Data, Features, Labels, Model) kya hain?",
              "Data: Model ko train aur test karne ke liye use hone wali historical information aur factual observations.\nFeatures: Data ke measurable input variables (X) jo model ko input ke roop me diye jate hain (jaise age, study hours, attendance).\nLabels: Supervised learning me woh correct target ground-truth output (Y) jise model predict karna sikhta hai (jaise Spam/Not Spam, Pass/Fail).\nModel: Algorithm dwara data se patterns sikhne ke baad bani trained mathematical representation."
            ],
            [
              "2. Machine Learning lifecycle / pipeline ke key stages kya hain?",
              "1. Data Collection: Databases, APIs ya sensors se relevant historical data gather karna.\n2. Data Preprocessing: Missing values handle karna, noise clean karna aur features scale karna.\n3. Feature Selection & Engineering: Sabse predictive variables select karna taaki dimensionality optimize ho sake.\n4. Model Selection & Training: Suitable algorithm select karke training data par internal weights learn karwana.\n5. Model Evaluation: Unseen test data par performance measure karna (Accuracy, Precision, Recall, RMSE).\n6. Deployment & Prediction: Model ko production server par deploy karke real-time predictions generate karna."
            ],
            [
              "3. Machine Learning me Algorithm kya hota hai aur training kaise work karti hai?",
              "Algorithm: Step-by-step mathematical optimization procedure jo data me patterns discover karke parameters adjust karta hai.\nTraining Process: Model training samples par predictions karta hai, actual labels ke sath error (loss) calculate karta hai, aur optimization techniques (e.g. gradient descent) se weights update karta hai.\nTesting / Validation: Trained model ko unseen data par evaluate kiya jata hai taaki verify ho sake ki model properly generalize kar raha hai aur overfit nahi hua."
            ],
            [
              "4. Modern technology me Machine Learning ki industrial importance kya hai?",
              "Automation: Manual rule-writing ko eliminate karke complex visual aur language tasks automate karta hai.\nPattern Recognition: High-dimensional data me subtle aur non-linear relationships dhundta hai jo insaan easily nahi dekh sakte.\nSpeed & Scalability: Millions of data transactions ko fraction of a second me process karke predictions deta hai.\nPersonalization: Education, streaming aur e-commerce me user habits ke according customized experience provide karta hai."
            ]
          ]
        }
      }
    },
    "Slot 3: Supervised vs Unsupervised Learning": {
      "topics": {
        "Learning Paradigms, Algorithms & Applications": {
          "cards": [
            [
              "1. Supervised Learning kya hai? Iske types, algorithms aur applications explain karein.",
              "Supervised Learning ek aisi learning approach hai jisme model labelled data par train hota hai jahan input features (X) ke sath unka correct target label (Y) provided hota hai.\nTypes:\nClassification: Discrete categories predict karta hai (e.g. Spam/Not Spam, Pass/Fail, Healthy/Diseased). Algorithms: Logistic Regression, Decision Tree, Naïve Bayes, SVM, KNN.\nRegression: Continuous numerical values predict karta hai (e.g. House price, temperature, salary). Algorithms: Linear Regression, Multiple Linear Regression, Polynomial Regression.\nApplications: Email spam filtering, medical disease prediction, credit-risk scoring, aur student performance prediction."
            ],
            [
              "2. Unsupervised Learning kya hai? Iske types, algorithms aur applications explain karein.",
              "Unsupervised Learning me model unlabelled data (X) par train hota hai jahan koi target label (Y) ya external feedback nahi hota.\nTypes:\nClustering: Similar data points ko similarity ke base par groups me divide karta hai. Algorithms: K-Means, Hierarchical Clustering, DBSCAN.\nDimensionality Reduction: Maximum variance preserve karte hue high-dimensional features ko compress karta hai. Algorithms: PCA, t-SNE.\nAssociation Rule Learning: Items ke beech hidden co-occurrence relationships discover karta hai (e.g. Apriori).\nApplications: Customer market segmentation, fraud anomaly detection, document grouping, aur genomic sequence analysis."
            ],
            [
              "3. Supervised vs Unsupervised Learning ka comprehensive comparison.",
              "Training Data: Labelled pairs (X, Y) with ground truth vs Unlabelled data (X only).\nSupervision: External error feedback signal hota hai vs Autonomous pattern discovery bina feedback ke.\nPrimary Goal: Mapping function predict karna (Y = f(X)) vs Data ke intrinsic structure aur clusters discover karna.\nCore Tasks: Classification aur Regression vs Clustering, Association Rules aur Dimensionality Reduction.\nAlgorithms: Linear/Logistic Regression, Decision Trees, SVM vs K-Means, Hierarchical Clustering, PCA."
            ]
          ]
        }
      }
    },
    "Slot 4: Linear Algebra & Dimensional Data Structures": {
      "topics": {
        "Linear Algebra Hierarchy & Data Representation": {
          "cards": [
            [
              "1. Linear Algebra kya hai aur Machine Learning me iska role kya hai?",
              "Linear Algebra mathematics ki branch hai jo vectors, matrices, linear transformations aur spaces ko deal karti hai.\nRole in Machine Learning:\nData Representation: N samples aur D features ka tabular dataset N × D design matrix me compactly store hota hai.\nVectorized Computation: Loops hatakar parallel GPU hardware par matrix operations fast execute karta hai.\nDimensionality Reduction: PCA aur SVD jaise techniques high-dimensional data ko principal axes par project karte hain.\nOptimization: Linear regression ka analytical solution (Normal Equation) pure linear algebra par depend karta hai."
            ],
            [
              "2. Dimensional hierarchy explain karein: Scalar, Vector, Matrix aur Tensor.",
              "Scalar (Rank-0 Tensor): Single numerical value jo sirf magnitude represent karti hai (e.g. s = 5, learning rate α = 0.01).\nVector (Rank-1 Tensor): 1-dimensional array of numbers jo kisi single sample ke features represent karta hai (e.g. V = [2, 4, 6]ᵀ).\nMatrix (Rank-2 Tensor): Numbers ka 2-dimensional rows aur columns table jo entire dataset represent karta hai (e.g. A = [[1, 2], [3, 4]]).\nTensor (Rank-3+): Multidimensional data array jo 2D se aage extend hota hai. Scalars 0D, vectors 1D, matrices 2D tensors hain; color images 3D tensors (H × W × Channels) hain aur video batches 5D tensors hote hain."
            ],
            [
              "3. Square Matrix kya hoti hai aur ML me iski importance kya hai?",
              "Square Matrix: Ek aisi matrix jisme rows aur columns ki count exact barabar (m = n) hoti hai.\nExample: A = [[1, 2], [3, 4]] ek 2 × 2 square matrix hai.\nImportance in ML:\nDeterminants (|A|) aur matrix inverse (A⁻¹) calculate karne ke liye zaroori hoti hai.\nEigenvalues aur eigenvectors (Av = λv) calculate karne ke liye square matrix must hai.\nData covariance matrices jo PCA me use hoti hain hamesha D × D symmetric square matrices hoti hain."
            ]
          ]
        }
      }
    },
    "Slot 5: Tensor & Matrix Operations": {
      "topics": {
        "Mathematical Computations & Worked Examples": {
          "cards": [
            [
              "1. Tensor Operations examples ke sath explain karein (Addition, Subtraction, Hadamard, Reshaping).",
              "Let A = [[1, 2], [3, 4]] aur B = [[5, 6], [7, 8]].\nAddition: A + B = [[1+5, 2+6], [3+7, 4+8]] = [[6, 8], [10, 12]] (shapes match hone chahiye).\nSubtraction: A − B = [[1−5, 2−6], [3−7, 4−8]] = [[−4, −4], [−4, −4]].\nElement-wise (Hadamard) Multiplication: A ⊙ B = [[1×5, 2×6], [3×7, 4×8]] = [[5, 12], [21, 32]].\nTranspose: Aᵀ = [[1, 3], [2, 4]] (rows aur columns interchange ho jate hain).\nReshaping: Memory data ko preserve karte hue tensor structure change karna (e.g. [1, 2, 3, 4] ko 2 × 2 matrix me reshape karna).\nDeep Learning Role: Convolution filters, attention weights aur backpropagation gradient calculations me core primitive hai."
            ],
            [
              "2. Matrix Multiplication dimensional rules aur examples ke sath explain karein.",
              "Dimensional Rule: Pehli matrix ke columns doosri matrix ke rows ke barabar hone chahiye (agar A is m × k aur B is k × n, toh product AB is m × n).\nCalculation: A ke har row ko B ke har column se multiply karke sum calculate kiya jata hai.\nWorked Example: Let A = [[1, 2], [3, 4]] aur B = [[5, 6], [7, 8]].\nAB = [[(1×5 + 2×7), (1×6 + 2×8)], [(3×5 + 4×7), (3×6 + 4×8)]] = [[19, 22], [43, 50]].\nNeural Network Application: Dense layers ka forward pass activation formula Z = WX + b matrix multiplication se evaluate hota hai."
            ],
            [
              "3. Matrix Inverse aur iska step-by-step calculation example ke sath explain karein.",
              "Definition: Square matrix A ke liye inverse A⁻¹ satisfy karta hai: AA⁻¹ = A⁻¹A = I (identity matrix).\nInvertibility Condition: Matrix A invertible hoti hai agar determinant det(A) ≠ 0 ho.\n2 × 2 Formula: A⁻¹ = (1 / (ad − bc)) [[d, −b], [−c, a]].\nWorked Example: Let A = [[1, 2], [3, 4]].\nDeterminant: det(A) = (1×4) − (2×3) = 4 − 6 = −2 ≠ 0.\nA⁻¹ = (1 / −2) [[4, −2], [−3, 1]] = [[−2, 1], [1.5, −0.5]].\nML Application: Linear Regression ke closed-form Normal Equation w = (XᵀX)⁻¹Xᵀy me analytical solution provide karta hai."
            ]
          ]
        }
      }
    },
    "Slot 6: Matrix Properties & Algebraic Rules": {
      "topics": {
        "Matrix Properties & Importance in ML": {
          "cards": [
            [
              "1. Matrices ki fundamental algebraic properties kya hain?",
              "Commutative Addition: A + B = B + A (compatible dimensions me valid).\nAssociative Addition: (A + B) + C = A + (B + C).\nAssociative Multiplication: (AB)C = A(BC).\nDistributive Property: A(B + C) = AB + AC.\nIdentity Property: AI = IA = A (jahan I identity matrix hai jisme diagonal par 1 aur baaki sab 0 hote hain).\nZero Matrix Property: A + 0 = A."
            ],
            [
              "2. Matrix Transpose identities aur Non-Commutative Multiplication explain karein.",
              "Transpose Identities:\n(A + B)ᵀ = Aᵀ + Bᵀ (transpose addition par distribute hota hai).\n(Aᵀ)ᵀ = A (do baar transpose karne par original matrix wapas aati hai).\n(AB)ᵀ = BᵀAᵀ (product ka transpose order reverse kar deta hai).\nNon-Commutative Multiplication: General case me AB ≠ BA hota hai. Multiplication ka order badalne par alag transformation banta hai."
            ],
            [
              "3. Machine Learning me matrix properties aur operations kyun important hain?",
              "Data Representation: Thousands of samples aur features ko matrix structure me systematically represent kiya jata hai.\nModel Training: Linear regression, logistic regression aur neural networks parameter updates matrix operations me express karte hain.\nNeural Networks: Vectorized matrix multiplication GPUs ke through parallel inference enable karta hai.\nDimensionality Reduction: Covariance matrix analysis aur PCA matrix symmetry aur decomposition properties par based hote hain."
            ]
          ]
        }
      }
    },
    "Slot 7: Eigenvalues, Eigenvectors & PCA": {
      "topics": {
        "Eigenpairs, Calculation & Dimensionality Reduction": {
          "cards": [
            [
              "1. Eigenvalues aur Eigenvectors ko define karein aur inka geometric meaning explain karein.",
              "Eigenvector (v): Ek non-zero vector jiski direction square matrix transformation apply karne par change nahi hoti, woh usi line of action par rehta hai.\nEigenvalue (λ): Woh scalar factor jisse eigenvector stretch, compress ya reverse hota hai.\nFundamental Equation: Av = λv ya (A − λI)v = 0 (jahan A square matrix, v ≠ 0 eigenvector, aur λ scalar eigenvalue hai)."
            ],
            [
              "2. Eigenvalues aur Eigenvectors calculate karne ka step-by-step method example ke sath explain karein.",
              "Worked Example: Let A = [[2, 0], [0, 3]].\nStep 1 (Find Eigenvalues): Characteristic equation |A − λI| = 0 solve karein.\n|[[2 − λ, 0], [0, 3 − λ]]| = (2 − λ)(3 − λ) = 0 ⇒ Eigenvalues λ₁ = 2, λ₂ = 3.\nStep 2 (Eigenvector for λ₁ = 2): Linear system (A − 2I)v = 0 solve karein.\n[[0, 0], [0, 1]][x, y]ᵀ = [0, 0]ᵀ ⇒ y = 0. Choose x = 1 ⇒ v₁ = [1, 0]ᵀ.\nStep 3 (Eigenvector for λ₂ = 3): Linear system (A − 3I)v = 0 solve karein.\n[[−1, 0], [0, 0]][x, y]ᵀ = [0, 0]ᵀ ⇒ x = 0. Choose y = 1 ⇒ v₂ = [0, 1]ᵀ."
            ],
            [
              "3. Machine Learning aur PCA me Eigenvalues aur Eigenvectors ki kya significance hai?",
              "Principal Component Analysis (PCA): Covariance matrix ke eigenvectors data ke maximum variance directions (principal axes) represent karte hain.\nDimensionality Reduction: Eigenvalues batate hain ki har principal direction ke along kitna variance/information capture hua hai.\nFeature Compression: Kam eigenvalue wale directions ko drop karke high-dimensional data ko compress kiya jata hai bina critical information lose kiye."
            ]
          ]
        }
      }
    },
    "Slot 8: Real-World Applications & Future Scope": {
      "topics": {
        "Industry Use Cases & Future Potential": {
          "cards": [
            [
              "1. Real-world industries me Machine Learning ki major applications explain karein.",
              "Healthcare: Disease detection, radiology scans (MRI/CT) se tumor segmentation, patient risk prediction, aur drug discovery.\nBanking & Finance: Real-time credit card fraud detection, algorithmic high-frequency trading, aur loan credit risk analysis.\nTransportation: Autonomous self-driving vehicles, lane detection, traffic prediction, aur route optimization.\nE-Commerce & Retail: Collaborative filtering product recommendations aur dynamic pricing algorithms.\nMedia & NLP: Automated speech recognition, language translation, aur generative AI content tools."
            ],
            [
              "2. Traditional software ke comparison me Machine Learning ke key advantages kya hain?",
              "Automated Pattern Discovery: Massive multi-dimensional data me non-linear complex patterns discover karta hai bina manual rules likhe.\nContinuous Self-Improvement: Naye data ke sath model ke weights automatically optimize hote rehte hain.\nHandles Unstructured Data: Images, audio, video aur natural language text ko effectively process karta hai.\nSpeed & Scalability: Millions of data records ko simultaneously process karke real-time predictions provide karta hai."
            ],
            [
              "3. Machine Learning ka future scope aur transformative potential kya hai?",
              "Autonomous Robotics: Manufacturing, warehouse logistics aur precision robotic surgery me smart robots.\nPrecision Medicine: Har individual patient ke genomic profile ke according personalized cancer therapies.\nClimate & Sustainable Energy: Smart electrical grid management, carbon emission tracking, aur precision agriculture yield prediction.\nAdaptive Education: Student ki capability aur learning speed ke mutabiq dynamic personalized curriculum."
            ]
          ]
        }
      }
    }
  }
};
