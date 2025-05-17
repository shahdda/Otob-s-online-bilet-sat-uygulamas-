
const API_BASE_URL = "http://localhost:5000/api/Ticket/";

// Tüm biletleri getir
export async function getTicket() {
  const response = await fetch(API_BASE_URL + "getTicket");
  if (!response.ok) throw new Error("Biletler getirilemedi");
  return await response.json();
}

// PNR'ye göre bilet getir
export async function getTicketByPNR(pnr) {
  const response = await fetch(API_BASE_URL + "getTicketByPNR/" + encodeURIComponent(pnr));
  if (!response.ok) throw new Error(pnr + " PNR'li bilet getirilemedi");
  return await response.json();
}

// Yeni bilet ekle
export async function postTicket(ticketData) {
  const response = await fetch(API_BASE_URL + "postTicket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ticketData)
  });
  if (!response.ok) throw new Error("Bilet eklenemedi");
  return await response.json();
}

// PNR'ye göre bilet güncelle
export async function putTicketByPNR(pnr, ticketData) {
  const response = await fetch(API_BASE_URL + "putTicketByPNR/" + encodeURIComponent(pnr), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ticketData)
  });
  if (!response.ok) throw new Error(pnr + " PNR'li bilet güncellenemedi");
  return await response.json();
}

// PNR'ye göre bilet sil
export async function deleteTicketByPNR(pnr) {
  const response = await fetch(API_BASE_URL + "deleteTicketByPNR/" + encodeURIComponent(pnr), {
    method: "DELETE"
  });
  if (!response.ok) throw new Error(pnr + " PNR'li bilet silinemedi");
  return await response.json();
}
