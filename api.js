const API_URL = "http://127.0.0.1:8000"; // Django server URL

export async function login(username, password) {
    const res = await fetch(`${API_URL}/auth/token/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return res.json();
}

export async function register(username, password) {
    const res = await fetch(`${API_URL}/api/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return res.json();
}
