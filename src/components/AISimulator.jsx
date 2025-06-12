import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AISimulator = () => {
  const { isDark } = useTheme();
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [inputText, setInputText] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const messagesEndRef = useRef(null);

  const aiModels = [
    { id: 'gpt-4', name: 'GPT-4', description: 'Más preciso para análisis complejos' },
    { id: 'claude', name: 'Claude', description: 'Excelente para redacción legal' },
    { id: 'gemini', name: 'Gemini', description: 'Ideal para investigación jurídica' }
  ];

  const promptTemplates = [
    {
      id: 'contract-analysis',
      title: 'Análisis de Contrato',
      prompt: `Actúa como un abogado experto en derecho contractual. Analiza el siguiente contrato y proporciona:

1. RESUMEN EJECUTIVO (máximo 3 párrafos)
2. CLÁUSULAS CRÍTICAS identificadas
3. RIESGOS POTENCIALES para mi cliente
4. RECOMENDACIONES específicas
5. PUNTOS DE NEGOCIACIÓN sugeridos

Contrato a analizar:
[PEGAR TEXTO DEL CONTRATO AQUÍ]

Responde de manera estructurada y profesional.`
    },
    {
      id: 'legal-research',
      title: 'Investigación Jurídica',
      prompt: `Actúa como un investigador jurídico experto. Necesito investigar sobre: [TEMA LEGAL]

Por favor proporciona:

1. MARCO LEGAL APLICABLE
   - Normativa nacional relevante
   - Jurisprudencia clave (últimos 5 años)
   - Doctrina autorizada

2. ANÁLISIS COMPARATIVO
   - Precedentes similares
   - Tendencias jurisprudenciales
   - Criterios de los tribunales

3. ESTRATEGIA RECOMENDADA
   - Argumentos más sólidos
   - Posibles contrargumentos
   - Riesgos procesales

4. BIBLIOGRAFÍA Y FUENTES
   - Citas exactas de normativa
   - Referencias jurisprudenciales
   - Doctrina consultada

Tema específico: [DESCRIBIR EL TEMA LEGAL A INVESTIGAR]`
    },
    {
      id: 'demand-draft',
      title: 'Redacción de Demanda',
      prompt: `Actúa como un abogado litigante experto. Necesito redactar una demanda con las siguientes características:

DATOS DEL CASO:
- Tipo de proceso: [CIVIL/LABORAL/COMERCIAL/ETC]
- Hechos principales: [DESCRIBIR HECHOS]
- Pretensiones: [QUÉ SE SOLICITA]
- Fundamentos legales: [NORMATIVA APLICABLE]

Por favor estructura la demanda con:

1. ENCABEZAMIENTO
   - Identificación del tribunal
   - Partes procesales
   - Tipo de proceso

2. HECHOS
   - Narrativa cronológica clara
   - Hechos relevantes numerados
   - Contexto necesario

3. FUNDAMENTOS DE DERECHO
   - Base legal de las pretensiones
   - Citas normativas precisas
   - Jurisprudencia de apoyo

4. PETITORIO
   - Pretensiones principales
   - Pretensiones subsidiarias
   - Solicitudes procesales

5. ANEXOS
   - Lista de documentos probatorios
   - Medios de prueba propuestos

Información específica del caso: [COMPLETAR CON DATOS DEL CASO]`
    },
    {
      id: 'legal-opinion',
      title: 'Dictamen Jurídico',
      prompt: `Actúa como un abogado consultor especializado. Un cliente me consulta sobre la siguiente situación:

CONSULTA: [DESCRIBIR LA SITUACIÓN LEGAL]

Necesito emitir un dictamen jurídico profesional que incluya:

1. ANTECEDENTES
   - Resumen de la situación planteada
   - Contexto relevante
   - Documentación analizada

2. CUESTIONES JURÍDICAS PLANTEADAS
   - Identificación de los problemas legales
   - Alcance del análisis
   - Limitaciones del dictamen

3. ANÁLISIS LEGAL
   - Marco normativo aplicable
   - Interpretación jurídica
   - Precedentes relevantes
   - Doctrina autorizada

4. CONCLUSIONES
   - Respuesta clara a la consulta
   - Grado de certeza jurídica
   - Alternativas legales

5. RECOMENDACIONES
   - Cursos de acción sugeridos
   - Riesgos a considerar
   - Pasos siguientes

Situación específica: [DETALLAR LA CONSULTA DEL CLIENTE]`
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template.id);
    setInputText(template.prompt);
  };

  const simulateAIResponse = async (prompt, model) => {
    // Simular respuesta de IA basada en el modelo seleccionado
    const responses = {
      'gpt-4': {
        'contract-analysis': `## ANÁLISIS DE CONTRATO - GPT-4

### RESUMEN EJECUTIVO
El contrato presentado es un acuerdo de servicios profesionales con elementos estándar pero algunas cláusulas que requieren atención especial. Se identifica un desequilibrio en las obligaciones de las partes y términos de terminación que favorecen desproporcionalmente a una de las partes.

### CLÁUSULAS CRÍTICAS IDENTIFICADAS
1. **Cláusula de Terminación (Sección 8.2)**: Permite terminación unilateral sin causa con solo 15 días de aviso
2. **Limitación de Responsabilidad (Sección 12.1)**: Excesivamente amplia, podría ser inválida
3. **Confidencialidad (Sección 6.3)**: Definición muy amplia de "información confidencial"
4. **Propiedad Intelectual (Sección 9.1)**: Asignación automática sin compensación adicional

### RIESGOS POTENCIALES
- **Alto riesgo**: Terminación abrupta sin compensación adecuada
- **Medio riesgo**: Exposición por limitación de responsabilidad inválida
- **Bajo riesgo**: Conflictos por definición amplia de confidencialidad

### RECOMENDACIONES ESPECÍFICAS
1. Negociar período de terminación de 30-60 días
2. Revisar y limitar cláusula de responsabilidad
3. Definir más precisamente información confidencial
4. Considerar compensación adicional por PI desarrollada

### PUNTOS DE NEGOCIACIÓN SUGERIDOS
- Reciprocidad en términos de terminación
- Caps en limitación de responsabilidad
- Exclusiones específicas en confidencialidad
- Retención de derechos morales de autor`,

        'legal-research': `## INVESTIGACIÓN JURÍDICA - GPT-4

### MARCO LEGAL APLICABLE

**Normativa Nacional:**
- Código Civil y Comercial, Arts. 957-1037 (Contratos)
- Ley de Defensa del Consumidor 24.240
- Decreto Reglamentario 1798/94

**Jurisprudencia Clave (2019-2024):**
- CSJN, "Banco Macro c/ González" (2023): Criterios de abusividad
- CNCom, Sala A, "Tech Solutions SRL" (2022): Cláusulas leoninas
- CCyC Córdoba, "Inmobiliaria Norte" (2021): Buena fe contractual

### ANÁLISIS COMPARATIVO

**Precedentes Similares:**
Los tribunales han mantenido consistencia en declarar nulas las cláusulas que:
- Generen desequilibrio significativo
- Limiten excesivamente derechos del adherente
- Contradigan la naturaleza del contrato

**Tendencias Jurisprudenciales:**
- Mayor protección al contratante débil
- Interpretación restrictiva de limitaciones de responsabilidad
- Aplicación del principio de buena fe objetiva

### ESTRATEGIA RECOMENDADA

**Argumentos Más Sólidos:**
1. Aplicación del art. 988 CCyC (cláusulas abusivas)
2. Principio de buena fe (art. 961 CCyC)
3. Interpretación contra proferentem

**Posibles Contrargumentos:**
- Libertad contractual y autonomía de la voluntad
- Conocimiento y aceptación expresa de términos
- Compensación en otras cláusulas del contrato

**Riesgos Procesales:**
- Necesidad de prueba específica del desequilibrio
- Posible reconvención por incumplimiento
- Costas procesales en caso de rechazo parcial`,

        'legal-opinion': `## DICTAMEN JURÍDICO - GPT-4

### ANTECEDENTES
Se ha analizado la consulta referente a [situación planteada], considerando la documentación aportada y el marco legal vigente. El presente dictamen se emite en base a la información disponible al [fecha].

### CUESTIONES JURÍDICAS PLANTEADAS
1. Viabilidad legal de la operación propuesta
2. Riesgos regulatorios asociados
3. Estructura jurídica recomendada
4. Implicancias fiscales preliminares

### ANÁLISIS LEGAL

**Marco Normativo:**
La operación se encuentra regulada principalmente por [normativa específica], siendo aplicables también las disposiciones de [normativa complementaria].

**Interpretación Jurídica:**
La doctrina mayoritaria y la jurisprudencia reciente establecen que este tipo de operaciones son válidas siempre que cumplan con [requisitos específicos].

**Precedentes Relevantes:**
- Caso "ABC SA" (CSJN, 2022): Estableció criterios claros
- "Operaciones XYZ" (CNCom, 2023): Confirmó viabilidad

### CONCLUSIONES
1. **VIABLE**: La operación es jurídicamente factible
2. **CONDICIONADA**: Requiere cumplimiento de requisitos específicos
3. **RIESGO BAJO**: Probabilidad mínima de cuestionamientos

### RECOMENDACIONES
1. Estructurar operación según modalidad sugerida
2. Obtener autorizaciones previas necesarias
3. Implementar compliance específico
4. Revisar implicancias fiscales con especialista`
      },
      'claude': {
        'contract-analysis': `## ANÁLISIS CONTRACTUAL - CLAUDE

### EVALUACIÓN INTEGRAL DEL DOCUMENTO

He realizado un análisis exhaustivo del contrato presentado, aplicando principios de derecho contractual moderno y mejores prácticas de la industria.

### ESTRUCTURA Y COHERENCIA
El documento presenta una estructura generalmente adecuada, aunque se observan algunas inconsistencias terminológicas que podrían generar ambigüedades interpretativas.

### BALANCE DE PRESTACIONES
**Observación Principal**: Existe un desequilibrio notable en las obligaciones recíprocas, particularmente en:
- Términos de pago asimétricos
- Responsabilidades desproporcionadas
- Mecanismos de resolución unilaterales

### REDACCIÓN Y CLARIDAD
**Fortalezas**:
- Definiciones claras en secciones iniciales
- Estructura lógica de obligaciones
- Mecanismos de notificación bien definidos

**Áreas de Mejora**:
- Ambigüedad en términos de "fuerza mayor"
- Definición imprecisa de "incumplimiento material"
- Falta de criterios objetivos para evaluación de desempeño

### RECOMENDACIONES ESTRATÉGICAS
1. **Inmediatas**: Clarificar definiciones ambiguas
2. **Mediano plazo**: Rebalancear obligaciones recíprocas
3. **Largo plazo**: Implementar mecanismos de revisión periódica

### ANÁLISIS DE RIESGO-BENEFICIO
El contrato, en su forma actual, presenta un perfil de riesgo medio-alto que podría mitigarse mediante las modificaciones sugeridas.`,

        'legal-research': `## INVESTIGACIÓN JURÍDICA INTEGRAL - CLAUDE

### METODOLOGÍA APLICADA
He empleado un enfoque multidisciplinario que combina análisis doctrinal, jurisprudencial y comparativo para proporcionar una visión comprehensiva del tema consultado.

### CONTEXTO NORMATIVO ACTUAL

**Marco Regulatorio Primario**:
La regulación actual se caracteriza por un enfoque progresivo que busca equilibrar los intereses en juego, estableciendo un sistema de protecciones graduales según la naturaleza de la relación jurídica.

**Evolución Jurisprudencial**:
Los tribunales han desarrollado una línea interpretativa consistente que privilegia:
- La protección de la parte más vulnerable
- La aplicación de principios de equidad
- La búsqueda de soluciones pragmáticas

### ANÁLISIS COMPARATIVO REGIONAL
**Tendencias Latinoamericanas**:
- Argentina: Enfoque proteccionista consolidado
- Chile: Sistema mixto con elementos liberales
- Colombia: Marco garantista en desarrollo
- México: Regulación federal vs. local

### PROYECCIÓN Y TENDENCIAS
**Desarrollos Esperados**:
1. Mayor armonización regional
2. Incorporación de estándares internacionales
3. Adaptación a nuevas tecnologías
4. Refuerzo de mecanismos de protección

### ESTRATEGIA JURÍDICA RECOMENDADA
**Enfoque Integral**:
- Aprovechamiento de tendencias favorables
- Mitigación proactiva de riesgos
- Construcción de precedentes positivos
- Preparación para cambios regulatorios

**Tácticas Específicas**:
1. Documentación exhaustiva de antecedentes
2. Construcción de argumentos multicausales
3. Preparación de estrategias alternativas
4. Monitoreo continuo de desarrollos normativos`
      },
      'gemini': {
        'contract-analysis': `## ANÁLISIS CONTRACTUAL AVANZADO - GEMINI

### EVALUACIÓN MEDIANTE IA JURÍDICA

Utilizando algoritmos de análisis contractual y bases de datos jurisprudenciales actualizadas, he procesado el documento para identificar patrones de riesgo y oportunidades de optimización.

### MÉTRICAS DE RIESGO CALCULADAS
- **Índice de Desequilibrio**: 7.2/10 (Alto)
- **Probabilidad de Disputa**: 34% (Medio-Alto)
- **Complejidad de Enforcement**: 6.8/10 (Alto)
- **Score de Claridad**: 5.1/10 (Medio-Bajo)

### ANÁLISIS PREDICTIVO
**Basado en 15,000+ contratos similares analizados**:
- 68% de contratos con cláusulas similares experimentan renegociación
- 23% requieren intervención judicial para interpretación
- 12% resultan en terminación anticipada

### CLÁUSULAS DE ALTO IMPACTO IDENTIFICADAS

**Cláusula de Mayor Riesgo**: Limitación de Responsabilidad
- **Probabilidad de Invalidez**: 78%
- **Impacto Financiero Potencial**: Alto
- **Precedentes Adversos**: 15 casos identificados

**Cláusula de Mayor Beneficio**: Propiedad Intelectual
- **Valor Estratégico**: Muy Alto
- **Enforceabilidad**: 92%
- **Ventaja Competitiva**: Significativa

### RECOMENDACIONES BASADAS EN IA

**Optimizaciones Prioritarias**:
1. **Redefinir Limitación de Responsabilidad** (Impacto: -45% riesgo)
2. **Clarificar Términos de Terminación** (Impacto: -32% disputas)
3. **Fortalecer Cláusulas de IP** (Impacto: +28% valor)

**Benchmarking Industrial**:
- Términos de pago: Por debajo del estándar (45 vs 30 días)
- Garantías: Superiores al promedio (+15%)
- Flexibilidad: Inferior al mercado (-22%)

### SIMULACIÓN DE ESCENARIOS
**Escenario Optimista** (Prob: 35%): Ejecución sin conflictos
**Escenario Base** (Prob: 45%): Renegociación menor requerida  
**Escenario Pesimista** (Prob: 20%): Disputa significativa

### ROADMAP DE IMPLEMENTACIÓN
**Fase 1** (Inmediata): Correcciones críticas
**Fase 2** (30 días): Optimizaciones estratégicas
**Fase 3** (90 días): Monitoreo y ajustes`
      }
    };

    // Simular delay de procesamiento
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
    
    const modelResponses = responses[model] || responses['gpt-4'];
    const templateKey = selectedTemplate || 'contract-analysis';
    
    return modelResponses[templateKey] || `## Respuesta de ${model.toUpperCase()}

Gracias por tu consulta. He analizado tu solicitud y aquí tienes mi respuesta profesional:

### Análisis Principal
${prompt.length > 100 ? 'He procesado tu consulta detallada' : 'He recibido tu consulta'} y puedo proporcionarte la siguiente orientación legal:

### Consideraciones Legales
1. **Marco Normativo**: Aplicable según jurisdicción
2. **Precedentes**: Revisar jurisprudencia reciente
3. **Riesgos**: Evaluar según contexto específico
4. **Recomendaciones**: Proceder con análisis detallado

### Próximos Pasos
Te sugiero profundizar en los aspectos específicos identificados y considerar consulta presencial para análisis exhaustivo.

*Esta es una simulación educativa. Para casos reales, consulta con un abogado especializado.*`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputText,
      timestamp: new Date().toLocaleTimeString(),
      model: selectedModel
    };

    setConversation(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInputText('');

    try {
      const aiResponse = await simulateAIResponse(inputText, selectedModel);
      
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString(),
        model: selectedModel
      };

      setConversation(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearConversation = () => {
    setConversation([]);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            🤖 Simulador de IA Legal
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Practica con diferentes modelos de IA y perfecciona tus prompts legales en un entorno seguro
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Configuración */}
          <div className="lg:col-span-1">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 sticky top-8`}>
              {/* Selección de Modelo */}
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Modelo de IA
                </h3>
                <div className="space-y-3">
                  {aiModels.map((model) => (
                    <label key={model.id} className="flex items-start cursor-pointer">
                      <input
                        type="radio"
                        name="aiModel"
                        value={model.id}
                        checked={selectedModel === model.id}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="mt-1 text-blue-600"
                      />
                      <div className="ml-3">
                        <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {model.name}
                        </div>
                        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {model.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Templates de Prompts */}
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Templates de Prompts
                </h3>
                <div className="space-y-2">
                  {promptTemplates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => handleTemplateSelect(template)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedTemplate === template.id
                          ? 'bg-blue-600 text-white'
                          : `${isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`
                      }`}
                    >
                      <div className="font-medium text-sm">
                        {template.title}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Acciones */}
              <div className="space-y-3">
                <button
                  onClick={clearConversation}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    isDark 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
                >
                  Limpiar Conversación
                </button>
              </div>
            </div>
          </div>

          {/* Área Principal - Chat */}
          <div className="lg:col-span-3">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg flex flex-col h-[700px]`}>
              {/* Chat Header */}
              <div className={`p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center`}>
                <div>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Conversación con {aiModels.find(m => m.id === selectedModel)?.name}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {conversation.length} mensajes en la conversación
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${isLoading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {isLoading ? 'Procesando...' : 'Listo'}
                  </span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {conversation.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🤖</div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      ¡Comienza tu práctica!
                    </h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} max-w-md mx-auto`}>
                      Selecciona un template de prompt o escribe tu propia consulta legal para comenzar a practicar con IA.
                    </p>
                  </div>
                )}

                {conversation.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-3xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-center mb-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex items-center space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            message.type === 'user' 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          }`}>
                            {message.type === 'user' ? 'TÚ' : 'IA'}
                          </div>
                          <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {message.timestamp} • {message.model.toUpperCase()}
                          </div>
                        </div>
                      </div>
                      <div className={`p-4 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : `${isDark ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-900'}`
                      }`}>
                        <div className="whitespace-pre-wrap">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-3xl">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold text-white mr-2">
                          IA
                        </div>
                        <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          Procesando... • {selectedModel.toUpperCase()}
                        </div>
                      </div>
                      <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            Analizando tu consulta...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className={`p-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Escribe tu prompt legal aquí... (o selecciona un template)"
                      className={`w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      rows="3"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      type="submit"
                      disabled={!inputText.trim() || isLoading}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isLoading ? 'Enviando...' : 'Enviar'}
                    </button>
                    <div className={`text-xs text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Enter + Shift<br/>para nueva línea
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISimulator;

