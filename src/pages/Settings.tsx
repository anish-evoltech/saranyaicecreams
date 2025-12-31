import { motion } from "framer-motion";
import { Moon, Sun, Monitor, Palette, Bell, BellOff } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    {
      value: "light",
      label: "Light",
      icon: Sun,
      description: "Warm and bright appearance",
    },
    {
      value: "dark",
      label: "Dark",
      icon: Moon,
      description: "Easy on the eyes, perfect for night",
    },
  ];

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-gradient">Settings</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Customize yur experience on Saranya Ice Creams
            </motion.p>
          </div>

          {/* Settings Sections */}
          <div className="space-y-8">
            {/* Theme Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-product p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Appearance</h2>
                  <p className="text-sm text-muted-foreground">
                    Customize how Saranya Ice Creams looks
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {themeOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = theme === option.value;

                  return (
                    <motion.button
                      key={option.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setTheme(option.value as "light" | "dark")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-1">{option.label}</h3>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Notifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-product p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Notifications</h2>
                  <p className="text-sm text-muted-foreground">
                    Manage your notification preferences
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div>
                    <Label htmlFor="order-updates" className="font-medium">
                      Order Updates
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about your order status
                    </p>
                  </div>
                  <Switch id="order-updates" defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div>
                    <Label htmlFor="promotions" className="font-medium">
                      Promotions
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive exclusive deals and offers
                    </p>
                  </div>
                  <Switch id="promotions" defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div>
                    <Label htmlFor="new-flavors" className="font-medium">
                      New Flavors
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Be first to know about new flavors
                    </p>
                  </div>
                  <Switch id="new-flavors" defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div>
                    <Label htmlFor="stock-alerts" className="font-medium">
                      Stock Alerts
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get alerts for low stock items
                    </p>
                  </div>
                  <Switch id="stock-alerts" />
                </div>
              </div>
            </motion.div>

            {/* Preview Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card-product p-6"
            >
              <h2 className="text-xl font-bold mb-4">Theme Preview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-12 rounded-lg bg-primary"></div>
                  <span className="text-xs text-muted-foreground">Primary</span>
                </div>
                <div className="space-y-2">
                  <div className="h-12 rounded-lg bg-secondary"></div>
                  <span className="text-xs text-muted-foreground">
                    Secondary
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-12 rounded-lg bg-accent"></div>
                  <span className="text-xs text-muted-foreground">Accent</span>
                </div>
                <div className="space-y-2">
                  <div className="h-12 rounded-lg bg-muted"></div>
                  <span className="text-xs text-muted-foreground">Muted</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Settings;
