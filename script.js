let timer = 60;
const timerElement = document.getElementById('timer');
if (timerElement) {
  setInterval(() => {
    timer--;
    timerElement.innerText = timer;
    if (timer <= 0) timer = 60;
  }, 1000);
}
function login() {
  alert("Logged in (dummy logic)");
}