document.addEventListener("DOMContentLoaded", async () => {

    const d = window.PORTFOLIO_DATA;

    /* =========================
       SKILLS
    ========================= */

    const skills = document.querySelector("#skills-grid");

    if (skills) {
        skills.innerHTML = d.skills.map(skill => `
            <article class="skill reveal">
                <b>${skill.name}</b>
                <small>${skill.level}</small>
            </article>
        `).join("");
    }


    /* =========================
       PROJECTS
    ========================= */

    const projectsContainer =
        document.querySelector("#projects-grid");


    function renderProjects(projects) {

        if (!projectsContainer) return;

        projectsContainer.innerHTML = projects.map(project => {

            // Mendukung data dari dummy data.js maupun Google Sheets
            const technologies =
                project.technologies ||
                project.tech ||
                [];

            return `
                <a
                    class="project-card reveal visible"
                    href="projects/project-detail.html?id=${project.id}"
                >

                    <div class="project-image">

                        <div>
                            ${project.image || project.title}
                        </div>

                    </div>

                    <div class="project-info">

                        <small>
                            ${project.category || "Project"}
                        </small>

                        <h3>
                            ${project.title} ↗
                        </h3>

                        <p>
                            ${project.description || ""}
                        </p>

                        <div class="tags">

                            ${technologies.map(tech => `
                                <span class="tag">
                                    ${tech}
                                </span>
                            `).join("")}

                        </div>

                    </div>

                </a>
            `;

        }).join("");
    }


    async function loadProjects() {

        try {

            /*
             * Jika api.js sudah terhubung
             * ke Google Apps Script
             */

            if (typeof getProjects === "function") {

                const projects = await getProjects();

                if (projects && projects.length > 0) {

                    // Simpan data API ke data global
                    window.PORTFOLIO_DATA.projects = projects;

                    renderProjects(projects);

                    console.log(
                        "Projects loaded from Google Sheets:",
                        projects
                    );

                    return;
                }
            }

        } catch (error) {

            console.error(
                "Failed to load projects from API:",
                error
            );

        }


        /*
         * FALLBACK
         * Jika API gagal, gunakan dummy data
         */

        console.log(
            "Using local dummy project data"
        );

        renderProjects(d.projects);
    }


    // Jalankan pengambilan project
    await loadProjects();


    /* =========================
       EXPERIENCE
    ========================= */

    const experience =
        document.querySelector("#experience-list");

    if (experience) {

        experience.innerHTML =
            d.experience.map(item => `

                <article class="timeline-item reveal">

                    <time>
                        ${item.year}
                    </time>

                    <div>

                        <h3>
                            ${item.role}
                        </h3>

                        <p>
                            ${item.org}
                        </p>

                    </div>

                    <p>
                        ${item.desc}
                    </p>

                </article>

            `).join("");
    }


    /* =========================
       CERTIFICATES
    ========================= */

    const certificates =
        document.querySelector("#certificates-grid");

    if (certificates) {

        certificates.innerHTML =
            d.certificates.map(certificate => `

                <article class="cert reveal">

                    <small>
                        ${certificate.type}
                    </small>

                    <h3>
                        ${certificate.title}
                    </h3>

                    <p>
                        ${certificate.issuer}
                    </p>

                    <small>
                        ${certificate.desc}
                    </small>

                </article>

            `).join("");
    }


    /* =========================
       NAVBAR SCROLL EFFECT
    ========================= */

    const header =
        document.querySelector("#site-header");


    window.addEventListener(
        "scroll",
        () => {

            if (header) {

                header.classList.toggle(
                    "scrolled",
                    window.scrollY > 30
                );
            }

        },
        {
            passive: true
        }
    );


    /* =========================
       MOBILE NAVIGATION
    ========================= */

    const toggle =
        document.querySelector("#menu-toggle");

    const nav =
        document.querySelector("#nav");


    toggle?.addEventListener(
        "click",
        () => {

            const isOpen =
                nav.classList.toggle("open");

            toggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    nav?.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove("open");

                    toggle?.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });


    /* =========================
       APP LOADER
    ========================= */

    setTimeout(
        () => {

            document
                .querySelector("#app-loader")
                ?.classList.add("hide");

        },
        450
    );

});
