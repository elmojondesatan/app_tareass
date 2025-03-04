const mysql = require('mysql2/promise');

const pool = mysql.createPool({
host: 'localhost',
user: 'root',
password: 'alonsov1234',
database: 'todo_list',
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0
});

async function conectar(consulta_sql) {
try {
const conexion = await pool.getConnection();
console.log("Conexión exitosa a la base de datos.");

const [rows] = await conexion.execute(consulta_sql);
conexion.release();

return rows;
} catch (error) {
console.error("Error al conectar a la base de datos:", error);
return null;
}
}

// Ejemplo de uso:
(async () => {
const resultado = await conectar("SELECT * FROM tareas");
console.log(resultado);
})();