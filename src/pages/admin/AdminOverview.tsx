import { motion } from 'framer-motion';
import { Package, ShoppingCart, DollarSign, TrendingUp, Clock } from 'lucide-react';

const AdminOverview = () => {
  // Mock stats
  const stats = [
    {
      label: 'Total Products',
      value: '24',
      icon: Package,
      change: '+3',
      changeType: 'positive',
    },
    {
      label: 'Total Orders',
      value: '156',
      icon: ShoppingCart,
      change: '+12',
      changeType: 'positive',
    },
    {
      label: 'Revenue',
      value: '₹45,230',
      icon: DollarSign,
      change: '+18%',
      changeType: 'positive',
    },
    {
      label: 'Pending Orders',
      value: '8',
      icon: Clock,
      change: '-2',
      changeType: 'negative',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, Admin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card-product p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold mt-1">{stat.value}</p>
                <p className={`text-sm mt-2 flex items-center gap-1 ${
                  stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                }`}>
                  <TrendingUp className="w-3 h-3" />
                  {stat.change} from last month
                </p>
              </div>
              <div className="p-3 rounded-xl bg-primary/10">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card-product p-6"
      >
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">New order received</p>
              <p className="text-sm text-muted-foreground">Order #ABC123 - ₹890</p>
            </div>
            <span className="ml-auto text-sm text-muted-foreground">2 mins ago</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Product stock low</p>
              <p className="text-sm text-muted-foreground">Vanilla Dream - 5 units left</p>
            </div>
            <span className="ml-auto text-sm text-muted-foreground">15 mins ago</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminOverview;
