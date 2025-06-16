import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Shield, 
  Trophy, 
  Users, 
  Zap, 
  CheckCircle,
  Star,
  Play,
  BookOpen,
  Target,
  Award,
  Rocket,
  Globe,
  Lock,
  TrendingUp,
  MessageSquare,
  Code,
  Database,
  Cpu
} from 'lucide-react'

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  const features = [
    {
      icon: Brain,
      title: "IA Integrada Real",
      description: "Simulador con GPT-4, Claude y Gemini funcionando en tiempo real",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Ética Profesional", 
      description: "Módulo completo sobre responsabilidad y confidencialidad legal",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Trophy,
      title: "Certificación Blockchain",
      description: "Certificados verificables y reconocidos por la industria",
      color: "from-pink-500 to-red-600"
    },
    {
      icon: Users,
      title: "Comunidad Exclusiva",
      description: "Red de abogados innovadores y casos de estudio reales",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "105 Horas de Contenido",
      description: "6 módulos profesionales con casos reales anonimizados",
      color: "from-orange-500 to-yellow-600"
    },
    {
      icon: Target,
      title: "ROI Medible",
      description: "Métricas de eficiencia y herramientas de evaluación",
      color: "from-yellow-500 to-green-600"
    }
  ]

  const modules = [
    {
      id: 1,
      title: "Fundamentos de IA Legal",
      duration: "15 horas",
      lessons: 8,
      description: "Comprende los principios de IA y su aplicación ética en el derecho",
      topics: ["Modelos de lenguaje", "Ética profesional", "Regulaciones", "Casos de uso"]
    },
    {
      id: 2,
      title: "Ingeniería de Prompts",
      duration: "20 horas", 
      lessons: 12,
      description: "Domina técnicas avanzadas de prompting para casos legales",
      topics: ["Zero-shot", "Few-shot", "Chain-of-Thought", "Tree of Thoughts"]
    },
    {
      id: 3,
      title: "Aplicaciones Especializadas",
      duration: "25 horas",
      lessons: 15,
      description: "Implementa IA en contratos, investigación y litigación",
      topics: ["Redacción", "Due diligence", "Investigación", "Litigación"]
    },
    {
      id: 4,
      title: "Desarrollo de GPTs",
      duration: "20 horas",
      lessons: 10,
      description: "Crea asistentes especializados para tu práctica legal",
      topics: ["Custom GPTs", "API Integration", "Fine-tuning", "Deployment"]
    },
    {
      id: 5,
      title: "Automatización Legal",
      duration: "15 horas",
      lessons: 9,
      description: "Workflows automatizados y integración con sistemas existentes",
      topics: ["Zapier", "Make", "APIs", "Integrations"]
    },
    {
      id: 6,
      title: "Futuro de la Profesión",
      duration: "10 horas",
      lessons: 6,
      description: "Tendencias, oportunidades y transformación del sector legal",
      topics: ["Trends", "Business Models", "Innovation", "Leadership"]
    }
  ]

  const testimonials = [
    {
      name: "Dr. María González",
      role: "Socia, González & Asociados",
      content: "Legal Prompts Pro transformó completamente nuestra práctica. Reducimos 70% el tiempo en redacción de contratos.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Lic. Roberto Silva",
      role: "Director Legal, TechCorp",
      content: "El simulador de IA es increíble. Practicamos casos complejos antes de implementar en la realidad.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Dra. Ana Martínez",
      role: "Abogada Independiente",
      content: "La certificación blockchain me abrió puertas en el mercado internacional. Inversión que se paga sola.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    }
  ]

  const stats = [
    { number: "1,247", label: "Abogados Certificados", icon: Users },
    { number: "97%", label: "Tasa de Satisfacción", icon: Star },
    { number: "70%", label: "Reducción de Tiempo", icon: TrendingUp },
    { number: "15x", label: "ROI Promedio", icon: Target }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Legal Prompts Pro
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-foreground transition-colors">
                Características
              </button>
              <button onClick={() => scrollToSection('modules')} className="text-muted-foreground hover:text-foreground transition-colors">
                Cursos
              </button>
              <button onClick={() => scrollToSection('simulator')} className="text-muted-foreground hover:text-foreground transition-colors">
                Simulador
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-muted-foreground hover:text-foreground transition-colors">
                Testimonios
              </button>
              <Link
                to="/register"
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Comenzar Ahora
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Primera Academia de IA Legal en Latinoamérica
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Domina la IA Legal
                </span>
                <br />
                <span className="text-foreground">
                  Revoluciona tu Práctica
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                La primera academia de ingeniería de prompts legales con IA integrada. 
                Aprende a dominar ChatGPT, Claude y Gemini para revolucionar tu práctica jurídica.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                to="/register"
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => scrollToSection('simulator')}
                className="border border-border text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-muted transition-all duration-300 flex items-center justify-center group"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Características <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Revolucionarias</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnología de vanguardia diseñada específicamente para profesionales del derecho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Módulos de <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Especialización</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              105 horas de contenido premium. Desde fundamentos hasta técnicas avanzadas de prompt engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{module.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Play className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{module.lessons} lecciones</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                <p className="text-muted-foreground mb-4">{module.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {module.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulator Preview */}
      <section id="simulator" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simulador <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">IA Legal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practica con GPT-4, Claude y Gemini en tiempo real. Casos reales, feedback instantáneo.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Prueba el Simulador</h3>
              <div className="bg-muted rounded-lg p-4 mb-4">
                <div className="text-sm text-muted-foreground mb-2">Prompt:</div>
                <div className="text-foreground">"Redacta una demanda por incumplimiento contractual..."</div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="text-sm text-primary mb-2">Respuesta IA:</div>
                <div className="text-foreground">
                  "DEMANDA POR INCUMPLIMIENTO CONTRACTUAL<br/><br/>
                  Señor Juez:<br/>
                  [Nombre del demandante], por derecho propio, con domicilio en..."
                  <br/><br/>
                  <span className="text-muted-foreground italic">Simulación en tiempo real con Legal Prompts Pro Academy</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/register"
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
              >
                Acceder al Simulador Completo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que dicen nuestros <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Estudiantes</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-foreground mb-6">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Revolucionar tu <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Práctica Legal?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a más de 1,247 abogados que ya dominan la IA legal
            </p>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <div className="text-center mb-6">
                <div className="text-sm text-muted-foreground mb-2">Precio de Lanzamiento</div>
                <div className="text-4xl font-bold text-foreground mb-2">$497,000 ARS</div>
                <div className="text-muted-foreground">Acceso completo de por vida • Actualizaciones incluidas</div>
              </div>
              
              <Link
                to="/register"
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              >
                Inscribirme Ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Garantía 30 días
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Soporte 24/7
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Certificación incluida
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Legal Prompts Pro Academy
              </span>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-muted-foreground mb-2">
                © 2024 Legal Prompts Pro Academy. Revolucionando la educación legal con IA.
              </div>
              <div className="text-sm text-muted-foreground">
                Desarrollado por Juan Carlos Gómez - Patagonia Legal
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

