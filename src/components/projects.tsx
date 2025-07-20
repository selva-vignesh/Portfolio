import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar } from "lucide-react"
import { PROJECTS } from "@/lib/constants"

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -4 }}
    className="group"
  >
    <Card className="h-full overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500">
      <motion.div 
        className="overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </motion.div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className={`text-${project.color} hover:text-blue-600`}>
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className={`text-${project.color} hover:text-blue-600`}>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge 
              key={tag}
              className={`bg-${project.color} bg-opacity-10 text-${project.color} border-${project.color} border-opacity-20`}
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          <Calendar className="mr-1 h-3 w-3" />
          {project.duration}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions in embedded systems and wireless communication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
