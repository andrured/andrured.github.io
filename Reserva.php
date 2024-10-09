<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reserva";
// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$destino = $_POST['destino'];
$fecha_partida = $_POST['fecha_partida'];
$fecha_regreso = $_POST['fecha_regreso'];

// Preparar y ejecutar la inserción
$sql = "INSERT INTO usuarios (destino, fecha_partida,fecha_regreso) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $destino, $fecha_partida, $fecha_regreso);

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
