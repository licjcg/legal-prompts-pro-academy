import { useState } from 'react'
import { motion } from 'framer-motion'
import LaunchCountdown from './LaunchCountdown'

const PricingCard = ({ 
  isLaunchOffer = true, 
  launchEndDate = '2025-07-16T23:59:59',
  onPurchase 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const regularPrice = 497000
  const launchPrice = 297000
  const savings = regularPrice - launchPrice
  const discountPercentage = Math.round((savings / regularPrice) * 100)

  const currentPrice = isLaunchOffer ? launchPrice : regularPrice

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="max-w-md mx-auto">
      {/* Launch Countdown */}
      {isLaunchOffer && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <LaunchCountdown 
            launchDate={launchEndDate}
            onExpired={() => window.location.reload()}
          />
        </motion.div>
      )}

      {/* Pricing Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`relative bg-card border-2 rounded-2xl p-8 shadow-xl transition-all duration-300 ${
          isLaunchOffer 
            ? 'border-gradient-to-r from-orange-500 to-red-500 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20' 
            : 'border-primary'
        }`}
      >
        {/* Discount Badge */}
        {isLaunchOffer && (
          <motion.div
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg"
          >
            -{discountPercentage}% OFF
          </motion.div>
        )}

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Legal Prompts Pro Academy</h3>
          <p className="text-muted-foreground">
            {isLaunchOffer ? 'Precio de Lanzamiento' : 'Acceso Completo'}
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-8">
          {isLaunchOffer && (
            <div className="mb-2">
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(regularPrice)}
              </span>
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold"
              >
                AHORRÁS {formatPrice(savings)}
              </motion.span>
            </div>
          )}
          
          <div className="text-5xl font-bold mb-2">
            <span className={isLaunchOffer ? 'text-red-600' : 'text-primary'}>
              {formatPrice(currentPrice)}
            </span>
          </div>
          
          <p className="text-muted-foreground">
            Acceso completo de por vida • Actualizaciones incluidas
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {[
            '105 horas de contenido premium',
            'Simulador IA integrado (GPT-4, Claude, Gemini)',
            '6 módulos especializados',
            'Certificación blockchain verificable',
            'Comunidad exclusiva de abogados',
            'Soporte 24/7 y actualizaciones',
            'Garantía de satisfacción 30 días'
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                isLaunchOffer ? 'bg-red-500' : 'bg-primary'
              }`}>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onPurchase}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg ${
            isLaunchOffer
              ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white'
              : 'bg-gradient-to-r from-primary to-accent hover:shadow-xl text-white'
          }`}
        >
          {isLaunchOffer ? (
            <span className="flex items-center justify-center space-x-2">
              <span>🔥 APROVECHAR OFERTA AHORA</span>
            </span>
          ) : (
            'Inscribirme Ahora'
          )}
        </motion.button>

        {/* Urgency Message */}
        {isLaunchOffer && (
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 text-center"
          >
            <p className="text-sm text-red-600 font-medium">
              ⚡ Esta oferta no se repetirá después del lanzamiento
            </p>
          </motion.div>
        )}

        {/* Security Badges */}
        <div className="mt-6 flex justify-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Pago seguro</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Garantía 30 días</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PricingCard

