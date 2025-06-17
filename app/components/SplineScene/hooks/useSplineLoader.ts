import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => null,
});

export default function useSplineLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadSpline = async () => {
      try {
        await import('@splinetool/runtime');
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading Spline:', error);
      }
    };

    preloadSpline();
  }, []);

  return {
    Spline: DynamicSpline,
    isLoading
  };
}