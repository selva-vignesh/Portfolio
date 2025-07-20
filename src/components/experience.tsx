import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EXPERIENCES } from "@/lib/constants"

const ExperienceCard = ({ experience, index }: { experience: typeof EXPERIENCES[0], index: number }) => {
  // Define color classes to ensure they're included in Tailwind bundle
  const colorClasses = {
    'electric-blue': {
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-600'
    },
    'cyber-cyan': {
      bg: 'bg-cyan-500',
      text: 'text-cyan-500',
      border: 'border-cyan-500'
    },
    'deep-purple': {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      border: 'border-purple-600'
    }
  }
  
  const colors = colorClasses[experience.color as keyof typeof colorClasses] || colorClasses['electric-blue']

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative mb-12 last:mb-0"
    >
      {/* Timeline dot */}
      <motion.div 
        className={`absolute left-6 w-5 h-5 ${colors.bg} rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10`}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
      />
      
      {/* Experience card */}
      <div className="ml-16 md:ml-20">
        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-gray-200 dark:border-l-gray-700 hover:border-l-blue-400 dark:hover:border-l-blue-400">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className={`text-xl font-semibold ${colors.text}`}>
                {experience.title}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                {experience.period}
              </span>
            </div>
            <h4 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
              {experience.company}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {experience.description}
            </p>
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</h5>
              <ul className="list-none text-gray-600 dark:text-gray-400 space-y-1">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${colors.bg} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <Badge 
                  key={tag}
                  className={`${colors.bg} bg-opacity-10 ${colors.text} ${colors.border} border-opacity-20 hover:bg-opacity-20 transition-colors`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 dark:bg-purple-800 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A journey through innovative embedded systems and firmware development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - improved positioning and styling */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-cyan-500 to-purple-600 rounded-full shadow-lg opacity-80"></div>
          
          {/* Timeline start indicator */}
          <div className="absolute left-6 -top-2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-xl">
            <div className="w-full h-full bg-blue-600 rounded-full animate-pulse"></div>
          </div>

          {/* Experience cards */}
          <div className="pt-8 pb-8">
            {EXPERIENCES.map((experience, index) => (
              <ExperienceCard key={experience.title} experience={experience} index={index} />
            ))}
          </div>
          
          {/* Timeline end indicator */}
          <div className="absolute left-6 -bottom-2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-xl">
            <div className="w-full h-full bg-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
