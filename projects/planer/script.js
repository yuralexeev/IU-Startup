function scrollToForm() {
  document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // имитация отправки
  document.getElementById('successMessage').classList.remove('hidden');
  this.reset();
});
