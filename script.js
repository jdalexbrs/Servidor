const webhookURL = "https://discord.com/api/webhooks/1423073398023651348/VAdkiXPoQYqI-feNKoiPuBTbwVEM-ORSNFOSTUANV1Bs_zYM1V6LPgBByoU6JBaCV7HT";

// Mostrar preguntas según el rol elegido
const rolSelect = document.getElementById("rolSelect");
const staffDiv = document.getElementById("staffPreguntas");
const devDiv = document.getElementById("devPreguntas");
const betaDiv = document.getElementById("betaPreguntas");

rolSelect.addEventListener("change", () => {
  staffDiv.classList.add("oculto");
  devDiv.classList.add("oculto");
  betaDiv.classList.add("oculto");
  if (rolSelect.value === "Staff") staffDiv.classList.remove("oculto");
  if (rolSelect.value === "Dev") devDiv.classList.remove("oculto");
  if (rolSelect.value === "Beta Tester") betaDiv.classList.remove("oculto");
});

// Enviar datos al webhook
document.getElementById("postulacionForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  let fields = [];

  for (let [key, value] of formData.entries()) {
    if (value.trim() !== "") {
      const nameFormatted = key.replace(/_/g, " ");
      fields.push({ name: nameFormatted, value: value });
    }
  }

  const payload = {
    embeds: [{
      title: "📩 Nueva Postulación a Godest",
      color: 0x5865f2,
      fields: fields,
      timestamp: new Date()
    }]
  };

  try {
    let res = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert("✅ Postulación enviada con éxito.");
      e.target.reset();
      staffDiv.classList.add("oculto");
      devDiv.classList.add("oculto");
      betaDiv.classList.add("oculto");
    } else {
      alert("❌ Error al enviar la postulación.");
      console.error("Error al enviar al webhook:", res.status, await res.text());
    }
  } catch (err) {
    alert("⚠️ Hubo un problema al conectar con Discord.");
    console.error("Excepción al enviar al webhook:", err);
  }
});
