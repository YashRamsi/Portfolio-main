// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Modal Logic
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");

contactBtn.onclick = function () {
    contactModal.style.display = "block";
};

window.onclick = function (event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
};

// Skill Filter Functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.skill-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'inline-block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Ensure all modal close buttons are functional
document.querySelectorAll('.modal .close').forEach(button => {
    button.addEventListener('click', (event) => {
        const modal = event.target.closest('.modal');
        if (modal) {
            modal.style.display = "none";
        }
    });
});

// Initialize particles.js with refined effect
particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#5cb85c" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#5cb85c",
            opacity: 0.4,
            width: 1
        },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    },
    retina_detect: true
});

// Filter Portfolio Items
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Open Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Close Modal on Outside Click
window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Open Certification Modal
function openCertModal(imgSrc, certTitle, certLink) {
    var modal = document.getElementById("certModal");
    var modalImg = document.getElementById("certModalImg");
    var titleText = document.getElementById("certModalTitle");
    var certLinkElement = document.getElementById("certLink");

    modal.style.display = "flex";  // Center modal
    modalImg.src = "assets/certs/" + imgSrc;
    titleText.innerHTML = certTitle;
    certLinkElement.href = certLink;
    certLinkElement.innerHTML = "View Certificate";
}

// Close Certification Modal
function closeCertModal() {
    var modal = document.getElementById("certModal");
    modal.style.display = "none";
}

// Close Certification Modal on Outside Click
window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


// Initialize the interactive map
function initMap() {
    var map = L.map('map').setView([29.7189, -95.3392], 8); // Default: Leeds, UK

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([29.7189, -95.3392]).addTo(map)
        .bindPopup("Yaswanth Pavuluri lives here!")
        .openPopup();
}

// Load the map after the page loads
document.addEventListener("DOMContentLoaded", function() {
    initMap();
});

// Toggle Mobile Navigation Menu
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";
document.querySelector(".navbar").prepend(menuToggle);

const navMenu = document.querySelector(".nav-center");
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-center a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");

    // Create the hamburger menu icon (☰)
    const hamburgerMenu = document.createElement("div");
    hamburgerMenu.classList.add("hamburger-menu");
    hamburgerMenu.innerHTML = "&#9776;"; // Unicode for hamburger menu (☰)

    // Create the dropdown menu
    const hamburgerDropdown = document.createElement("div");
    hamburgerDropdown.classList.add("hamburger-dropdown");
    hamburgerDropdown.innerHTML = `
        <a href="#home" class="menu-item">HOME</a>
        <a href="#about" class="menu-item">INTRO</a>
        <a href="#skills" class="menu-item">SKILLS</a>
        <a href="#certifications" class="menu-item">CERTIFICATIONS</a>
        <a href="#services" class="menu-item">SERVICES</a>
        <a href="#portfolio" class="menu-item">DEV HUB</a>
        <a href="#contact" class="menu-item">CONTACT</a>
    `;

    document.body.appendChild(hamburgerMenu);
    document.body.appendChild(hamburgerDropdown);

    // Toggle dropdown menu when clicking the hamburger icon
    hamburgerMenu.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent immediate closing when clicking the icon
        hamburgerDropdown.style.display = (hamburgerDropdown.style.display === "block") ? "none" : "block";
    });

    // Close dropdown when clicking a menu item
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", function () {
            hamburgerDropdown.style.display = "none"; // Close menu
        });
    });

    // Close dropdown when clicking anywhere outside of it
    document.addEventListener("click", function (event) {
        if (!hamburgerMenu.contains(event.target) && !hamburgerDropdown.contains(event.target)) {
            hamburgerDropdown.style.display = "none";
        }
    });

    // Scroll behavior: hide navbar and show hamburger menu on scroll down
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling Down
            navbar.style.top = "-80px"; // Hide Navbar
            hamburgerMenu.style.display = "block"; // Show Hamburger
        } else {
            // Scrolling Up
            navbar.style.top = "0"; // Show Navbar
            hamburgerMenu.style.display = "none"; // Hide Hamburger
            hamburgerDropdown.style.display = "none"; // Close dropdown
        }
        lastScrollTop = scrollTop;
    });
});