const API_BASE_URL = "http://localhost:5000/api/Person/";

// Tüm kişileri getir
export async function getAllPerson() {
  const response = await fetch(API_BASE_URL + "getallPerson");
  if (!response.ok) throw new Error("Kişiler getirilemedi");
  return await response.json();
}

// ID'ye göre kişi getir
export async function personWithId(id) {
  const response = await fetch(API_BASE_URL + "personWithId/" + encodeURIComponent(id));
  if (!response.ok) throw new Error(id + " ID'li kişi getirilemedi");
  return await response.json();
}

// Yeni kişi ekle
export async function postPerson(personData) {
  const response = await fetch(API_BASE_URL + "postPerson", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(personData)
  });
  if (!response.ok) throw new Error("Kişi eklenemedi");
  return await response.json();
}

// ID'ye göre kişi güncelle
export async function personPutWithId(id, personData) {
  const response = await fetch(API_BASE_URL + "personPutWithId/" + encodeURIComponent(id), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(personData)
  });
  if (!response.ok) throw new Error(id + " ID'li kişi güncellenemedi");
  return await response.json();
}

// ID'ye göre kişi sil
export async function personDeleteWith(id) {
  const response = await fetch(API_BASE_URL + "personDeleteWith/" + encodeURIComponent(id), {
    method: "DELETE"
  });
  if (!response.ok) throw new Error(id + " ID'li kişi silinemedi");
  return await response.json();
}
