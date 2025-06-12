import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r animate-pulse-glow animate-spin"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-4">
            Legal Prompts Pro
          </h1>
          <p className="text-muted-foreground text-lg">
            Revolucionando la educación legal con IA
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="nav">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent">
            Legal Prompts Pro Academy
          </h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#cursos" className="nav-link">Cursos</a>
          <a href="#simulador" className="nav-link">Simulador</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent">
            Domina la IA Legal
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            La primera academia de ingeniería de prompts legales con IA integrada. 
            Aprende a dominar ChatGPT, Claude y Gemini para revolucionar tu práctica jurídica.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary">
              Comenzar Ahora
            </button>
            <button className="btn" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              Ver Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="cursos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r bg-clip-text text-transparent">
            Características Revolucionarias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4">🤖 Simulador IA Integrado</h3>
              <p className="text-muted-foreground">
                Practica con GPT-4, Claude y Gemini en tiempo real. 
                Casos reales, feedback instantáneo.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold mb-4">📚 6 Módulos Especializados</h3>
              <p className="text-muted-foreground">
                105 horas de contenido premium. Desde fundamentos 
                hasta técnicas avanzadas de prompt engineering.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold mb-4">🏆 Certificación Blockchain</h3>
              <p className="text-muted-foreground">
                Certificados verificables en blockchain. 
                Reconocimiento profesional garantizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section id="simulador" className="py-20 px-4 bg-gradient-to-br">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent">
            Simulador IA Legal
          </h2>
          <div className="card">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Prueba el Simulador</h3>
              <div className="form-input mb-4" style={{textAlign: 'left', padding: '1rem'}}>
                <strong>Prompt:</strong> "Redacta una demanda por incumplimiento contractual..."
              </div>
              <div className="form-input" style={{textAlign: 'left', padding: '1rem', minHeight: '120px'}}>
                <strong>Respuesta IA:</strong><br/>
                "DEMANDA POR INCUMPLIMIENTO CONTRACTUAL<br/><br/>
                Señor Juez:<br/>
                [Nombre del demandante], por derecho propio, con domicilio en...<br/>
                <em>Simulación en tiempo real con Legal Prompts Pro Academy</em>"
              </div>
            </div>
            <button className="btn btn-primary">
              Acceder al Simulador Completo
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent">
            ¿Listo para Revolucionar tu Práctica Legal?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Únete a más de 500 abogados que ya dominan la IA legal
          </p>
          <div className="card">
            <h3 className="text-2xl font-bold mb-4">Precio de Lanzamiento</h3>
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent">
              $497,000 ARS
            </div>
            <p className="text-muted-foreground mb-6">
              Acceso completo de por vida • Actualizaciones incluidas
            </p>
            <button className="btn btn-primary w-full">
              Inscribirme Ahora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Legal Prompts Pro Academy. Revolucionando la educación legal con IA.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
