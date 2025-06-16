import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LaunchCountdown = ({ launchDate, onExpired }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const launch = new Date(launchDate).getTime()
      const difference = launch - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setIsExpired(true)
        if (onExpired) onExpired()
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [launchDate, onExpired])

  if (isExpired) {
    return (
      <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
        <p className="text-red-500 font-semibold">¡Oferta expirada!</p>
      </div>
    )
  }

  const isUrgent = timeLeft.days <= 7

  return (
    <div className="text-center">
      <motion.div
        animate={isUrgent ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-4 ${
          isUrgent 
            ? 'bg-red-500 text-white animate-pulse' 
            : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
        }`}
      >
        🔥 {isUrgent ? '¡ÚLTIMOS DÍAS!' : 'OFERTA LIMITADA'} 🔥
      </motion.div>

      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
        {[
          { label: 'Días', value: timeLeft.days },
          { label: 'Horas', value: timeLeft.hours },
          { label: 'Min', value: timeLeft.minutes },
          { label: 'Seg', value: timeLeft.seconds }
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-card border-2 rounded-lg p-3 ${
              isUrgent ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-primary'
            }`}
          >
            <div className={`text-2xl font-bold ${
              isUrgent ? 'text-red-600' : 'text-primary'
            }`}>
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        animate={isUrgent ? { opacity: [1, 0.7, 1] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
        className={`mt-4 text-sm font-medium ${
          isUrgent ? 'text-red-600' : 'text-muted-foreground'
        }`}
      >
        {isUrgent 
          ? '⚡ ¡No pierdas esta oportunidad única!' 
          : '⏰ Esta oferta no se repetirá'
        }
      </motion.p>
    </div>
  )
}

export default LaunchCountdown

