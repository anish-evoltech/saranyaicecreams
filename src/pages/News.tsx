import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag, Sparkles, CalendarDays, Settings2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { newsItems, NewsItem } from '@/data/news';
import { format } from 'date-fns';

const categoryConfig = {
  'new-flavor': { icon: Sparkles, color: 'bg-strawberry/20 text-strawberry', label: 'New Flavor' },
  'promo': { icon: Tag, color: 'bg-primary/20 text-primary', label: 'Promotion' },
  'event': { icon: CalendarDays, color: 'bg-mint/20 text-mint', label: 'Event' },
  'update': { icon: Settings2, color: 'bg-accent/20 text-accent', label: 'Update' },
};

const News = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Latest <span className="text-gradient">News</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Stay updated with new flavors, promotions, events, and announcements from Saranya Ice Creams.
            </motion.p>
          </div>

          {/* News List */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* News Cards */}
            <div className="lg:col-span-2 space-y-6">
              {newsItems.map((news, index) => {
                const config = categoryConfig[news.category];
                const Icon = config.icon;
                
                return (
                  <motion.article
                    key={news.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedNews(news)}
                    className={`card-product p-6 cursor-pointer ${
                      selectedNews?.id === news.id ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${config.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.color}`}>
                            {config.label}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {format(new Date(news.date), 'MMM d, yyyy')}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                        <p className="text-muted-foreground">{news.excerpt}</p>
                        <button className="mt-4 text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Selected News Detail */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {selectedNews ? (
                  <motion.div
                    key={selectedNews.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="card-product p-6"
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${categoryConfig[selectedNews.category].color}`}>
                      {categoryConfig[selectedNews.category].label}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{selectedNews.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {format(new Date(selectedNews.date), 'MMMM d, yyyy')}
                    </p>
                    <p className="text-foreground leading-relaxed">{selectedNews.content}</p>
                  </motion.div>
                ) : (
                  <div className="card-product p-6 text-center text-muted-foreground">
                    <p>Select a news article to read the full content</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
