document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const captureBtn = document.getElementById("captureBtn");

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("Your browser does not support camera access.");
    return;
  }

  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error("Camera error:", err);
      alert("Camera access denied or not available. Please allow camera access in your browser settings.");
    });

  captureBtn.addEventListener("click", () => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  });
});
