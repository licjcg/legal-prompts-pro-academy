import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Components
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import AISimulator from './components/AISimulator'
import CourseModule from './components/CourseModule'
import Community from './components/Community'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import TermsConditions from './components/TermsConditions'
import PrivacyPolicy from './components/PrivacyPolicy'

// Context
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth()
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    )
  }
  
  return user ? children : <Navigate to="/login" />
}

// Main App Component
function AppContent() {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse-glow"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.h1
            className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Legal Prompts Pro
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Revolucionando la educación legal con IA
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LandingPage />} />
            <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
            
            {/* Legal Pages */}
            <Route path="/terminos-condiciones" element={<TermsConditions />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/simulator" element={
              <ProtectedRoute>
                <AISimulator />
              </ProtectedRoute>
            } />
            <Route path="/course/:moduleId" element={
              <ProtectedRoute>
                <CourseModule />
              </ProtectedRoute>
            } />
            <Route path="/community" element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
