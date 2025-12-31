import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShoppingCart,
  Minus,
  Plus,
  Package,
  Truck,
  Shield,
  Star,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  const wholesaleMinQty = 10;
  const wholesaleDiscount = 0.15; // 15% discount for wholesale

  const pricing = useMemo(() => {
    if (!product)
      return { unitPrice: 0, total: 0, isWholesale: false, savings: 0 };

    const retailPrice = product.price;
    const wholesalePrice = Math.round(retailPrice * (1 - wholesaleDiscount));
    const isWholesale = quantity >= wholesaleMinQty;
    const unitPrice = isWholesale ? wholesalePrice : retailPrice;
    const total = unitPrice * quantity;
    const regularTotal = retailPrice * quantity;
    const savings = isWholesale ? regularTotal - total : 0;

    return {
      unitPrice,
      total,
      isWholesale,
      savings,
      retailPrice,
      wholesalePrice,
    };
  }, [product, quantity]);

  if (!product) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Button onClick={() => navigate("/products")}>
              Back to Products
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Added to cart!",
      description: `${quantity}x ${product.name} has been added to your cart.`,
    });
  };

  const updateQuantity = (delta: number) => {
    const newQty = quantity + delta;
    if (newQty >= 1 && newQty <= product.stock) {
      setQuantity(newQty);
    }
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/products"
              className="hover:text-primary transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-card shadow-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.stock < 20 && (
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  Low Stock - Only {product.stock} left
                </Badge>
              )}
              {product.featured && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" /> Featured
                </Badge>
              )}
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <Badge variant="outline" className="mb-3">
                  {product.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Pricing Section */}
              <div className="card-product p-6 space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-primary">
                    ₹{pricing.unitPrice}
                  </span>
                  {pricing.isWholesale && (
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{pricing.retailPrice}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground">
                    per unit
                  </span>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      !pricing.isWholesale
                        ? "border-primary bg-primary/5"
                        : "border-transparent"
                    }`}
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Retail Price
                    </p>
                    <p className="text-xl font-bold">₹{pricing.retailPrice}</p>
                    <p className="text-xs text-muted-foreground">
                      1-{wholesaleMinQty - 1} units
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      pricing.isWholesale
                        ? "border-primary bg-primary/5"
                        : "border-transparent"
                    }`}
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Wholesale Price
                    </p>
                    <p className="text-xl font-bold text-primary">
                      ₹{pricing.wholesalePrice}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {wholesaleMinQty}+ units (15% off)
                    </p>
                  </div>
                </div>

                {pricing.isWholesale && (
                  <div className="p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg text-sm font-medium">
                    🎉 Wholesale pricing applied! You save ₹{pricing.savings}
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 p-2 bg-secondary rounded-xl">
                  <button
                    onClick={() => updateQuantity(-1)}
                    disabled={quantity <= 1}
                    className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-xl font-bold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(1)}
                    disabled={quantity >= product.stock}
                    className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold text-primary">
                    ₹{pricing.total}
                  </p>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full btn-primary text-lg py-6"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add {quantity} to Cart - ₹{pricing.total}
              </Button>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Premium Quality
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Fast Delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Quality Assured
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
