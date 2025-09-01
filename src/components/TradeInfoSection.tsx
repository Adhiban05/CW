import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import coffeeQualityImage from '@/assets/coffee-quality-testing.jpg';

const TradeInfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      label: 'Trade Volume',
      value: '500-5,000 MT',
      description: 'Annual capacity'
    },
    {
      label: 'Minimum Order',
      value: '50 MT',
      description: 'Per shipment'
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Trade Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reliable supply chain with consistent quality and competitive pricing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Cards */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-premium p-6 group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-6"
                >
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {stat.label}
                    </h3>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Quality Testing Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={coffeeQualityImage}
                alt="Coffee quality testing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Quality Testing</h3>
                <p className="text-white/90">
                  Every batch undergoes rigorous quality control to ensure consistency and excellence
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradeInfoSection;