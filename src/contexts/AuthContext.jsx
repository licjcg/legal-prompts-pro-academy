import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('lpp_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('lpp_user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user data
      const userData = {
        id: '1',
        email,
        name: 'Juan Carlos Gómez',
        avatar: '/api/placeholder/100/100',
        subscription: 'premium',
        progress: {
          overall: 67,
          currentModule: 'Técnicas Avanzadas',
          completedModules: 3,
          totalModules: 6,
          streak: 15,
          ranking: 23,
          totalStudents: 1247
        },
        achievements: [
          { id: 1, name: 'Primer Prompt', icon: '🎯', earned: true },
          { id: 2, name: 'Racha de 7 días', icon: '🔥', earned: true },
          { id: 3, name: 'Experto en Contratos', icon: '📄', earned: true },
          { id: 4, name: 'Maestro de IA', icon: '🤖', earned: false },
          { id: 5, name: 'Líder Comunitario', icon: '👑', earned: false },
          { id: 6, name: 'Certificación Completa', icon: '🏆', earned: false }
        ],
        enrolledAt: '2024-01-15',
        lastActive: new Date().toISOString()
      }
      
      setUser(userData)
      localStorage.setItem('lpp_user', JSON.stringify(userData))
      
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const register = async (name, email, password) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const userData = {
        id: Date.now().toString(),
        email,
        name,
        avatar: '/api/placeholder/100/100',
        subscription: 'trial',
        progress: {
          overall: 0,
          currentModule: 'Fundamentos de IA Legal',
          completedModules: 0,
          totalModules: 6,
          streak: 0,
          ranking: null,
          totalStudents: 1247
        },
        achievements: [],
        enrolledAt: new Date().toISOString(),
        lastActive: new Date().toISOString()
      }
      
      setUser(userData)
      localStorage.setItem('lpp_user', JSON.stringify(userData))
      
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('lpp_user')
  }

  const updateProgress = (moduleId, progress) => {
    if (!user) return
    
    const updatedUser = {
      ...user,
      progress: {
        ...user.progress,
        overall: Math.min(100, user.progress.overall + progress),
        completedModules: user.progress.completedModules + (progress === 100 ? 1 : 0)
      },
      lastActive: new Date().toISOString()
    }
    
    setUser(updatedUser)
    localStorage.setItem('lpp_user', JSON.stringify(updatedUser))
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProgress
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

