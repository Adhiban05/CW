import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ImageGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            From Farm to Cup
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the journey of our premium coffee through stunning visuals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Coffee plantation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80">
              <motion.img
                src="/lovable-uploads/31fff1c1-0e7f-4330-95ff-47238d970be3.png"
                alt="Coffee cherries on plant"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent group-hover:from-primary-dark/90 transition-all duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Fresh Cherries</h3>
                <p className="text-white/90">Ripe coffee cherries ready for harvest</p>
              </div>
            </div>
          </motion.div>

          {/* Processing team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80">
              <motion.img
                src="/lovable-uploads/d82e0f29-df99-4c6d-b720-797a38fd7c34.png"
                alt="Coffee processing team"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent group-hover:from-primary-dark/90 transition-all duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Expert Processing</h3>
                <p className="text-white/90">Skilled artisans at work</p>
              </div>
            </div>
          </motion.div>

          {/* Quality testing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80">
              <motion.img
                src="/lovable-uploads/478fb63f-684f-46ec-aa5c-8022536884c9.png"
                alt="Coffee quality testing"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent group-hover:from-primary-dark/90 transition-all duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Quality Control</h3>
                <p className="text-white/90">Rigorous testing ensures excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Hands with cherries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group cursor-pointer md:col-span-2"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80">
              <motion.img
                src="/lovable-uploads/82f60bfd-6d56-4c2f-a63d-20eedc484c8e.png"
                alt="Hands holding coffee cherries"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent group-hover:from-primary-dark/90 transition-all duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Handpicked Excellence</h3>
                <p className="text-white/90">Each cherry carefully selected by expert hands</p>
              </div>
            </div>
          </motion.div>

          {/* Branch with cherries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80">
              <motion.img
                src="/lovable-uploads/74d121bc-64a1-4ce6-b759-7fa0f99c3fa3.png"
                alt="Coffee branch with cherries"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent group-hover:from-primary-dark/90 transition-all duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Natural Growth</h3>
                <p className="text-white/90">Coffee cherries in their natural environment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;