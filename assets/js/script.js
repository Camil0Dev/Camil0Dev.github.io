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
    nav_inicio: 'Inicio',
    nav_about: 'Sobre mí',
    nav_resume: 'Currículum',
    nav_portfolio: 'Portafolio',
    nav_contact: 'Contacto',
    // Inicio
    inicio_title: 'Bienvenido',
    inicio_text1: 'Desarrollo experiencias interactivas donde la lógica y las mecánicas de juego se conectan de forma natural. Me apasiona transformar ideas complejas en controles fluidos y precisos para el jugador. Formándome como Unity Developer con Generation Colombia, me enfoco en la programación de gameplay (C#), en dar vida a los personajes mediante inteligencia artificial y en escribir código estructurado que me permita adaptarme a cualquier reto de desarrollo.',
    inicio_text2: '',
    inicio_destacado_titulo: 'Último proyecto',
    inicio_corazon_estado: 'En desarrollo',
    inicio_corazon_fecha: '2025 - Presente',
    inicio_ver_proyecto: 'Ver proyecto →',
    // About
    about_title: 'Sobre mí',
    about_subtitle: 'Transformando ideas en mecánicas interactivas',
    about_p1: 'Soy Camilo, desarrollador de videojuegos con base en ingeniería de sistemas. Actualmente me formo como Unity Developer en Generation Colombia, canalizando mi gusto por resolver problemas y estructurar sistemas hacia la creación de experiencias interactivas.',
    about_p2: 'Me apasiona lograr que un juego se sienta increíble al controlarlo. Me enfoco en programar las mecánicas principales, darles comportamiento a los personajes mediante inteligencia artificial, y asegurar que cada acción responda de manera fluida. He puesto en práctica estas habilidades en distintos proyectos y game jams.',
    about_p3: 'Como disfruto entender cómo funcionan las cosas desde adentro, me preocupo tanto por mantener un código ordenado y fácil de expandir, como por garantizar que el jugador tenga una experiencia inmersiva y sin interrupciones.',
    // Service
    service_title: 'Áreas de interés',
    service_1_title: 'Programación de Mecánicas',
    service_1_text: 'Desarrollo de mecánicas de juego en C# utilizando Unity, incluyendo movimiento, combate e interacción entre sistemas.',
    service_2_title: 'Inteligencia Artificial',
    service_2_text: 'Desarrollo de comportamientos básicos para enemigos mediante máquinas de estados, patrullaje y sistemas de detección en Unity.',
    service_3_title: 'Diseño de Niveles',
    service_3_text: 'Diseño de niveles utilizando Tilemaps de Unity, organizando escenarios funcionales para la exploración y la jugabilidad.',
    // Habilidades de "Sobre mí"
    skill_cat_dev: 'Desarrollo',
    skill_cat_tools: 'Herramientas',
    skill_cat_focus: 'Enfoque',
    skill_python: 'Python',
    skill_htmlcss: 'HTML & CSS',
    skill_focus_gp: 'Programación de Gameplay',
    skill_focus_ai: 'Inteligencia Artificial',
    skill_focus_arch: 'Arquitectura de Código',
    skill_focus_prob: 'Resolución de Problemas',
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
    project_corazon_meta: '2025 • PROYECTO ACADÉMICO',
    project_corazon_desc: 'Proyecto académico desarrollado en Unity 6. Implementa mecánicas de plataformas, combate, exploración tipo Metroidvania, IA de enemigos, gestión de escenas y diseño modular de niveles con Tilemaps',
    project_drunk_title: 'Drunk Driver',
    project_drunk_cat: 'Game Jam / Unity 3D',
    project_drunk_meta: '2026 • GAME JAM',
    project_drunk_desc: 'Top-Down Arcade en Unity 3D. El desarrollo destaca por la implementación de sistemas de patrullaje sin NavMesh, spawners desacoplados y físicas Ragdoll.',
    project_ver_detalles: 'VER DETALLES →',
    // Project page (Corazón del Saber)
    project_corazon_badge_1: 'VIDEOJUEGO',
    project_corazon_badge_2: 'PROYECTO ACADÉMICO',
    project_corazon_hero_subtitle: 'Un Metroidvania 2D donde la precisión del control y el combate estratégico son la clave para sobrevivir.',
    project_corazon_meta_ano_label: 'AÑO',
    project_corazon_meta_ano: '2025',
    project_corazon_meta_estado_label: 'ESTADO',
    project_corazon_meta_estado: 'En Desarrollo',
    project_corazon_meta_rol_label: 'MI ROL',
    project_corazon_meta_rol: 'Programador C# y Desarrollador Unity 2D',
    project_corazon_meta_contexto_label: 'CONTEXTO',
    project_corazon_meta_contexto: 'Proyecto Académico (SENA)',
    project_corazon_desc_titulo: 'Descripción',
    project_corazon_desc_p1: 'Corazón del Saber es un Metroidvania 2D desarrollado como proyecto académico, enfocado en ofrecer un sistema de físicas de jugador ágil y un combate cuerpo a cuerpo desafiante. El proyecto destaca por la construcción de sus entornos interactivos utilizando el sistema de Tilemaps nativo de Unity.',
    project_corazon_desc_p2: 'El jugador debe dominar mecánicas de movimiento como el salto y el dash para sortear plataformas, mientras enfrenta enemigos controlados por Inteligencia Artificial basada en máquinas de estado.',
    project_corazon_proceso_titulo: 'Proceso de desarrollo',
    project_corazon_proceso_01: 'Mecánicas Base: Programación del controlador del jugador en C#, ajustando físicas para lograr un dash y salto precisos y responsivos.',
    project_corazon_proceso_02: 'Inteligencia Artificial: Desarrollo de máquinas de estado para los enemigos base y la estructuración lógica del sistema de combate cuerpo a cuerpo.',
    project_corazon_proceso_03: 'Diseño de Niveles: Construcción de los mapas y escenarios directamente en el motor mediante Tilemaps.',
    project_corazon_proceso_04: 'Interfaz Dinámica (UI): Implementación de los sistemas de salud y energía, enfocados en optimizar el espacio en pantalla y dar feedback claro al jugador.',
    project_corazon_desafios_titulo: 'Desafíos y aprendizajes',
    project_corazon_desafios: 'Durante el desarrollo de Corazón del Saber enfrenté el desafío de crear un nivel tipo Metroidvania funcional utilizando Unity 6 en un tiempo limitado, lo que me llevó a priorizar tareas, reutilizar assets y apoyarme en herramientas de inteligencia artificial para acelerar la conceptualización de escenarios sin comprometer la implementación. El proyecto me permitió profundizar en el uso de Tilemaps, Cinemachine, gestión de escenas, programación en C#, diseño de niveles, sistemas de guardado, enemigos, objetos interactivos y organización de un proyecto de mediana escala. Más allá de los aspectos técnicos, aprendí la importancia de planificar la arquitectura del juego desde el inicio, adaptarme a los imprevistos, resolver problemas de forma iterativa y optimizar el flujo de trabajo para cumplir con los objetivos del proyecto dentro de los plazos establecidos.',
    project_corazon_herramientas_titulo: 'Herramientas',
    project_corazon_habilidades_titulo: 'Habilidades demostradas',
    project_corazon_galeria_titulo: 'Galería',
    project_corazon_enlaces_titulo: 'Enlaces',
    project_corazon_volver: '← VOLVER AL PORTAFOLIO',
    project_corazon_ver_github: 'VER EN GITHUB',
    project_corazon_ver_gdd: 'VER GDD',

    // Project page (Drunk Driver) - NUEVAS CLAVES
    project_drunk_badge_1: 'VIDEOJUEGO',
    project_drunk_badge_2: 'GAME JAM',
    project_drunk_hero_subtitle: 'Un título Arcade Top-Down de supervivencia y destrucción donde el alcohol es tu combustible y tu peor enemigo.',
    project_drunk_meta_ano_label: 'AÑO',
    project_drunk_meta_ano: '2026',
    project_drunk_meta_estado_label: 'ESTADO',
    project_drunk_meta_estado: 'Finalizado (Desarrollado en 50 horas)',
    project_drunk_meta_rol_label: 'MI ROL',
    project_drunk_meta_rol: 'Programador de Jugabilidad (C#)',
    project_drunk_meta_contexto_label: 'CONTEXTO',
    project_drunk_meta_contexto: 'Game Jam (Generation Colombia)',
    project_drunk_desc_titulo: 'Descripción',
    project_drunk_desc_p1: 'Drunk Driver es un juego Arcade Top-Down basado en la obtención de puntaje alto ("High Score Chaser") desarrollado en un tiempo límite de 50 horas. El jugador controla un vehículo en una ciudad caótica y viva, donde debe destruir objetos del mobiliario urbano para acumular puntos y sobrevivir.',
    project_drunk_desc_p2: 'La recolección de alcohol aumenta drásticamente la velocidad del vehículo y dificulta su control, obligando al jugador a encontrar un balance entre el riesgo de chocar y la necesidad de mantener el contador de tiempo activo. La ciudad reacciona a este caos gracias a un sistema de tráfico inteligente y peatones con físicas interactivas.',
    project_drunk_proceso_titulo: 'Proceso de desarrollo',
    project_drunk_proceso_01: 'Sistemas de Generación (Spawners): Programación de sistemas modulares descentralizados para la aparición y reaparición automática de vehículos en ruta y objetos destructibles en el mapa, basando la lógica en la vigilancia de variables nulas (null-checking).',
    project_drunk_proceso_02: 'Inteligencia Artificial de Tráfico: Desarrollo de un sistema de navegación escalable mediante rutas de puntos (Waypoints) y detección frontal mediante Raycasts, optimizando el rendimiento de la ciudad sin depender de NavMesh.',
    project_drunk_proceso_03: 'Interacciones Físicas: Implementación de transiciones dinámicas entre las animaciones de los peatones (NPCs) y físicas Ragdoll al momento de recibir un impacto a alta velocidad.',
    project_drunk_proceso_04: 'Arquitectura Modular: Creación de scripts independientes con variables expuestas en el inspector para facilitar y acelerar la labor de ensamblaje por parte del equipo de Diseño de Niveles.',
    project_drunk_desafios_titulo: 'Desafíos y aprendizajes',
    project_drunk_desafios: 'Uno de los mayores retos fue lograr que la interacción física entre el vehículo del jugador y los objetos del mapa se sintiera satisfactoria. Inicialmente, las colisiones sólidas frenaban el ritmo arcade del juego. Para solucionarlo, cambié la detección de daño a un sistema de "Triggers" (disparadores) condicionados por etiquetas, permitiendo que el jugador atraviese y haga explotar los objetos de forma fluida sin perder su impulso. Esto me enseñó a priorizar la sensación de juego ("Game Feel") sobre el realismo físico puro, además de la importancia de mantener un código desacoplado para evitar cuellos de botella bajo la presión de una Game Jam.',
    project_drunk_herramientas_titulo: 'Herramientas',
    project_drunk_habilidades_titulo: 'Habilidades demostradas',
    project_drunk_galeria_titulo: 'Galería',
    project_drunk_enlaces_titulo: 'Enlaces',
    project_drunk_volver: '← VOLVER AL PORTAFOLIO',
    project_drunk_ver_github: 'VER EN GITHUB',
    project_drunk_ver_itch: 'JUGAR EN ITCH.IO',

    // Contact
    contact_title: 'Contacto',
    contact_form_title: 'Envíame un mensaje',
    contact_name_placeholder: 'Nombre completo',
    contact_email_placeholder: 'Correo electrónico',
    contact_message_placeholder: 'Tu mensaje',
    contact_submit: 'Enviar Mensaje',
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
    nav_inicio: 'Home',
    nav_about: 'About',
    nav_resume: 'Resume',
    nav_portfolio: 'Portfolio',
    nav_contact: 'Contact',
    // Inicio
    inicio_title: 'Welcome',
    inicio_text1: 'I develop interactive experiences where logic and game mechanics connect naturally. I\'m passionate about turning complex ideas into fluid and precise controls for the player. Training as a Unity Developer with Generation Colombia, I focus on gameplay programming (C#), bringing characters to life through artificial intelligence, and writing structured code that allows me to adapt to any development challenge.',
    inicio_text2: '',
    inicio_destacado_titulo: 'Latest project',
    inicio_corazon_estado: 'In development',
    inicio_corazon_fecha: '2025 - Present',
    inicio_ver_proyecto: 'View project →',
    // About
    about_title: 'About Me',
    about_subtitle: 'Transforming ideas into interactive mechanics',
    about_p1: 'I\'m Camilo, a game developer with a background in systems engineering. I\'m currently training as a Unity Developer at Generation Colombia, channeling my passion for problem-solving and system structuring into creating interactive experiences.',
    about_p2: 'I\'m passionate about making a game feel incredible to control. I focus on programming core mechanics, giving characters behavior through artificial intelligence, and ensuring every action responds fluidly. I\'ve put these skills into practice in various projects and game jams.',
    about_p3: 'Because I enjoy understanding how things work from the inside, I care about keeping code clean and expandable, as well as ensuring the player has an immersive, interruption-free experience.',
    // Service
    service_title: 'Areas of Interest',
    service_1_title: 'Mechanics Programming',
    service_1_text: 'Development of game mechanics in C# using Unity, including movement, combat, and interaction between systems.',
    service_2_title: 'Artificial Intelligence',
    service_2_text: 'Development of basic enemy behaviors using state machines, patrol, and detection systems in Unity.',
    service_3_title: 'Level Design',
    service_3_text: 'Level design using Unity Tilemaps, organizing functional scenarios for exploration and gameplay.',
    // Habilidades de "Sobre mí"
    skill_cat_dev: 'Development',
    skill_cat_tools: 'Tools',
    skill_cat_focus: 'Focus',
    skill_python: 'Python',
    skill_htmlcss: 'HTML & CSS',
    skill_focus_gp: 'Gameplay Programming',
    skill_focus_ai: 'Artificial Intelligence',
    skill_focus_arch: 'Code Architecture',
    skill_focus_prob: 'Problem Solving',
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
    project_corazon_meta: '2025 • ACADEMIC PROJECT',
    project_corazon_desc: 'Academic project developed in Unity 6. It implements platforming mechanics, combat, Metroidvania-style exploration, enemy AI, scene management, and modular level design using Tilemaps.',
    project_drunk_title: 'Drunk Driver',
    project_drunk_cat: 'Game Jam / Unity 3D',
    project_drunk_meta: '2026 • GAME JAM',
    project_drunk_desc: 'Top-Down Arcade in Unity 3D. The development highlights patrol systems without NavMesh, decoupled spawners, and Ragdoll physics.',
    project_ver_detalles: 'VIEW DETAILS →',
    // Project page (Corazón del Saber)
    project_corazon_badge_1: 'VIDEOGAME',
    project_corazon_badge_2: 'ACADEMIC PROJECT',
    project_corazon_hero_subtitle: 'A 2D Metroidvania where precise control and strategic combat are key to survival.',
    project_corazon_meta_ano_label: 'YEAR',
    project_corazon_meta_ano: '2025',
    project_corazon_meta_estado_label: 'STATUS',
    project_corazon_meta_estado: 'In Development',
    project_corazon_meta_rol_label: 'MY ROLE',
    project_corazon_meta_rol: 'C# Programmer and Unity 2D Developer',
    project_corazon_meta_contexto_label: 'CONTEXT',
    project_corazon_meta_contexto: 'Academic Project (SENA)',
    project_corazon_desc_titulo: 'Description',
    project_corazon_desc_p1: 'Corazón del Saber is a 2D Metroidvania developed as an academic project, focused on delivering agile player physics and challenging melee combat. The project stands out for building interactive environments using Unity\'s native Tilemaps system.',
    project_corazon_desc_p2: 'The player must master movement mechanics like jump and dash to navigate platforms, while facing enemies controlled by State Machine-based Artificial Intelligence.',
    project_corazon_proceso_titulo: 'Development process',
    project_corazon_proceso_01: 'Base Mechanics: Programming the player controller in C#, adjusting physics for precise and responsive dash and jump.',
    project_corazon_proceso_02: 'Artificial Intelligence: Developing state machines for base enemies and structuring the logic of the melee combat system.',
    project_corazon_proceso_03: 'Level Design: Building maps and scenarios directly in the engine using Tilemaps.',
    project_corazon_proceso_04: 'Dynamic UI: Implementing health and energy systems, focused on optimizing screen space and providing clear player feedback.',
    project_corazon_desafios_titulo: 'Challenges and learnings',
    project_corazon_desafios: 'While developing *Corazón del Saber*, I faced the challenge of creating a functional Metroidvania-style level in Unity 6 within a limited timeframe. This required me to prioritize tasks, reuse assets, and leverage AI tools to accelerate environment conceptualization without compromising implementation. The project allowed me to deepen my skills in Tilemaps, Cinemachine, scene management, C# programming, level design, save systems, enemy and interactive object implementation, and the organization of a medium-scale project. Beyond the technical aspects, I learned the importance of planning the game architecture from the outset, adapting to unforeseen issues, solving problems iteratively, and optimizing my workflow to meet project objectives within established deadlines.',
    project_corazon_herramientas_titulo: 'Tools',
    project_corazon_habilidades_titulo: 'Skills demonstrated',
    project_corazon_galeria_titulo: 'Gallery',
    project_corazon_enlaces_titulo: 'Links',
    project_corazon_volver: '← BACK TO PORTFOLIO',
    project_corazon_ver_github: 'VIEW ON GITHUB',
    project_corazon_ver_gdd: 'VIEW GDD',

    // Project page (Drunk Driver) - NEW KEYS
    project_drunk_badge_1: 'VIDEOGAME',
    project_drunk_badge_2: 'GAME JAM',
    project_drunk_hero_subtitle: 'A Top-Down Arcade survival and destruction title where alcohol is both your fuel and your worst enemy.',
    project_drunk_meta_ano_label: 'YEAR',
    project_drunk_meta_ano: '2026',
    project_drunk_meta_estado_label: 'STATUS',
    project_drunk_meta_estado: 'Completed (Developed in 50 hours)',
    project_drunk_meta_rol_label: 'MY ROLE',
    project_drunk_meta_rol: 'Gameplay Programmer (C#)',
    project_drunk_meta_contexto_label: 'CONTEXT',
    project_drunk_meta_contexto: 'Game Jam (Generation Colombia)',
    project_drunk_desc_titulo: 'Description',
    project_drunk_desc_p1: 'Drunk Driver is a Top-Down Arcade High Score Chaser developed in a 50-hour timeframe. The player controls a vehicle in a chaotic, living city, where they must destroy street furniture to accumulate points and survive.',
    project_drunk_desc_p2: 'Collecting alcohol drastically increases the vehicle\'s speed and makes it harder to control, forcing the player to balance the risk of crashing with the need to keep the timer active. The city reacts to this chaos thanks to an intelligent traffic system and pedestrians with interactive physics.',
    project_drunk_proceso_titulo: 'Development process',
    project_drunk_proceso_01: 'Spawner Systems: Programming modular decentralized systems for the automatic spawning and respawning of route vehicles and destructible objects in the map, based on null-checking logic.',
    project_drunk_proceso_02: 'Traffic AI: Developing a scalable navigation system using Waypoints and frontal detection via Raycasts, optimizing city performance without relying on NavMesh.',
    project_drunk_proceso_03: 'Physical Interactions: Implementing dynamic transitions between pedestrian (NPC) animations and Ragdoll physics upon high-speed impact.',
    project_drunk_proceso_04: 'Modular Architecture: Creating independent scripts with exposed variables in the inspector to facilitate and accelerate assembly work for the Level Design team.',
    project_drunk_desafios_titulo: 'Challenges and learnings',
    project_drunk_desafios: 'One of the biggest challenges was making the physical interaction between the player vehicle and map objects feel satisfying. Initially, solid collisions slowed down the arcade rhythm. To fix this, I switched damage detection to a "Trigger" system conditioned by tags, allowing the player to pass through and explode objects smoothly without losing momentum. This taught me to prioritize Game Feel over pure physical realism, and the importance of keeping code decoupled to avoid bottlenecks under Game Jam pressure.',
    project_drunk_herramientas_titulo: 'Tools',
    project_drunk_habilidades_titulo: 'Skills demonstrated',
    project_drunk_galeria_titulo: 'Gallery',
    project_drunk_enlaces_titulo: 'Links',
    project_drunk_volver: '← BACK TO PORTFOLIO',
    project_drunk_ver_github: 'VIEW ON GITHUB',
    project_drunk_ver_itch: 'PLAY ON ITCH.IO',

    // Contact
    contact_title: 'Contact',
    contact_form_title: 'Send me a message',
    contact_name_placeholder: 'Full name',
    contact_email_placeholder: 'Email address',
    contact_message_placeholder: 'Your message',
    contact_submit: 'Send Message',
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