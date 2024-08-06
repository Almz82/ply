/* animation INDEX */
const animationEnter = () => {
    const logoUn = document.querySelector('.logo.un');
    const logoDeux = document.querySelector('.logo.deux');
    const logoTrois = document.querySelector('.logo.trois');
    const names = document.querySelector('#names');
    const main = document.querySelector('#main');
    const hamburger = document.querySelector('.hamburger');

    const tl = gsap.timeline({
        defaults: {
            duration: 1.2, ease: 'expo.out'
        }
    });

    tl
        .fromTo(hamburger, {autoAlpha: 0}, {autoAlpha: 1, duration: 3}, 1)
        .fromTo(logoDeux, {autoAlpha: 0}, {autoAlpha: 1, duration: 3}, 1)
        .fromTo(logoUn, {autoAlpha: 0, xPercent: 90}, {autoAlpha: 1, xPercent: 0}, 1)
        .fromTo(logoTrois, {autoAlpha: 0, xPercent: -90}, {autoAlpha: 1, xPercent: 0}, 1)
        .to(names, {autoAlpha: 1, duration: 3}, 2)
        .to(main, {autoAlpha: 1}, 1)
    return tl;
}

/* animation NAV */
const linesIn = () => {
    const lineContainer = document.querySelector('.line-container');
    const lines = document.querySelectorAll('.line');
    const halfLeft = document.querySelectorAll('.half:nth-child(1)');
    const halfRight = document.querySelectorAll('.half:nth-child(2)');

    lines.forEach(line => {
        // on génère un nombre aléatoire entre 1 et 100
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }
        let x = Math.random() * (65 - 35) + 35;
        let y = 100 - x;
        // now we can set this variable with js dynamicaly
        line.querySelector('.half:nth-child(1)').style.setProperty('flex-basis', x+'%');
        line.querySelector('.half:nth-child(2)').style.setProperty('flex-basis', y+'%');
    });

    const tl = gsap.timeline({
        defaults: {
            duration: .4
        }
    });

    tl
        .set(lineContainer, { zIndex: 100})
        .set(halfLeft, {autoAlpha: 0, xPercent: -100, duration: 0}, 0)
        .set(halfRight, {autoAlpha: 0, xPercent: 100, duration: 0}, 0)
        .to(halfLeft, {autoAlpha: 1, xPercent: 0 }, 0)
        .to(halfRight, {autoAlpha: 1, xPercent: 0 }, 0)
    return tl;
}

const linesOut = () => {
    const lineContainer = document.querySelector('.line-container');
    const lines = document.querySelectorAll('.line');
    const halfLeft = document.querySelectorAll('.half:nth-child(1)');
    const halfRight = document.querySelectorAll('.half:nth-child(2)');

    lines.forEach(line => {
        // on génère un nombre aléatoire entre 1 et 100
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }
        let x = Math.random() * (65 - 35) + 35;
        let y = 100 - x;
        // now we can set this variable with js dynamicaly
        line.querySelector('.half:nth-child(1)').style.setProperty('flex-basis', x+'%');
        line.querySelector('.half:nth-child(2)').style.setProperty('flex-basis', y+'%');
    });

    const tl = gsap.timeline({
        defaults: {
            duration: .4
        }
    });

    tl
        .set(lineContainer, { zIndex: 0})
        .to(halfLeft, {autoAlpha: 0, xPercent: -100}, 0)
        .to(halfRight, {autoAlpha: 0, xPercent: 100}, 0)
    return tl;
}

const openNav = () => {
    const barUn = document.querySelector('.bar:nth-child(1)');
    const barDeux = document.querySelector('.bar:nth-child(2)');
    const barTrois = document.querySelector('.bar:nth-child(3)');
    const menu = document.querySelector('.nav');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3
        }
    });

    tl
        .to(barUn, {y: 13, rotationZ: 45}, 0)
        .to(barDeux, {autoAlpha: 0}, 0)
        .to(barTrois, {y: -13, rotationZ: -45}, 0)
        .to(menu, {autoAlpha: 1, duration: .2}, .3)
    return tl;
}

const openNavSmall = () => {
    const barUn = document.querySelector('.bar:nth-child(1)');
    const barDeux = document.querySelector('.bar:nth-child(2)');
    const barTrois = document.querySelector('.bar:nth-child(3)');
    const menu = document.querySelector('.nav');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3
        }
    });

    tl
        .to(barUn, {y: 9, rotationZ: 45}, 0)
        .to(barDeux, {autoAlpha: 0}, 0)
        .to(barTrois, {y: -9, rotationZ: -45}, 0)
        .to(menu, {autoAlpha: 1, duration: .2}, .3)
    return tl;
}

const closeNav = () => {
    const barUn = document.querySelector('.bar:nth-child(1)');
    const barDeux = document.querySelector('.bar:nth-child(2)');
    const barTrois = document.querySelector('.bar:nth-child(3)');
    const menu = document.querySelector('.nav');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3
        }
    });

    tl
        .to(barUn, {y: 0, rotationZ: 0}, 0)
        .to(barDeux, {autoAlpha: 1}, 0)
        .to(barTrois, {y: 0, rotationZ: 0}, 0)
        .to(menu, {autoAlpha: 0, duration: 0}, 0)
    return tl;
}

const openProjets = () => {
    const projetsButton = document.querySelector('#projets');
    const projetsMenu = projetsButton.nextElementSibling;

    const tl = gsap.timeline({
        defaults: {
            duration: 0.5
        }
    });

    tl
        .set(projetsMenu, {height: 0}, 0)
        .to(projetsMenu, {height: "auto"}, 0)
        .to(projetsMenu, {autoAlpha: 1}, 0.5)
    return tl;
}

const closeProjets = () => {
    const projetsButton = document.querySelector('#projets');
    const projetsMenu = projetsButton.nextElementSibling;

    const tl = gsap.timeline({
        defaults: {
            duration: 0.5
        }
    });

    tl
        .to(projetsMenu, {autoAlpha: 0, duration: 0}, 0)
        .to(projetsMenu, {height: 0}, 0)
    return tl;
}

/* animation PAGE TRANSITION */
const pageTransitionOut = () => {
    const halfs = document.querySelectorAll('.half');
    const barUn = document.querySelector('.bar:nth-child(1)');
    const barDeux = document.querySelector('.bar:nth-child(2)');
    const barTrois = document.querySelector('.bar:nth-child(3)');
    const menu = document.querySelector('.nav');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3
        }
    });

    tl
        .to(halfs, {backgroundColor: '#e6e9ea', boxShadow: '0px -10px #e6e9ea'}, 0)
        .to(barUn, {y: 0, rotationZ: 0}, 0)
        .to(barDeux, {autoAlpha: 1}, 0)
        .to(barTrois, {y: 0, rotationZ: 0}, 0)
        .to(menu, {autoAlpha: 0, duration: 0}, 0)
    return tl;
}

const animationPageEnter = () => {
    const main = document.querySelector('#main');

    const tl = gsap.timeline({
        defaults: {
            duration: 1.2, ease: 'expo.out'
        }
    });

    tl
        .to(main, {autoAlpha: 1}, 1)
    return tl;
}

const animationPageOut = () => {
    const main = document.querySelector('#main');

    const tl = gsap.timeline({
        defaults: {
            duration: .6, ease: 'expo.out'
        }
    });

    tl
        .to(main, {autoAlpha: 0}, 0)
    return tl;
}

/* animation générale PAGES */
const animationTitre = () => {
    const titre = document.querySelectorAll('.titre');

    gsap.fromTo(titre, {autoAlpha: 0, xPercent: -100}, {autoAlpha: 1, xPercent: 0, duration: .5, delay: 1, ease: 'expo.out'})
}


/* animation ACTUALITES */
const animationAnneesIn = () => {
    const annees = document.querySelectorAll('.annee');

    gsap.fromTo(annees, {autoAlpha: 0, xPercent: -100}, {autoAlpha: 1, xPercent: 0, duration: .5, stagger: 0.1, delay: 1.1, ease: 'expo.out'})
}

/* animation AUGURE */
const animationVerbes = () => {
	
	const dresser = document.querySelector('#dresser');
	const deriver = document.querySelector('#deriver');
	const pouvoir = document.querySelector('#pouvoir');
	const devorer = document.querySelector('#devorer');
	const crever = document.querySelector('#crever');
	const esquiver = document.querySelector('#esquiver');
	const depouiller = document.querySelector('#depouiller');
	const censurer = document.querySelector('#censurer');
	const disparaitre = document.querySelector('#disparaitre');

	const tl = gsap.timeline({
        defaults: {
            duration: .2, ease: 'expo.out', repeat: -1, yoyo: true, repeatDelay: 5
        }
    });

    tl
		.fromTo(dresser, { autoAlpha: 0 }, { autoAlpha: 1 }, 0)
		.fromTo(deriver, { autoAlpha: 0 }, { autoAlpha: 1 }, 1.5)
		.fromTo(pouvoir, { autoAlpha: 0 }, { autoAlpha: 1 }, 2.5)
		.fromTo(devorer, { autoAlpha: 0 }, { autoAlpha: 1 }, 3)
		.fromTo(crever, { autoAlpha: 0 }, { autoAlpha: 1 }, 5)
		.fromTo(esquiver, { autoAlpha: 0 }, { autoAlpha: 1 }, 6)
		.fromTo(depouiller, { autoAlpha: 0 }, { autoAlpha: 1 }, 7.5)
		.fromTo(censurer, { autoAlpha: 0 }, { autoAlpha: 1 }, 9)
    return tl;

}

/* animation PLY-CV */
const animationPly = () => {
    const logoUn = document.querySelector('.logo.un');
    const logoDeux = document.querySelector('.logo.deux');
    const logoTrois = document.querySelector('.logo.trois');

    const tl = gsap.timeline({
        defaults: {
            duration: 1.2, ease: 'expo.out'
        }
    });

    tl
        .fromTo(logoDeux, {autoAlpha: 0}, {autoAlpha: 1, duration: 3}, 1)
        .fromTo(logoUn, {autoAlpha: 0, xPercent: 90}, {autoAlpha: 1, xPercent: 0}, 1)
        .fromTo(logoTrois, {autoAlpha: 0, xPercent: -90}, {autoAlpha: 1, xPercent: 0}, 1)
    return tl;
}


/* animation CONTACT */
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const animationAdresseOut = () => {
    const lettresAdresse = document.querySelectorAll('span.adresse');
    lettresAdresse.forEach(lettre => {
        gsap.to(lettre, { x: getRandomInt(-200, 200), duration: 1.8, ease: 'power1.out'});
        gsap.to(lettre, { autoAlpha: 0, duration: 2, ease: 'power1.out'});
    });
}

const animationMessageIn = () => {
    const lettresMessage = document.querySelectorAll('span.message');
    const width = document.querySelector(".trigger-zone").offsetWidth;

    lettresMessage.forEach(lettre => {
        gsap.fromTo(lettre, { x: getRandomInt(-200, 200), duration: 1.8, ease: 'power1.in'}, {x : -(90/100*width)});
        gsap.to(lettre, { autoAlpha: 1, duration: 2, ease: 'power2.out'});
    });
}

const animationMessageOut = () => {
    const lettresMessage = document.querySelectorAll('span.message');
    lettresMessage.forEach(lettre => {
        gsap.to(lettre, { autoAlpha: 0});
    });
}

const animationAdresseIn = () => {
    const lettresAdresse = document.querySelectorAll('span.adresse');
    lettresAdresse.forEach(lettre => {
        gsap.to(lettre, { x: 0, duration: 'none', delay: .3});
        gsap.to(lettre, { autoAlpha: 2, duration: 8, ease: 'power4', delay: .3});
    });
}

const copyAdresse = async () => {
    try {
        await navigator.clipboard.writeText("contact@duo-ply.fr");
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}



window.onload = () => {
    const body = document.querySelector('body');
    const content = document.querySelector('.content');

    if(body.dataset.type == "index"){
        animationEnter();
    }
    else{
        animationPageEnter();
        if(content.dataset.type == "actualites"){
            animationTitre();
            animationAnneesIn();
        }
        if(content.dataset.type == "augure"){
            animationTitre();
            animationVerbes();
        }
        if(content.dataset.type == "365"){
            animationTitre();
            animationVerbes();
        }
        if(content.dataset.type == "ply"){
            animationPly();
        }
        if(content.dataset.type == "contact"){
            const adresse = document.querySelector("#line");
            adresse.addEventListener("pointerdown", e => {
                animationAdresseOut();
                copyAdresse();
                const triggerZone = document.querySelector(".trigger-zone");
                triggerZone.style.cursor = "none";
                
                animationMessageIn();

                setTimeout(() => {
                    animationMessageOut();
                    animationAdresseIn();  
                }, 2600);
            }, { once: true });
        }
    }
    

    /* open & close Nav */
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        if(hamburger.dataset.nav == "close"){
            hamburger.dataset.nav = "open";
            if (window.matchMedia("(min-width: 960px)").matches) {
                openNav();
              } else {
                openNavSmall();
              }
            linesIn();
        }
        else{
            hamburger.dataset.nav = "close";
            closeNav();
            linesOut();
        }
        
    });

    /* open & close Projets */
    const projetsButton = document.querySelector('#projets');

    projetsButton.addEventListener('click', () => {
        if(projetsButton.dataset.sub == "close"){
            projetsButton.dataset.sub = "open"
            openProjets();
        }
        else{
            projetsButton.dataset.sub = "close"
            closeProjets();
        }
    })

    /* page transition */
    const links = document.querySelectorAll('a.internal');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            let href = link.href;
            pageTransitionOut();
            if(link.classList.contains('year')){
                animationPageOut();
            }
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        })
    });

}