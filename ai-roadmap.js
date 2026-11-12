// AI Roadmap Generator
class AIRoadmapGenerator {
    constructor() {
        this.savedRoadmaps = JSON.parse(localStorage.getItem('savedRoadmaps')) || [];
        this.currentRoadmap = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.displaySavedRoadmaps();
    }

    bindEvents() {
        document.getElementById('roadmapForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.generateRoadmap();
        });
    }

    async generateRoadmap() {
        // Show loading
        document.querySelector('.roadmap-form-container').style.display = 'none';
        document.getElementById('aiLoading').style.display = 'block';

        // Collect form data
        const formData = {
            studentName: document.getElementById('roadmapStudentName').value,
            targetField: document.getElementById('targetField').value,
            currentLevel: document.getElementById('currentLevel').value,
            timeCommitment: parseInt(document.getElementById('timeCommitment').value),
            learningStyle: document.getElementById('learningStyle').value,
            targetGoal: document.getElementById('targetGoal').value,
            budget: document.getElementById('budget').value,
            additionalInfo: document.getElementById('additionalInfo').value
        };

        // Simulate AI processing
        await this.simulateAIProcessing();

        // Generate roadmap
        const roadmap = this.createRoadmap(formData);
        this.currentRoadmap = roadmap;

        // Display roadmap
        this.displayRoadmap(roadmap);

        // Hide loading, show roadmap
        document.getElementById('aiLoading').style.display = 'none';
        document.getElementById('roadmapDisplay').style.display = 'block';

        // Scroll to roadmap
        document.getElementById('roadmapDisplay').scrollIntoView({ behavior: 'smooth' });
    }

    async simulateAIProcessing() {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

    createRoadmap(formData) {
        const fieldKey = formData.targetField;
        const levelKey = formData.currentLevel;
        
        let template = roadmapTemplates[fieldKey]?.[levelKey];
        
        if (!template) {
            template = getDefaultTemplate(this.getFieldName(fieldKey));
        }

        const customizedRoadmap = this.customizeRoadmap(template, formData);

        return {
            id: Date.now(),
            studentName: formData.studentName,
            field: formData.targetField,
            level: formData.currentLevel,
            createdDate: new Date().toLocaleDateString(),
            ...customizedRoadmap,
            preferences: formData
        };
    }

    customizeRoadmap(template, formData) {
        const roadmap = JSON.parse(JSON.stringify(template));

        // Adjust duration based on time commitment
        if (formData.timeCommitment >= 30) {
            roadmap.duration = this.reduceDuration(roadmap.duration, 0.7);
        } else if (formData.timeCommitment <= 5) {
            roadmap.duration = this.increaseDuration(roadmap.duration, 1.5);
        }

        // Filter resources based on budget
        roadmap.phases.forEach(phase => {
            if (formData.budget === 'free') {
                phase.resources = phase.resources.filter(r => r.type === 'free');
            }
        });

        roadmap.learningStyleNotes = this.getLearningStyleRecommendations(formData.learningStyle);
        roadmap.goalRecommendations = this.getGoalRecommendations(formData.targetGoal);

        return roadmap;
    }

    reduceDuration(duration, factor) {
        const match = duration.match(/(\d+)-(\d+)/);
        if (match) {
            const min = Math.floor(parseInt(match[1]) * factor);
            const max = Math.floor(parseInt(match[2]) * factor);
            return `${min}-${max} months`;
        }
        return duration;
    }

    increaseDuration(duration, factor) {
        const match = duration.match(/(\d+)-(\d+)/);
        if (match) {
            const min = Math.ceil(parseInt(match[1]) * factor);
            const max = Math.ceil(parseInt(match[2]) * factor);
            return `${min}-${max} months`;
        }
        return duration;
    }

    getLearningStyleRecommendations(style) {
        const recommendations = {
            'video': 'Focus on video-based courses and YouTube tutorials. Platforms like Udemy, Coursera, and YouTube will be your best friends.',
            'reading': 'Utilize documentation, books, and written tutorials. Medium articles and official docs should be your primary resources.',
            'project': 'Learn by building. Start with small projects and gradually increase complexity. GitHub is your portfolio.',
            'interactive': 'Use platforms like Codecademy, freeCodeCamp, and interactive coding challenges. Practice on HackerRank and LeetCode.',
            'mixed': 'Combine different learning methods. Watch videos for concepts, read docs for details, and build projects for practice.'
        };
        return recommendations[style] || recommendations['mixed'];
    }

    getGoalRecommendations(goal) {
        const recommendations = {
            'job': 'Focus on building a strong portfolio, contributing to open source, and preparing for technical interviews. Network on LinkedIn.',
            'freelance': 'Build a diverse portfolio, learn client communication, set up profiles on Upwork/Fiverr, and start with small projects.',
            'project': 'Focus on completing projects from start to finish. Document your process and share on GitHub and social media.',
            'certification': 'Follow official certification paths, take practice exams, and join study groups. Certifications add credibility.',
            'career-switch': 'Build transferable skills, create a strong portfolio, network in the new industry, and consider bootcamps for faster transition.'
        };
        return recommendations[goal] || 'Set clear milestones and track your progress regularly.';
    }

    displayRoadmap(roadmap) {
        const content = document.getElementById('roadmapContent');
        
        let html = `
            <div class="roadmap-overview">
                <h3>Welcome, ${roadmap.studentName}! 🎉</h3>
                <p>Your personalized learning roadmap for <strong>${this.getFieldName(roadmap.field)}</strong></p>
                <div class="overview-stats">
                    <div class="stat-item">
                        <h4>${roadmap.duration}</h4>
                        <p>Estimated Duration</p>
                    </div>
                    <div class="stat-item">
                        <h4>${roadmap.phases.length}</h4>
                        <p>Learning Phases</p>
                    </div>
                    <div class="stat-item">
                        <h4>${this.countTotalTopics(roadmap)}</h4>
                        <p>Topics to Master</p>
                    </div>
                    <div class="stat-item">
                        <h4>${this.countTotalProjects(roadmap)}</h4>
                        <p>Projects to Build</p>
                    </div>
                </div>
            </div>

            <div class="tips-section">
                <h4><i class="fas fa-lightbulb"></i> Learning Style Recommendation</h4>
                <p>${roadmap.learningStyleNotes}</p>
            </div>

            <div class="tips-section" style="background: #d1ecf1; border-color: #17a2b8;">
                <h4 style="color: #0c5460;"><i class="fas fa-target"></i> Goal-Specific Advice</h4>
                <p style="color: #0c5460;">${roadmap.goalRecommendations}</p>
            </div>

            <div class="roadmap-timeline">
        `;

        roadmap.phases.forEach((phase, index) => {
            html += this.generatePhaseHTML(phase, index + 1);
        });

        html += `</div>`;

        if (roadmap.milestones && roadmap.milestones.length > 0) {
            html += `
                <div class="milestones">
                    <h4><i class="fas fa-flag-checkered"></i> Key Milestones</h4>
            `;
            roadmap.milestones.forEach(milestone => {
                html += `
                    <div class="milestone-item">
                        <div class="milestone-icon">${milestone.icon}</div>
                        <div>
                            <strong>Week ${milestone.week}:</strong> ${milestone.title}
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }

        if (roadmap.tips && roadmap.tips.length > 0) {
            html += `
                <div class="tips-section">
                    <h4><i class="fas fa-star"></i> Pro Tips for Success</h4>
                    <ul>
            `;
            roadmap.tips.forEach(tip => {
                html += `<li>${tip}</li>`;
            });
            html += `
                    </ul>
                </div>
            `;
        }

        content.innerHTML = html;
    }

    generatePhaseHTML(phase, number) {
        let html = `
            <div class="phase">
                <div class="phase-number">${number}</div>
                <div class="phase-header">
                    <h3 class="phase-title">${phase.title}</h3>
                    <span class="phase-duration"><i class="fas fa-clock"></i> ${phase.duration}</span>
                </div>
                <p class="phase-description">${phase.description}</p>
        `;

        if (phase.topics && phase.topics.length > 0) {
            html += `
                <div class="topics-list">
                    <h4><i class="fas fa-book"></i> Topics to Learn</h4>
                    <ul>
            `;
            phase.topics.forEach(topic => {
                html += `<li>${topic}</li>`;
            });
            html += `
                    </ul>
                </div>
            `;
        }

        if (phase.resources && phase.resources.length > 0) {
            html += `
                <div class="resources">
                    <h4><i class="fas fa-link"></i> Recommended Resources</h4>
                    <div class="resource-links">
            `;
            phase.resources.forEach(resource => {
                html += `
                    <a href="${resource.url}" class="resource-tag ${resource.type}" target="_blank">
                        ${resource.name}
                    </a>
                `;
            });
            html += `
                    </div>
                </div>
            `;
        }

        if (phase.projects && phase.projects.length > 0) {
            html += `
                <div class="projects-section">
                    <h4><i class="fas fa-code"></i> Hands-on Projects</h4>
            `;
            phase.projects.forEach(project => {
                html += `
                    <div class="project-card">
                        <h5>${project.name}</h5>
                        <span class="project-difficulty difficulty-${project.difficulty}">
                            ${project.difficulty.toUpperCase()}
                        </span>
                        <p>Build this project to apply your learning and strengthen your portfolio.</p>
                    </div>
                `;
            });
            html += `</div>`;
        }

        html += `</div>`;
        return html;
    }

    getFieldName(field) {
        const names = {
            'web-development': 'Web Development',
            'data-science': 'Data Science',
            'machine-learning': 'Machine Learning & AI',
            'mobile-development': 'Mobile App Development',
            'cybersecurity': 'Cybersecurity',
            'cloud-computing': 'Cloud Computing',
            'game-development': 'Game Development',
            'blockchain': 'Blockchain Development',
            'devops': 'DevOps Engineering',
            'ui-ux': 'UI/UX Design'
        };
        return names[field] || field;
    }

    countTotalTopics(roadmap) {
        return roadmap.phases.reduce((total, phase) => {
            return total + (phase.topics ? phase.topics.length : 0);
        }, 0);
    }

    countTotalProjects(roadmap) {
        return roadmap.phases.reduce((total, phase) => {
            return total + (phase.projects ? phase.projects.length : 0);
        }, 0);
    }

    saveToProfile() {
        if (!this.currentRoadmap) return;

        this.savedRoadmaps.push({
            ...this.currentRoadmap,
            savedDate: new Date().toLocaleDateString(),
            progress: 0
        });

        localStorage.setItem('savedRoadmaps', JSON.stringify(this.savedRoadmaps));
        this.displaySavedRoadmaps();
        alert('Roadmap saved to your profile!');
    }

    displaySavedRoadmaps() {
        const container = document.getElementById('savedRoadmapsList');
        
        if (this.savedRoadmaps.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #999;">No saved roadmaps yet. Generate your first roadmap above!</p>';
            return;
        }

        container.innerHTML = this.savedRoadmaps.map((roadmap, index) => `
            <div class="saved-roadmap-card" onclick="aiRoadmap.loadSavedRoadmap(${index})">
                <h4>${this.getFieldName(roadmap.field)}</h4>
                <p style="color: #666; margin: 0.5rem 0;">Level: ${roadmap.level}</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${roadmap.progress}%"></div>
                </div>
                <div class="saved-roadmap-meta">
                    <span><i class="fas fa-calendar"></i> ${roadmap.savedDate}</span>
                    <span><i class="fas fa-chart-line"></i> ${roadmap.progress}%</span>
                </div>
            </div>
        `).join('');
    }

    loadSavedRoadmap(index) {
        const roadmap = this.savedRoadmaps[index];
        this.currentRoadmap = roadmap;
        
        document.querySelector('.roadmap-form-container').style.display = 'none';
        document.getElementById('roadmapDisplay').style.display = 'block';
        this.displayRoadmap(roadmap);
        
        document.getElementById('roadmapDisplay').scrollIntoView({ behavior: 'smooth' });
    }

    downloadRoadmap() {
        if (!this.currentRoadmap) return;
        
        alert('PDF download feature coming soon! For now, you can print this page (Ctrl+P) or take screenshots.');
    }

    shareRoadmap() {
        if (!this.currentRoadmap) return;
        
        const shareText = `Check out my learning roadmap for ${this.getFieldName(this.currentRoadmap.field)}!`;
        
        if (navigator.share) {
            navigator.share({
                title: 'My Learning Roadmap',
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText + ' ' + window.location.href);
            alert('Link copied to clipboard!');
        }
    }

    resetForm() {
        document.getElementById('roadmapDisplay').style.display = 'none';
        document.querySelector('.roadmap-form-container').style.display = 'block';
        document.getElementById('roadmapForm').reset();
        this.currentRoadmap = null;
        
        document.querySelector('.roadmap-form-container').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize AI Roadmap Generator
const aiRoadmap = new AIRoadmapGenerator();