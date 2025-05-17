const API_BASE_URL = "http://localhost:5000/api/Bus/";

// Tüm otobüsleri getir
export async function getAllBus() {
  const response = await fetch(API_BASE_URL + "getAllBus");
  if (!response.ok) throw new Error("Otobüsler getirilemedi");
  return await response.json();
}

// Plakaya göre otobüs getir
export async function getBusByPlaka(plaka) {
  const response = await fetch(API_BASE_URL + "getBusByPlaka/" + encodeURIComponent(plaka));
  if (!response.ok) throw new Error(plaka + " plakalı otobüs getirilemedi");
  return await response.json();
}

// Yeni otobüs ekle (busData objesi gönderilir)
export async function addBus(busData) {
  const response = await fetch(API_BASE_URL + "addBus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(busData)
  });
  if (!response.ok) throw new Error("Otobüs eklenemedi");
  return await response.json();
}

// Plakaya göre otobüs güncelle
export async function updateByPlaka(plaka, busData) {
  const response = await fetch(API_BASE_URL + "updateByPlaka/" + encodeURIComponent(plaka), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(busData)
  });
  if (!response.ok) throw new Error(plaka + " plakalı otobüs güncellenemedi");
  return await response.json();
}

// Plakaya göre otobüs sil
export async function deleteByPlaka(plaka) {
  const response = await fetch(API_BASE_URL + "deleteByPlaka/" + encodeURIComponent(plaka), {
    method: "DELETE"
  });
  if (!response.ok) throw new Error(plaka + " plakalı otobüs silinemedi");
  return await response.json();
}
