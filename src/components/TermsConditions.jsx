import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Scale, Shield, Mail } from 'lucide-react'

const TermsConditions = () => {
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
              <Scale className="w-6 h-6 text-primary" />
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
              <FileText className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Términos y Condiciones de Uso
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
                ACEPTACIÓN DE LOS TÉRMINOS
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Al acceder y utilizar Legal Prompts Pro Academy ("la Plataforma"), usted acepta estar sujeto a estos Términos y Condiciones de Uso ("Términos"). Si no está de acuerdo con alguno de estos términos, no debe utilizar la Plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">2</span>
                DESCRIPCIÓN DEL SERVICIO
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Legal Prompts Pro Academy es una plataforma educativa especializada en ingeniería de prompts para profesionales del derecho, que ofrece:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Cursos especializados en inteligencia artificial aplicada al derecho</li>
                <li>Simulador de IA integrado con GPT-4, Claude y Gemini</li>
                <li>Certificaciones blockchain verificables</li>
                <li>Comunidad exclusiva de profesionales legales</li>
                <li>Contenido premium de 105 horas distribuido en 6 módulos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">3</span>
                ELEGIBILIDAD Y REGISTRO
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Requisitos de Elegibilidad:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
                <li>Ser mayor de 18 años</li>
                <li>Ser profesional del derecho o estudiante avanzado de derecho</li>
                <li>Proporcionar información veraz y actualizada durante el registro</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-2">3.2 Cuenta de Usuario:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Es responsable de mantener la confidencialidad de sus credenciales</li>
                <li>Debe notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
                <li>Una cuenta por persona; no se permite compartir accesos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">4</span>
                CONTENIDO Y PROPIEDAD INTELECTUAL
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Contenido de la Plataforma:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Todo el contenido de Legal Prompts Pro Academy, incluyendo pero no limitado a textos, videos, simuladores, ejercicios y materiales educativos, está protegido por derechos de autor y es propiedad exclusiva de Juan Carlos Gómez - Patagonia Legal.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Licencia de Uso:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se le otorga una licencia personal, no transferible y no exclusiva para acceder y utilizar el contenido únicamente para fines educativos personales.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">4.3 Restricciones:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>No puede reproducir, distribuir, modificar o crear obras derivadas del contenido</li>
                <li>No puede utilizar el contenido para fines comerciales sin autorización expresa</li>
                <li>No puede compartir sus credenciales de acceso con terceros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">5</span>
                PAGOS Y FACTURACIÓN
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">5.1 Precios:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
                <li>Los precios se muestran en pesos argentinos (ARS)</li>
                <li>Los precios pueden cambiar sin previo aviso</li>
                <li>Las ofertas promocionales tienen validez limitada</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-2">5.2 Política de Pagos:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
                <li>Los pagos se procesan a través de MercadoPago</li>
                <li>El acceso se activa inmediatamente después del pago confirmado</li>
                <li>Todas las ventas son finales, sujeto a la garantía de satisfacción</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-2">5.3 Garantía de Satisfacción:</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ofrecemos una garantía de satisfacción de 30 días. Si no está completamente satisfecho, puede solicitar un reembolso completo dentro de los primeros 30 días de su compra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">6</span>
                USO ACEPTABLE
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">6.1 Conducta Permitida:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
                <li>Utilizar la plataforma para aprendizaje y desarrollo profesional</li>
                <li>Participar constructivamente en la comunidad</li>
                <li>Respetar los derechos de otros usuarios</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-2">6.2 Conducta Prohibida:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Utilizar la plataforma para actividades ilegales o no éticas</li>
                <li>Acosar, intimidar o discriminar a otros usuarios</li>
                <li>Intentar acceder a áreas restringidas de la plataforma</li>
                <li>Utilizar bots o scripts automatizados</li>
                <li>Compartir contenido inapropiado o spam</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">7</span>
                LIMITACIÓN DE RESPONSABILIDAD
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">7.1 Exención de Garantías:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La plataforma se proporciona "tal como está" sin garantías de ningún tipo, expresas o implícitas.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">7.2 Responsabilidad Profesional:</h3>
              <p className="text-muted-foreground leading-relaxed">
                El contenido educativo no constituye asesoramiento legal específico. Los usuarios deben ejercer su criterio profesional al aplicar los conocimientos adquiridos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">8</span>
                RESOLUCIÓN DE DISPUTAS
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">8.1 Ley Aplicable:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Estos Términos se rigen por las leyes de la República Argentina.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">8.2 Jurisdicción:</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cualquier disputa será resuelta en los tribunales competentes de Neuquén, Argentina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">9</span>
                CONTACTO
              </h2>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Para cualquier consulta sobre estos Términos y Condiciones:
                </p>
                
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Legal Prompts Pro Academy</p>
                  <p className="text-muted-foreground">Juan Carlos Gómez - Patagonia Legal</p>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>info@legalpromptspro.com</span>
                  </div>
                  <p className="text-muted-foreground">Neuquén, Patagonia Argentina</p>
                </div>
              </div>
            </section>

          </div>

          {/* Footer */}
          <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Al utilizar Legal Prompts Pro Academy, usted reconoce que ha leído, entendido y acepta estar sujeto a estos Términos y Condiciones.
            </p>
          </div>

        </motion.div>
      </main>
    </div>
  )
}

export default TermsConditions

