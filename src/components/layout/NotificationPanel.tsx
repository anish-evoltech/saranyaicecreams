import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Package, Tag, AlertCircle, Check } from 'lucide-react';
import { useNotifications, Notification } from '@/contexts/NotificationContext';
import { formatDistanceToNow } from 'date-fns';

interface NotificationPanelProps {
  open: boolean;
  onClose: () => void;
}

const getNotificationIcon = (type: Notification['type']) => {
  switch (type) {
    case 'order':
      return <Package className="w-5 h-5 text-primary" />;
    case 'promo':
      return <Tag className="w-5 h-5 text-accent" />;
    case 'stock':
      return <AlertCircle className="w-5 h-5 text-destructive" />;
    default:
      return <Bell className="w-5 h-5 text-muted-foreground" />;
  }
};

const NotificationPanel = ({ open, onClose }: NotificationPanelProps) => {
  const { notifications, markAsRead, markAllAsRead, unreadCount } = useNotifications();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border shadow-2xl z-50"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h2 className="text-xl font-bold">Notifications</h2>
                  {unreadCount > 0 && (
                    <p className="text-sm text-muted-foreground">{unreadCount} unread</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-sm text-primary hover:underline"
                    >
                      Mark all read
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Notifications List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {notifications.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-48 text-muted-foreground">
                    <Bell className="w-12 h-12 mb-4 opacity-50" />
                    <p>No notifications yet</p>
                  </div>
                ) : (
                  notifications.map(notification => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => markAsRead(notification.id)}
                      className={`p-4 rounded-xl cursor-pointer transition-colors ${
                        notification.read
                          ? 'bg-secondary/50'
                          : 'bg-card border border-primary/20'
                      }`}
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-sm">{notification.title}</h3>
                            {!notification.read && (
                              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {formatDistanceToNow(notification.createdAt, { addSuffix: true })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationPanel;
