
const API_BASE_URL = "http://localhost:5000/api/TicketSeat/";

// Tüm bilet koltuklarını getir
export async function getTicketSeat() {
  const response = await fetch(API_BASE_URL + "getTicketSeat");
  if (!response.ok) throw new Error("Bilet koltukları getirilemedi");
  return await response.json();
}

// ID'ye göre bilet koltuğu getir
export async function getTicketSeatbyId(id) {
  const response = await fetch(API_BASE_URL + "getTicketSeatbyId/" + encodeURIComponent(id));
  if (!response.ok) throw new Error(id + " ID'li bilet koltuğu getirilemedi");
  return await response.json();
}

// Yeni bilet koltuğu ekle
export async function postTicketSeat(ticketSeatData) {
  const response = await fetch(API_BASE_URL + "postTicketSeat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ticketSeatData)
  });
  if (!response.ok) throw new Error("Bilet koltuğu eklenemedi");
  return await response.json();
}

// ID'ye göre bilet koltuğu güncelle
export async function getPutTicketSeatbyId(id, ticketSeatData) {
  const response = await fetch(API_BASE_URL + "getPutTicketSeatbyId/" + encodeURIComponent(id), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ticketSeatData)
  });
  if (!response.ok) throw new Error(id + " ID'li bilet koltuğu güncellenemedi");
  return await response.json();
}

// ID'ye göre bilet koltuğu sil
export async function deleteTicketbyId(id) {
  const response = await fetch(API_BASE_URL + "deleteTicketbyId/" + encodeURIComponent(id), {
    method: "DELETE"
  });
  if (!response.ok) throw new Error(id + " ID'li bilet koltuğu silinemedi");
  return await response.json();
}




