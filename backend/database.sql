CREATE DATABASE mahabole_farms;

\c mahabole_farms;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    category VARCHAR(100)
);

CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    image_url VARCHAR(255) NOT NULL,
    caption VARCHAR(255)
);

-- Insert products with INR pricing and robust image URLs
INSERT INTO products (name, description, price, image_url, category) VALUES
('Kesar Mangoes (Organically grown)', 'Purely organic Kesar mangoes, handpicked with care.', 850.00, 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600&auto=format&fit=crop', 'Fruits'),
('Dragon Fruit (Exotic selection)', 'Fresh exotic dragon fruit directly from Mahabole Farms.', 1200.00, 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop', 'Fruits');

-- Insert initial gallery images matching your webpage design
INSERT INTO gallery (title, image_url, caption) VALUES
('Farm Fresh Harvest', 'https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=600&auto=format&fit=crop', 'Harvesting fresh produce'),
('Kesar Visits', 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop', 'Kesar Visits: Kesar Visits Lightfrom caption'),
('Orchard View', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop', 'Our lush green farm');