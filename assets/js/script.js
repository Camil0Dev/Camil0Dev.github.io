'use strict';

/* ==========================
   TRADUCCIONES
========================== */

const translations = {
  es: {
    // Sidebar
    name: 'Camilo Moreno',
    title: 'Desarrollador Unity',
    download_cv: 'Descargar CV',
    show_contacts: 'Mostrar Contactos',
    contact_email: 'Email',
    contact_phone: 'Teléfono',
    contact_github: 'GitHub',
    contact_location: 'Ubicación',
    location_address: 'Bogotá, Colombia',
    // Navbar
    nav_about: 'Sobre mí',
    nav_resume: 'Currículum',
    nav_portfolio: 'Portafolio',
    nav_blog: 'Blog',
    nav_contact: 'Contacto',
    // About
    about_title: 'Acerca de mí',
    about_p1: 'Soy estudiante de Ingeniería de Sistemas y actualmente me estoy formando como desarrollador de videojuegos a través del programa del SENA y Generation Colombia, con un enfoque principal en Unity y C#.',
    about_p2: 'Me apasiona la programación porque disfruto analizar problemas, investigar diferentes soluciones y construir sistemas que den vida a experiencias interactivas. Uno de los aspectos que más me motiva del desarrollo de videojuegos es convertir una idea en una mecánica funcional y ver cómo, poco a poco, un proyecto comienza a tomar forma.',
    about_p3: 'Actualmente estoy desarrollando proyectos personales y académicos para fortalecer mis habilidades en programación, arquitectura de videojuegos y desarrollo con Unity. Mi objetivo es seguir creciendo como Game Programmer, colaborar con equipos de desarrollo y contribuir a la creación de videojuegos que ofrezcan experiencias entretenidas y de calidad.',
    // Service
    service_title: 'Áreas de interés',
    service_1_title: 'Programación de Mecánicas',
    service_1_text: 'Desarrollo de mecánicas de juego en C# utilizando Unity, incluyendo movimiento, combate e interacción entre sistemas.',
    service_2_title: 'Inteligencia Artificial',
    service_2_text: 'Desarrollo de comportamientos básicos para enemigos mediante máquinas de estados, patrullaje y sistemas de detección en Unity.',
    service_3_title: 'Diseño de Niveles',
    service_3_text: 'Diseño de niveles utilizando Tilemaps de Unity, organizando escenarios funcionales para la exploración y la jugabilidad.',
    service_4_title: 'Optimización y Debugging',
    service_4_text: 'Resolución de problemas mediante análisis, depuración de código y búsqueda de soluciones orientadas a mantener proyectos organizados y escalables.',
    // Resume
    resume_title: 'Currículum',
    education_title: 'Educación',
    edu_generation: 'Generation Colombia',
    edu_generation_desc: 'Bootcamp Intensivo en Desarrollo de Software. Capacitación técnica orientada a metodologías ágiles y resolución de problemas.',
    edu_sena: 'SENA',
    edu_sena_desc: 'Técnico en Desarrollo de Videojuegos. Formación enfocada en programación C#, diseño de mecánicas e Inteligencia Artificial en Unity.',
    edu_unad: 'UNAD',
    edu_unad_desc: 'Ingeniería de Sistemas. Fundamentos en Programación Orientada a Objetos (POO), bases de datos y lógica algorítmica.',
    experience_projects: 'Experiencia en Proyectos',
    exp_corazon_title: 'Corazón del Saber (Proyecto Académico)',
    exp_corazon_desc: '<strong>Desarrollador Unity 2D / Programador C#</strong><br>• Programé mecánicas base de jugador y gestión de cámara.<br>• Desarrollé IA de enemigos base y sistema de combate.<br>• Construí mapas y escenarios integrando Tilemaps nativos de Unity.<br>• Diseñé UI dinámica optimizando el espacio en pantalla.',
    work_experience: 'Experiencia Laboral',
    work_data_title: 'Analista de Datos',
    work_data_desc: '<strong>Freelance Remoto</strong><br>• Desarrollé scripts en Python para automatizar y organizar arquitecturas de datos.<br>• Realicé debugging en bases de datos asegurando alta calidad en la información.<br>• Diseñé reportes interactivos en Power BI para beneficiar la toma de decisiones.',
    skills_title: 'Habilidades',
    skill_unity: 'Unity',
    skill_csharp: 'C#',
    skill_problem_solving: 'Resolución de Problemas',
    skill_teamwork: 'Trabajo en Equipo',
    // Portfolio
    portfolio_title: 'Portafolio',
    filter_all: 'Todos',
    filter_academic: 'Proyectos Académicos',
    filter_jam: 'Game Jams',
    project_corazon_title: 'Corazón del Saber',
    project_corazon_cat: 'Unity 2D / C#',
    project_drunk_title: 'Drunk Driver',
    project_drunk_cat: 'Game Jam / Unity 3D',
    // Blog
    blog_title: 'DevLog',
    blog_post1_cat: 'Diseño de Niveles',
    blog_post1_date: 'Jul 01, 2026',
    blog_post1_title: 'Construyendo mundos: Por qué elegí Tilemaps nativos en Unity',
    blog_post1_text: 'Un análisis técnico sobre la estructuración de escenarios en 2D, optimización del flujo de trabajo y mapeo directo en el motor.',
    blog_post2_cat: 'Programación C#',
    blog_post2_date: 'Próximamente',
    blog_post2_title: 'Máquinas de estado: Dando vida a la IA enemiga',
    blog_post2_text: 'Explorando la lógica detrás del patrullaje, la percepción y la toma de decisiones de los enemigos en un entorno 2D.',
    // Contact
    contact_title: 'Contacto',
    contact_form_title: 'Envíame un mensaje',
    contact_name_placeholder: 'Nombre completo',
    contact_email_placeholder: 'Correo electrónico',
    contact_message_placeholder: 'Tu mensaje',
    contact_submit: 'Enviar Mensaje',
    // Modals
    modal_corazon_title: 'Corazón del Saber',
    modal_corazon_role: '<strong>Rol:</strong> Desarrollador Unity 2D / Programador C#',
    modal_corazon_genre: '<strong>Género:</strong> 2D Metroidvania',
    modal_corazon_text: 'Proyecto enfocado en la construcción de sistemas robustos y mecánicas fluidas inspiradas en clásicos como <em>Blasphemous</em> o <em>Hollow Knight</em>.',
    modal_corazon_item1: '<strong>Controlador de Jugador:</strong> Programación de físicas en C# para lograr movimiento preciso, sistema de salto y mecánica de <em>dash</em>.',
    modal_corazon_item2: '<strong>Inteligencia Artificial:</strong> Creación de módulos de IA para enemigos base y jefes, integrando sistemas de patrullaje, percepción y combate cuerpo a cuerpo mediante máquinas de estado.',
    modal_corazon_item3: '<strong>Arquitectura de Niveles:</strong> Diseño y construcción de escenarios directamente en el motor utilizando el sistema nativo de <em>Tilemaps</em>.',
    modal_corazon_item4: '<strong>Gestión de UI:</strong> Interfaz dinámica optimizada para reflejar salud en tiempo real sin sacrificar rendimiento.',
    modal_drunk_title: 'Drunk Driver',
    modal_drunk_role: '<strong>Rol:</strong> Gameplay Programmer',
    modal_drunk_event: '<strong>Evento:</strong> Generation Colombia Game Jam (50 hrs)',
    modal_drunk_genre: '<strong>Género:</strong> Top-Down Arcade',
    modal_drunk_text: 'Producto Mínimo Viable (MVP) desarrollado en un lapso de 50 horas. Un juego <em>High Score Chaser</em> de conducción caótica y destrucción.',
    modal_drunk_item1: '<strong>IA de Tráfico y Navegación:</strong> Creación de un sistema escalable de patrullaje usando Waypoints y Raycasts para detección de obstáculos, prescindiendo de NavMesh para optimizar rendimiento.',
    modal_drunk_item2: '<strong>Sistemas Desacoplados de Spawners:</strong> Lógica de generación procedural y respawn automático mediante la vigilancia de referencias de memoria (null-checking) para objetos destructibles y vehículos.',
    modal_drunk_item3: '<strong>Interacciones Físicas:</strong> Transición dinámica de animación a físicas de <em>Ragdoll</em> tras detección de impacto con NPCs.',
    modal_drunk_item4: '<strong>Arquitectura Modular:</strong> Uso de variables expuestas e independencia de scripts para facilitar la labor de ensamblaje por parte del equipo de Level Design.',
    // Página
    page_title: 'Camilo Moreno - Portafolio'
  },
  en: {
    // Sidebar
    name: 'Camilo Moreno',
    title: 'Unity Developer',
    download_cv: 'Download CV',
    show_contacts: 'Show Contacts',
    contact_email: 'Email',
    contact_phone: 'Phone',
    contact_github: 'GitHub',
    contact_location: 'Location',
    location_address: 'Bogotá, Colombia',
    // Navbar
    nav_about: 'About',
    nav_resume: 'Resume',
    nav_portfolio: 'Portfolio',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    // About
    about_title: 'About Me',
    about_p1: 'I am a Systems Engineering student currently training as a video game developer through SENA and Generation Colombia programs, with a primary focus on Unity and C#.',
    about_p2: 'I am passionate about programming because I enjoy analyzing problems, researching different solutions, and building systems that bring interactive experiences to life. One of the aspects that motivates me the most in game development is turning an idea into a functional mechanic and seeing how, little by little, a project begins to take shape.',
    about_p3: 'I am currently developing personal and academic projects to strengthen my skills in programming, game architecture, and Unity development. My goal is to continue growing as a Game Programmer, collaborate with development teams, and contribute to creating games that offer entertaining and quality experiences.',
    // Service
    service_title: 'Areas of Interest',
    service_1_title: 'Mechanics Programming',
    service_1_text: 'Development of game mechanics in C# using Unity, including movement, combat, and interaction between systems.',
    service_2_title: 'Artificial Intelligence',
    service_2_text: 'Development of basic enemy behaviors using state machines, patrol, and detection systems in Unity.',
    service_3_title: 'Level Design',
    service_3_text: 'Level design using Unity Tilemaps, organizing functional scenarios for exploration and gameplay.',
    service_4_title: 'Optimization & Debugging',
    service_4_text: 'Problem solving through analysis, code debugging, and finding solutions to keep projects organized and scalable.',
    // Resume
    resume_title: 'Resume',
    education_title: 'Education',
    edu_generation: 'Generation Colombia',
    edu_generation_desc: 'Intensive Software Development Bootcamp. Technical training focused on agile methodologies and problem-solving.',
    edu_sena: 'SENA',
    edu_sena_desc: 'Technical degree in Video Game Development. Training focused on C# programming, mechanics design, and Artificial Intelligence in Unity.',
    edu_unad: 'UNAD',
    edu_unad_desc: 'Systems Engineering. Fundamentals in Object-Oriented Programming (OOP), databases, and algorithmic logic.',
    experience_projects: 'Project Experience',
    exp_corazon_title: 'Corazón del Saber (Academic Project)',
    exp_corazon_desc: '<strong>Unity 2D Developer / C# Programmer</strong><br>• Programmed base player mechanics and camera management.<br>• Developed enemy AI and combat system.<br>• Built maps and scenarios integrating native Unity Tilemaps.<br>• Designed dynamic UI optimizing screen space.',
    work_experience: 'Work Experience',
    work_data_title: 'Data Analyst',
    work_data_desc: '<strong>Freelance Remote</strong><br>• Developed Python scripts to automate and organize data architectures.<br>• Performed debugging in databases ensuring high data quality.<br>• Designed interactive reports in Power BI to support decision-making.',
    skills_title: 'Skills',
    skill_unity: 'Unity',
    skill_csharp: 'C#',
    skill_problem_solving: 'Problem Solving',
    skill_teamwork: 'Teamwork',
    // Portfolio
    portfolio_title: 'Portfolio',
    filter_all: 'All',
    filter_academic: 'Academic Projects',
    filter_jam: 'Game Jams',
    project_corazon_title: 'Corazón del Saber',
    project_corazon_cat: 'Unity 2D / C#',
    project_drunk_title: 'Drunk Driver',
    project_drunk_cat: 'Game Jam / Unity 3D',
    // Blog
    blog_title: 'DevLog',
    blog_post1_cat: 'Level Design',
    blog_post1_date: 'Jul 01, 2026',
    blog_post1_title: 'Building worlds: Why I chose native Tilemaps in Unity',
    blog_post1_text: 'A technical analysis on structuring 2D scenarios, workflow optimization, and direct mapping in the engine.',
    blog_post2_cat: 'C# Programming',
    blog_post2_date: 'Coming Soon',
    blog_post2_title: 'State Machines: Bringing enemy AI to life',
    blog_post2_text: 'Exploring the logic behind patrol, perception, and decision-making of enemies in a 2D environment.',
    // Contact
    contact_title: 'Contact',
    contact_form_title: 'Send me a message',
    contact_name_placeholder: 'Full name',
    contact_email_placeholder: 'Email address',
    contact_message_placeholder: 'Your message',
    contact_submit: 'Send Message',
    // Modals
    modal_corazon_title: 'Corazón del Saber',
    modal_corazon_role: '<strong>Role:</strong> Unity 2D Developer / C# Programmer',
    modal_corazon_genre: '<strong>Genre:</strong> 2D Metroidvania',
    modal_corazon_text: 'Project focused on building robust systems and fluid mechanics inspired by classics like <em>Blasphemous</em> or <em>Hollow Knight</em>.',
    modal_corazon_item1: '<strong>Player Controller:</strong> Programming physics in C# for precise movement, jump system, and dash mechanic.',
    modal_corazon_item2: '<strong>Artificial Intelligence:</strong> Creation of AI modules for base enemies and bosses, integrating patrol, perception, and melee combat systems using state machines.',
    modal_corazon_item3: '<strong>Level Architecture:</strong> Design and construction of scenarios directly in the engine using the native <em>Tilemaps</em> system.',
    modal_corazon_item4: '<strong>UI Management:</strong> Dynamic interface optimized to reflect health in real time without sacrificing performance.',
    modal_drunk_title: 'Drunk Driver',
    modal_drunk_role: '<strong>Role:</strong> Gameplay Programmer',
    modal_drunk_event: '<strong>Event:</strong> Generation Colombia Game Jam (50 hrs)',
    modal_drunk_genre: '<strong>Genre:</strong> Top-Down Arcade',
    modal_drunk_text: 'Minimum Viable Product (MVP) developed in a 50-hour timeframe. A High Score Chaser driving game with chaotic destruction.',
    modal_drunk_item1: '<strong>Traffic AI and Navigation:</strong> Creation of a scalable patrol system using Waypoints and Raycasts for obstacle detection, avoiding NavMesh for performance optimization.',
    modal_drunk_item2: '<strong>Decoupled Spawner Systems:</strong> Procedural generation logic and automatic respawn by monitoring memory references (null-checking) for destructible objects and vehicles.',
    modal_drunk_item3: '<strong>Physical Interactions:</strong> Dynamic transition from animation to Ragdoll physics upon detection of impact with NPCs.',
    modal_drunk_item4: '<strong>Modular Architecture:</strong> Use of exposed variables and script independence to facilitate assembly work by the Level Design team.',
    // Página
    page_title: 'Camilo Moreno - Portfolio'
  }
};

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
    // Formato: "atributo:clave"  ej. "placeholder:contact_name_placeholder"
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

// Aplicar idioma al cargar
applyTranslations(currentLang);

// Evento del botón de idioma
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('preferredLang', currentLang);
    applyTranslations(currentLang);
    // Después de cambiar el idioma, reaplicar el filtro actual si es necesario
    // El filtro se mantiene porque los valores fijos no cambian.
    // Pero el texto del selectValue puede quedar desactualizado si se cambia el idioma mientras el select está abierto.
    // Lo actualizamos con el texto del filtro activo.
    const activeFilterBtn = document.querySelector('.filter-item button.active');
    if (activeFilterBtn) {
      const filterValue = activeFilterBtn.dataset.filterValue;
      const selectValue = document.querySelector('[data-selecct-value]');
      if (selectValue) {
        // Buscar el texto correspondiente en las traducciones
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

    // Actualizar el texto visible del select con el texto del botón seleccionado (ya traducido)
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

    // Actualizar el texto del selectValue con el texto del botón (traducido)
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

// Al cambiar de idioma, asegurar que el selectValue muestre el texto correcto del filtro activo
function updateSelectValueFromActiveFilter() {
  const activeFilterBtn = document.querySelector('.filter-item button.active');
  if (activeFilterBtn && selectValue) {
    selectValue.textContent = activeFilterBtn.textContent;
  }
}
// Llamar después de aplicar traducciones (ya se hace en el evento del botón de idioma)

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

    // Obtener el target desde el atributo data-page-target
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

// Asegurar que el selectValue muestre el filtro activo al cargar
updateSelectValueFromActiveFilter();