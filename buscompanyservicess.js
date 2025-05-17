const API_BASE_URL = "http://localhost:5000/api/Company/";

// Tüm firmaları getir
export async function getAllFirma() {
  const response = await fetch(API_BASE_URL + "getAllFirma");
  if (!response.ok) throw new Error("Firmalar getirilemedi");
  return await response.json();
}

// ID'ye göre firma getir
export async function getById(id) {
  const response = await fetch(API_BASE_URL + "getById/" + encodeURIComponent(id));
  if (!response.ok) throw new Error(id + " ID'li firma getirilemedi");
  return await response.json();
}

// Yeni firma ekle
export async function postFirma(firmaData) {
  const response = await fetch(API_BASE_URL + "postFirma", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(firmaData)
  });
  if (!response.ok) throw new Error("Firma eklenemedi");
  return await response.json();
}

// ID'ye göre firma güncelle
export async function updateFirmabyId(id, firmaData) {
  const response = await fetch(API_BASE_URL + "updateFirmabyId/" + encodeURIComponent(id), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(firmaData)
  });
  if (!response.ok) throw new Error(id + " ID'li firma güncellenemedi");
  return await response.json();
}

// ID'ye göre firma sil
export async function deleteFirmaById(id) {
  const response = await fetch(API_BASE_URL + "deleteFirmaById/" + encodeURIComponent(id), {
    method: "DELETE"
  });
  if (!response.ok) throw new Error(id + " ID'li firma silinemedi");
  return await response.json();
}
