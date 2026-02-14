"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = [
  "get back time",
  "build",
  "close",
  "scale",
  "sell",
  "inspire",
  "optimize",
  "get more done with less",
  "prepare",
  "execute",
  "coordinate",
  "streamline",
]

export default function AnimatedWord() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block relative pb-4 mt-8 overflow-visible w-[30ch] min-w-[450px] md:w-[35ch] md:min-w-[600px] lg:w-[40ch] lg:min-w-[800px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="inline-block whitespace-nowrap overflow-visible"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {words[currentIndex]}
          </span>
          <span className="text-white">.</span>
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
