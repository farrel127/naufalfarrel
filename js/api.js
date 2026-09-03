const API_URL = "15KG4HbQxYiv-ghmMK1wv9pRmmhXR6zbpx7hr1NB5JGY/edit?gid=0#gid=0";

async function getProjects() {
  try {
    const response = await fetch(
      `${API_URL}?action=projects`
    );

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data;

  } catch (error) {

    console.error("Failed to get projects:", error);

    return [];
  }
}
async function getProjectById(id) {

    try {

        const response = await fetch(
            `${API_URL}?action=project&id=${encodeURIComponent(id)}`
        );

        if (!response.ok) {
            throw new Error(
                "Network response was not OK"
            );
        }

        const result = await response.json();

        if (!result.success) {
            throw new Error(
                result.message || "Project not found"
            );
        }

        return result.data;

    } catch (error) {

        console.error(
            "Project API Error:",
            error
        );

        return null;
    }
}
