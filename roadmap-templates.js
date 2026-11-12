// Roadmap Templates and Data
const roadmapTemplates = {
    'web-development': {
        beginner: {
            duration: '6-8 months',
            phases: [
                {
                    title: 'Foundation Phase',
                    duration: '6-8 weeks',
                    description: 'Build a strong foundation in web technologies',
                    topics: [
                        'HTML5 Fundamentals & Semantic HTML',
                        'CSS3 Basics, Flexbox & Grid',
                        'Responsive Web Design',
                        'JavaScript Basics & ES6+',
                        'DOM Manipulation',
                        'Git & GitHub Basics'
                    ],
                    resources: [
                        { name: 'freeCodeCamp', type: 'free', url: 'https://freecodecamp.org' },
                        { name: 'MDN Web Docs', type: 'free', url: 'https://developer.mozilla.org' },
                        { name: 'The Odin Project', type: 'free', url: 'https://theodinproject.com' }
                    ],
                    projects: [
                        { name: 'Personal Portfolio Website', difficulty: 'beginner' },
                        { name: 'Landing Page with Forms', difficulty: 'beginner' },
                        { name: 'Interactive Quiz App', difficulty: 'beginner' }
                    ]
                },
                {
                    title: 'Frontend Frameworks',
                    duration: '8-10 weeks',
                    description: 'Master modern frontend development',
                    topics: [
                        'React.js Fundamentals',
                        'Component Lifecycle & Hooks',
                        'State Management (Redux/Context)',
                        'React Router',
                        'API Integration',
                        'CSS Frameworks (Tailwind/Bootstrap)'
                    ],
                    resources: [
                        { name: 'React Official Docs', type: 'free', url: 'https://react.dev' },
                        { name: 'Scrimba React Course', type: 'free', url: 'https://scrimba.com' },
                        { name: 'Udemy React Complete Guide', type: 'paid', url: 'https://udemy.com' }
                    ],
                    projects: [
                        { name: 'Todo App with React', difficulty: 'beginner' },
                        { name: 'Weather Dashboard', difficulty: 'intermediate' },
                        { name: 'E-commerce Product Catalog', difficulty: 'intermediate' }
                    ]
                },
                {
                    title: 'Backend Development',
                    duration: '8-10 weeks',
                    description: 'Learn server-side programming',
                    topics: [
                        'Node.js & Express.js',
                        'RESTful API Design',
                        'Database (MongoDB/PostgreSQL)',
                        'Authentication & Authorization',
                        'Security Best Practices',
                        'Deployment & Hosting'
                    ],
                    resources: [
                        { name: 'Node.js Official Docs', type: 'free', url: 'https://nodejs.org' },
                        { name: 'MongoDB University', type: 'free', url: 'https://university.mongodb.com' },
                        { name: 'The Complete Node.js Course', type: 'paid', url: '#' }
                    ],
                    projects: [
                        { name: 'RESTful API for Blog', difficulty: 'intermediate' },
                        { name: 'User Authentication System', difficulty: 'intermediate' },
                        { name: 'Real-time Chat Application', difficulty: 'advanced' }
                    ]
                },
                {
                    title: 'Full Stack Integration',
                    duration: '6-8 weeks',
                    description: 'Combine frontend and backend skills',
                    topics: [
                        'Full Stack Application Architecture',
                        'State Management Across Stack',
                        'Testing (Jest, React Testing Library)',
                        'CI/CD Pipeline',
                        'Performance Optimization',
                        'SEO Best Practices'
                    ],
                    resources: [
                        { name: 'Full Stack Open', type: 'free', url: 'https://fullstackopen.com' },
                        { name: 'DevOps for Developers', type: 'paid', url: '#' }
                    ],
                    projects: [
                        { name: 'Social Media Platform', difficulty: 'advanced' },
                        { name: 'Project Management Tool', difficulty: 'advanced' },
                        { name: 'E-commerce Full Stack App', difficulty: 'advanced' }
                    ]
                }
            ],
            milestones: [
                { week: 4, title: 'Build First Website', icon: '🌐' },
                { week: 12, title: 'Deploy React Application', icon: '⚛️' },
                { week: 20, title: 'Create Backend API', icon: '🔧' },
                { week: 28, title: 'Launch Full Stack Project', icon: '🚀' }
            ],
            tips: [
                'Code every day, even if just for 30 minutes',
                'Build projects, not just follow tutorials',
                'Join developer communities (Reddit, Discord)',
                'Contribute to open source projects',
                'Create a portfolio to showcase your work',
                'Practice algorithm challenges on LeetCode/HackerRank'
            ]
        },
        intermediate: {
            duration: '4-6 months',
            phases: [
                {
                    title: 'Advanced Frontend',
                    duration: '6 weeks',
                    description: 'Master advanced frontend concepts',
                    topics: [
                        'Advanced React Patterns',
                        'TypeScript',
                        'Next.js / Gatsby',
                        'GraphQL',
                        'Advanced State Management',
                        'Micro-frontends'
                    ],
                    resources: [
                        { name: 'TypeScript Handbook', type: 'free', url: 'https://typescriptlang.org' },
                        { name: 'Next.js Masterclass', type: 'paid', url: '#' }
                    ],
                    projects: [
                        { name: 'SSR Blog with Next.js', difficulty: 'advanced' },
                        { name: 'GraphQL Client App', difficulty: 'advanced' }
                    ]
                },
                {
                    title: 'Scalable Backend',
                    duration: '6 weeks',
                    description: 'Build production-ready backends',
                    topics: [
                        'Microservices Architecture',
                        'Docker & Kubernetes',
                        'Message Queues (RabbitMQ/Kafka)',
                        'Caching Strategies (Redis)',
                        'Database Optimization',
                        'API Security & Rate Limiting'
                    ],
                    resources: [
                        { name: 'Docker Mastery', type: 'paid', url: '#' },
                        { name: 'System Design Primer', type: 'free', url: 'https://github.com' }
                    ],
                    projects: [
                        { name: 'Microservices E-commerce', difficulty: 'advanced' },
                        { name: 'Scalable Chat System', difficulty: 'advanced' }
                    ]
                },
                {
                    title: 'DevOps & Cloud',
                    duration: '6 weeks',
                    description: 'Deploy and maintain applications',
                    topics: [
                        'AWS/Azure/GCP Services',
                        'CI/CD Pipelines',
                        'Monitoring & Logging',
                        'Infrastructure as Code',
                        'Load Balancing',
                        'Auto-scaling'
                    ],
                    resources: [
                        { name: 'AWS Certified Developer', type: 'paid', url: 'https://aws.amazon.com' },
                        { name: 'GitHub Actions Guide', type: 'free', url: 'https://github.com' }
                    ],
                    projects: [
                        { name: 'Deploy Full Stack App to AWS', difficulty: 'advanced' },
                        { name: 'Automated CI/CD Pipeline', difficulty: 'advanced' }
                    ]
                }
            ],
            milestones: [
                { week: 6, title: 'TypeScript Proficiency', icon: '📘' },
                { week: 12, title: 'Microservices Deployment', icon: '🐳' },
                { week: 18, title: 'Cloud Certification', icon: '☁️' },
                { week: 24, title: 'Senior Developer Portfolio', icon: '🏆' }
            ],
            tips: [
                'Focus on system design and architecture',
                'Read production codebases on GitHub',
                'Participate in code reviews',
                'Write technical blog posts',
                'Mentor junior developers',
                'Stay updated with tech trends'
            ]
        }
    },
    
    'data-science': {
        beginner: {
            duration: '8-10 months',
            phases: [
                {
                    title: 'Python & Math Fundamentals',
                    duration: '8 weeks',
                    description: 'Build strong programming and mathematical foundation',
                    topics: [
                        'Python Programming Basics',
                        'NumPy & Pandas',
                        'Statistics & Probability',
                        'Linear Algebra Basics',
                        'Calculus Fundamentals',
                        'Data Visualization (Matplotlib, Seaborn)'
                    ],
                    resources: [
                        { name: 'Python for Data Science', type: 'free', url: 'https://python.org' },
                        { name: 'Khan Academy Statistics', type: 'free', url: 'https://khanacademy.org' },
                        { name: 'DataCamp Python Track', type: 'paid', url: 'https://datacamp.com' }
                    ],
                    projects: [
                        { name: 'Exploratory Data Analysis', difficulty: 'beginner' },
                        { name: 'Statistical Analysis Report', difficulty: 'beginner' }
                    ]
                },
                {
                    title: 'Machine Learning Basics',
                    duration: '10 weeks',
                    description: 'Learn fundamental ML algorithms',
                    topics: [
                        'Supervised Learning',
                        'Linear & Logistic Regression',
                        'Decision Trees & Random Forests',
                        'K-Nearest Neighbors',
                        'Model Evaluation Metrics',
                        'Feature Engineering'
                    ],
                    resources: [
                        { name: 'Andrew Ng ML Course', type: 'free', url: 'https://coursera.org' },
                        { name: 'Scikit-learn Documentation', type: 'free', url: 'https://scikit-learn.org' },
                        { name: 'Hands-On ML with Scikit-Learn', type: 'book', url: '#' }
                    ],
                    projects: [
                        { name: 'House Price Prediction', difficulty: 'intermediate' },
                        { name: 'Customer Churn Analysis', difficulty: 'intermediate' },
                        { name: 'Credit Risk Assessment', difficulty: 'intermediate' }
                    ]
                },
                {
                    title: 'Deep Learning',
                    duration: '10 weeks',
                    description: 'Master neural networks and deep learning',
                    topics: [
                        'Neural Networks Fundamentals',
                        'TensorFlow & Keras',
                        'Convolutional Neural Networks (CNNs)',
                        'Recurrent Neural Networks (RNNs)',
                        'Transfer Learning',
                        'Model Deployment'
                    ],
                    resources: [
                        { name: 'Deep Learning Specialization', type: 'paid', url: 'https://coursera.org' },
                        { name: 'Fast.ai Course', type: 'free', url: 'https://fast.ai' },
                        { name: 'TensorFlow Tutorials', type: 'free', url: 'https://tensorflow.org' }
                    ],
                    projects: [
                        { name: 'Image Classification System', difficulty: 'advanced' },
                        { name: 'Sentiment Analysis', difficulty: 'advanced' },
                        { name: 'Time Series Forecasting', difficulty: 'advanced' }
                    ]
                },
                {
                    title: 'Data Science in Production',
                    duration: '6 weeks',
                    description: 'Deploy and maintain ML models',
                    topics: [
                        'MLOps Fundamentals',
                        'Model Deployment (Flask, FastAPI)',
                        'Cloud ML Services',
                        'A/B Testing',
                        'Model Monitoring',
                        'Data Pipelines'
                    ],
                    resources: [
                        { name: 'MLOps Course', type: 'paid', url: '#' },
                        { name: 'AWS ML Services', type: 'free', url: 'https://aws.amazon.com' }
                    ],
                    projects: [
                        { name: 'End-to-End ML Pipeline', difficulty: 'advanced' },
                        { name: 'Real-time Prediction API', difficulty: 'advanced' }
                    ]
                }
            ],
            milestones: [
                { week: 8, title: 'First Data Analysis', icon: '📊' },
                { week: 18, title: 'ML Model Deployment', icon: '🤖' },
                { week: 28, title: 'Deep Learning Project', icon: '🧠' },
                { week: 36, title: 'Complete Portfolio', icon: '🎓' }
            ],
            tips: [
                'Practice on Kaggle competitions',
                'Work with real-world datasets',
                'Document your projects in Jupyter notebooks',
                'Join data science communities',
                'Read research papers regularly',
                'Build a strong GitHub portfolio'
            ]
        }
    },

    'machine-learning': {
        beginner: {
            duration: '10-12 months',
            phases: [
                {
                    title: 'Prerequisites & Foundations',
                    duration: '8 weeks',
                    description: 'Essential math and programming skills',
                    topics: [
                        'Python Programming',
                        'Linear Algebra',
                        'Calculus & Optimization',
                        'Probability & Statistics',
                        'NumPy & Pandas',
                        'Data Preprocessing'
                    ],
                    resources: [
                        { name: '3Blue1Brown Linear Algebra', type: 'free', url: 'https://youtube.com' },
                        { name: 'StatQuest YouTube', type: 'free', url: 'https://youtube.com' },
                        { name: 'Mathematics for ML', type: 'book', url: '#' }
                    ],
                    projects: [
                        { name: 'Matrix Operations Library', difficulty: 'beginner' },
                        { name: 'Statistical Analysis Tool', difficulty: 'beginner' }
                    ]
                },
                {
                    title: 'Classical Machine Learning',
                    duration: '12 weeks',
                    description: 'Master traditional ML algorithms',
                    topics: [
                        'Regression Algorithms',
                        'Classification Algorithms',
                        'Clustering & Dimensionality Reduction',
                        'Ensemble Methods',
                        'Cross-Validation',
                        'Hyperparameter Tuning'
                    ],
                    resources: [
                        { name: 'Andrew Ng ML Course', type: 'free', url: 'https://coursera.org' },
                        { name: 'Scikit-learn Course', type: 'paid', url: '#' },
                        { name: 'Pattern Recognition', type: 'book', url: '#' }
                    ],
                    projects: [
                        { name: 'Spam Detection System', difficulty: 'intermediate' },
                        { name: 'Recommendation Engine', difficulty: 'intermediate' },
                        { name: 'Anomaly Detection', difficulty: 'intermediate' }
                    ]
                },
                {
                    title: 'Deep Learning & Neural Networks',
                    duration: '12 weeks',
                    description: 'Advanced neural network architectures',
                    topics: [
                        'Deep Neural Networks',
                        'CNNs for Computer Vision',
                        'RNNs & LSTMs for Sequences',
                        'Transformers & Attention',
                        'GANs & Autoencoders',
                        'PyTorch & TensorFlow'
                    ],
                    resources: [
                        { name: 'Deep Learning Specialization', type: 'paid', url: 'https://coursera.org' },
                        { name: 'PyTorch Tutorials', type: 'free', url: 'https://pytorch.org' },
                        { name: 'Deep Learning Book', type: 'free', url: 'https://deeplearningbook.org' }
                    ],
                    projects: [
                        { name: 'Object Detection System', difficulty: 'advanced' },
                        { name: 'Language Translation Model', difficulty: 'advanced' },
                        { name: 'Image Generation with GANs', difficulty: 'advanced' }
                    ]
                },
                {
                    title: 'Advanced Topics & Deployment',
                    duration: '8 weeks',
                    description: 'Specialized ML and production skills',
                    topics: [
                        'Reinforcement Learning',
                        'Natural Language Processing',
                        'Model Optimization',
                        'ML System Design',
                        'Production Deployment',
                        'Ethics in AI'
                    ],
                    resources: [
                        { name: 'RL Specialization', type: 'paid', url: '#' },
                        { name: 'Hugging Face NLP', type: 'free', url: 'https://huggingface.co' },
                        { name: 'MLOps Guide', type: 'free', url: '#' }
                    ],
                    projects: [
                        { name: 'Chatbot with NLP', difficulty: 'advanced' },
                        { name: 'RL Game Agent', difficulty: 'advanced' },
                        { name: 'Production ML Pipeline', difficulty: 'advanced' }
                    ]
                }
            ],
            milestones: [
                { week: 8, title: 'Math Foundations Complete', icon: '📐' },
                { week: 20, title: 'First ML Model Deployed', icon: '🚀' },
                { week: 32, title: 'Deep Learning Mastery', icon: '🧠' },
                { week: 44, title: 'AI Research Paper', icon: '📄' }
            ],
            tips: [
                'Implement algorithms from scratch first',
                'Read and implement research papers',
                'Participate in ML competitions',
                'Build a strong mathematical foundation',
                'Contribute to open-source ML projects',
                'Stay updated with latest research (arxiv.org)'
            ]
        }
    },

    'mobile-development': {
        beginner: {
            duration: '6-8 months',
            phases: [
                {
                    title: 'Mobile Development Basics',
                    duration: '6 weeks',
                    description: 'Learn mobile app fundamentals',
                    topics: [
                        'Mobile UI/UX Principles',
                        'React Native Basics',
                        'Component Architecture',
                        'Navigation & Routing',
                        'State Management',
                        'Mobile Debugging'
                    ],
                    resources: [
                        { name: 'React Native Docs', type: 'free', url: 'https://reactnative.dev' },
                        { name: 'Expo Documentation', type: 'free', url: 'https://expo.dev' }
                    ],
                    projects: [
                        { name: 'Todo Mobile App', difficulty: 'beginner' },
                        { name: 'Weather App', difficulty: 'beginner' }
                    ]
                },
                {
                    title: 'Advanced Mobile Features',
                    duration: '8 weeks',
                    description: 'Implement native features',
                    topics: [
                        'Camera & Media',
                        'Geolocation & Maps',
                        'Push Notifications',
                        'Offline Storage',
                        'API Integration',
                        'Performance Optimization'
                    ],
                    resources: [
                        { name: 'React Native Advanced', type: 'paid', url: '#' }
                    ],
                    projects: [
                        { name: 'Social Media App', difficulty: 'intermediate' },
                        { name: 'E-commerce Mobile App', difficulty: 'advanced' }
                    ]
                }
            ],
            milestones: [
                { week: 6, title: 'First Mobile App', icon: '📱' },
                { week: 14, title: 'App Store Deployment', icon: '🚀' }
            ],
            tips: [
                'Test on real devices',
                'Follow platform guidelines',
                'Optimize for performance',
                'Focus on user experience'
            ]
        }
    }
};

// Get default template for fields not defined
const getDefaultTemplate = (field) => {
    return {
        duration: '6-12 months',
        phases: [
            {
                title: 'Foundation Phase',
                duration: '2-3 months',
                description: 'Build fundamental skills in ' + field,
                topics: [
                    'Basic concepts and terminology',
                    'Core technologies and tools',
                    'Best practices and standards',
                    'Problem-solving techniques'
                ],
                resources: [
                    { name: 'Official Documentation', type: 'free', url: '#' },
                    { name: 'Online Courses', type: 'paid', url: '#' }
                ],
                projects: [
                    { name: 'Beginner Project', difficulty: 'beginner' },
                    { name: 'Practice Exercises', difficulty: 'beginner' }
                ]
            },
            {
                title: 'Advanced Phase',
                duration: '3-4 months',
                description: 'Master advanced concepts',
                topics: [
                    'Advanced topics and patterns',
                    'Real-world applications',
                    'Industry standards',
                    'Performance optimization'
                ],
                resources: [
                    { name: 'Advanced Course', type: 'paid', url: '#' },
                    { name: 'Community Resources', type: 'free', url: '#' }
                ],
                projects: [
                    { name: 'Complex Project', difficulty: 'advanced' },
                    { name: 'Portfolio Project', difficulty: 'advanced' }
                ]
            },
            {
                title: 'Specialization',
                duration: '2-3 months',
                description: 'Develop expertise in specific areas',
                topics: [
                    'Specialized frameworks',
                    'Industry-specific tools',
                    'Professional practices',
                    'Deployment and maintenance'
                ],
                resources: [
                    { name: 'Specialization Course', type: 'paid', url: '#' }
                ],
                projects: [
                    { name: 'Professional Project', difficulty: 'advanced' }
                ]
            }
        ],
        milestones: [
            { week: 12, title: 'Foundation Complete', icon: '✅' },
            { week: 24, title: 'Advanced Mastery', icon: '🏆' },
            { week: 36, title: 'Specialization Achieved', icon: '🎓' }
        ],
        tips: [
            'Practice consistently every day',
            'Build real projects to apply learning',
            'Join communities and forums',
            'Stay updated with industry trends',
            'Create a portfolio of your work',
            'Network with professionals'
        ]
    };
};