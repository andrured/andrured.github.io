import sqlite3

def create_connection():
    conn = sqlite3.connect('hotel_reservas.db')
    return conn

def create_table():
    conn = create_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS reservas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            telefono TEXT NOT NULL,
            email TEXT NOT NULL,
            fecha_entrada TEXT NOT NULL,
            fecha_salida TEXT NOT NULL,
            habitacion TEXT NOT NULL,
            personas INTEGER NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

if __name__ == '__main__':
    create_table()
