import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const SpecificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specifications = [
    'Grade A arabica beans',
    'Moisture content: 8–12%',
    'Screen size: 15–18',
    'Processing: Washed and natural'
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Product Specifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meticulously graded and processed to meet international quality standards
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="card-premium p-8 lg:p-12">
            <div className="grid gap-6">
              {specifications.map((spec, index) => (
                <motion.div
                  key={spec}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-lg text-foreground group-hover:text-primary transition-colors duration-200">
                    {spec}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;