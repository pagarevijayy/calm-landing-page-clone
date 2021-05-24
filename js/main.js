console.log('javascript connected!')

const hamburgerIcon = document.getElementById('hamburgerIcon');
const mobileNav = document.getElementById('mobileNav');

function toggleHamburgerMenu() {
    const isActive = "is-active";

    if (hamburgerIcon.classList.contains(isActive)) {
        // close nav menu
        hamburgerIcon.classList.remove(isActive);
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('block');


    } else {
        // open nav menu
        hamburgerIcon.classList.add(isActive);
        mobileNav.classList.add('block');
        mobileNav.classList.remove('hidden');

    }
}

/*
@todo:
1. breathe buble location responsive
2. mobile menu styles
*/