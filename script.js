<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Formulario de Postulación - Godest</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <h1>🌟 Formulario de Postulación - Godest 🌟</h1>

    <form id="formulario">
        <h2>Información Básica</h2>
        <label>Nick en Discord</label>
        <input type="text" id="nick_discord" required>

        <label>Nick en Minecraft</label>
        <input type="text" id="nick_mc" required>

        <h2>Rol a postular</h2>
        <label><input type="radio" name="rol" value="Staff" required> Staff</label>
        <label><input type="radio" name="rol" value="Dev"> Dev</label>
        <label><input type="radio" name="rol" value="Beta Tester"> Beta Tester</label>

        <h2>Preguntas</h2>
        <label>¿Por qué quieres ser staff/dev/beta tester?</label>
        <textarea id="q1" required></textarea>

        <label>Disponibilidad (horarios y días)</label>
        <textarea id="q2" required></textarea>

        <label>Experiencia previa en otros servidores</label>
        <textarea id="q3"></textarea>

        <label>¿Cómo te describirías en pocas palabras?</label>
        <textarea id="q4"></textarea>

        <label>Otras motivaciones / comentarios</label>
        <textarea id="q5"></textarea>

        <button type="submit">Enviar Formulario 🚀</button>
    </form>
</div>

<script src="form.js"></script>
</body>
</html>
