// Admin Dashboard for Content Management
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Upload, 
  Video, 
  FileText, 
  Users, 
  BarChart3,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download
} from 'lucide-react'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('content')
  const [modules, setModules] = useState([])
  const [students, setStudents] = useState([])
  const [analytics, setAnalytics] = useState({})

  const tabs = [
    { id: 'content', label: 'Contenido', icon: FileText },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'students', label: 'Estudiantes', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Configuración', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <p className="text-muted-foreground mt-2">Legal Prompts Pro Academy</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <div className="w-64 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'content' && <ContentManager />}
            {activeTab === 'videos' && <VideoManager />}
            {activeTab === 'students' && <StudentManager />}
            {activeTab === 'analytics' && <AnalyticsView />}
            {activeTab === 'settings' && <SettingsPanel />}
          </div>
        </div>
      </div>
    </div>
  )
}

// Content Manager Component
const ContentManager = () => {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: 'Fundamentos de IA Legal',
      lessons: 12,
      duration: '18 horas',
      status: 'published',
      progress: 100
    },
    {
      id: 2,
      title: 'Ingeniería de Prompts Avanzada',
      lessons: 15,
      duration: '22 horas',
      status: 'draft',
      progress: 60
    }
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gestión de Contenido</h2>
        <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Nuevo Módulo</span>
        </button>
      </div>

      <div className="grid gap-6">
        {modules.map((module) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <div className="flex space-x-4 text-sm text-muted-foreground mb-4">
                  <span>{module.lessons} lecciones</span>
                  <span>{module.duration}</span>
                  <span className={`px-2 py-1 rounded ${
                    module.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {module.status === 'published' ? 'Publicado' : 'Borrador'}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-4">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${module.progress}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Progreso: {module.progress}% completado
                </p>
              </div>

              <div className="flex space-x-2">
                <button className="p-2 text-muted-foreground hover:text-foreground">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Video Manager Component
const VideoManager = () => {
  const [videos, setVideos] = useState([])
  const [uploading, setUploading] = useState(false)

  const handleVideoUpload = (event) => {
    const files = Array.from(event.target.files)
    setUploading(true)
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false)
      // Add uploaded videos to state
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gestión de Videos</h2>
        <label className="bg-primary text-white px-4 py-2 rounded-lg flex items-center space-x-2 cursor-pointer">
          <Upload className="w-4 h-4" />
          <span>Subir Videos</span>
          <input
            type="file"
            multiple
            accept="video/*"
            onChange={handleVideoUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
        <Video className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Sube tus videos aquí</h3>
        <p className="text-muted-foreground mb-4">
          Formatos soportados: MP4, MOV, AVI (máximo 500MB por video)
        </p>
        <label className="bg-muted text-foreground px-4 py-2 rounded-lg cursor-pointer hover:bg-muted/80">
          Seleccionar archivos
          <input
            type="file"
            multiple
            accept="video/*"
            onChange={handleVideoUpload}
            className="hidden"
          />
        </label>
      </div>

      {uploading && (
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            <span>Subiendo videos...</span>
          </div>
        </div>
      )}

      {/* Video List */}
      <div className="space-y-4">
        {/* Video items would be mapped here */}
      </div>
    </div>
  )
}

// Student Manager Component
const StudentManager = () => {
  const [students] = useState([
    {
      id: 1,
      name: 'María González',
      email: 'maria@email.com',
      enrolled: '2025-01-15',
      progress: 75,
      lastActive: '2025-01-16'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      email: 'carlos@email.com',
      enrolled: '2025-01-14',
      progress: 45,
      lastActive: '2025-01-16'
    }
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gestión de Estudiantes</h2>
        <button className="bg-primary text-white px-4 py-2 rounded-lg">
          Exportar Lista
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-4">Estudiante</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Inscripción</th>
              <th className="text-left p-4">Progreso</th>
              <th className="text-left p-4">Última actividad</th>
              <th className="text-left p-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t border-border">
                <td className="p-4 font-medium">{student.name}</td>
                <td className="p-4 text-muted-foreground">{student.email}</td>
                <td className="p-4 text-muted-foreground">{student.enrolled}</td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${student.progress}%` }}
                      />
                    </div>
                    <span className="text-sm">{student.progress}%</span>
                  </div>
                </td>
                <td className="p-4 text-muted-foreground">{student.lastActive}</td>
                <td className="p-4">
                  <button className="text-primary hover:text-accent">
                    Ver perfil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Analytics View Component
const AnalyticsView = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Estudiantes Activos</h3>
          <p className="text-3xl font-bold text-primary">127</p>
          <p className="text-sm text-green-600">+12% este mes</p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Ingresos</h3>
          <p className="text-3xl font-bold text-primary">$2,485,000</p>
          <p className="text-sm text-green-600">+25% este mes</p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Tasa de Finalización</h3>
          <p className="text-3xl font-bold text-primary">78%</p>
          <p className="text-sm text-green-600">+5% este mes</p>
        </div>
      </div>
    </div>
  )
}

// Settings Panel Component
const SettingsPanel = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Configuración</h2>
      
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Configuración de MercadoPago</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Access Token</label>
            <input
              type="password"
              className="w-full p-3 border border-border rounded-lg"
              placeholder="APP_USR-xxxxx-xxxxxx"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Public Key</label>
            <input
              type="text"
              className="w-full p-3 border border-border rounded-lg"
              placeholder="APP_USR-xxxxx-xxxxxx"
            />
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Guardar Configuración
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

