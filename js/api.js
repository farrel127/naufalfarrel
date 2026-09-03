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
