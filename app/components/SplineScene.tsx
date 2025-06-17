"use client";

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      <div className="animate-pulse text-gray-500">Loading 3D Scene...</div>
    </div>
  ),
});

export default function SplineScene() {
  return (    
      <Spline 
        className="w-full h-[300px]"        
        scene="https://prod.spline.design/tg7XVH99nepYQWvc/scene.splinecode" 
      />    
  );
}