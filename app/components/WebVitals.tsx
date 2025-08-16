'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsProps {
  analyticsId?: string;
}

// Google Analytics gtag function type
interface GtagFunction {
  (command: 'event', eventName: string, parameters: {
    event_category: string;
    event_label: string;
    value: number;
    non_interaction: boolean;
  }): void;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

const WebVitals: React.FC<WebVitalsProps> = ({ analyticsId }) => {
  useEffect(() => {
    // Function to send metrics to analytics
    const sendToAnalytics = (metric: { name: string; value: number; id: string }) => {
      const { name, value, id } = metric;
      
      // Send to Google Analytics 4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', name, {
          event_category: 'Web Vitals',
          event_label: id,
          value: Math.round(name === 'CLS' ? value * 1000 : value),
          non_interaction: true,
        });
      }

      // Log to console in development
      if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        console.log('Web Vital:', name, value);
      }
    };

    // Track Core Web Vitals
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Track additional performance metrics
    if (typeof window !== 'undefined') {
      // Track First Input Delay
      let firstInput = true;
      const firstInputHandler = () => {
        if (firstInput) {
          firstInput = false;
          const now = performance.now();
          const fid = now - performance.timing.navigationStart;
          sendToAnalytics({
            name: 'FID',
            value: fid,
            id: 'first-input-delay',
          });
        }
      };

      window.addEventListener('click', firstInputHandler, { once: true });
      window.addEventListener('keydown', firstInputHandler, { once: true });
      window.addEventListener('touchstart', firstInputHandler, { once: true });

      // Track Largest Contentful Paint
      let lcpValue = 0;
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        lcpValue = lastEntry.startTime;
        sendToAnalytics({
          name: 'LCP',
          value: lcpValue,
          id: 'largest-contentful-paint',
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Track Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as { hadRecentInput?: boolean; value?: number };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        }
        sendToAnalytics({
          name: 'CLS',
          value: clsValue,
          id: 'cumulative-layout-shift',
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, [analyticsId]);

  return null; // This component doesn't render anything
};

export default WebVitals;
