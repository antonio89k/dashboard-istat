// same rawData as before...
const rawData = [
  { id: 1, genereVittima: "F", etaVittima: 17, abusante: "Partner", topics: "Violenza fisica", tipoViolenza: "Fisica", ambitoViolenza: "Familiare" },
  { id: 2, genereVittima: "F", etaVittima: 32, abusante: "Ex partner", topics: "Stalking", tipoViolenza: "Psicologica", ambitoViolenza: "Relazionale" },
  { id: 3, genereVittima: "M", etaVittima: 45, abusante: "Collega", topics: "Mobbing", tipoViolenza: "Psicologica", ambitoViolenza: "Lavorativo" },
  { id: 4, genereVittima: "F", etaVittima: 28, abusante: "Sconosciuto", topics: "Molestie in strada", tipoViolenza: "Sessuale", ambitoViolenza: "Pubblico" },
  { id: 5, genereVittima: "F", etaVittima: 54, abusante: "Coniuge", topics: "Controllo economico", tipoViolenza: "Economica", ambitoViolenza: "Familiare" },
  { id: 6, genereVittima: "NB", etaVittima: 22, abusante: "Partner", topics: "Insulti omolesbobitransfobici", tipoViolenza: "Psicologica", ambitoViolenza: "Relazionale" },
  { id: 7, genereVittima: "M", etaVittima: 39, abusante: "Datore di lavoro", topics: "Ricatti", tipoViolenza: "Economica", ambitoViolenza: "Lavorativo" },
  { id: 8, genereVittima: "F", etaVittima: 19, abusante: "Insegnante", topics: "Molestie online", tipoViolenza: "Digitale", ambitoViolenza: "Scolastico" },
  { id: 9, genereVittima: "F", etaVittima: 27, abusante: "Partner", topics: "Revenge porn", tipoViolenza: "Digitale", ambitoViolenza: "Relazionale" },
  { id: 10, genereVittima: "M", etaVittima: 16, abusante: "Allenatore", topics: "Abusi fisici", tipoViolenza: "Fisica", ambitoViolenza: "Sportivo" },
  { id: 11, genereVittima: "F", etaVittima: 63, abusante: "Figlio", topics: "Umiliazioni", tipoViolenza: "Psicologica", ambitoViolenza: "Familiare" },
  { id: 12, genereVittima: "F", etaVittima: 41, abusante: "Partner", topics: "Isolamento sociale", tipoViolenza: "Psicologica", ambitoViolenza: "Familiare" },
  { id: 13, genereVittima: "M", etaVittima: 34, abusante: "Sconosciuto", topics: "Aggressione", tipoViolenza: "Fisica", ambitoViolenza: "Pubblico" },
  { id: 14, genereVittima: "F", etaVittima: 23, abusante: "Ex partner", topics: "Persecuzioni online", tipoViolenza: "Digitale", ambitoViolenza: "Relazionale" },
  { id: 15, genereVittima: "F", etaVittima: 30, abusante: "Capo", topics: "Ricatto sessuale", tipoViolenza: "Sessuale", ambitoViolenza: "Lavorativo" },
  { id: 16, genereVittima: "NB", etaVittima: 26, abusante: "Coinquilino", topics: "Insulti", tipoViolenza: "Psicologica", ambitoViolenza: "Abitativo" },
  { id: 17, genereVittima: "F", etaVittima: 52, abusante: "Coniuge", topics: "Limitazione spese", tipoViolenza: "Economica", ambitoViolenza: "Familiare" },
  { id: 18, genereVittima: "M", etaVittima: 29, abusante: "Sconosciuto", topics: "Aggressione in locale", tipoViolenza: "Fisica", ambitoViolenza: "Pubblico" },
  { id: 19, genereVittima: "F", etaVittima: 21, abusante: "Compagno università", topics: "Molestie", tipoViolenza: "Sessuale", ambitoViolenza: "Scolastico" },
  { id: 20, genereVittima: "F", etaVittima: 37, abusante: "Partner", topics: "Controllo password", tipoViolenza: "Digitale", ambitoViolenza: "Familiare" },
  { id: 21, genereVittima: "M", etaVittima: 48, abusante: "Collega", topics: "Offese continue", tipoViolenza: "Psicologica", ambitoViolenza: "Lavorativo" },
  { id: 22, genereVittima: "F", etaVittima: 25, abusante: "Ex partner", topics: "Diffamazione online", tipoViolenza: "Digitale", ambitoViolenza: "Relazionale" },
  { id: 23, genereVittima: "F", etaVittima: 31, abusante: "Partner", topics: "Spinte e schiaffi", tipoViolenza: "Fisica", ambitoViolenza: "Familiare" },
  { id: 24, genereVittima: "NB", etaVittima: 19, abusante: "Genitori", topics: "Minacce", tipoViolenza: "Psicologica", ambitoViolenza: "Familiare" },
  { id: 25, genereVittima: "F", etaVittima: 46, abusante: "Coniuge", topics: "Esclusione da decisioni economiche", tipoViolenza: "Economica", ambitoViolenza: "Familiare" },
  { id: 26, genereVittima: "M", etaVittima: 27, abusante: "Partner", topics: "Ricatti economici", tipoViolenza: "Economica", ambitoViolenza: "Relazionale" },
  { id: 27, genereVittima: "F", etaVittima: 33, abusante: "Datore di lavoro", topics: "Commenti sessisti", tipoViolenza: "Sessuale", ambitoViolenza: "Lavorativo" },
  { id: 28, genereVittima: "F", etaVittima: 40, abusante: "Partner", topics: "Violenza assistita sui figli", tipoViolenza: "Fisica", ambitoViolenza: "Familiare" },
  { id: 29, genereVittima: "M", etaVittima: 20, abusante: "Compagni di classe", topics: "Bullismo", tipoViolenza: "Psicologica", ambitoViolenza: "Scolastico" },
  { id: 30, genereVittima: "F", etaVittima: 36, abusante: "Ex partner", topics: "Controllo social", tipoViolenza: "Digitale", ambitoViolenza: "Relazionale" }
];
let filteredData = [...rawData];
let currentPage = 1;
const pageSize = 10;

let sortColumn = null;
let sortDirection = "asc";

let chartInstance = null;

const chartModes = [
  { id: "bar", label: "Grafico a barre" },
  { id: "doughnut", label: "Grafico ad anello" },
  { id: "pie", label: "Grafico a torta" },
  { id: "radar", label: "Grafico radar" },
  { id: "pyramid", label: "Grafico a piramide" },
  { id: "line", label: "Grafico a linee spezzate" }
];
let currentChartModeIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  initSorting();
  applyFilters();

  document.getElementById("prev-page").addEventListener("click", () => changePage(-1));
  document.getElementById("next-page").addEventListener("click", () => changePage(1));
  document.getElementById("change-chart").addEventListener("click", cycleChartMode);

  document.getElementById("dimension-select").addEventListener("change", updateChart);
});

// ---------- PAGINAZIONE + TABELLA ----------

function changePage(delta) {
  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const newPage = currentPage + delta;
  if (newPage < 1 || newPage > totalPages) return;
  currentPage = newPage;
  renderTable();
}

// FILTERS, SORTING, TABLE SAME AS PREVIOUS VERSION
// ...
function initFilters() {
  const filterConfig = [
    { id: "filter-genere", key: "genereVittima" },
    { id: "filter-eta", key: "etaVittima" },
    { id: "filter-abusante", key: "abusante" },
    { id: "filter-topics", key: "topics" },
    { id: "filter-tipo", key: "tipoViolenza" },
    { id: "filter-ambito", key: "ambitoViolenza" }
  ];

  filterConfig.forEach(({ id, key }) => {
    const select = document.getElementById(id);
    const values = Array.from(new Set(rawData.map(row => row[key]))).sort((a, b) => {
      // Ordinamento numerico per id e età
      if (key === "id" || key === "etaVittima") {
        return Number(a) - Number(b);
      }
      return String(a).localeCompare(String(b), "it");
    });

    // Opzione "Tutti"
    const allOption = document.createElement("option");
    allOption.value = "";
    allOption.textContent = "Tutti";
    select.appendChild(allOption);

    values.forEach(v => {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      select.appendChild(opt);
    });

    select.addEventListener("change", applyFilters);
  });
}

function applyFilters() {
  const genereFilter = document.getElementById("filter-genere").value;
  const etaFilter = document.getElementById("filter-eta").value;
  const abusanteFilter = document.getElementById("filter-abusante").value;
  const topicsFilter = document.getElementById("filter-topics").value;
  const tipoFilter = document.getElementById("filter-tipo").value;
  const ambitoFilter = document.getElementById("filter-ambito").value;

  filteredData = rawData.filter(row => {
    if (genereFilter && row.genereVittima !== genereFilter) return false;
    if (etaFilter && String(row.etaVittima) !== String(etaFilter)) return false;
    if (abusanteFilter && row.abusante !== abusanteFilter) return false;
    if (topicsFilter && row.topics !== topicsFilter) return false;
    if (tipoFilter && row.tipoViolenza !== tipoFilter) return false;
    if (ambitoFilter && row.ambitoViolenza !== ambitoFilter) return false;
    return true;
  });

  // Applica ordinamento se presente
  if (sortColumn) {
    sortFilteredData();
  }

  currentPage = 1;
  renderTable();
  updateChart();
}

// ---------- ORDINAMENTO ----------

function initSorting() {
  const headers = document.querySelectorAll("th.sortable");
  headers.forEach(th => {
    th.addEventListener("click", () => {
      const column = th.dataset.column;
      if (sortColumn === column) {
        // Inverti direzione
        sortDirection = sortDirection === "asc" ? "desc" : "asc";
      } else {
        sortColumn = column;
        sortDirection = "asc";
      }

      // Aggiorna indicatori visivi
      headers.forEach(h => {
        h.classList.remove("asc", "desc");
      });
      th.classList.add(sortDirection);

      sortFilteredData();
      currentPage = 1;
      renderTable();
      updateChart(); // anche il grafico rispecchia lo stesso ordine di dati (se serve)
    });
  });
}

function sortFilteredData() {
  filteredData.sort((a, b) => {
    const valA = a[sortColumn];
    const valB = b[sortColumn];

    let comparison;
    if (typeof valA === "number" && typeof valB === "number") {
      comparison = valA - valB;
    } else {
      comparison = String(valA).localeCompare(String(valB), "it");
    }

    return sortDirection === "asc" ? comparison : -comparison;
  });
}

function renderTable() {
  const tbody = document.querySelector("#data-table tbody");
  tbody.innerHTML = "";

  const totalRecords = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalRecords / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const pageData = filteredData.slice(startIndex, startIndex + pageSize);

  pageData.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.id}</td>
      <td>${row.genereVittima}</td>
      <td>${row.etaVittima}</td>
      <td>${row.abusante}</td>
      <td>${row.topics}</td>
      <td>${row.tipoViolenza}</td>
      <td>${row.ambitoViolenza}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("current-page").textContent = `Pagina ${currentPage} di ${totalPages}`;
  document.getElementById("record-count").textContent = `${totalRecords} record filtrati`;

  document.getElementById("prev-page").disabled = currentPage === 1;
  document.getElementById("next-page").disabled = currentPage === totalPages;
}

function cycleChartMode() {
  currentChartModeIndex = (currentChartModeIndex + 1) % chartModes.length;
  updateChart();
}

function buildChartData() {
  const dimension = document.getElementById("dimension-select").value;

  const counts = {};
  filteredData.forEach(row => {
    const key = row[dimension];
    counts[key] = (counts[key] || 0) + 1;
  });

  return {
    labels: Object.keys(counts),
    values: Object.values(counts)
  };
}

function updateChart() {
  const { labels, values } = buildChartData();

  const noDataMessage = document.getElementById("no-data-message");
  if (labels.length === 0) {
    if (chartInstance) chartInstance.destroy();
    noDataMessage.hidden = false;
    return;
  } else noDataMessage.hidden = true;

  const ctx = document.getElementById("data-chart").getContext("2d");
  const mode = chartModes[currentChartModeIndex].id;

  if (chartInstance) chartInstance.destroy();

  let type = mode;
  const options = { responsive: true, maintainAspectRatio: false };
  if (mode === "pyramid") type = "bar";

  chartInstance = new Chart(ctx, {
    type,
    data: {
      labels,
      datasets: [{
        label: "Numero di segnalazioni",
        data: values
      }]
    },
    options
  });
}
