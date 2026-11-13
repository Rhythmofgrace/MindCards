window.studyData = window.studyData || {};
window.studyData.english = window.studyData.english || {};
window.studyData.english.questions = window.studyData.english.questions || {};
window.studyData.english.questions["Machine Learning"] = {
  "units": {
    "Slot 1: ML Foundations & History": {
      "topics": {
        "Foundations, Origins & Evolution": {
          "cards": [
            [
              "1. What is Machine Learning and why is it important?",
              "Machine Learning (ML) is a branch of Artificial Intelligence (AI) that enables computers to learn from data and improve their performance without being explicitly programmed for every task.\nImportance:\nAutomation: Automates complex and repetitive cognitive tasks.\nPrediction Accuracy: Continuously updates internal parameters to refine forecast accuracy.\nDecision-Making: Identifies patterns in large datasets to support faster, data-driven decisions.\nScalability: Analyzes massive datasets beyond human capability.\nExample: Gmail automatically detects and filters spam emails; e-commerce platforms recommend products based on browsing behavior."
            ],
            [
              "2. Who is known as the father of Machine Learning and how did the field originate?",
              "Arthur Samuel is known as the father of Machine Learning.\nHistorical Origins:\n1950: Alan Turing proposed the Turing Test to evaluate whether machines can exhibit human-like intelligence.\n1952: Arthur Samuel developed a computer program that learned to play checkers by playing against itself.\n1959: Arthur Samuel officially introduced and coined the term 'Machine Learning'."
            ],
            [
              "3. How does Artificial Intelligence (AI) differ from Machine Learning (ML)?",
              "Artificial Intelligence (AI):\nAI is the broad field of computer science dedicated to building machines capable of performing tasks requiring human intelligence.\nIt encompasses rule-based systems, logic, search algorithms, and machine learning.\nExample: A rule-based medical expert system or chess engine.\nMachine Learning (ML):\nML is a specialized subset of AI focused on algorithms that learn patterns from empirical data.\nIt relies primarily on datasets and statistical learning models rather than pre-programmed rules.\nCore Shift: Traditional programming takes Rules + Data → Answers. Machine Learning takes Data + Answers → Rules.\nExample: Email spam filter learned from user inbox data."
            ],
            [
              "4. Explain the historical evolution of Machine Learning across decades.",
              "1950s (Early Development): Alan Turing introduced machine intelligence concepts; Arthur Samuel developed the checkers program (1952) and coined ML (1959).\n1980s (Connectionism): The backpropagation algorithm popularized multilayer neural networks.\n1990s (Statistical Learning): Rigorous mathematical methods flourished, including Decision Trees, Support Vector Machines (SVM), and Random Forests.\n2000s (Big Data Era): Rapid internet expansion and faster computation enabled practical, large-scale ML applications.\n2010s–Present (Deep Learning & GenAI): GPUs, massive datasets, and Transformer architectures drove breakthroughs in computer vision, speech recognition, and generative AI."
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
              "1. What are the foundational concepts of Machine Learning (Data, Features, Labels, Model)?",
              "Data: The raw factual information and historical observations used to train and test a model.\nFeatures: Individual measurable properties or characteristics used as input variables (X) to a model (e.g. age, study hours, attendance).\nLabels: The correct ground-truth target values (Y) that a supervised model learns to predict (e.g. Spam/Not Spam, Pass/Fail).\nModel: The trained mathematical representation that maps input features to predicted outputs."
            ],
            [
              "2. What are the key stages of the Machine Learning lifecycle / pipeline?",
              "1. Data Collection: Gathering relevant historical data from databases, APIs, or sensors.\n2. Data Preprocessing: Cleaning noisy data, handling missing values, and scaling features.\n3. Feature Selection & Engineering: Selecting the most predictive input variables to reduce dimensionality.\n4. Model Selection & Training: Choosing an algorithm and adjusting its internal weights on training data.\n5. Model Evaluation: Assessing performance on unseen test data using metrics like Accuracy, Precision, and RMSE.\n6. Deployment & Prediction: Serving the trained model to generate real-time predictions on new inputs."
            ],
            [
              "3. What is an algorithm in Machine Learning and how does training work?",
              "Algorithm: A finite step-by-step mathematical procedure that optimizes parameters to discover patterns in data.\nTraining Process: The model makes predictions on training samples, calculates the error (loss) against actual labels, and updates its weights using optimization techniques (e.g. gradient descent).\nTesting / Validation: Evaluating the trained model on separate, unseen data to verify that it generalizes well and does not overfit."
            ],
            [
              "4. What is the technological and industrial importance of Machine Learning?",
              "Automation: Eliminates manual rule-writing and automates complex visual and linguistic workflows.\nPattern Recognition: Discovers subtle, non-linear relationships in high-dimensional data that humans cannot easily detect.\nSpeed & Scalability: Processes millions of real-time transactions in fractions of a second.\nPersonalization: Delivers tailored experiences in education, streaming, and retail based on individual user habits."
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
              "1. What is Supervised Learning? Explain its types, algorithms, and applications.",
              "Supervised Learning is a learning paradigm where the model trains on labelled data containing both input features (X) and correct target outputs (Y).\nTypes:\nClassification: Predicts discrete categorical labels (e.g. Spam/Not Spam, Pass/Fail, Healthy/Diseased). Algorithms: Logistic Regression, Decision Tree, Naïve Bayes, Support Vector Machines (SVM), K-Nearest Neighbors (KNN).\nRegression: Predicts continuous numerical quantities (e.g. house prices, temperature, salary). Algorithms: Linear Regression, Multiple Linear Regression, Polynomial Regression.\nApplications: Email spam detection, medical disease prediction, credit-risk scoring, and student exam performance prediction."
            ],
            [
              "2. What is Unsupervised Learning? Explain its types, algorithms, and applications.",
              "Unsupervised Learning is a learning paradigm where the model analyzes unlabelled data without predefined target labels or external feedback.\nTypes:\nClustering: Groups data points based on inherent similarity and feature proximity. Algorithms: K-Means Clustering, Hierarchical Clustering, DBSCAN.\nDimensionality Reduction: Compresses high-dimensional feature spaces while retaining maximum variance. Algorithms: Principal Component Analysis (PCA), t-SNE.\nAssociation Rule Learning: Discovers interesting co-occurrence relationships (e.g. Apriori algorithm).\nApplications: Customer market segmentation, network anomaly/fraud detection, document clustering, and genomic sequence analysis."
            ],
            [
              "3. Comprehensive Comparison: Supervised vs Unsupervised Learning.",
              "Training Data: Labelled pairs (X, Y) with known ground truth vs Unlabelled inputs (X only).\nSupervision: Guided by external error feedback vs Autonomous pattern discovery without feedback.\nPrimary Goal: Mapping function prediction (Y = f(X)) vs Understanding intrinsic data structure and distributions.\nCore Tasks: Classification and Regression vs Clustering, Association Rules, and Dimensionality Reduction.\nAlgorithms: Linear/Logistic Regression, Decision Trees, SVM vs K-Means, Hierarchical Clustering, PCA."
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
              "1. What is Linear Algebra and why is it the core foundation of Machine Learning?",
              "Linear Algebra is the branch of mathematics dealing with vectors, matrices, linear transformations, and spaces.\nRole in Machine Learning:\nData Representation: Tabular datasets with N samples and D features are stored compactly as N × D design matrices.\nVectorized Computation: Replaces slow iterative loops with parallel matrix operations executed on GPUs.\nDimensionality Reduction: Techniques like PCA and SVD project high-dimensional data onto principal axes.\nOptimization: Analytical closed-form solutions (e.g. Ordinary Least Squares) rely entirely on matrix operations."
            ],
            [
              "2. Explain the dimensional hierarchy: Scalar, Vector, Matrix, and Tensor.",
              "Scalar (Rank-0 Tensor): A single numerical value representing magnitude only (e.g. s = 5, learning rate α = 0.01).\nVector (Rank-1 Tensor): A 1-dimensional ordered sequence of numbers representing an individual sample's feature vector (e.g. V = [2, 4, 6]ᵀ).\nMatrix (Rank-2 Tensor): A 2-dimensional rectangular array of numbers in rows and columns representing a dataset (e.g. A = [[1, 2], [3, 4]]).\nTensor (Rank-3+): A multidimensional array container for complex data. Scalars, vectors, and matrices are 0D, 1D, and 2D tensors; color images are 3D tensors (Height × Width × RGB Channels); video batches are 5D tensors."
            ],
            [
              "3. What is a Square Matrix and what are its key properties in ML?",
              "Square Matrix: A matrix having an identical number of rows and columns (m = n).\nExample: A = [[1, 2], [3, 4]] is a 2 × 2 square matrix.\nImportance in ML:\nRequired for computing determinants (|A|) and matrix inverses (A⁻¹).\nRequired for computing eigenvalues and eigenvectors (Av = λv).\nCovariance matrices used in statistics and PCA are always symmetric square matrices (D × D)."
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
              "1. Explain Tensor Operations with examples (Addition, Subtraction, Hadamard, Reshaping).",
              "Let A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]].\nAddition: A + B = [[1+5, 2+6], [3+7, 4+8]] = [[6, 8], [10, 12]] (shapes must match).\nSubtraction: A − B = [[1−5, 2−6], [3−7, 4−8]] = [[−4, −4], [−4, −4]].\nElement-wise (Hadamard) Multiplication: A ⊙ B = [[1×5, 2×6], [3×7, 4×8]] = [[5, 12], [21, 32]].\nTranspose: Aᵀ = [[1, 3], [2, 4]] (rows and columns interchanged).\nReshaping: Rearranging tensor dimensions without modifying data (e.g. flattening [1, 2, 3, 4] into a 2 × 2 matrix).\nDeep Learning Role: Core primitive powering convolutional filters, attention mechanisms, and backpropagation."
            ],
            [
              "2. Explain Matrix Multiplication with dimensional rules and examples.",
              "Dimensional Rule: The number of columns in the first matrix must equal the number of rows in the second matrix (if A is m × k and B is k × n, the product AB is m × n).\nCalculation: Multiply each row of A by each column of B and sum the products.\nWorked Example: Let A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]].\nAB = [[(1×5 + 2×7), (1×6 + 2×8)], [(3×5 + 4×7), (3×6 + 4×8)]] = [[19, 22], [43, 50]].\nNeural Network Application: The forward pass activation of dense layers is computed as Z = WX + b."
            ],
            [
              "3. Explain Matrix Inverse and step-by-step calculation with an example.",
              "Definition: For a square matrix A, the inverse A⁻¹ satisfies AA⁻¹ = A⁻¹A = I (identity matrix).\nInvertibility Condition: Matrix A has an inverse if and only if its determinant det(A) ≠ 0.\n2 × 2 Formula: A⁻¹ = (1 / (ad − bc)) [[d, −b], [−c, a]].\nWorked Example: Let A = [[1, 2], [3, 4]].\nDeterminant: det(A) = (1×4) − (2×3) = 4 − 6 = −2 ≠ 0.\nA⁻¹ = (1 / −2) [[4, −2], [−3, 1]] = [[−2, 1], [1.5, −0.5]].\nML Application: Used in the closed-form Normal Equation of Linear Regression: w = (XᵀX)⁻¹Xᵀy."
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
              "1. What are the fundamental algebraic properties of matrices?",
              "Commutative Addition: A + B = B + A (valid when dimensions match).\nAssociative Addition: (A + B) + C = A + (B + C).\nAssociative Multiplication: (AB)C = A(BC).\nDistributive Property: A(B + C) = AB + AC.\nIdentity Property: AI = IA = A (where I is the identity matrix with 1s on main diagonal and 0s elsewhere).\nZero Matrix Property: A + 0 = A."
            ],
            [
              "2. Explain Matrix Transpose identities and Non-Commutative Multiplication.",
              "Transpose Identities:\n(A + B)ᵀ = Aᵀ + Bᵀ (transpose distributes over addition).\n(Aᵀ)ᵀ = A (transposing twice yields original matrix).\n(AB)ᵀ = BᵀAᵀ (transposing a product reverses operand order).\nNon-Commutative Multiplication: In general, AB ≠ BA. Changing the multiplication order produces a different transformation or incompatible dimensions."
            ],
            [
              "3. Why are matrix operations and properties important in Machine Learning?",
              "Data Representation: Datasets with thousands of samples and features are stored systematically as matrices.\nModel Training: Linear regression, logistic regression, and neural networks express loss and parameter updates through matrix math.\nNeural Networks: Vectorized matrix multiplication powers high-speed forward inference and backpropagation gradient flow.\nDimensionality Reduction: Covariance matrix analysis and PCA depend on matrix properties and decompositions."
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
              "1. Define Eigenvalues and Eigenvectors and explain their geometric meaning.",
              "Eigenvector (v): A non-zero vector whose spatial direction remains completely unchanged when a square matrix linear transformation is applied to it.\nEigenvalue (λ): The scalar scaling factor by which the eigenvector is stretched, compressed, or reversed.\nFundamental Equation: Av = λv or (A − λI)v = 0 (where A is a square matrix, v ≠ 0 is the eigenvector, and λ is the scalar eigenvalue)."
            ],
            [
              "2. Explain step-by-step how to calculate Eigenvalues and Eigenvectors with an example.",
              "Worked Example: Let A = [[2, 0], [0, 3]].\nStep 1 (Find Eigenvalues): Solve characteristic equation |A − λI| = 0.\n|[[2 − λ, 0], [0, 3 − λ]]| = (2 − λ)(3 − λ) = 0 ⇒ Eigenvalues are λ₁ = 2, λ₂ = 3.\nStep 2 (Find Eigenvector for λ₁ = 2): Solve (A − 2I)v = 0.\n[[0, 0], [0, 1]][x, y]ᵀ = [0, 0]ᵀ ⇒ y = 0. Choosing x = 1 yields v₁ = [1, 0]ᵀ.\nStep 3 (Find Eigenvector for λ₂ = 3): Solve (A − 3I)v = 0.\n[[−1, 0], [0, 0]][x, y]ᵀ = [0, 0]ᵀ ⇒ x = 0. Choosing y = 1 yields v₂ = [0, 1]ᵀ."
            ],
            [
              "3. What is the significance of Eigenvalues and Eigenvectors in Machine Learning and PCA?",
              "Principal Component Analysis (PCA): Eigenvectors of the dataset's covariance matrix represent the principal axes of maximum data variance.\nDimensionality Reduction: Eigenvalues quantify the amount of variance captured along each principal direction.\nFeature Compression: Discarding eigenvectors associated with small eigenvalues compresses high-dimensional datasets while preserving crucial information."
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
              "1. Explain the major real-world applications of Machine Learning across industries.",
              "Healthcare: Disease diagnosis, cancer detection from radiology scans (MRI/CT), patient risk prediction, and automated drug discovery.\nBanking & Finance: Real-time credit card fraud detection, algorithmic trading, and credit risk assessment.\nTransportation: Autonomous vehicles, pedestrian and lane detection, traffic prediction, and dynamic route optimization.\nE-Commerce & Retail: Collaborative filtering product recommendations and dynamic pricing.\nMedia & NLP: Automated speech recognition, machine translation, and generative AI content creation."
            ],
            [
              "2. What are the key advantages of Machine Learning over traditional software?",
              "Automated Pattern Discovery: Uncovers complex, non-linear relationships in massive multi-dimensional data without manual heuristics.\nContinuous Self-Improvement: Models automatically refine their internal parameters as new data arrives.\nHandles Unstructured Data: Enables computers to understand images, audio, video, and natural language.\nSpeed & Scalability: Analyzes millions of data points simultaneously to deliver real-time automated decisions."
            ],
            [
              "3. What is the future scope and transformative potential of Machine Learning?",
              "Autonomous Robotics: Smart robots handling hazardous industrial manufacturing, warehouse logistics, and robotic surgery.\nPrecision Medicine: Early biomarker detection and personalized cancer therapies tailored to individual patient genomes.\nClimate & Sustainable Energy: AI-optimized smart electrical grids, carbon footprint tracking, and precision agriculture yield prediction.\nAdaptive Education: Intelligent learning systems that dynamically tailor curriculum difficulty and lesson pacing to each student."
            ]
          ]
        }
      }
    }
  }
};
