document.addEventListener("DOMContentLoaded", () => {
    const contentElement = document.getElementById("content");

    // Contenido por sección
    const sections = {
        home: `
            <div id="home">
                <p>
                    I am an autonomous library, enchanted by the art of storing and absorbing knowledge— but mere accumulation isn’t enough. I thrive on translating ideas into visual and functional experiences. Specializing in frontend design and development, I bring pixels to life, crafting interfaces that don’t just look good but feel right.
                </p>
            </div>
        `,
        info: `
            <div id="info">
                <a class="link downloadCV" href="files/CV-Nicolas.pdf" download="CV-Nicolás_Campos">.Download CV</a>
                <p>
                    I'm a front-end designer and developer passionate about crafting intuitive, elegant, and functional web experiences. I combine creative design with clean code to bring digital interfaces to life. With a growing knowledge of back-end tools and experience across freelance and team projects, I’m constantly evolving—focused on becoming a well-rounded developer ready for real-world challenges.
                </p>
            </div>
        `,
        projects: `
            <div id="projects">
                <ul class="scroll">
                    <li>
                        <a class="link project" href="https://nyxalir.github.io/LotoRamdom/" target="_blank">
                            <p class="number-Project">01</p>
                            <span class="name-Project">.LotoRandom</span>
                            <p class="description-Project">Dec.2024 / Dev & Desing</p>
                        </a>
                    </li>
                    <li>
                        <a class="link project" href="https://nyxalir.github.io/Battery-life/" target="_blank">
                            <p class="number-Project">02</p>
                            <span class="name-Project">.Dattery Life</span>
                            <p class="description-Project">Mar.2024 / Dev & Desing</p>
                        </a>
                    </li>
                    <li>
                        <a class="link project" href="" target="_blank">
                            <p class="number-Project">03</p>
                            <span class="name-Project">.Medios Rumbo</span>
                            <p class="description-Project">Mar.2024 / Dev / Other</p>
                        </a>
                    </li>
                </ul>
            </div>
        `,
        contact: `
            <div id="contact">
                <div class="social">
                    <a class="link" href="https://x.com/Nyxalir" target="_blank">.X</a>
                    <a class="link" href="https://www.linkedin.com/in/nicol%C3%A1s-campos-084480328/" target="_blank">.LinkedIn</a>
                    <a class="link" href="https://github.com/Nyxalir" target="_blank">.GitHub</a>
                </div>
            </div>
        `,
    };

    // Función para mostrar una sección
    function showSection(sectionId) {
        const content = document.getElementById("content");

        // Inicia fade-out
        content.classList.remove("fade-in");
        content.classList.add("fade-out");

        // Espera a que termine el fade-out para cambiar el contenido
        setTimeout(() => {
            content.innerHTML = sections[sectionId];

            // Remueve la clase activa de cualquier <a> dentro del nav
            document.querySelectorAll("nav a").forEach((link) => {
                link.classList.remove("active-tab");
            });

            // Agrega la clase activa al que corresponda
            const newActiveLink = document.getElementById("link-" + sectionId);
            if (newActiveLink) {
                newActiveLink.classList.add("active-tab");
            }

            // Inicia fade-in
            content.classList.remove("fade-out");
            content.classList.add("fade-in");
        }, 300); // Este valor debe coincidir con el de la animación CSS
    }

    // Delegación de eventos para el menú
    document.querySelector(".nav").addEventListener("click", (e) => {
        const link = e.target.closest("[data-content]");
        if (!link) return;
        e.preventDefault();

        const sectionId = link.dataset.content;
        showSection(sectionId);
    });

    // Mostrar sección inicial
    showSection("home");
});
