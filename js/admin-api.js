const API_URL = "15KG4HbQxYiv-ghmMK1wv9pRmmhXR6zbpx7hr1NB5JGY/edit?gid=0#gid=0";

async function apiRequest(action, data = {}) {

    const response = await fetch(API_URL, {
        method: "POST",

        body: JSON.stringify({
            action,
            ...data
        })
    });

    const result =
        await response.json();

    if (!result.success) {
        throw new Error(
            result.message ||
            "Request failed"
        );
    }

    return result;
}


async function loginAdmin(
    username,
    password
) {

    return apiRequest(
        "login",
        {
            username,
            password
        }
    );
}


async function verifyAdminSession(
    token
) {

    return apiRequest(
        "verifySession",
        {
            token
        }
    );
}


async function createProjectAPI(
    token,
    project
) {

    return apiRequest(
        "createProject",
        {
            token,
            project
        }
    );
}


async function updateProjectAPI(
    token,
    project
) {

    return apiRequest(
        "updateProject",
        {
            token,
            project
        }
    );
}


async function deleteProjectAPI(
    token,
    id
) {

    return apiRequest(
        "deleteProject",
        {
            token,
            id
        }
    );
}
