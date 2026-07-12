'use strict';

/* ==========================
   Función auxiliar
========================== */

const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

/* ==========================
   Sidebar (Mostrar contactos)
========================== */

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => {
    elementToggleFunc(sidebar);
  });
}

/* ==========================
   Portfolio Filter
========================== */

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

function filterProjects(category) {

  filterItems.forEach(item => {

    if (
      category === "todos" ||  // <--- ¡Aquí está el cambio clave!
      category === item.dataset.category
    ) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }

  });

}

if (select) {

  select.addEventListener("click", () => {
    elementToggleFunc(select);
  });

}

selectItems.forEach(item => {

  item.addEventListener("click", function () {

    const value = this.innerText.toLowerCase();

    if (selectValue) {
      selectValue.innerText = this.innerText;
    }

    if (select) {
      elementToggleFunc(select);
    }

    filterProjects(value);

  });

});

let lastFilterBtn = filterBtns.length > 0 ? filterBtns[0] : null;

filterBtns.forEach(button => {

  button.addEventListener("click", function () {

    const value = this.innerText.toLowerCase();

    if (selectValue) {
      selectValue.innerText = this.innerText;
    }

    filterProjects(value);

    if (lastFilterBtn) {
      lastFilterBtn.classList.remove("active");
    }

    this.classList.add("active");
    lastFilterBtn = this;

  });

});

/* ==========================
   Contact Form
========================== */

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formBtn) {

  formInputs.forEach(input => {

    input.addEventListener("input", () => {

      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });

  });

}

/* ==========================
   Navegación entre páginas
========================== */

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {

  link.addEventListener("click", function () {

    const pageName = this.innerText.toLowerCase();

    navigationLinks.forEach(nav => {
      nav.classList.remove("active");
    });

    pages.forEach(page => {

      if (page.dataset.page === pageName) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }

    });

    this.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});

// ==========================
// Funcionalidad Dinámica de Modales (Portafolio)
// ==========================
const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');

// Abrir el modal correspondiente
openModalBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); 
    // Obtenemos el ID del modal que este botón debe abrir
    const targetModalId = this.getAttribute('data-target');
    const modal = document.getElementById(targetModalId);
    
    if(modal) {
      modal.classList.add('active');
    }
  });
});

// Cerrar modales desde los botones X
closeModalBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Busca el contenedor padre que tenga la clase modal-container y lo cierra
    const modal = this.closest('.modal-container');
    if(modal) {
      modal.classList.remove('active');
    }
  });
});

// Cerrar el modal al hacer clic afuera de la caja de contenido
window.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-container')) {
    e.target.classList.remove('active');
  }
});