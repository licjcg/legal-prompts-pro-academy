import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Dashboard = () => {
  const { user } = useAuth();
  const { isDark } = useTheme();
  const [progress, setProgress] = useState({
    overall: 0,
    currentModule: 1,
    completedLessons: 0,
    totalLessons: 50,
    studyStreak: 0,
    totalHours: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // Simular carga de datos del usuario
    setProgress({
      overall: 35,
      currentModule: 2,
      completedLessons: 18,
      totalLessons: 50,
      studyStreak: 7,
      totalHours: 24.5
    });

    setRecentActivity([
      { id: 1, type: 'lesson', title: 'Técnicas Avanzadas de Prompting', date: 'Hoy', duration: '45 min' },
      { id: 2, type: 'quiz', title: 'Evaluación Módulo 1', date: 'Ayer', score: '95%' },
      { id: 3, type: 'practice', title: 'Simulador IA - Análisis de Contrato', date: 'Ayer', duration: '30 min' },
      { id: 4, type: 'community', title: 'Participación en Foro', date: '2 días', activity: '3 respuestas' }
    ]);

    setAchievements([
      { id: 1, title: 'Primer Paso', description: 'Completaste tu primera lección', earned: true },
      { id: 2, title: 'Constancia', description: 'Racha de 7 días consecutivos', earned: true },
      { id: 3, title: 'Prompt Master', description: 'Creaste 25 prompts efectivos', earned: false },
      { id: 4, title: 'Analista', description: 'Analizaste 10 casos complejos', earned: false }
    ]);
  }, []);

  const modules = [
    {
      id: 1,
      title: 'Fundamentos de IA Legal',
      progress: 100,
      lessons: 8,
      duration: '15h',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Ingeniería de Prompts',
      progress: 60,
      lessons: 12,
      duration: '20h',
      status: 'current'
    },
    {
      id: 3,
      title: 'Aplicaciones Especializadas',
      progress: 0,
      lessons: 15,
      duration: '25h',
      status: 'locked'
    },
    {
      id: 4,
      title: 'Desarrollo de GPTs',
      progress: 0,
      lessons: 10,
      duration: '20h',
      status: 'locked'
    },
    {
      id: 5,
      title: 'Ética y Responsabilidad',
      progress: 0,
      lessons: 8,
      duration: '15h',
      status: 'locked'
    },
    {
      id: 6,
      title: 'Innovación y Futuro',
      progress: 0,
      lessons: 5,
      duration: '10h',
      status: 'locked'
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Header */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ¡Bienvenido, {user?.name}!
              </h1>
              <p className={`mt-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Continúa tu transformación en IA Legal
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {progress.studyStreak}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Días de racha
                </div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                  {progress.totalHours}h
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Tiempo total
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progreso General */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Tu Progreso General
              </h2>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Progreso del Curso
                  </span>
                  <span className={`text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {progress.overall}%
                  </span>
                </div>
                <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3`}>
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progress.overall}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {progress.completedLessons}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Lecciones completadas
                  </div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {progress.currentModule}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Módulo actual
                  </div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {6 - progress.currentModule + 1}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Módulos restantes
                  </div>
                </div>
              </div>
            </div>

            {/* Continuar Estudiando */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Continuar Estudiando
              </h2>
              <div className={`${isDark ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg p-4 border-l-4 border-blue-500`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Módulo 2: Ingeniería de Prompts
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mt-1`}>
                      Lección 8: Técnicas Avanzadas de Chain-of-Thought
                    </p>
                    <div className="flex items-center mt-2">
                      <div className={`w-32 ${isDark ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2 mr-3`}>
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: '60%' }}
                        ></div>
                      </div>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>60%</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Continuar
                  </button>
                </div>
              </div>
            </div>

            {/* Módulos del Curso */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Módulos del Curso
              </h2>
              <div className="space-y-4">
                {modules.map((module) => (
                  <div 
                    key={module.id}
                    className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 ${
                      module.status === 'locked' ? 'opacity-50' : 'hover:shadow-md'
                    } transition-all cursor-pointer`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                            module.status === 'completed' 
                              ? 'bg-green-500 text-white' 
                              : module.status === 'current'
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-400 text-white'
                          }`}>
                            {module.status === 'completed' ? '✓' : module.id}
                          </div>
                          <div>
                            <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {module.title}
                            </h3>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                              {module.lessons} lecciones • {module.duration}
                            </p>
                          </div>
                        </div>
                        {module.status !== 'locked' && (
                          <div className="mt-3 ml-11">
                            <div className={`w-full ${isDark ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                              <div 
                                className={`h-2 rounded-full ${
                                  module.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                                }`}
                                style={{ width: `${module.progress}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                              <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                {module.progress}% completado
                              </span>
                              {module.status === 'current' && (
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                  En progreso
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      {module.status === 'locked' && (
                        <div className="text-gray-400">
                          🔒
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Accesos Rápidos */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Accesos Rápidos
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all">
                  🤖 Simulador de IA
                </button>
                <button className={`w-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} p-3 rounded-lg font-medium transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  📚 Biblioteca de Prompts
                </button>
                <button className={`w-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} p-3 rounded-lg font-medium transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  👥 Comunidad
                </button>
                <button className={`w-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} p-3 rounded-lg font-medium transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  📊 Mi Progreso
                </button>
              </div>
            </div>

            {/* Actividad Reciente */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Actividad Reciente
              </h3>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} p-3 rounded-lg`}>
                    <div className="flex items-start">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                        activity.type === 'lesson' ? 'bg-blue-500' :
                        activity.type === 'quiz' ? 'bg-green-500' :
                        activity.type === 'practice' ? 'bg-purple-500' :
                        'bg-orange-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {activity.title}
                        </p>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                          {activity.date} • {activity.duration || activity.score || activity.activity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logros */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Logros Recientes
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`p-3 rounded-lg border ${
                      achievement.earned 
                        ? `${isDark ? 'bg-yellow-900/20 border-yellow-500/30' : 'bg-yellow-50 border-yellow-200'}` 
                        : `${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`text-lg mr-3 ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                        🏆
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${
                          achievement.earned 
                            ? `${isDark ? 'text-yellow-400' : 'text-yellow-800'}` 
                            : `${isDark ? 'text-gray-400' : 'text-gray-500'}`
                        }`}>
                          {achievement.title}
                        </p>
                        <p className={`text-xs ${
                          achievement.earned 
                            ? `${isDark ? 'text-yellow-300' : 'text-yellow-700'}` 
                            : `${isDark ? 'text-gray-500' : 'text-gray-400'}`
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

