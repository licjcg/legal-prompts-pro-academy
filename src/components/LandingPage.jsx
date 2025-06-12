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
      description: "Crea agentes GPT personalizados con metodología INFUSE",
      topics: ["GPT Builder", "Método INFUSE", "Bases de conocimiento", "Testing"]
    },
    {
      id: 5,
      title: "Ética y Responsabilidad",
      duration: "15 horas",
      lessons: 8,
      description: "Implementa marcos éticos y protocolos de cumplimiento",
      topics: ["Responsabilidad", "Confidencialidad", "Supervisión", "Políticas"]
    },
    {
      id: 6,
      title: "Innovación y Futuro",
      duration: "10 horas",
      lessons: 5,
      description: "Mantente a la vanguardia de las tendencias en IA legal",
      topics: ["Tendencias", "Innovación", "Liderazgo", "Networking"]
    }
  ]

  const testimonials = [
    {
      name: "Dr. María González",
      role: "Socia Senior, González & Asociados",
      content: "Legal Prompts Pro transformó completamente nuestra práctica. Reducimos 60% el tiempo en redacción de contratos manteniendo la más alta calidad.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Lic. Carlos Mendoza", 
      role: "Director Legal, TechCorp",
      content: "La metodología INFUSE nos permitió crear GPTs especializados que ahora son fundamentales en nuestro due diligence. ROI del 400% en 6 meses.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Dra. Ana Rodríguez",
      role: "Abogada Litigante",
      content: "El módulo de ética fue revelador. Ahora uso IA con total confianza sabiendo que cumplo con todos los estándares profesionales.",
      rating: 5,
      image: "/api/placeholder/80/80"
    }
  ]

  const stats = [
    { number: "2,847", label: "Abogados Graduados", icon: Users },
    { number: "94%", label: "Tasa de Satisfacción", icon: Star },
    { number: "67%", label: "Aumento Promedio de Eficiencia", icon: TrendingUp },
    { number: "15", label: "Países Representados", icon: Globe }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Legal Prompts Pro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Características
              </a>
              <a href="#modules" className="text-muted-foreground hover:text-foreground transition-colors">
                Módulos
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Testimonios
              </a>
              <Link
                to="/login"
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
              >
                Acceder
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Primera Academia de IA Legal en Latinoamérica
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Revoluciona tu
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Práctica Legal
                </span>
                con IA Avanzada
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                La única plataforma que combina <strong>ingeniería de prompts profesional</strong>, 
                <strong> IA integrada real</strong> y <strong>ética legal rigurosa</strong> para 
                transformar abogados en líderes tecnológicos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all flex items-center justify-center group"
                >
                  Comenzar Transformación
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border border-border px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-all flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  105 horas de contenido
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Certificación blockchain
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Acceso de por vida
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Dashboard Preview */}
                <div className="glass rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                      <div>
                        <div className="font-semibold">Juan Carlos Gómez</div>
                        <div className="text-sm text-muted-foreground">Módulo 4: GPTs Avanzados</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">67%</div>
                  </div>
                  
                  <div className="progress-bar h-2 rounded-full mb-6">
                    <div className="h-full w-2/3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background/50 rounded-lg p-3">
                      <div className="text-sm text-muted-foreground">Racha Actual</div>
                      <div className="text-xl font-bold text-orange-500">15 días</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <div className="text-sm text-muted-foreground">Ranking</div>
                      <div className="text-xl font-bold text-purple-500">#23</div>
                    </div>
                  </div>

                  <div className="terminal rounded-lg p-4">
                    <div className="terminal-header mb-2"></div>
                    <div className="font-mono text-sm text-green-400">
                      <div className="mb-1">$ prompt: "Analiza este contrato de..."</div>
                      <div className="mb-1 text-blue-400">✓ Análisis completado</div>
                      <div className="text-yellow-400 animate-typing">
                        Generando recomendaciones...
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Trophy className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Brain className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.features ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Por qué Legal Prompts Pro es
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                Verdaderamente Disruptivo?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No somos otro curso online. Somos la primera plataforma que combina educación premium, 
              IA real integrada y estándares éticos rigurosos para crear verdaderos líderes en legal tech.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.features ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover-lift group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 bg-secondary/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.modules ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Curriculum Profesional
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                105 Horas de Excelencia
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seis módulos diseñados por expertos que te llevarán desde los fundamentos 
              hasta convertirte en un líder en la intersección de derecho y tecnología.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.modules ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover-lift group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold">
                    {module.id}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {module.duration} • {module.lessons} lecciones
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {module.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {module.description}
                </p>
                
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.testimonials ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Transformaciones
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                Reales y Medibles
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Abogados de toda Latinoamérica ya están liderando la revolución legal con IA
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-foreground mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-muted-foreground text-sm">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-primary' 
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.pricing ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Inversión en tu
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                Futuro Profesional
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Una inversión que se paga sola con el primer caso optimizado con IA
            </p>
          </motion.div>

          <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Oferta de Lanzamiento - 40% OFF
              </div>
              
              <div className="mb-6">
                <div className="text-6xl font-bold mb-2">
                  <span className="text-muted-foreground line-through text-3xl">$497.000</span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                    $297.000
                  </span>
                </div>
                <div className="text-muted-foreground">ARS - Pago único, acceso de por vida</div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>105 horas de contenido premium</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Simulador de IA integrado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Certificación blockchain</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Casos reales anonimizados</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Comunidad exclusiva</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Actualizaciones de por vida</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Soporte prioritario</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Garantía 30 días</span>
                  </div>
                </div>
              </div>

              <Link
                to="/register"
                className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-12 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all group"
              >
                Comenzar Ahora
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-6 text-sm text-muted-foreground">
                🔒 Pago seguro • 💳 Todos los medios de pago • 📱 Acceso inmediato
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.cta ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para liderar la
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                Revolución Legal?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a los abogados más innovadores de Latinoamérica. 
              La competencia llegará en 12-18 meses. Tú puedes empezar hoy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all flex items-center justify-center group"
              >
                Comenzar Transformación
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border border-border px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-all flex items-center justify-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Hablar con Experto
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Legal Prompts Pro</span>
              </div>
              <p className="text-muted-foreground">
                La primera academia de ingeniería de prompts legales en Latinoamérica.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Plataforma</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Módulos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Simulador</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Comunidad</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Certificación</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Casos de Estudio</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Soporte</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Legal Prompts Pro Academy. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

