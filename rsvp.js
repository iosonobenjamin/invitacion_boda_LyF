// Contador regresivo
function updateCountdown() {
  const weddingDate = new Date('2026-10-01T00:00:00').getTime();
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;
  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById('days').textContent = days.toString().padStart(3, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  } else {
    document.getElementById('days').textContent = '000';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Formulario RSVP
const rsvpForm = document.getElementById('rsvpForm');
if (rsvpForm) {
  rsvpForm.addEventListener('submit', function(e){
    e.preventDefault();
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    if (!nombre || !apellido) {
      document.getElementById('rsvpMsg').textContent = 'Por favor, completa ambos campos.';
      return;
    }
    fetch('https://invitacion-boda-ly-f-git-main-benjamins-projects-ba0b721c.vercel.app/api/rsvp', { método: 'POST', body: JSON.stringify({nombre, apellido}), encabezados: {'Content-Type': 'application/json'}
})
    .then(res => res.text())
    .then(data => {
      document.getElementById('rsvpMsg').textContent = '¡Gracias por confirmar tu asistencia!';
      document.getElementById('rsvpForm').reset();
    })
    .catch(err => {
      document.getElementById('rsvpMsg').textContent = 'Hubo un error. Intenta de nuevo.';
    });
  });
}
