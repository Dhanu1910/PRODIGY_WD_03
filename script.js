let startTime = 0;
let elapsed = 0;
let interval = null;
let running = false;

function start() {
  if (running) return;

  running = true;
  startTime = Date.now() - elapsed;
  interval = setInterval(updateTime, 10);
}

function pause() {
  if (!running) return;

  running = false;
  clearInterval(interval);
}

function reset() {
  running = false;
  clearInterval(interval);
  elapsed = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (!running) return;

  const time = document.getElementById("display").textContent;
  const li = document.createElement("li");
  li.textContent = `Lap ${document.getElementById("laps").children.length + 1}: ${time}`;
  document.getElementById("laps").appendChild(li);
}

function updateTime() {
  elapsed = Date.now() - startTime;

  let ms = Math.floor((elapsed % 1000) / 10);
  let sec = Math.floor((elapsed / 1000) % 60);
  let min = Math.floor((elapsed / 60000) % 60);

  document.getElementById("display").textContent =
    `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}:${String(ms).padStart(2,"0")}`;
}
