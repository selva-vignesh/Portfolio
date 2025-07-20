import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p 
          className="text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © 2024 Alex Chen. Built with modern web technologies and passion for embedded systems.
        </motion.p>
        <motion.div 
          className="mt-4 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Terms of Service
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
