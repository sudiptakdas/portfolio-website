'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      className='flex justify-center'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20 sm:-ml-6'></div>
    </motion.div>
  );
}
