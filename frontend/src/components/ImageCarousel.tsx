import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://wallpapers.com/images/hd/minimalist-blockchain-illustration-sq1y4w1fh5vt0dp2.jpg",
  "https://wallpaperbat.com/img/729264-blockchain-a-new-type-of-internet-interconnections-the-equinix-blog.jpg",
  "https://t4.ftcdn.net/jpg/04/44/91/89/360_F_444918960_3UfJsxKqmwAZzWky7nqCY2EF0GRQQEVt.jpg",
  "https://legittai.com/blog/wp-content/uploads/2024/05/AI-in-Revolutionizing-Sales-Strategies.jpg",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/80 to-gray-900/95"></div>
        </motion.div>
      ))}
    </div>
  );
}