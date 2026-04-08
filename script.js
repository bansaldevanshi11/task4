// Enroll in a course
function enrollCourse(courseName) {
    alert(`🎉 Successfully enrolled in ${courseName}!\n\nGo to "My Progress" to start learning.`);
}

// Continue lesson - opens video modal
function continueLesson(courseName) {
    const modal = document.getElementById('video-modal');
    const lessonTitle = document.getElementById('lesson-title');
    
    if (modal && lessonTitle) {
        lessonTitle.textContent = `${courseName} - Lesson 1: Introduction`;
        modal.classList.remove('hidden');
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('video-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Previous lesson
function prevLesson() {
    alert('This is the first lesson!');
}

// Next lesson
function nextLesson() {
    alert('Moving to next lesson... (Demo)');
    closeModal();
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('video-modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Search functionality (demo)
const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.course-card.horizontal');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Filter by category (demo)
const categorySelect = document.getElementById('category');
if (categorySelect) {
    categorySelect.addEventListener('change', () => {
        alert('Filter applied! (Demo - would filter courses)');
    });
}

// Filter by level (demo)
const levelSelect = document.getElementById('level');
if (levelSelect) {
    levelSelect.addEventListener('change', () => {
        alert('Level filter applied! (Demo)');
    });
}

// Update enrolled count from localStorage (optional enhancement)
function updateEnrolledCount() {
    const enrolledCount = document.getElementById('enrolled-count');
    if (enrolledCount) {
        // Could read from localStorage for persistence
        // For now, using default value
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateEnrolledCount();
});
