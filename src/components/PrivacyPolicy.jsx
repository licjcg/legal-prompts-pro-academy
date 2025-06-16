import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Mail, Lock, Eye, Globe } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al inicio</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold">Legal Prompts Pro Academy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg max-w-none"
        >
          {/* Title */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Política de Privacidad
            </h1>
            <p className="text-xl text-muted-foreground">
              Legal Prompts Pro Academy
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Última actualización: 16 de junio de 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-card border border-border rounded-xl p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">1</span>
                INTRODUCCIÓN
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Legal Prompts Pro Academy, operada por Juan Carlos Gómez - Patagonia Legal ("nosotros", "nuestro" o "la Empresa"), se compromete a proteger la privacidad y seguridad de sus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos su información personal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">2</span>
                INFORMACIÓN QUE RECOPILAMOS
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                <Eye className="w-5 h-5 mr-2 text-primary" />
                2.1 Información que Usted Proporciona:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li><strong>Datos de Registro:</strong> Nombre completo, dirección de email, contraseña</li>
                <li><strong>Información Profesional:</strong> Título profesional, área de especialización, experiencia</li>
                <li><strong>Información de Pago:</strong> Datos procesados a través de MercadoPago (no almacenamos información de tarjetas)</li>
                <li><strong>Comunicaciones:</strong> Mensajes, consultas y feedback que nos envía</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary" />
                2.2 Información Recopilada Automáticamente:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li><strong>Datos de Uso:</strong> Páginas visitadas, tiempo de permanencia, cursos completados</li>
                <li><strong>Información Técnica:</strong> Dirección IP, tipo de navegador, sistema operativo</li>
                <li><strong>Cookies y Tecnologías Similares:</strong> Para mejorar la experiencia del usuario</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">3</span>
                CÓMO UTILIZAMOS SU INFORMACIÓN
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Prestación del Servicio:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
                <li>Crear y gestionar su cuenta de usuario</li>
                <li>Proporcionar acceso al contenido educativo</li>
                <li>Procesar pagos y emitir certificaciones</li>
                <li>Brindar soporte técnico y atención al cliente</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-2">3.2 Comunicación:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
                <li>Enviar confirmaciones de registro y transacciones</li>
                <li>Notificar actualizaciones del curso y nuevos contenidos</li>
                <li>Responder a sus consultas y solicitudes</li>
                <li>Enviar newsletters educativos (con su consentimiento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">4</span>
                COMPARTIR INFORMACIÓN
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">4.1 No Vendemos Datos:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nunca vendemos, alquilamos o comercializamos su información personal a terceros.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Compartir Limitado:</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Podemos compartir información en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li><strong>Proveedores de Servicios:</strong> MercadoPago para procesamiento de pagos, servicios de hosting</li>
                <li><strong>Cumplimiento Legal:</strong> Cuando sea requerido por ley o autoridades competentes</li>
                <li><strong>Protección de Derechos:</strong> Para proteger nuestros derechos, propiedad o seguridad</li>
                <li><strong>Consentimiento:</strong> Cuando usted haya dado su consentimiento explícito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">5</span>
                SEGURIDAD DE DATOS
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-primary" />
                5.1 Medidas de Seguridad:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
                <li>Encriptación SSL/TLS para todas las transmisiones de datos</li>
                <li>Almacenamiento seguro en servidores protegidos</li>
                <li>Acceso restringido a datos personales por parte del personal</li>
                <li>Monitoreo regular de seguridad y actualizaciones</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-2">5.2 Retención de Datos:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li><strong>Datos de Cuenta:</strong> Mientras mantenga su cuenta activa</li>
                <li><strong>Datos de Transacciones:</strong> 10 años por requisitos fiscales</li>
                <li><strong>Datos de Uso:</strong> 2 años para análisis y mejoras</li>
                <li><strong>Comunicaciones:</strong> 3 años para soporte y referencia</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">6</span>
                SUS DERECHOS
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bajo la legislación argentina de protección de datos, usted tiene derecho a:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">✅ Acceso</h4>
                  <p className="text-sm text-muted-foreground">Solicitar información sobre qué datos personales tenemos sobre usted</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">✏️ Rectificación</h4>
                  <p className="text-sm text-muted-foreground">Corregir datos inexactos o incompletos</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">🗑️ Supresión</h4>
                  <p className="text-sm text-muted-foreground">Solicitar la eliminación de sus datos personales</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">📱 Portabilidad</h4>
                  <p className="text-sm text-muted-foreground">Recibir sus datos en un formato estructurado</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">7</span>
                CONTACTO Y EJERCICIO DE DERECHOS
              </h2>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Para ejercer sus derechos o realizar consultas sobre esta Política de Privacidad:
                </p>
                
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Responsable del Tratamiento:</p>
                  <p className="text-muted-foreground">Juan Carlos Gómez - Patagonia Legal</p>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>privacidad@legalpromptspro.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>info@legalpromptspro.com</span>
                  </div>
                  <p className="text-muted-foreground">Neuquén, Patagonia Argentina</p>
                  
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      ⏱️ Tiempo de Respuesta: 30 días hábiles
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Footer */}
          <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Al utilizar Legal Prompts Pro Academy, usted consiente el procesamiento de sus datos personales de acuerdo con esta Política de Privacidad.
            </p>
          </div>

        </motion.div>
      </main>
    </div>
  )
}

export default PrivacyPolicy

