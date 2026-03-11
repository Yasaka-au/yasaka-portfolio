/**
 * Yasaka Portfolio - Dynamic Drive Sync Engine
 * This script fetches files from Google Apps Script and renders them into the masonry grid.
 */

async function syncPortfolioFolder(folderId, type = 'image') {
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwmV6Efa1IkuLuza0uNBBOWrH6ojAHktjBaHXYL8H8tF2Pc2lYRi3XZPFbmhdB05xpX/exec'; // Final Fixed URL
    const grid = document.querySelector('.masonry-grid');
    const loading = document.getElementById('loading-state');

    if (SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL_HERE') {
        console.warn('Sync Engine: Please provide your Google Apps Script URL in sync_drive.js');
        // If no URL, we keep the original content if it exists, or show a message
        return;
    }

    try {
        const response = await fetch(`${SCRIPT_URL}?id=${folderId}`);
        const files = await response.json();

        if (files.error) {
            console.error('Sync Error:', files.error);
            return;
        }

        // Clear existing hardcoded items
        grid.innerHTML = '';

        files.forEach(file => {
            const item = document.createElement('div');
            item.className = 'masonry-item';

            if (type === 'video' || file.mimeType.startsWith('video/')) {
                item.classList.add('video-item');
                const iframe = document.createElement('iframe');
                iframe.src = `https://drive.google.com/file/d/${file.id}/preview`;
                iframe.setAttribute('allow', 'autoplay');
                item.appendChild(iframe);
            } else {
                const img = document.createElement('img');
                img.src = `https://lh3.googleusercontent.com/u/0/d/${file.id}`;
                img.alt = file.name;
                item.appendChild(img);
            }

            grid.appendChild(item);
        });

        // Re-initialize Masonry and Reveal
        initializeGallery();

    } catch (err) {
        console.error('Failed to sync with Drive:', err);
    }
}

function initializeGallery() {
    const grid = document.querySelector('.masonry-grid');
    const loading = document.getElementById('loading-state');

    imagesLoaded(grid, function () {
        // Hide loading state
        gsap.to(loading, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            onComplete: () => loading.style.display = 'none'
        });

        // Reveal Header
        gsap.to('.project-hero .reveal-up', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.2
        });

        var msnry = new Masonry(grid, {
            itemSelector: '.masonry-item',
            columnWidth: '.masonry-item',
            percentPosition: true,
            gutter: 20
        });

        // Fade in items
        gsap.to('.masonry-item', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });
    });
}
