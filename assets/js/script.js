'use strict';

/* ==========================
   TRADUCCIONES
========================== */

let translations = {};

async function loadTranslations() {
  try {
    const response = await fetch('./assets/js/translations.json');
    translations = await response.json();
    
    // Aplicar idioma al cargar una vez obtenidos los datos
    applyTranslations(currentLang);
  } catch (error) {
    console.error("Error cargando las traducciones:", error);
  }
}


/* ==========================
   FUNCIÓN PARA APLICAR TRADUCCIONES
========================== */

function applyTranslations(lang) {
  // Texto plano
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // HTML (para contenido con etiquetas)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Atributos (placeholder, title, value, etc.)
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const attrData = el.getAttribute('data-i18n-attr');
    const [attr, key] = attrData.split(':');
    if (attr && key && translations[lang] && translations[lang][key]) {
      el.setAttribute(attr, translations[lang][key]);
    }
  });

  // Título de la página
  if (translations[lang] && translations[lang].page_title) {
    document.title = translations[lang].page_title;
  }

  // Actualizar el texto del botón de idioma
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = lang === 'es' ? 'ES' : 'EN';
  }
}

/* ==========================
   CAMBIO DE IDIOMA
========================== */

let currentLang = localStorage.getItem('preferredLang') || 'es';

// Cargar traducciones al iniciar
loadTranslations();

// Evento del botón de idioma
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('preferredLang', currentLang);
    applyTranslations(currentLang);
    // Actualizar el selectValue con el filtro activo
    const activeFilterBtn = document.querySelector('.filter-item button.active');
    if (activeFilterBtn) {
      const filterValue = activeFilterBtn.dataset.filterValue;
      const selectValue = document.querySelector('[data-selecct-value]');
      if (selectValue) {
        const key = filterValue === 'all' ? 'filter_all' : (filterValue === 'academic' ? 'filter_academic' : 'filter_jam');
        if (translations[currentLang] && translations[currentLang][key]) {
          selectValue.textContent = translations[currentLang][key];
        }
      }
    }
  });
}

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
   Portfolio Filter (refactorizado con data-*)
========================== */

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

function filterProjects(category) {
  filterItems.forEach(item => {
    if (category === "all" || category === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Inicializar con "all"
filterProjects("all");

if (select) {
  select.addEventListener("click", () => {
    elementToggleFunc(select);
  });
}

selectItems.forEach(item => {
  item.addEventListener("click", function () {
    const value = this.dataset.selectValue || "all";
    if (selectValue) {
      selectValue.textContent = this.textContent;
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
    const value = this.dataset.filterValue || "all";
    if (selectValue) {
      selectValue.textContent = this.textContent;
    }
    filterProjects(value);
    if (lastFilterBtn) {
      lastFilterBtn.classList.remove("active");
    }
    this.classList.add("active");
    lastFilterBtn = this;
  });
});

function updateSelectValueFromActiveFilter() {
  const activeFilterBtn = document.querySelector('.filter-item button.active');
  if (activeFilterBtn && selectValue) {
    selectValue.textContent = activeFilterBtn.textContent;
  }
}

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
   Navegación entre páginas (usando data-page-target)
========================== */

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const pageName = this.dataset.pageTarget;
    if (!pageName) return;

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

    // Actualizar el hash en la URL sin recargar la página
    if (history.replaceState) {
      history.replaceState(null, null, '#' + pageName);
    } else {
      window.location.hash = '#' + pageName;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// ==========================
// Funcionalidad Dinámica de Modales (Portafolio) - COMENTADO PARA PÁGINAS INDIVIDUALES
// ==========================
// const openModalBtns = document.querySelectorAll('.open-modal-btn');
// const closeModalBtns = document.querySelectorAll('.close-modal-btn');

// openModalBtns.forEach(btn => {
//   btn.addEventListener('click', function(e) {
//     e.preventDefault();
//     const targetModalId = this.getAttribute('data-target');
//     const modal = document.getElementById(targetModalId);
//     if(modal) {
//       modal.classList.add('active');
//     }
//   });
// });

// closeModalBtns.forEach(btn => {
//   btn.addEventListener('click', function() {
//     const modal = this.closest('.modal-container');
//     if(modal) {
//       modal.classList.remove('active');
//     }
//   });
// });

// window.addEventListener('click', function(e) {
//   if (e.target.classList.contains('modal-container')) {
//     e.target.classList.remove('active');
//   }
// });

// Asegurar que el selectValue muestre el filtro activo al cargar
updateSelectValueFromActiveFilter();

/* ==========================
   NAVEGACIÓN POR HASH (URL)
========================== */
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    const targetPage = window.location.hash.substring(1); // ej: 'portfolio'
    const targetLink = document.querySelector(`[data-page-target="${targetPage}"]`);
    if (targetLink) {
      targetLink.click();
    }
  }
});