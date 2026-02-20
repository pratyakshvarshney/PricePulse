let chart;

function loadData() {

  const prices = [1500, 1400, 1350, 1200, 1100, 1050, 950];
  const dates = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  document.getElementById("dashboard").classList.remove("hidden");

  const product = document.getElementById("productInput").value;
  document.getElementById("productName").innerText = product;

  document.getElementById("currentPrice").innerText = prices[prices.length - 1];
  document.getElementById("lowestPrice").innerText = Math.min(...prices);
  document.getElementById("highestPrice").innerText = Math.max(...prices);

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(document.getElementById("priceChart"), {
    type: "line",
    data: {
      labels: dates,
      datasets: [{
        label: "Price Trend",
        data: prices,
        borderColor: "#ff6b6b",
        backgroundColor: "rgba(255,107,107,0.2)",
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: "white" }
        }
      },
      scales: {
        x: { ticks: { color: "white" }},
        y: { ticks: { color: "white" }}
      }
    }
  });
}