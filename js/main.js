document.addEventListener('DOMContentLoaded', () => {
  const cover = document.getElementById('cover');
  const envelope = document.getElementById('envelope');
  const sealBtn = document.getElementById('sealBtn');
  const continueBtn = document.getElementById('continueBtn');
  const story = document.getElementById('story');

  document.body.classList.add('locked');

  let opened = false;
  function openEnvelope() {
    if (opened) return;
    opened = true;
    envelope.classList.add('open');
    cover.classList.add('opening');
  }
  sealBtn.addEventListener('click', openEnvelope);

  function enterStory() {
    document.body.classList.remove('locked');
    cover.classList.add('hidden');
    setTimeout(() => {
      story.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
  continueBtn.addEventListener('click', enterStory);

  // Calendar: adds the wedding to Google Calendar
  const calendarBtn = document.getElementById('calendarBtn');
  calendarBtn.addEventListener('click', () => {
    const start = '20261114T100000';
    const end = '20261114T230000';
    const title = encodeURIComponent('Boda de Camila & Sebastián');
    const details = encodeURIComponent('Ceremonia 10:00 AM en la Parroquia San Miguel Arcángel, Choachí. Recepción 12:30 PM en Lipari Campestre.');
    const location = encodeURIComponent('Parroquia San Miguel Arcángel, Choachí, Cundinamarca');
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
    window.open(url, '_blank', 'noopener');
  });

  // WhatsApp confirmation link
  const whatsappBtn = document.getElementById('whatsappBtn');
  const waMessage = encodeURIComponent('¡Hola! Confirmo mi asistencia a la boda de Camila & Sebastián el 14 de noviembre de 2026. Somos: ');
  whatsappBtn.href = `https://wa.me/573156694096?text=${waMessage}`;
});
