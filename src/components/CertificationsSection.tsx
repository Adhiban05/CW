import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Leaf, Shield } from 'lucide-react';

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      name: 'Fair Trade',
      icon: Award,
      description: 'Ethical sourcing practices'
    },
    {
      name: 'Organic',
      icon: Leaf,
      description: 'Chemical-free cultivation'
    },
    {
      name: 'UTZ Certified',
      icon: Shield,
      description: 'Sustainable farming standards'
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
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Committed to ethical and sustainable coffee production
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="card-premium p-8 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200"
                >
                  <IconComponent className="w-8 h-8 text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors duration-200">
                  {cert.name}
                </h3>
                
                <p className="text-muted-foreground">
                  {cert.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;