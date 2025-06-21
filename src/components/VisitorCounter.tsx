
import { useRealTimeAnalytics } from "@/hooks/useRealTimeAnalytics";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect } from "react";
import AnimatedCounter from "./AnimatedCounter";

const VisitorCounter = () => {
  const { totalUsers, activeUsers, isLoading, error } = useRealTimeAnalytics();
  const { trackUserEngagement } = useAnalytics();

  useEffect(() => {
    // Track when visitor counter is viewed
    if (!isLoading) {
      trackUserEngagement('visitor_counter_viewed', `total:${totalUsers},active:${activeUsers}`);
    }
  }, [totalUsers, activeUsers, isLoading, trackUserEngagement]);

  if (isLoading) {
    return (
      <div className="text-center py-8 border-t border-spiritual-gold/10 bg-spiritual-charcoal/30">
        <div className="animate-pulse">
          <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="bg-spiritual-gold/20 rounded-lg h-20"></div>
            <div className="bg-spiritual-gold/20 rounded-lg h-20"></div>
          </div>
          <div className="h-3 bg-spiritual-beige/20 rounded w-48 mx-auto mt-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-6 border-t border-spiritual-gold/10 bg-spiritual-charcoal/30">
        <p className="text-spiritual-beige/60 text-sm">
          Connecting to divine analytics...
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-8 border-t border-spiritual-gold/10 bg-spiritual-charcoal/30">
      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-6">
        {/* Total Visits Column */}
        <div className="bg-spiritual-charcoal/50 rounded-lg p-6 border border-spiritual-gold/20 hover-glow">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">📊</span>
            <h3 className="text-spiritual-gold font-semibold text-lg">
              Global Visits
            </h3>
          </div>
          <div className="text-spiritual-beige mb-2">
            <AnimatedCounter value={totalUsers} />
          </div>
          <p className="text-spiritual-beige/60 text-sm">
            Shared across all seekers
          </p>
        </div>

        {/* Active Users Column */}
        <div className="bg-spiritual-charcoal/50 rounded-lg p-6 border border-spiritual-gold/20 hover-glow">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="text-spiritual-gold font-semibold text-lg">
              Active Users
            </h3>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="text-spiritual-beige mb-2">
            <AnimatedCounter value={activeUsers} />
          </div>
          <p className="text-spiritual-beige/60 text-sm">
            Currently seeking wisdom
          </p>
        </div>
      </div>

      {/* Bottom Description */}
      <div className="flex items-center justify-center gap-3 text-spiritual-beige/50 text-sm">
        <span>🕉️</span>
        <span>Real-time global counter</span>
        <span>🙏</span>
      </div>
      
      <p className="text-spiritual-beige/40 text-xs mt-2">
        Updates every second • Shared by all users
      </p>
    </div>
  );
};

export default VisitorCounter;
