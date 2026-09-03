document.addEventListener("DOMContentLoaded", async () => {

    // =========================
    // GET PROJECT ID FROM URL
    // =========================

    const params = new URLSearchParams(
        window.location.search
    );

    const id = params.get("id");


    // =========================
    // DEFAULT / LOADING STATE
    // =========================

    const titleElement =
        document.querySelector("#project-title");

    if (titleElement) {
        titleElement.textContent =
            "Loading project...";
    }


    let project = null;


    // =========================
    // GET PROJECT FROM API
    // =========================

    if (
        id &&
        typeof getProjectById === "function"
    ) {

        try {

            project =
                await getProjectById(id);

            console.log(
                "Project loaded from API:",
                project
            );

        } catch (error) {

            console.error(
                "Failed to load project from API:",
                error
            );

        }
    }


    // =========================
    // FALLBACK TO LOCAL DATA
    // =========================

    if (!project) {

        project =
            window.PORTFOLIO_DATA
                ?.projects
                ?.find(
                    item =>
                        String(item.id) === String(id)
                );
    }


    // =========================
    // FINAL FALLBACK
    // =========================

    if (!project) {

        project =
            window.PORTFOLIO_DATA
                ?.projects?.[0];
    }


    // =========================
    // PROJECT NOT FOUND
    // =========================

    if (!project) {

        if (titleElement) {

            titleElement.textContent =
                "Project Not Found";
        }

        return;
    }


    // =========================
    // NORMALIZE DATA
    // =========================

    const technologies =
        project.technologies ||
        project.tech ||
        [];


    const features =
        project.features ||
        [];


    // =========================
    // PAGE TITLE
    // =========================

    document.title =
        `${project.title} — Naufal Farrel Pratama`;


    // =========================
    // PROJECT CATEGORY
    // =========================

    const category =
        document.querySelector(
            "#project-category"
        );

    if (category) {

        category.textContent =
            project.category || "Project";
    }


    // =========================
    // PROJECT TITLE
    // =========================

    if (titleElement) {

        titleElement.textContent =
            project.title || "Untitled Project";
    }


    // =========================
    // PROJECT DESCRIPTION
    // =========================

    const description =
        document.querySelector(
            "#project-description"
        );

    if (description) {

        description.textContent =
            project.description || "";
    }


    // =========================
    // PROJECT OVERVIEW
    // =========================

    const overview =
        document.querySelector(
            "#project-overview"
        );

    if (overview) {

        overview.textContent =
            project.overview || "";
    }


    // =========================
    // PROJECT IMAGE
    // =========================

    const image =
        document.querySelector(
            "#project-image"
        );

    if (image) {

        /*
         * Saat ini masih kompatibel
         * dengan placeholder lama.
         *
         * Nanti bagian ini akan kita
         * ubah menjadi <img> dari
         * Google Drive.
         */

        image.textContent =
            project.image ||
            project.title;
    }


    // =========================
    // TECHNOLOGIES
    // =========================

    const techContainer =
        document.querySelector(
            "#project-tech"
        );

    if (techContainer) {

        techContainer.innerHTML =
            technologies.map(
                technology => `
                    <span class="tag">
                        ${technology}
                    </span>
                `
            ).join("");
    }


    // =========================
    // PROJECT FEATURES
    // =========================

    const featuresContainer =
        document.querySelector(
            "#project-features"
        );

    if (featuresContainer) {

        featuresContainer.innerHTML =
            features.map(
                (feature, index) => {

                    const number =
                        String(index + 1)
                            .padStart(2, "0");

                    return `
                        <div>
                            ${number} — ${feature}
                        </div>
                    `;

                }
            ).join("");
    }


    // =========================
    // LIVE DEMO
    // =========================

    const demoButton =
        document.querySelector(
            "#project-demo"
        );

    if (demoButton) {

        if (
            project.demo &&
            project.demo !== "#"
        ) {

            demoButton.href =
                project.demo;

            demoButton.style.display =
                "inline-flex";

            demoButton.target =
                "_blank";

            demoButton.rel =
                "noopener noreferrer";

        } else {

            demoButton.style.display =
                "none";
        }
    }


    // =========================
    // GITHUB
    // =========================

    const githubButton =
        document.querySelector(
            "#project-github"
        );

    if (githubButton) {

        if (
            project.github &&
            project.github !== "#"
        ) {

            githubButton.href =
                project.github;

            githubButton.style.display =
                "inline-flex";

            githubButton.target =
                "_blank";

            githubButton.rel =
                "noopener noreferrer";

        } else {

            githubButton.style.display =
                "none";
        }
    }

});
