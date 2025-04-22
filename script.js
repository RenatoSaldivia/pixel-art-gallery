let currentIndex = 0; // Índice de la imagen actual
const images = [
    {
        src: "Art/Angus Young.png",
        name: "Angus Young",
        description: "Icono del rock",
        size: "135x135 px"
    },
    {
        src: "Art/Audrey Hepburn.png",
        name: "Audrey Hepburn",
        description: "Estrella de cine clásica",
        size: "135x135 px"
    },
    {
        src: "Art/Bebito y Lili.png",
        name: "Bebés",
        description: "Estrella de cine clásica",
        size: "135x135 px"
    },
    {
        src: "Art/Bebito.png",
        name: "Bebés",
        description: "Hijo",
        size: "135x135 px"
    },
    {
        src: "Art/Bee Girl.png",
        name: "Bee Girl",
        description: "de Blind Melon - No Rain",
        size: "135x135 px"
    }
];

function openModal(imageSrc, name, description, size) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const caption = document.getElementById("caption");

    // Encuentra el índice de la imagen seleccionada
    currentIndex = images.findIndex(image => image.src === imageSrc);

    // Cambia la fuente de la imagen y el texto del caption
    modalImage.src = imageSrc;
    caption.innerHTML = `<strong>Name:</strong> ${name}<br><strong>Description:</strong> ${description}<br><strong>Size:</strong> ${size}`;

    // Muestra el modal
    modal.style.display = "block";

    // Cambia el cursor a normal al abrir el modal
    const galleryImages = document.querySelectorAll('.gallery img'); // Asumiendo que tus imágenes están en una clase llamada "gallery"
    galleryImages.forEach(img => {
        img.classList.add('cursor-default'); // Agrega la clase para cursor normal
    });
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";

    // Restaura el cursor a mano cuando se cierra el modal
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.classList.remove('cursor-default'); // Quita la clase para cursor normal
    });
}

function navigate(direction) {
    // Calcula el índice de la siguiente o anterior imagen
    currentIndex = (currentIndex + direction + images.length) % images.length;

    // Actualiza la imagen y el caption del modal
    const nextImage = images[currentIndex];
    const modalImage = document.getElementById("modal-image");
    const caption = document.getElementById("caption");

    modalImage.src = nextImage.src;
    caption.innerHTML = `<strong>Nombre:</strong> ${nextImage.name}<br><strong>Descripción:</strong> ${nextImage.description}<br><strong>Tamaño:</strong> ${nextImage.size}`;
}

// Contacto
function openContactModal() {
    const modal = document.getElementById("contact-modal");
    modal.style.display = "block";
}

function closeContactModal() {
    const modal = document.getElementById("contact-modal");
    modal.style.display = "none";
}

// About me
function openAboutMeModal() {
    const modal = document.getElementById("about-me-modal");
    modal.style.display = "block";
}

function closeAboutMeModal() {
    const modal = document.getElementById("about-me-modal");
    modal.style.display = "none";
}


// Cerrar modal al hacer clic fuera del contenido
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    const contactModal = document.getElementById("contact-modal");
    const aboutMeModal = document.getElementById("about-me-modal"); // Modal "Sobre mí"

    if (event.target == modal) {
        closeModal();
    }
    if (event.target == contactModal) {
        closeContactModal();
    }
    if (event.target == aboutMeModal) { // Lógica para cerrar "Sobre mí"
        closeAboutMeModal();
    }
};


// Para mejorar la usabilidad en dispositivos móviles
document.querySelector('.dropdown-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    this.nextElementSibling.classList.toggle('show');
});

