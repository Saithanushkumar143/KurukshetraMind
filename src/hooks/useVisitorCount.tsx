
import { useState, useEffect } from 'react';

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate real-time visitor counting
    // In a real implementation, this would connect to Google Analytics Reporting API
    // For now, we'll create a realistic counter that updates periodically
    
    const getStoredCount = () => {
      const stored = localStorage.getItem('visitor_count');
      return stored ? parseInt(stored) : Math.floor(Math.random() * 1000) + 500;
    };

    const updateCount = () => {
      const currentCount = getStoredCount();
      // Simulate visitor activity with small increments
      const increment = Math.random() > 0.7 ? 1 : 0; // 30% chance of increment
      const newCount = currentCount + increment;
      
      setVisitorCount(newCount);
      localStorage.setItem('visitor_count', newCount.toString());
      setIsLoading(false);
    };

    // Initial load
    updateCount();

    // Update every 10-30 seconds to simulate real-time activity
    const interval = setInterval(() => {
      updateCount();
    }, Math.random() * 20000 + 10000); // Random interval between 10-30 seconds

    return () => clearInterval(interval);
  }, []);

  return { visitorCount, isLoading };
};
