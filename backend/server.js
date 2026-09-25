const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root test route
app.get('/', (req, res) => {
    res.json({ message: 'Mahabole Farms API is running successfully with PostgreSQL!' });
});

// GET: Fetch all products with direct working image and INR pricing
app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Kesar Mangoes (Organically grown)',
            description: 'Purely organic Kesar mangoes, handpicked with care.',
            price: 850.00,
            image_url: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600&auto=format&fit=crop',
            category: 'Fruits'
        },
        {
            id: 2,
            name: 'Dragon Fruit (Exotic selection)',
            description: 'Fresh exotic dragon fruit directly from Mahabole Farms.',
            price: 1200.00,
            image_url: 'https://images.unsplash.com/photo-1537877207040-a15db3b194d2?q=80&w=600&auto=format&fit=crop',
            category: 'Fruits'
        }
    ];
    res.json(products);
});

// GET: Fetch all gallery images
app.get('/api/gallery', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM gallery');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Save a new order
app.post('/api/orders', async (req, res) => {
    const { customer_name, total_amount } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO orders (customer_name, total_amount) VALUES ($1, $2) RETURNING *',
            [customer_name, total_amount]
        );
        res.status(201).json({ message: 'Order saved successfully!', order: result.rows[0] });
    } catch (err) {
        console.error('Error saving order:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});