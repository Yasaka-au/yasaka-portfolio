document.addEventListener('DOMContentLoaded', () => {
    // 1. GLOBAL SYSTEMS

    // Lenis Smooth Scroll
    let lenis;
    try {
        lenis = new Lenis({
            lerp: 0.1, // Using lerp for a smoother feel
            duration: 1.2,
            smoothWheel: true,
        });

        // Use GSAP ticker to drive Lenis
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Sync ScrollTrigger with Lenis
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.lagSmoothing(0);
    } catch (e) {
        console.warn('Lenis failed to initialize, continuing without smooth scroll:', e);
    }

    // Static Header Scroll Effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Static Mobile Menu Logic
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileLinks = document.querySelectorAll('.mobile-nav-item');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileToggle.classList.toggle('open');
            const isOpen = !mobileMenu.classList.contains('hidden');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileToggle.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // 2. CUSTOM CURSOR
    const cursor = document.querySelector('.custom-cursor');
    const cursorGlow = document.querySelector('.cursor-glow');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out"
        });

        gsap.to(cursorGlow, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    // Cursor scale on hover
    const interactables = document.querySelectorAll('a, button, .project-card, .skill-tag, .theme-toggle');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });

    // 3. MAGNETIC BUTTONS
    const magnets = document.querySelectorAll('.magnetic');
    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', (e) => {
            const position = magnet.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;

            const strength = magnet.getAttribute('data-strength') || 40;

            gsap.to(magnet, {
                x: x * (strength / 100),
                y: y * (strength / 100),
                duration: 0.4,
                ease: "power2.out"
            });
        });

        magnet.addEventListener('mouseleave', (e) => {
            gsap.to(magnet, {
                x: 0,
                y: 0,
                duration: 0.4,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // 4. ANIMATED BACKGROUND SPHERES
    const sphere1 = document.getElementById('sphere-1');
    const sphere2 = document.getElementById('sphere-2');

    if (sphere1) {
        gsap.set(sphere1, { xPercent: -20, yPercent: -20 });
        gsap.to(sphere1, {
            xPercent: 20,
            yPercent: 20,
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    if (sphere2) {
        gsap.set(sphere2, { xPercent: 50, yPercent: 50 });
        gsap.to(sphere2, {
            xPercent: -50,
            yPercent: -50,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    // 5. PARALLAX EFFECT FOR BACKGROUND
    document.addEventListener('mousemove', (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 40;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 40;

        gsap.to('.animated-bg', {
            x: xPos,
            y: yPos,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Hero reveal handled in finishIntro()

    // 7. SCROLL REVEALS
    const revealUp = document.querySelectorAll('.reveal-up');
    revealUp.forEach((el) => {
        gsap.fromTo(el, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });
    });

    gsap.fromTo('.reveal-left', {
        x: -100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: '.reveal-left',
            start: "top 80%"
        }
    });

    gsap.fromTo('.reveal-right', {
        x: 100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: '.reveal-right',
            start: "top 80%"
        }
    });

    // 8. TIMELINE (Static)
    // The timeline is now fully loaded by default as requested.



    // 12. GOOEY TEXT INTRO
    const elts = {
        text1: document.getElementById("text1"),
        text2: document.getElementById("text2")
    };

    const texts = ["Step", "Step", "Into", "Your", "Imagination"];
    const morphTime = 1;
    const cooldownTime = 0.5;

    let textIndex = 0;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let introFinished = false;

    // Initialize first words
    if (elts.text1 && elts.text2) {
        elts.text1.textContent = texts[0];
        elts.text2.textContent = texts[1];
        elts.text1.style.opacity = "100%";
    }

    function doMorph() {
        morph -= cooldown;
        cooldown = 0;

        let fraction = morph / morphTime;

        if (fraction > 1) {
            cooldown = cooldownTime;
            fraction = 1;
        }

        setMorph(fraction);
    }

    function setMorph(fraction) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
        morph = 0;
        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";
        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
    }

    function animateIntro() {
        if (introFinished) return;

        requestAnimationFrame(animateIntro);

        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime.getTime() - time.getTime()) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
                // If this is the last word (Imagination), show it then finish
                if (textIndex >= texts.length - 1) {
                    doMorph(); // display Imagination
                    finishIntro();
                    return;
                }
            }
            doMorph();
        } else {
            doCooldown();
        }
    }

    function finishIntro() {
        introFinished = true;
        const overlay = document.getElementById('intro-overlay');
        overlay.classList.add('fade-out');
        document.body.classList.remove('intro-active');

        // Trigger Hero Reveal after intro
        const tl = gsap.timeline();
        tl.to('.fade-up', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.5
        });
    }

    // Start intro
    animateIntro();

    // 13. SOFTWARE PANEL MORPHING
    const panelAppName = document.getElementById('panel-app-name');
    const panelTabs = document.getElementById('panel-tabs');
    const panelLayersList = document.getElementById('panel-layers-list');
    const panelToolbar = document.getElementById('panel-toolbar');
    const panelMainView = document.getElementById('panel-main-view');
    const psPanel = document.querySelector('.ps-panel');

    const softwareStates = [
        {
            name: "Photoshop",
            class: "ps-theme",
            view: "canvas-view",
            tools: ["mouse-pointer-2", "type", "image", "crop", "layers"],
            tabs: ["Layers", "Paths"],
            layers: ["Text_Overlay", "Hero_Visual", "Background"]
        },
        {
            name: "Figma",
            class: "ai-theme",
            view: "canvas-view",
            tools: ["mouse-pointer-2", "shapes", "palette", "layers", "component"],
            tabs: ["Assets", "Layers"],
            layers: ["Design_System", "User_Flow", "High_Fi_Wireframe"]
        },
        {
            name: "After Effects",
            class: "pr-theme",
            view: "timeline-view",
            tools: ["film", "scissors", "music", "video", "play"],
            tabs: ["Timeline", "Effects"],
            layers: ["Motion_Graphics", "Composition", "Keyframes"]
        },
        {
            name: "VS Code",
            class: "vs-theme",
            view: "editor-view",
            tools: ["code", "search", "git-branch", "terminal", "settings"],
            tabs: ["index.html", "style.css"],
            layers: ["index.html", "style.js", "main.js"]
        }
    ];

    let currentStateIndex = 0;

    function updatePanelState(index) {
        const state = softwareStates[index];

        // Update Theme Class
        psPanel.classList.remove('ps-theme', 'ai-theme', 'pr-theme', 'vs-theme');
        psPanel.classList.add(state.class);

        // Animate Content Out
        const tl = gsap.timeline({
            onComplete: () => {
                // Change Text Content
                panelAppName.textContent = state.name;

                // Update Toolbar
                panelToolbar.innerHTML = state.tools.map((tool, i) =>
                    `<div class="tool-icon ${i === 0 ? 'active' : ''}"><i data-lucide="${tool}"></i></div>`
                ).join('');

                // Update Workspace View
                const views = panelMainView.children;
                for (let v of views) {
                    v.classList.add('hidden');
                    v.classList.remove('active');
                }
                const activeView = panelMainView.querySelector(`.${state.view}`);
                if (activeView) {
                    activeView.classList.remove('hidden');
                    activeView.classList.add('active');
                }

                // Update Tabs
                panelTabs.innerHTML = state.tabs.map((tab, i) =>
                    `<div class="ps-tab ${i === 0 ? 'active' : ''}">${tab}</div>`
                ).join('');

                // Update Layers
                panelLayersList.innerHTML = state.layers.map((layer, i) => `
                    <div class="layer-item ${i === 0 ? 'active' : ''}">
                        <div class="layer-vis"><i data-lucide="eye"></i></div>
                        <div class="layer-name">${layer}</div>
                    </div>
                `).join('');

                lucide.createIcons();

                // Animate Content In
                gsap.fromTo([panelAppName, panelToolbar, panelMainView, panelTabs, panelLayersList], {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out"
                });
            }
        });

        tl.to([panelAppName, panelToolbar, panelMainView, panelTabs, panelLayersList], {
            opacity: 0,
            y: -10,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.in"
        });
    }

    // Auto-cycle through states
    setInterval(() => {
        currentStateIndex = (currentStateIndex + 1) % softwareStates.length;
        updatePanelState(currentStateIndex);
    }, 4000);

    // 11. INITIALIZE TOOLS
    lucide.createIcons();
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
});
