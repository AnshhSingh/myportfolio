// components/GridBackground.tsx
'use client'; // Mark as a Client Component

import { motion } from 'framer-motion';

export default function GridBackground() {
  return (
    <div className="grid-background min-h-screen">
      {/* Animated Grid Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
        className="animated-grid"
      />
    </div>
  );
}