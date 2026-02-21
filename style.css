let chart;

function extractNameFromLink(link) {
  try {
    const url = new URL(link);
    const pathParts = url.pathname.split("/").filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    return lastPart.replace(/-/g, " ").substring(0, 50);
  } catch {
    return null;
  }
}

function handleProduct() {

  const nameInput = document.getElementById("productNameInput").value.trim();
  const linkInput = document.getElementById("productLinkInput").value.trim();

  if (!nameInput && !linkInput) {
    alert("Please enter either product name or product link.");
    return;
  }

  const productName =
    nameInput || extractNameFromLink(linkInput) || "Product";

  document.getElementById("productTitle").innerText = productName;

  let platform = "Direct Search";
  if (linkInput.toLowerCase().includes("amazon")) {
    platform = "Amazon";
  } else if (linkInput.toLowerCase().includes("flipkart")) {
    platform = "Flipkart";
  }

  document.getElementById("platformTag").innerText = platform;

  const img = document.getElementById("productImage");
  img.src = "https://via.placeholder.com/300x300.png?text=Product+Preview";
  img.style.display = "block";

  document.getElementById("previewSection").classList.remove("hidden");

  const currentPrice = Math.floor(Math.random() * 5000) + 1000;

  const prices = [];
  const dates = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);

    const formattedDate = d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });

    dates.push(formattedDate);

    const variation = Math.floor(Math.random() * 400 - 200);
    prices.push(currentPrice + variation);
  }

  prices[prices.length - 1] = currentPrice;

  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);

  const highestIndex = prices.indexOf(highestPrice);
  const lowestIndex = prices.indexOf(lowestPrice);

  document.getElementById("currentPrice").innerText = currentPrice;
  document.getElementById("lowestPrice").innerText = lowestPrice;
  document.getElementById("highestPrice").innerText = highestPrice;

  document.getElementById("currentDate").innerText =
    "As of " + dates[dates.length - 1];

  document.getElementById("lowestDate").innerText =
    "On " + dates[lowestIndex];

  document.getElementById("highestDate").innerText =
    "On " + dates[highestIndex];

  document.getElementById("dashboardSection").classList.remove("hidden");

  if (chart) chart.destroy();

  chart = new Chart(document.getElementById("priceChart"), {
    type: "line",
    data: {
      labels: dates,
      datasets: [{
        label: "Price Trend (Last 7 Days)",
        data: prices,
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.2)",
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      plugins: {
        legend: { labels: { color: "white" } }
      },
      scales: {
        x: { ticks: { color: "white" } },
        y: { ticks: { color: "white" } }
      }
    }
  });

  document.getElementById("previewSection")
    .scrollIntoView({ behavior: "smooth" });
}
