
function sendPayload(version) {
  const xhr = new XMLHttpRequest();
  let file = version === '900' ? 'GoldHEN_2.4b18_900.bin' : 'GoldHEN_2.4b18_960.bin';
  xhr.open('GET', file, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert('Payload Sent: ' + file);
    } else {
      alert('Failed to load payload.');
    }
  };
  xhr.send();
}
