const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Замените параметры подключения вашей базы данных
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nav',
  password: 'mysql',
  port: 5432,
});

app.use(express.json());

// Эндпоинт API для получения данных комнаты по идентификатору
app.get('/api/room/:id', async (req, res) => {
  const roomId = req.params.id;

  try {
    const result = await pool.query('SELECT * FROM rooms WHERE id = $1', [roomId]);
    const roomData = result.rows[0];

    if (roomData) {
      res.json(roomData);
    } else {
      res.status(404).json({ error: 'Room not found' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});