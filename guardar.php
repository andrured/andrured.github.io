<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "avistamientos";
// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$tour = $_POST['tour'];

// Preparar y ejecutar la inserción
$sql = "INSERT INTO usuarios (nombre, correo, tour) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $nombre, $correo, $tour);

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
