import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Products({ onAddToCart }) {
  const products = [
    {
      id: 1,
      name: 'Kesar Mangoes (Organically grown)',
      description: 'Purely organic Kesar mangoes, handpicked with care.',
      price: 850.00,
      image_url: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
      category: 'Fruits'
    },
   
  ];

  return (
    <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white tracking-tight mb-3">
          Featured <span className="text-amber-400">Organic Products</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Handpicked directly from our sustainable orchards to your doorstep.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map(product => (
          <div 
            key={product.id} 
            className="group bg-[#0f172a] rounded-3xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col justify-between transition transform hover:-translate-y-1 hover:border-amber-500/50"
          >
            {/* Product Image Container */}
            <div className="relative h-72 w-full overflow-hidden bg-gray-900">
              <img 
                src={product.image_url} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                {product.category}
              </span>
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-amber-400 transition">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800/80">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 block">Price</span>
                  <span className="text-amber-400 font-black text-2xl">₹{product.price.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-5 py-3 rounded-xl flex items-center space-x-2 shadow-lg shadow-amber-500/20 transition transform hover:scale-105"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}