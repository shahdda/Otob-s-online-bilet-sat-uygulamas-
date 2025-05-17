const API_BASE_URL = "http://localhost:5000/api/BusFeature/";

// Plakaya göre otobüs özelliklerini getir
export async function getByPlaka(plaka) {
  const response = await fetch(API_BASE_URL + "getByPlaka/" + encodeURIComponent(plaka));
  if (!response.ok) throw new Error("Plakaya göre otobüs özellikleri getirilemedi");
  return await response.json();
}

// Yeni otobüs özelliği ekle
export async function postBusFeature(busFeatureData) {
  const response = await fetch(API_BASE_URL + "postBusFeature", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(busFeatureData)
  });
  if (!response.ok) throw new Error("Otobüs özelliği eklenemedi");
  return await response.json();
}

// Plakaya göre otobüs özelliğini güncelle
export async function putBusFeature(plaka, busFeatureData) {
  const response = await fetch(API_BASE_URL + "putBusFeature/" + encodeURIComponent(plaka), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(busFeatureData)
  });
  if (!response.ok) throw new Error(plaka + " plakalı otobüs özelliği güncellenemedi");
  return await response.json();
}

// Plakaya göre otobüs özelliğini sil
export async function deleteBusFeature(plaka) {
  const response = await fetch(API_BASE_URL + "deleteBusFeature/" + encodeURIComponent(plaka), {
    method: "DELETE"
  });
  if (!response.ok) throw new Error(plaka + " plakalı otobüs özelliği silinemedi");
  return await response.json();
}
