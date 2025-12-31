import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/products/${product.id}`}>
    <motion.div
      whileHover={{ y: -8 }}
      className="card-product group cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Add Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 p-3 rounded-full bg-primary text-primary-foreground shadow-golden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Plus className="w-5 h-5" />
        </motion.button>

        {/* Stock Badge */}
        {product.stock < 20 && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
            Low Stock
          </span>
        )}
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-lg font-bold mt-1 mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">₹{product.price}</span>
          <Button 
            onClick={handleAddToCart} 
            size="sm" 
            className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity md:opacity-100"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

export default ProductCard;
