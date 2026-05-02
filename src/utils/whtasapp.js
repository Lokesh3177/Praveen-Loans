export const openWhatsApp = (customMessage = "") => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_CONTACT_NUMBER;
  const message = encodeURIComponent(customMessage || "Hi LoanPro, I have a query.");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};