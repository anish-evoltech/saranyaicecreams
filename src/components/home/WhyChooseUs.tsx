import { motion } from 'framer-motion';
import { Truck, Leaf, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Natural Ingredients',
    description: 'Made with 100% natural ingredients, no artificial flavors or preservatives.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Fresh ice cream delivered to your doorstep in temperature-controlled packaging.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Multiple awards for taste and quality from prestigious culinary institutions.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every batch is handcrafted by our expert artisans with passion and care.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The <span className="text-gradient">Saranya</span> Difference
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-golden flex items-center justify-center shadow-golden group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
