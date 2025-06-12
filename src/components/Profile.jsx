import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  TrendingUp,
  Settings,
  LogOut,
  Edit3,
  Save,
  X
} from 'lucide-react'

const Profile = () => {
  const { user, updateProfile, logout } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    location: user?.location || '',
    bio: user?.bio || '',
    specialization: user?.specialization || ''
  })

  const [stats] = useState({
    coursesCompleted: 3,
    totalHours: 45,
    certificates: 2,
    streak: 12,
    progress: 68
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = async () => {
    try {
      await updateProfile(formData)
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      location: user?.location || '',
      bio: user?.bio || '',
      specialization: user?.specialization || ''
    })
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Mi Perfil
          </h1>
          <p className="text-muted-foreground text-lg">
            Gestiona tu información personal y revisa tu progreso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Información Personal
                </h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                    Editar
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-500 rounded-xl transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      Guardar
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Cancelar
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {/* Avatar and Basic Info */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="text-2xl font-bold bg-transparent border-b-2 border-primary/30 focus:border-primary outline-none w-full"
                        placeholder="Tu nombre"
                      />
                    ) : (
                      <h3 className="text-2xl font-bold text-foreground">
                        {user?.name || 'Usuario'}
                      </h3>
                    )}
                    <p className="text-muted-foreground">
                      Especialista en IA Legal
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="flex-1 bg-transparent border-b border-primary/30 focus:border-primary outline-none"
                        placeholder="tu@email.com"
                      />
                    ) : (
                      <span className="text-foreground">{user?.email}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 bg-transparent border-b border-primary/30 focus:border-primary outline-none"
                        placeholder="+54 9 11 1234-5678"
                      />
                    ) : (
                      <span className="text-foreground">{formData.phone || 'No especificado'}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    {isEditing ? (
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="flex-1 bg-transparent border-b border-primary/30 focus:border-primary outline-none"
                        placeholder="Buenos Aires, Argentina"
                      />
                    ) : (
                      <span className="text-foreground">{formData.location || 'No especificado'}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-foreground">
                      Miembro desde {new Date().toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Biografía
                  </label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-background/50 border border-primary/30 focus:border-primary outline-none rounded-xl p-3 resize-none"
                      placeholder="Cuéntanos sobre tu experiencia profesional..."
                    />
                  ) : (
                    <p className="text-muted-foreground">
                      {formData.bio || 'No hay biografía disponible.'}
                    </p>
                  )}
                </div>

                {/* Specialization */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Especialización
                  </label>
                  {isEditing ? (
                    <select
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="w-full bg-background/50 border border-primary/30 focus:border-primary outline-none rounded-xl p-3"
                    >
                      <option value="">Selecciona una especialización</option>
                      <option value="civil">Derecho Civil</option>
                      <option value="penal">Derecho Penal</option>
                      <option value="laboral">Derecho Laboral</option>
                      <option value="comercial">Derecho Comercial</option>
                      <option value="administrativo">Derecho Administrativo</option>
                      <option value="tributario">Derecho Tributario</option>
                      <option value="internacional">Derecho Internacional</option>
                    </select>
                  ) : (
                    <p className="text-muted-foreground">
                      {formData.specialization || 'No especificado'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats and Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Progress Stats */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Mi Progreso
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Cursos</span>
                  </div>
                  <span className="font-bold text-foreground">{stats.coursesCompleted}/6</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Horas</span>
                  </div>
                  <span className="font-bold text-foreground">{stats.totalHours}h</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Certificados</span>
                  </div>
                  <span className="font-bold text-foreground">{stats.certificates}</span>
                </div>

                <div className="pt-4 border-t border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Progreso General</span>
                    <span className="text-sm font-bold text-primary">{stats.progress}%</span>
                  </div>
                  <div className="w-full bg-primary/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                      style={{ width: `${stats.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Logros Recientes
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Primer Módulo Completado
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Hace 2 días
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Racha de 12 días
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ¡Sigue así!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Acciones
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors text-left">
                  <Settings className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Configuración</span>
                </button>

                <button 
                  onClick={logout}
                  className="w-full flex items-center gap-3 p-3 bg-red-500/10 hover:bg-red-500/20 rounded-xl transition-colors text-left"
                >
                  <LogOut className="w-5 h-5 text-red-500" />
                  <span className="text-red-500">Cerrar Sesión</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Profile

