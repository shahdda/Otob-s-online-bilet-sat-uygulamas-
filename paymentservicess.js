const API_BASE_URL = "http://localhost:5000/api/Payment/";

// Tüm ödemeleri getir
export async function getPayment() {
  const response = await fetch(API_BASE_URL + "getPayment");
  if (!response.ok) throw new Error("Ödemeler getirilemedi");
  return await response.json();
}

// ID'ye göre ödeme getir
export async function getPaymentById(id) {
  const response = await fetch(API_BASE_URL + "getPaymentById/" + encodeURIComponent(id));
  if (!response.ok) throw new Error(id + " ID'li ödeme getirilemedi");
  return await response.json();
}

// Yeni ödeme ekle
export async function postPayment(paymentData) {
  const response = await fetch(API_BASE_URL + "postPayment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paymentData)
  });
  if (!response.ok) throw new Error("Ödeme eklenemedi");
  return await response.json();
}

// ID'ye göre ödeme güncelle
export async function putPaymentById(id, paymentData) {
  const response = await fetch(API_BASE_URL + "putPaymentById/" + encodeURIComponent(id), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paymentData)
  });
  if (!response.ok) throw new Error(id + " ID'li ödeme güncellenemedi");
  return await response.json();
}

// ID'ye göre ödeme sil
export async function deletePaymentById(id) {
  const response = await fetch(API_BASE_URL + "deletePaymentById/" + encodeURIComponent(id), {
    method: "DELETE"
  });
  if (!response.ok) throw new Error(id + " ID'li ödeme silinemedi");
  return await response.json();
}
