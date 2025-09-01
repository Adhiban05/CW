import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">ENPT</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Premium coffee trading with a commitment to quality, sustainability, and fair trade practices.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About Us', 'Services', 'Contact'].map((link) => (
                <div key={link}>
                  <button 
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase().replace(' ', '')}`);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Premium Coffee Trading</p>
              <p>Global Supply Chain</p>
              <p>Quality Assurance</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center"
        >
          <p className="text-primary-foreground/60">
            © 2024 ENPT. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;