import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import coffeeRoastingImage from '@/assets/coffee-roasting-team.jpg';
import cherriesPlantImage from '@/assets/coffee-cherries-hands.jpg';

const OriginsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const origins = [
    { name: 'Ethiopia', region: 'Birthplace of Coffee', image: cherriesPlantImage },
    { name: 'Colombia', region: 'Andean Excellence', image: coffeeRoastingImage },
    { name: 'Brazil', region: 'World\'s Largest Producer', image: cherriesPlantImage },
    { name: 'Guatemala', region: 'Volcanic Highlands', image: coffeeRoastingImage }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Coffee Origins
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sourced from the world's premier coffee-growing regions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {origins.map((origin, index) => (
            <motion.div
              key={origin.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-square"
                >
                  <img
                    src={origin.image}
                    alt={origin.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent group-hover:from-primary-dark/90 transition-all duration-300" />
                </motion.div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.h3 
                    className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-200"
                  >
                    {origin.name}
                  </motion.h3>
                  <p className="text-white/90 group-hover:text-white transition-colors duration-200">
                    {origin.region}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginsSection;