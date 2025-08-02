
function goToPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
function downloadBill() {
  const blob = new Blob(["RASIPS BILL\nBooking ID: RAS12345\nTotal: ₹1500"], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "RASIPS_Bill.txt";
  link.click();
}
document.addEventListener('DOMContentLoaded', () => {
  goToPage('loginPage');
});
