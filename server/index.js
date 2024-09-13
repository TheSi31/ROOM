const express = require('express');
const path = require('path');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();
const app = express();

// Разрешаем CORS для всех запросов
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true, 
  }));
  
app.use(express.json()); 

// Подключение к базе данных PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5000,
});

// Пример эндпоинта для получения данных
app.get('/api/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
        console.log(process.env.DB_HOST);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/halls', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM showrooms');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
app.use('/uploads', express.static('img/products'));

app.get('/api/GetPhotoViaID/:id', async (req, res) => {
    try {
        const result = await pool.query('SELECT image_url FROM products WHERE id = $1', [req.params.id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Product not found');
        }

        const imagePath = path.join(__dirname, 'img', 'products', result.rows[0].image_url);
        res.sendFile(imagePath);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Запуск сервера
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
