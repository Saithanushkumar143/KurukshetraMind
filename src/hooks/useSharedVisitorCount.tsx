
import { useState, useEffect, useCallback } from 'react';

interface SharedVisitorData {
  totalVisits: number;
  activeUsers: number;
  isLoading: boolean;
  error: string | null;
}

// Mock API endpoint - in real implementation, this would be your backend
const VISITOR_API_URL = 'https://api.kurukshetramind.com/visitors';

export const useSharedVisitorCount = () => {
  const [data, setData] = useState<SharedVisitorData>({
    totalVisits: 0,
    activeUsers: 0,
    isLoading: true,
    error: null
  });

  const fetchVisitorCount = useCallback(async () => {
    try {
      // For demo purposes, we'll simulate a shared counter using localStorage
      // with a timestamp to simulate server-side updates
      const now = Date.now();
      const baseVisits = 1247; // Starting base number
      const hoursElapsed = Math.floor((now - 1703980800000) / (1000 * 60 * 60)); // Hours since Jan 1, 2024
      const minutesElapsed = Math.floor((now - 1703980800000) / (1000 * 60)); // Minutes for more frequent updates
      
      // Simulate gradual increase in total visits
      const totalVisits = baseVisits + Math.floor(hoursElapsed * 2.3) + Math.floor(minutesElapsed * 0.1);
      
      // Simulate active users (3-8% of recent activity)
      const activeUsers = Math.max(3, Math.floor(totalVisits * (0.03 + Math.random() * 0.05)));

      // Track this user's visit
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'shared_visitor_count_viewed', {
          total_visits: totalVisits,
          active_users: activeUsers,
          timestamp: new Date().toISOString()
        });
      }

      setData({
        totalVisits,
        activeUsers,
        isLoading: false,
        error: null
      });
    } catch (error) {
      console.error('Failed to fetch visitor count:', error);
      setData(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to load visitor data'
      }));
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchVisitorCount();
    
    // Update every 1 second as requested
    const interval = setInterval(fetchVisitorCount, 1000);
    
    return () => clearInterval(interval);
  }, [fetchVisitorCount]);

  return data;
};
