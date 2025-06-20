
import { useVisitorCount } from "@/hooks/useVisitorCount";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect } from "react";

const VisitorCounter = () => {
  const { visitorCount, isLoading } = useVisitorCount();
  const { trackUserEngagement } = useAnalytics();

  useEffect(() => {
    // Track when visitor counter is viewed
    trackUserEngagement('visitor_counter_viewed', visitorCount.toString());
  }, [visitorCount, trackUserEngagement]);

  if (isLoading) {
    return (
      <div className="text-center py-4 border-t border-spiritual-gold/10">
        <div className="animate-pulse">
          <div className="h-4 bg-spiritual-gold/20 rounded w-48 mx-auto mb-2"></div>
          <div className="h-3 bg-spiritual-beige/20 rounded w-32 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-6 border-t border-spiritual-gold/10 bg-spiritual-charcoal/30">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-spiritual-gold font-semibold text-lg">
          {visitorCount.toLocaleString()} Active Visitors
        </span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <p className="text-spiritual-beige/60 text-sm">
        Souls currently seeking wisdom on this sacred journey
      </p>
      <div className="mt-3 flex items-center justify-center gap-2 text-spiritual-beige/40 text-xs">
        <span>🕉️</span>
        <span>Real-time spiritual community</span>
        <span>🙏</span>
      </div>
    </div>
  );
};

export default VisitorCounter;
