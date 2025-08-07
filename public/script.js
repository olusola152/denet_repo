document.getElementById("dataForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Stop default form submission

  const form = e.target;
  const phone = form.phone.value;
  const volume = form.volume.value;
  const band = form.band.value;
  const validity = form.validity.value;

  const responseElement = document.getElementById("response");

  try {
    const res = await fetch("/api/receive", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ phone, volume, band, validity })
    });

    const data = await res.json();

    if (res.ok) {
      responseElement.textContent = "✅ " + data.message;
      form.style.display = "none"; // ✅ Hides the form after successful submission
    } else {
      responseElement.textContent = "❌ " + (data.error || "Something went wrong.");
    }
  } catch (err) {
    console.error(err);
    responseElement.textContent = "❌ Error submitting form.";
  }
});
