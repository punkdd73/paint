const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// We use the image source from the img tag inside the clicked item
document.querySelectorAll('.art-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if(img) {
            lightbox.style.display = 'flex';
            lightbox.style.justifyContent = 'center';
            lightbox.style.alignItems = 'center';
            lightboxImg.src = img.src;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close on background click
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" && lightbox.style.display === 'flex') {
        closeLightbox();
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
