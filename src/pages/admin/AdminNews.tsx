import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash2, Newspaper, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { newsItems as initialNews } from '@/data/news';

const AdminNews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [news] = useState(initialNews);

  const filteredNews = news.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">News & Blog</h1>
          <p className="text-muted-foreground">Manage articles and updates</p>
        </div>
        <Button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" /> New Article
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card-product overflow-hidden group"
          >
            <div className="relative h-40">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <Badge className="bg-primary">
                  <Eye className="w-3 h-3 mr-1" /> Published
                </Badge>
              </div>
            </div>
            <div className="p-4">
              <Badge variant="outline" className="mb-2">{article.category}</Badge>
              <h3 className="font-bold line-clamp-2 mb-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{article.date}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="p-12 text-center card-product">
          <Newspaper className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">No articles found</p>
        </div>
      )}
    </div>
  );
};

export default AdminNews;
