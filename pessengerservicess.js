// passengerService.js
const API_BASE_URL = "http://localhost:5000/api/";

export const endpoints = {
  passengers: API_BASE_URL + "passengers",
};

export async function fetchPassengers() {
  const response = await fetch(endpoints.passengers);
  if (!response.ok) {
    throw new Error("Failed to fetch passengers");
  }
  return await response.json();
}
