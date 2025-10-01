const form = document.getElementById("postulacionForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nombre: form.nombre.value,
    edad: form.edad.value,
    discord: form.discord.value,
    razon: form.razon.value
  };

  try {
    const response = await fetch("https://TU_ENDPOINT_DEL_BOT_O_API", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      mensaje.textContent = "✅ Postulación enviada correctamente!";
      form.reset();
    } else {
      mensaje.textContent = "❌ Error al enviar la postulación.";
    }
  } catch (err) {
    mensaje.textContent = "❌ No se pudo conectar con el servidor.";
    console.error(err);
  }
});
