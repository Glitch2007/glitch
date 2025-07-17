function sendPayload() {
  const payload = document.getElementById("payloadSelect").value;
  const status = document.getElementById("status");

  status.innerText = "Sending " + payload + "...";

  fetch(payload)
    .then(r => r.arrayBuffer())
    .then(data => {
      // placeholder: simulate sending payload
      setTimeout(() => {
        status.innerText = "Payload sent successfully!";
      }, 1000);
    })
    .catch(err => {
      status.innerText = "Error sending payload.";
      console.error(err);
    });
}
