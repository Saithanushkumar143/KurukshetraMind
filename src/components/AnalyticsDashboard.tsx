
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  buttonClicks: number;
  topPages: { page: string; views: number }[];
}

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    buttonClicks: 0,
    topPages: []
  });

  useEffect(() => {
    // This would typically fetch data from GA4 API
    // For now, showing placeholder data structure
    const mockData: AnalyticsData = {
      pageViews: 1250,
      uniqueVisitors: 892,
      buttonClicks: 156,
      topPages: [
        { page: '/', views: 1250 },
        { page: '/explore', views: 234 }
      ]
    };
    setAnalyticsData(mockData);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-spiritual-beige mb-6">Analytics Dashboard</h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-spiritual-charcoal/50 border-spiritual-gold/20 p-6">
          <h3 className="text-spiritual-gold font-semibold mb-2">Page Views</h3>
          <p className="text-3xl font-bold text-spiritual-beige">{analyticsData.pageViews.toLocaleString()}</p>
        </Card>
        
        <Card className="bg-spiritual-charcoal/50 border-spiritual-gold/20 p-6">
          <h3 className="text-spiritual-gold font-semibold mb-2">Unique Visitors</h3>
          <p className="text-3xl font-bold text-spiritual-beige">{analyticsData.uniqueVisitors.toLocaleString()}</p>
        </Card>
        
        <Card className="bg-spiritual-charcoal/50 border-spiritual-gold/20 p-6">
          <h3 className="text-spiritual-gold font-semibold mb-2">Button Clicks</h3>
          <p className="text-3xl font-bold text-spiritual-beige">{analyticsData.buttonClicks.toLocaleString()}</p>
        </Card>
      </div>

      <Card className="bg-spiritual-charcoal/50 border-spiritual-gold/20 p-6">
        <h3 className="text-spiritual-gold font-semibold mb-4">Top Pages</h3>
        <div className="space-y-2">
          {analyticsData.topPages.map((page, index) => (
            <div key={index} className="flex justify-between items-center text-spiritual-beige">
              <span>{page.page}</span>
              <span className="font-semibold">{page.views.toLocaleString()} views</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
