const db = require('./db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            price REAL NOT NULL,
            image_url TEXT NOT NULL,
            category TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS gallery (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            image_url TEXT NOT NULL,
            caption TEXT
        )
    `, (err) => {
        if (err) {
            console.error('Error creating tables:', err.message);
            return;
        }

        // Check and seed products
        db.get(`SELECT COUNT(*) as count FROM products`, (err, row) => {
            if (row.count === 0) {
                const stmt = db.prepare(`INSERT INTO products (name, description, price, image_url, category) VALUES (?, ?, ?, ?, ?)`);
                stmt.run('Kesar Mangoes (Organically grown)', 'Purely organic Kesar mangoes, handpicked with care.', 34.00, 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600&auto=format&fit=crop', 'Fruits');
                stmt.run('Dragon Fruit (Exotic selection)', 'Fresh exotic dragon fruit directly from Mahabole Farms.', 75.00, 'https://images.unsplash.com/photo-1527324680074-e7866300473a?q=80&w=600&auto=format&fit=crop', 'Fruits');
                stmt.finalize();
            }
        });

        // Check and seed gallery
        db.get(`SELECT COUNT(*) as count FROM gallery`, (err, row) => {
            if (row.count === 0) {
                const stmt = db.prepare(`INSERT INTO gallery (title, image_url, caption) VALUES (?, ?, ?)`);
                stmt.run('Farm Fresh Harvest', 'https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=600&auto=format&fit=crop', 'Harvesting fresh produce');
                stmt.run('Kesar Visits', 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop', 'Kesar Visits: Kesar Visits Lightfrom caption');
                stmt.run('Orchard View', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop', 'Our lush green farm');
                stmt.finalize();
            }
        });

        console.log('Database tables created and seeded successfully with SQLite!');
    });
});