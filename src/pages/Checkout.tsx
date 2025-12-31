import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Truck, MapPin, CheckCircle, ShoppingBag } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    notes: '',
  });

  const shippingCost = totalPrice >= 500 ? 0 : 50;
  const grandTotal = totalPrice + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate order submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockOrderId = Math.random().toString(36).substring(2, 10).toUpperCase();
    setOrderId(mockOrderId);
    setOrderPlaced(true);
    clearCart();
    
    toast({
      title: "Order Placed Successfully!",
      description: "You will receive a confirmation email shortly.",
    });
    
    setLoading(false);
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <Button onClick={() => navigate('/products')}>Browse Products</Button>
          </div>
        </section>
      </Layout>
    );
  }

  if (orderPlaced) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-lg text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <CheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>
            <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-2">Thank you for your order.</p>
            <p className="text-sm text-muted-foreground mb-8">
              Order ID: <span className="font-mono text-foreground">{orderId?.slice(0, 8).toUpperCase()}</span>
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate('/')}>Go Home</Button>
              <Button onClick={() => navigate('/products')}>Continue Shopping</Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-product p-6"
              >
                <h1 className="text-2xl font-bold mb-6">Checkout</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Contact Information
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <MapPin className="w-5 h-5 text-primary" />
                      Shipping Address
                    </div>
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="123 Main Street, Apartment 4B"
                        rows={2}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          placeholder="Chennai"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">PIN Code *</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          placeholder="600001"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Order Notes */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <Truck className="w-5 h-5 text-primary" />
                      Delivery Notes
                    </div>
                    <div>
                      <Label htmlFor="notes">Special Instructions (Optional)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Any special delivery instructions..."
                        rows={2}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-primary text-lg py-6"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : `Place Order - ₹${grandTotal}`}
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card-product p-6 sticky top-24"
              >
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                {/* Items */}
                <div className="space-y-4 mb-6">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-primary font-semibold">₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={shippingCost === 0 ? 'text-green-500' : ''}>
                      {shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}
                    </span>
                  </div>
                  {shippingCost > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Free shipping on orders above ₹500
                    </p>
                  )}
                  <div className="flex justify-between text-lg font-bold pt-3 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">₹{grandTotal}</span>
                  </div>
                </div>

                {/* Secure Checkout Badge */}
                <div className="mt-6 p-3 bg-secondary/50 rounded-lg text-center">
                  <p className="text-xs text-muted-foreground">
                    🔒 Secure Checkout • Cash on Delivery Available
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
