import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ImageWithSkeleton({ src, alt, className, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton Pulse */}
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 bg-gray-800/60 animate-pulse"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
