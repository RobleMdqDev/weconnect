import { Suspense } from 'react';
import { SplineProps } from './types';
import useSplineLoader from './hooks/useSplineLoader';

export default function SplineWrapper({ className, scene }: SplineProps) {
  const { Spline, isLoading } = useSplineLoader();
  
  if (isLoading) return null;
  
  return (
    <Suspense fallback={null}>
      <Spline 
        className={className}
        scene={scene}
      />
    </Suspense>
  );
}