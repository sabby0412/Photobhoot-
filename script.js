const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const filterSelect = document.getElementById('filter');
const stripLayout = document.getElementById('layout');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
    video.play();
  })
  .catch(err => {
    alert("Camera access denied or not available.");
    console.error("Error accessing camera:", err);
  });

captureButton.addEventListener('click', () => {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const filter = filterSelect.value;
  canvas.style.filter = filter;

  const image = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'photobooth.png';
  link.click();
});