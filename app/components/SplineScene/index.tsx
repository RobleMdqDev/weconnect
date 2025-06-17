import SplineWrapper from './SplineWrapper';

export default function SplineScene() {
  return (
    <div className="w-full h-full min-h-[600px] bg-gradient-to-b from-emerald-900 to-emerald-800">
      <SplineWrapper 
        className="w-full h-full opacity-65"
        scene="https://prod.spline.design/tg7XVH99nepYQWvc/scene.splinecode" 
      />
    </div>
  );
}