// MercadoPago Integration with Production Credentials
import { useState } from 'react'

// Production Credentials
const MP_CONFIG = {
  publicKey: 'APP_USR-d9f513cc-68ae-4f01-ad04-78a1ebe9d80b',
  accessToken: 'APP_USR-3553112854026324-061521-21d7d4b1f44442e2e600a8bec11b19bc-18284694',
  clientId: '3553112854026324',
  clientSecret: 'I0uCq9nCAXrLOTDGfK2FLrGTu3Kf8S5o'
}

// Course Configuration
const COURSE_CONFIG = {
  title: 'Legal Prompts Pro Academy',
  description: 'La primera academia de ingeniería de prompts legales con IA integrada',
  regularPrice: 497000,
  launchPrice: 297000,
  currency: 'ARS',
  launchEndDate: new Date('2025-07-16'), // 30 días desde hoy
}

const MercadoPagoCheckout = ({ onSuccess, onError }) => {
  const [loading, setLoading] = useState(false)
  const [preferenceId, setPreferenceId] = useState(null)

  const createPreference = async () => {
    setLoading(true)
    
    try {
      const preference = {
        items: [
          {
            title: COURSE_CONFIG.title,
            description: COURSE_CONFIG.description,
            quantity: 1,
            currency_id: COURSE_CONFIG.currency,
            unit_price: COURSE_CONFIG.launchPrice,
            picture_url: 'https://legalpromptspro.com/images/course-preview.jpg'
          }
        ],
        payer: {
          name: '',
          surname: '',
          email: '',
          phone: {
            area_code: '',
            number: ''
          },
          address: {
            street_name: '',
            street_number: null,
            zip_code: ''
          }
        },
        back_urls: {
          success: 'https://legalpromptspro.com/payment/success',
          failure: 'https://legalpromptspro.com/payment/failure',
          pending: 'https://legalpromptspro.com/payment/pending'
        },
        auto_return: 'approved',
        notification_url: 'https://legalpromptspro.com/api/webhooks/mercadopago',
        statement_descriptor: 'LEGAL PROMPTS PRO',
        external_reference: `course_${Date.now()}`,
        expires: true,
        expiration_date_from: new Date().toISOString(),
        expiration_date_to: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 horas
      }

      // Create preference via Netlify Function
      const response = await fetch('/.netlify/functions/create-preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preference)
      })

      if (!response.ok) {
        throw new Error('Error creating preference')
      }

      const data = await response.json()
      setPreferenceId(data.id)
      
      // Redirect to MercadoPago Checkout
      window.location.href = data.init_point
      
    } catch (error) {
      console.error('Error:', error)
      onError?.(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Pricing Display */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-lg">
        <div className="text-center">
          <div className="text-sm font-medium mb-2">🔥 OFERTA DE LANZAMIENTO</div>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-2xl line-through opacity-75">
              ${COURSE_CONFIG.regularPrice.toLocaleString('es-AR')}
            </span>
            <span className="text-4xl font-bold">
              ${COURSE_CONFIG.launchPrice.toLocaleString('es-AR')}
            </span>
          </div>
          <div className="text-lg mt-2">
            ¡Ahorrás ${(COURSE_CONFIG.regularPrice - COURSE_CONFIG.launchPrice).toLocaleString('es-AR')}!
          </div>
          <div className="text-sm mt-2 opacity-90">
            40% de descuento - Solo por tiempo limitado
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <button
        onClick={createPreference}
        disabled={loading}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
      >
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            <span>Procesando...</span>
          </>
        ) : (
          <>
            <span>💳</span>
            <span>Inscribirme Ahora - ${COURSE_CONFIG.launchPrice.toLocaleString('es-AR')}</span>
          </>
        )}
      </button>

      {/* Security Info */}
      <div className="text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span>🔒</span>
          <span>Pago 100% seguro con MercadoPago</span>
        </div>
        <div>Aceptamos todas las tarjetas y medios de pago</div>
      </div>

      {/* Guarantee */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <div className="text-green-800 font-semibold mb-2">
          ✅ Garantía de 30 días
        </div>
        <div className="text-green-700 text-sm">
          Si no estás satisfecho, te devolvemos el 100% de tu dinero
        </div>
      </div>
    </div>
  )
}

export default MercadoPagoCheckout

