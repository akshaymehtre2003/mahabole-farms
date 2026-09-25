import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { X, Trash2, MessageCircle, ShoppingBag, ArrowLeft, CheckCircle, CreditCard, Wallet } from 'lucide-react';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'form', 'payment', 'success'
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'UPI'
  });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in all delivery details.');
      return;
    }
    setCheckoutStep('payment');
  };

  const handleCompleteOrder = () => {
    setCheckoutStep('success');
    
    let message = `🌿 *NEW ORDER - MAHABOLE FARMS* 🌿%0A%0A`;
    message += `👤 *Customer:* ${formData.name}%0A`;
    message += `📞 *Phone:* ${formData.phone}%0A`;
    message += `📍 *Address:* ${formData.address}%0A`;
    message += `💳 *Payment:* ${formData.paymentMethod}%0A%0A`;
    message += `🛍️ *Order Items:*%0A`;
    
    cart.forEach(item => {
      message += `• ${item.name} (x${item.qty}) - ₹${(item.price * item.qty).toFixed(2)}%0A`;
    });
    
    message += `%0A💰 *Total Amount:* ₹${totalPrice.toFixed(2)}%0A%0A`;
    message += `Please confirm my order!`;

    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    }, 1500);
  };

  const resetCartAndClose = () => {
    setCart([]);
    setCheckoutStep('cart');
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#060913] text-gray-100 flex flex-col selection:bg-amber-500 selection:text-black">
      <Navbar cartCount={cart.reduce((sum, i) => sum + i.qty, 0)} onOpenCart={() => setIsCartOpen(true)} />
      <Hero />
      <About />
      <Products onAddToCart={addToCart} />
      <Gallery />
      <Contact />

      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end transition-all">
          <div className="w-full max-w-md bg-[#0f172a] h-full shadow-2xl border-l border-gray-800 flex flex-col p-6 overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <h3 className="text-white font-extrabold text-lg">
                  {checkoutStep === 'cart' && 'Your Shopping Cart'}
                  {checkoutStep === 'form' && 'Shipping & Delivery Details'}
                  {checkoutStep === 'payment' && 'Select Payment Method'}
                  {checkoutStep === 'success' && 'Order Placed!'}
                </h3>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            {checkoutStep === 'cart' && (
              <>
                <div className="flex-grow py-4 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-24 text-gray-400">
                      <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-gray-600" />
                      <p className="font-semibold">Your cart is empty.</p>
                      <p className="text-xs text-gray-500 mt-1">Add organic products to start your order!</p>
                    </div>
                  ) : (
                    cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between bg-[#1e293b]/70 p-3.5 rounded-2xl border border-gray-700/60">
                        <div className="flex items-center space-x-3">
                          <img src={item.image_url} alt={item.name} className="w-14 h-14 object-cover rounded-xl border border-gray-600" />
                          <div>
                            <h4 className="text-white text-sm font-bold">{item.name}</h4>
                            <p className="text-amber-400 text-xs font-semibold">₹{item.price.toFixed(2)} x {item.qty}</p>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300 p-2 transition">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex justify-between text-base font-bold text-white mb-5">
                      <span>Total Amount:</span>
                      <span className="text-amber-400 text-xl">₹{totalPrice.toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={() => setCheckoutStep('form')}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold py-3.5 rounded-2xl flex items-center justify-center space-x-2 shadow-xl shadow-amber-500/20 transition transform hover:scale-[1.02]"
                    >
                      <span>Proceed to Checkout</span>
                    </button>
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'form' && (
              <form onSubmit={handleProceedToPayment} className="flex-grow py-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <button 
                    type="button" 
                    onClick={() => setCheckoutStep('cart')}
                    className="text-xs text-amber-400 flex items-center space-x-1 mb-2 hover:underline"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Cart</span>
                  </button>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Deeksha Tripathi"
                      className="w-full bg-[#1e293b] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">Phone Number (WhatsApp)</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#1e293b] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">Delivery Address</label>
                    <textarea 
                      name="address"
                      required
                      rows="3"
                      value={formData.address}
                      onChange={handleFormChange}
                      placeholder="Enter full delivery address..."
                      className="w-full bg-[#1e293b] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-black font-extrabold py-3.5 rounded-2xl shadow-xl transition"
                >
                  Continue to Payment
                </button>
              </form>
            )}

            {checkoutStep === 'payment' && (
              <div className="flex-grow py-6 space-y-6 flex flex-col justify-between">
                <div>
                  <button 
                    type="button" 
                    onClick={() => setCheckoutStep('form')}
                    className="text-xs text-amber-400 flex items-center space-x-1 mb-4 hover:underline"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Details</span>
                  </button>

                  <h4 className="text-white text-sm font-bold mb-3">Choose Payment Option:</h4>
                  
                  <div className="space-y-3">
                    <label className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition ${formData.paymentMethod === 'UPI' ? 'border-amber-500 bg-amber-500/10' : 'border-gray-700 bg-[#1e293b]'}`}>
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-5 h-5 text-amber-400" />
                        <div>
                          <p className="text-white text-sm font-bold">Online UPI / GPay / PhonePe</p>
                          <p className="text-gray-400 text-xs">Instant digital payment</p>
                        </div>
                      </div>
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="UPI" 
                        checked={formData.paymentMethod === 'UPI'} 
                        onChange={handleFormChange}
                        className="accent-amber-500"
                      />
                    </label>

                    <label className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition ${formData.paymentMethod === 'COD' ? 'border-amber-500 bg-amber-500/10' : 'border-gray-700 bg-[#1e293b]'}`}>
                      <div className="flex items-center space-x-3">
                        <Wallet className="w-5 h-5 text-amber-400" />
                        <div>
                          <p className="text-white text-sm font-bold">Cash on Delivery (COD)</p>
                          <p className="text-gray-400 text-xs">Pay when you receive your harvest</p>
                        </div>
                      </div>
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="COD" 
                        checked={formData.paymentMethod === 'COD'} 
                        onChange={handleFormChange}
                        className="accent-amber-500"
                      />
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-[#1e293b] p-4 rounded-2xl border border-gray-700 flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Total to Pay:</span>
                    <span className="text-amber-400 text-lg font-black">₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={handleCompleteOrder}
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 text-white font-extrabold py-3.5 rounded-2xl shadow-xl flex items-center justify-center space-x-2 transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Place Order via WhatsApp</span>
                  </button>
                </div>
              </div>
            )}

            {checkoutStep === 'success' && (
              <div className="flex-grow py-20 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/40 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-white font-bold text-xl">Order Submitted!</h4>
                <p className="text-gray-300 text-xs max-w-xs leading-relaxed">
                  Redirecting you to WhatsApp with your itemized order details for instant confirmation with Mahabole Farms.
                </p>
                <button 
                  onClick={resetCartAndClose}
                  className="mt-6 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition"
                >
                  Close Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default App;