// script.js

// Datos de los platos
const menuItems = [
    { name: "Bruschetta", type: "appetizers" },
    { name: "Ensalada César", type: "appetizers" },
    { name: "Sopa del Día", type: "appetizers" },
    { name: "Filete a la parrilla", type: "main" },
    { name: "Pasta al pesto", type: "main" },
    { name: "Pollo al curry", type: "main" },
    { name: "Tarta de chocolate", type: "desserts" },
    { name: "Helado de vainilla", type: "desserts" },
    { name: "Fruta fresca", type: "desserts" }
];

// Función para cargar los platos en la lista
function loadMenuItems(filter = "all") {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = ''; // Limpiar la lista antes de cargar

    menuItems.forEach(item => {
        if (filter === "all" || item.type === filter) {
            const li = document.createElement('li');
            li.textContent = item.name;
            menuList.appendChild(li);
        }
    });
}

// Función para mostrar animaciones al hacer scroll
function handleScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    }
    
    // Cargar los elementos del menú al cargar la página
    window.onload = () => {
        loadMenuItems(); // Cargar todos los elementos al inicio
    
        // Agregar eventos a los botones de filtro
        const filterButtons = document.querySelectorAll('.filter-button');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                loadMenuItems(filter); // Cargar elementos según el filtro seleccionado
            });
        });
    };
    
    // Agregar evento de scroll
    window.addEventListener('scroll', handleScroll);