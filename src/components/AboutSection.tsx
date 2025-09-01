import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import coffeeHandsImage from '@/assets/coffee-cherries-hands.jpg';
import coffeeProcessingImage from '@/assets/coffee-processing-woman.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [coffeeHandsImage, coffeeProcessingImage];
  
  // Auto-rotate images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-8">
              About This Product
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our premium arabica coffee beans represent the pinnacle of quality and craftsmanship. 
                Sourced directly from the world's finest coffee-growing regions, each batch is carefully 
                selected for its exceptional flavor profile and consistency.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We work exclusively with certified farms that share our commitment to sustainable 
                practices and fair trade principles. Our rigorous quality control process ensures 
                that every shipment meets the highest international standards.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                From the volcanic soils of Ethiopia to the high-altitude plantations of Colombia, 
                our coffee beans carry the unique terroir of their origins while maintaining the 
                consistency and reliability that our global partners depend on.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: currentImage === index ? 1 : 0,
                    scale: currentImage === index ? 1 : 1.1
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <img
                    src={image}
                    alt={`Coffee processing ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </motion.div>
              ))}
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImage === index ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;