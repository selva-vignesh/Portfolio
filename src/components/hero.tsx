import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, Cpu, Wifi, Terminal, Router, Waves, Antenna, Radio, Layers } from "lucide-react"
import { PERSONAL_INFO } from "@/lib/constants"

const FloatingIcon = ({ 
  Icon, 
  className, 
  delay = 0 
}: { 
  Icon: React.ElementType
  className: string
  delay?: number 
}) => (
  <motion.div
    className={`absolute opacity-20 ${className}`}
    animate={{ 
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
  >
    <Icon size={64} />
  </motion.div>
)

export function Hero() {
  const handleDownloadResume = () => {
    // TODO: Implement resume download functionality
     window.open(
    "https://drive.google.com/file/d/1wjLmAQDzHxUD9jRA9trkfEBLvBRwNFv8/view?usp=sharing",
    "_blank"
  );
    console.log("Download resume")
  }

  const handleGetInTouch = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:col-span-2"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {PERSONAL_INFO.title}
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-12 leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {PERSONAL_INFO.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                onClick={handleDownloadResume}
                className="px-8 py-3 bg-electric-blue hover:bg-blue-600 text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline"
                onClick={handleGetInTouch}
                className="px-8 py-3 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white font-medium transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-gradient-to-br from-electric-blue via-cyber-cyan to-deep-purple p-1 shadow-2xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  {/* Professional placeholder using SVG */}
                  <img
                    src="https://i.ibb.co/LXB51qyc/picofme-23.png"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                </div>
              </motion.div>
              
              {/* Floating tech badges around image */}
              <motion.div
                className="absolute -top-4 -right-4 bg-electric-blue text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                WiFi Dev
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-cyber-cyan text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
              >
                Linux Guy
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating Tech Icons */}
        <FloatingIcon 
          Icon={Terminal} 
          className="top-24 left-16 text-electric-blue" 
          delay={0}
        />
        <FloatingIcon 
          Icon={Wifi} 
          className="top-40 right-32 text-cyber-cyan" 
          delay={2}
        />
        <FloatingIcon 
          Icon={Cpu} 
          className="bottom-36 left-32 text-deep-purple" 
          delay={4}
        />
        <FloatingIcon 
          Icon={Router} 
          className="top-1/3 right-12 text-electric-blue" 
          delay={1}
        />
        <FloatingIcon 
          Icon={Waves} 
          className="top-20 right-1/3 text-cyber-cyan" 
          delay={3}
        />
        <FloatingIcon 
          Icon={Antenna} 
          className="bottom-24 right-16 text-deep-purple" 
          delay={5}
        />
        <FloatingIcon 
          Icon={Radio} 
          className="bottom-1/2 left-24 text-electric-blue" 
          delay={1.5}
        />
        <FloatingIcon 
          Icon={Layers} 
          className="top-3/4 left-1/3 text-cyber-cyan" 
          delay={3.5}
        />
      </div>
    </section>
  )
}
