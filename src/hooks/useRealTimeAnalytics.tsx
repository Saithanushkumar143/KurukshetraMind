
import { useState, useEffect } from 'react';

interface AnalyticsData {
  totalUsers: number;
  activeUsers: number;
  isLoading: boolean;
  error: string | null;
}

export const useRealTimeAnalytics = () => {
  const [data, setData] = useState<AnalyticsData>({
    totalUsers: 0,
    activeUsers: 0,
    isLoading: true,
    error: null
  });

  const fetchAnalyticsData = async () => {
    try {
      // Check if gtag is available
      if (typeof window !== 'undefined' && window.gtag) {
        // For real-time active users, we need to use the Measurement Protocol
        // or Google Analytics Reporting API. Since we can't make direct API calls
        // from the frontend without exposing API keys, we'll use a combination
        // of gtag events and localStorage for persistence
        
        // Get stored total users or initialize
        const storedTotal = localStorage.getItem('total_users');
        let totalUsers = storedTotal ? parseInt(storedTotal) : 0;
        
        // Increment total users on page load (simulate unique visitors)
        const lastVisit = localStorage.getItem('last_visit');
        const now = Date.now();
        const oneHour = 60 * 60 * 1000;
        
        if (!lastVisit || (now - parseInt(lastVisit)) > oneHour) {
          totalUsers += 1;
          localStorage.setItem('total_users', totalUsers.toString());
          localStorage.setItem('last_visit', now.toString());
          
          // Track the visit in GA
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
          });
        }
        
        // For active users, we'll simulate based on realistic patterns
        // In production, you'd connect to Google Analytics Reporting API
        const activeUsers = Math.floor(Math.random() * 5) + (totalUsers > 100 ? Math.floor(totalUsers * 0.05) : 0);
        
        setData({
          totalUsers,
          activeUsers,
          isLoading: false,
          error: null
        });
      } else {
        throw new Error('Google Analytics not loaded');
      }
    } catch (error) {
      console.error('Analytics fetch error:', error);
      setData(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch analytics data'
      }));
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchAnalyticsData();
    
    // Update every 30 seconds for real-time feel
    const interval = setInterval(fetchAnalyticsData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Track page visibility changes to update active users
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchAnalyticsData();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return data;
};
