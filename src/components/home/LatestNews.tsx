import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { newsItems } from "@/data/news";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const getCategoryColor = (category: string) => {
  switch (category) {
    case "new-flavor":
      return "bg-strawberry/20 text-strawberry";
    case "promo":
      return "bg-primary/20 text-primary";
    case "event":
      return "bg-mint/20 text-mint";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const LatestNews = () => {
  const latestNews = newsItems.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
          >
            Stay Updated
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Latest <span className="text-gradient">News</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Keep up with new flavors, promotions, and events happening at
            Saranya Ice Creams.
          </motion.p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {latestNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-product overflow-hidden flex flex-col"
            >
              {news.image && (
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                      news.category
                    )}`}
                  >
                    {news.category.replace("-", " ")}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {format(new Date(news.date), "MMM d, yyyy")}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-1 line-clamp-3">
                  {news.excerpt}
                </p>
                <Link
                  to="/news"
                  className="mt-4 text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/news">
            <Button size="lg" variant="outline" className="btn-secondary group">
              View All News
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNews;
