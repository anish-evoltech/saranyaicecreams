import { motion } from 'framer-motion';
import { Store, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const AdminSettings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({ title: 'Settings saved successfully' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage store settings</p>
      </div>

      <div className="grid gap-6">
        {/* Store Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-product p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Store className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Store Information</h2>
              <p className="text-sm text-muted-foreground">Basic store details</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="storeName">Store Name</Label>
              <Input id="storeName" defaultValue="New Saranya Ice Creams" />
            </div>
            <div>
              <Label htmlFor="storeEmail">Contact Email</Label>
              <Input id="storeEmail" type="email" defaultValue="info@saranyaicecreams.com" />
            </div>
            <div>
              <Label htmlFor="storePhone">Phone Number</Label>
              <Input id="storePhone" defaultValue="+91 98765 43210" />
            </div>
            <div>
              <Label htmlFor="storeAddress">Address</Label>
              <Input id="storeAddress" defaultValue="123 Anna Nagar, Chennai - 600040" />
            </div>
          </div>
        </motion.div>

        {/* Shipping Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-product p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Shipping Settings</h2>
              <p className="text-sm text-muted-foreground">Configure shipping options</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="shippingCost">Default Shipping Cost (₹)</Label>
              <Input id="shippingCost" type="number" defaultValue="50" />
            </div>
            <div>
              <Label htmlFor="freeShippingThreshold">Free Shipping Above (₹)</Label>
              <Input id="freeShippingThreshold" type="number" defaultValue="500" />
            </div>
          </div>
        </motion.div>

        {/* Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-product p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Security</h2>
              <p className="text-sm text-muted-foreground">Security and access settings</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              To add new admin users, they must first create an account on the website. 
              Then, you can manually assign admin role through the database.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="btn-primary">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default AdminSettings;
