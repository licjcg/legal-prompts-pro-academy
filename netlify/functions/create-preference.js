// Netlify Function to create MercadoPago preference
const fetch = require('node-fetch')

const MP_ACCESS_TOKEN = 'APP_USR-3553112854026324-061521-21d7d4b1f44442e2e600a8bec11b19bc-18284694'

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  }

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const preference = JSON.parse(event.body)

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(preference)
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('MercadoPago API Error:', errorData)
      throw new Error(`MercadoPago API Error: ${response.status}`)
    }

    const data = await response.json()

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    }

  } catch (error) {
    console.error('Error creating preference:', error)
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Error creating payment preference',
        details: error.message 
      })
    }
  }
}

