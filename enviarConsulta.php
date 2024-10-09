<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "consulta";
// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Preparar y ejecutar la inserción
$sql = "INSERT INTO usuarios (nombre,asunto,email,mensaje) VALUES (?, ?, ?,?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssi", $nombre, $asunto, $email, $mensaje);

if ($stmt->execute()) {
    echo "Nuevo registro creado correctamente";
    
} else {
    echo "Error: " . $stmt->error;
}

header('Location:exito.html');
// Cerrar la conexión
$stmt->close();
$conn->close();

?>
