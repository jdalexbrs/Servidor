document.getElementById("formulario").addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
        nick_discord: document.getElementById("nick_discord").value,
        nick_mc: document.getElementById("nick_mc").value,
        rol: document.querySelector('input[name="rol"]:checked').value,
        respuestas: {
            "¿Por qué quieres ser staff/dev/beta tester?": document.getElementById("q1").value,
            "Disponibilidad (horarios y días)": document.getElementById("q2").value,
            "Experiencia previa en otros servidores": document.getElementById("q3").value,
            "¿Cómo te describirías en pocas palabras?": document.getElementById("q4").value,
            "Otras motivaciones / comentarios": document.getElementById("q5").value
        }
    };

    try {
        const res = await fetch("http://TU_SERVIDOR:5000/postulacion", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if(data.ok) alert("Formulario enviado correctamente ✅");
        else alert("Error al enviar ❌");
    } catch (err) {
        console.error(err);
        alert("Error al conectar con el servidor ❌");
    }

    document.getElementById("formulario").reset();
});
