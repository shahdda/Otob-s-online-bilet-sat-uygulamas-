const API_BASE_URL = "http://localhost:5000/api/Auth/";

export async function adminLogin(credentials) {
  const response = await fetch(API_BASE_URL + "AdminLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || "Admin login failed");
  }

  return await response.json(); // 
}
