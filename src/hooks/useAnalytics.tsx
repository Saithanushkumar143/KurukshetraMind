
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pagePath,
        page_title: pageTitle || document.title,
      });
    }
  };

  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      location: location || window.location.pathname,
    });
  };

  const trackUserEngagement = (engagementType: string, value?: string) => {
    trackEvent('user_engagement', {
      engagement_type: engagementType,
      engagement_value: value,
    });
  };

  const trackExternalLink = (url: string, linkText?: string) => {
    trackEvent('click', {
      event_category: 'outbound',
      event_label: url,
      link_text: linkText,
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackUserEngagement,
    trackExternalLink,
  };
};
