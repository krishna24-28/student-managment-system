// Student Management System JavaScript

class StudentManagementSystem {
    constructor() {
        this.students = JSON.parse(localStorage.getItem('students')) || [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.displayStudents();
        this.updateDashboard();
        this.setupNavigation();
    }

    setupNavigation() {
        // Smooth scroll and active nav
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    
                    // Update active class
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }

    bindEvents() {
        // Form submission
        document.getElementById('studentForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addStudent();
        });

        // Reset button
        document.getElementById('resetBtn').addEventListener('click', () => {
            document.getElementById('studentForm').reset();
        });

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchStudents(e.target.value);
        });

        // Filter by course
        document.getElementById('filterCourse').addEventListener('change', () => {
            this.filterStudents();
        });

        // Filter by status
        document.getElementById('filterStatus').addEventListener('change', () => {
            this.filterStudents();
        });

        // Edit modal close
        document.querySelector('.close').addEventListener('click', () => {
            this.closeModal();
        });

        // Edit form submission
        document.getElementById('editForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateStudent();
        });

        // Close modal on outside click
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('editModal');
            if (e.target === modal) {
                this.closeModal();
            }
        });
    }

    addStudent() {
        const student = {
            id: document.getElementById('studentId').value,
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            course: document.getElementById('course').value,
            grade: parseFloat(document.getElementById('grade').value),
            enrollmentDate: document.getElementById('enrollmentDate').value,
            status: document.getElementById('status').value
        };

        // Check if student ID already exists
        if (this.students.some(s => s.id === student.id)) {
            alert('Student ID already exists!');
            return;
        }

        this.students.push(student);
        this.saveToLocalStorage();
        this.displayStudents();
        this.updateDashboard();
        document.getElementById('studentForm').reset();
        alert('Student added successfully!');
    }

    displayStudents(studentsToDisplay = this.students) {
        const tbody = document.getElementById('studentTableBody');
        tbody.innerHTML = '';

        if (studentsToDisplay.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8" style="text-align: center;">No students found</td></tr>';
            return;
        }

        studentsToDisplay.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.course}</td>
                <td>${student.grade}%</td>
                <td><span class="status-badge status-${student.status.toLowerCase()}">${student.status}</span></td>
                <td class="action-buttons">
                    <button class="btn btn-success" onclick="sms.editStudent(${this.students.indexOf(student)})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-danger" onclick="sms.deleteStudent(${this.students.indexOf(student)})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    editStudent(index) {
        const student = this.students[index];
        document.getElementById('editIndex').value = index;
        document.getElementById('editStudentId').value = student.id;
        document.getElementById('editFullName').value = student.name;
        document.getElementById('editEmail').value = student.email;
        document.getElementById('editPhone').value = student.phone;
        document.getElementById('editCourse').value = student.course;
        document.getElementById('editGrade').value = student.grade;
        document.getElementById('editStatus').value = student.status;

        document.getElementById('editModal').style.display = 'block';
    }

    updateStudent() {
        const index = document.getElementById('editIndex').value;
        
        this.students[index] = {
            id: document.getElementById('editStudentId').value,
            name: document.getElementById('editFullName').value,
            email: document.getElementById('editEmail').value,
            phone: document.getElementById('editPhone').value,
            course: document.getElementById('editCourse').value,
            grade: parseFloat(document.getElementById('editGrade').value),
            enrollmentDate: this.students[index].enrollmentDate,
            status: document.getElementById('editStatus').value
        };

        this.saveToLocalStorage();
        this.displayStudents();
        this.updateDashboard();
        this.closeModal();
        alert('Student updated successfully!');
    }

    deleteStudent(index) {
        if (confirm('Are you sure you want to delete this student?')) {
            this.students.splice(index, 1);
            this.saveToLocalStorage();
            this.displayStudents();
            this.updateDashboard();
            alert('Student deleted successfully!');
        }
    }

    searchStudents(query) {
        query = query.toLowerCase();
        const filtered = this.students.filter(student => 
            student.name.toLowerCase().includes(query) ||
            student.id.toLowerCase().includes(query) ||
            student.course.toLowerCase().includes(query) ||
            student.email.toLowerCase().includes(query)
        );
        this.displayStudents(filtered);
    }

    filterStudents() {
        const courseFilter = document.getElementById('filterCourse').value;
        const statusFilter = document.getElementById('filterStatus').value;

        let filtered = this.students;

        if (courseFilter) {
            filtered = filtered.filter(s => s.course === courseFilter);
        }

        if (statusFilter) {
            filtered = filtered.filter(s => s.status === statusFilter);
        }

        this.displayStudents(filtered);
    }

    updateDashboard() {
        const totalStudents = this.students.length;
        const activeStudents = this.students.filter(s => s.status === 'Active').length;
        const avgGrade = totalStudents > 0 
            ? (this.students.reduce((sum, s) => sum + s.grade, 0) / totalStudents).toFixed(2)
            : 0;

        document.getElementById('totalStudents').textContent = totalStudents;
        document.getElementById('activeStudents').textContent = activeStudents;
        document.getElementById('avgGrade').textContent = avgGrade + '%';
    }

    closeModal() {
        document.getElementById('editModal').style.display = 'none';
    }

    saveToLocalStorage() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }
}

// Initialize the system
const sms = new StudentManagementSystem();

// Add some sample data if no students exist
if (sms.students.length === 0) {
    const sampleStudents = [
        {
            id: 'S001',
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            course: 'Computer Science',
            grade: 85,
            enrollmentDate: '2024-01-15',
            status: 'Active'
        },
        {
            id: 'S002',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '098-765-4321',
            course: 'Engineering',
            grade: 92,
            enrollmentDate: '2024-01-20',
            status: 'Active'
        },
        {
            id: 'S003',
            name: 'Mike Johnson',
            email: 'mike.j@example.com',
            phone: '555-123-4567',
            course: 'Business',
            grade: 78,
            enrollmentDate: '2024-02-01',
            status: 'Active'
        }
    ];

    sampleStudents.forEach(student => sms.students.push(student));
    sms.saveToLocalStorage();
    sms.displayStudents();
    sms.updateDashboard();
}