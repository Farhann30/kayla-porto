import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = 'hidden';
    
    // Simulate loading time (2.5 seconds) to ensure assets start loading and UI doesn't freeze awkwardly
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Restore scroll when loading is done
      document.body.style.overflow = '';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#0f0f0f] flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center"
          >
            <h1 className="text-script-primary text-6xl md:text-8xl mb-6 tracking-wider text-white drop-shadow-lg">
              Kayla Hilda
            </h1>
            
            {/* Loading Bar */}
            <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden shadow-inner">
               <motion.div 
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 2.4, ease: "easeInOut" }}
                 className="h-full bg-[#9d1010]"
               />
            </div>
            
            <p className="mt-6 text-gray-400 font-serif text-sm tracking-[0.3em] uppercase">
              Loading Portfolio...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
