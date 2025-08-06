document.getElementById("dataForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(this));
  const responseEl = document.getElementById("response");

  try {
    const res = await fetch("/api/receive", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    responseEl.textContent = data.message || data.error || "Submitted!";
    responseEl.style.color = data.message ? "green" : "red";
    if (data.message) this.reset();
  } catch {
    responseEl.textContent = "Network error";
    responseEl.style.color = "red";
  }
});
