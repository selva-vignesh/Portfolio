import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/lib/constants"

const SkillCard = ({ skill, index }: { skill: typeof SKILLS[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="group"
  >
    <Card className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6 text-center">
        <motion.div 
          className={`text-4xl mb-4 text-${skill.color}`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <i className={skill.icon}></i>
        </motion.div>
        <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {skill.description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {skill.tags.map((tag) => (
            <Badge 
              key={tag}
              variant="secondary"
              className="text-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deep knowledge in embedded systems, wireless protocols, and Linux kernel development
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
