import { motion } from 'framer-motion';
import { Award, Users, Heart, Leaf, MapPin, Calendar } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const milestones = [
  { year: '2005', title: 'The Beginning', description: 'Started as a small ice cream parlor in Chennai with just 3 flavors and a dream.' },
  { year: '2010', title: 'First Expansion', description: 'Opened our second outlet and introduced 15 new artisan flavors.' },
  { year: '2015', title: 'Premium Range Launch', description: 'Launched our premium Belgian chocolate and exotic fruit range.' },
  { year: '2020', title: 'Going Digital', description: 'Launched online ordering and expanded delivery across Tamil Nadu.' },
  { year: '2024', title: 'Today', description: 'Serving over 50+ flavors with 10 outlets and nationwide delivery.' },
];

const values = [
  { icon: Heart, title: 'Made with Love', description: 'Every scoop is crafted with passion and care, just like homemade.' },
  { icon: Leaf, title: 'Natural Ingredients', description: 'We source only the finest natural ingredients from local farmers.' },
  { icon: Users, title: 'Family Tradition', description: 'Recipes passed down through generations of ice cream makers.' },
  { icon: Award, title: 'Quality First', description: 'Award-winning quality recognized across the country.' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Sweet Story</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From a humble ice cream parlor to becoming one of the most loved ice cream brands, 
              discover the journey of New Saranya Ice Creams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Legacy of <span className="text-gradient">Sweetness</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2005, in a small corner of Chennai, the Saranya family decided to share their 
                  grandmother's secret ice cream recipes with the world. What started as a tiny 
                  parlor with just three flavors—Vanilla, Chocolate, and Mango—has grown into a 
                  beloved brand serving millions of happy customers.
                </p>
                <p>
                  Our founder, Mrs. Saranya Devi, believed that ice cream is not just a dessert—it's 
                  a moment of joy, a celebration of life's sweet moments. That philosophy remains at 
                  the heart of everything we do today.
                </p>
                <p>
                  Today, New Saranya Ice Creams offers over 50 unique flavors, each crafted with the 
                  same love and attention to detail that Mrs. Saranya brought to her very first batch. 
                  We continue to honor her legacy while innovating for the future.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-golden p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-8xl font-bold text-gradient">19</span>
                    <p className="text-2xl font-bold mt-4">Years of Excellence</p>
                    <p className="text-muted-foreground mt-2">Serving happiness since 2005</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in creating the perfect scoop, every single time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-product p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped who we are today.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative pl-12 md:pl-0 pb-10 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Dot */}
                <div className={`absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center md:-translate-x-1/2`}>
                  <Calendar className="w-4 h-4 text-primary-foreground" />
                </div>
                
                <div className={`card-product p-5 inline-block ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                  <h3 className="text-lg font-bold mt-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-golden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Visit Our Flagship Store
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Experience the magic of New Saranya Ice Creams at our flagship outlet in Chennai.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-foreground">
              <MapPin className="w-5 h-5" />
              <span>123 Anna Nagar, Chennai - 600040, Tamil Nadu</span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
