
import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

const AnimatedCounter = ({ value, duration = 1500 }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = displayValue;
    const difference = value - startValue;

    if (difference === 0) return;

    const updateCounter = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Enhanced easing function for smoother rolling animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + difference * easeOutCubic);
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value); // Ensure final value is exact
      }
    };

    requestAnimationFrame(updateCounter);
  }, [value, duration, displayValue]);

  return (
    <span className="font-bold text-2xl tabular-nums transition-all duration-300 inline-block">
      {displayValue.toLocaleString()}
    </span>
  );
};

export default AnimatedCounter;
