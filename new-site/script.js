// Simple JavaScript for mobile menu toggle and PDF opening

// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger');
    
    menu.classList.toggle('menu-open');
    hamburger.classList.toggle('active');
}

// Open Bylaws PDF
function openBylawsPdf() {
    window.open('files/Bylaws of the Kentucky Party.pdf', '_blank');
}

// Open Platform PDF (placeholder - update with actual PDF path when available)
function openPlatformPdf() {
    // Update this path when the platform PDF is available
    alert('Platform PDF will be available soon. Please check back later.');
}

// Redirect to donation page for store purchases
function goToDonate() {
    window.open('https://www.gofundme.com/f/kentucky-requires-rational-and-honest-local-representation?lid=9vrqjj6iqr2y', '_blank');
}

// Close mobile menu when clicking on a link (for better UX)
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Only close menu if it's currently open (mobile view)
            if (menu.classList.contains('menu-open')) {
                menu.classList.remove('menu-open');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const navigation = document.querySelector('.navigation');
        
        if (!navigation.contains(event.target) && menu.classList.contains('menu-open')) {
            menu.classList.remove('menu-open');
            hamburger.classList.remove('active');
        }
    });
});
// Image Modal Functions
function openImageModal(imageSrc, title) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeImageModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeImageModal();
        }
    });
});