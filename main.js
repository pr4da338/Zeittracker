// Daten laden oder initialisieren
let data = JSON.parse(localStorage.getItem("timeData")) || {
  "Arbeit": 0,
  "Social Media": 0,
  "Lernen": 0,
  "Freizeit": 0,
  "Schlaf": 0
};

function addTime() {
  let category = document.getElementById("category").value;
  let minutes = Number(document.getElementById("minutes").value);

  if (!minutes || minutes <= 0) {
    alert("Bitte Minuten eingeben");
    return;
  }

  data[category] += minutes;

  // Speichern im lokalen Speicher
  localStorage.setItem("timeData", JSON.stringify(data));

  updateReport();
}

function updateReport() {
  let report = "";
  for (let category in data) {
    report += `${category}: ${data[category]} Minuten<br>`;
  }
  document.getElementById("report").innerHTML = report;
}

// Direkt beim Laden anzeigen
updateReport();