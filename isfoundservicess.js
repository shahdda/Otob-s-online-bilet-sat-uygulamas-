const API_BASE_URL = "http://localhost:5000/api/";

export const endpoints = {
  isFounds: API_BASE_URL + "isfounds",
};

export async function fetchIsFounds() {
  const response = await fetch(endpoints.isFounds);
  if (!response.ok) throw new Error("Failed to fetch isfounds");
  return await response.json();
}
