import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const CourseModule = ({ module, onStartLesson }) => {
  const { isDark } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const lessons = [
    {
      id: 1,
      title: 'Introducción a la IA en el Derecho',
      duration: '15 min',
      type: 'video',
      completed: true
    },
    {
      id: 2,
      title: 'Conceptos Fundamentales de Machine Learning',
      duration: '20 min',
      type: 'video',
      completed: true
    },
    {
      id: 3,
      title: 'Casos de Uso en la Práctica Legal',
      duration: '25 min',
      type: 'interactive',
      completed: false
    },
    {
      id: 4,
      title: 'Evaluación del Módulo',
      duration: '10 min',
      type: 'quiz',
      completed: false
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return '🎥';
      case 'interactive': return '🎯';
      case 'quiz': return '📝';
      default: return '📚';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'bg-blue-100 text-blue-800';
      case 'interactive': return 'bg-green-100 text-green-800';
      case 'quiz': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
      {/* Module Header */}
      <div 
        className={`p-6 cursor-pointer ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
              module.status === 'completed' 
                ? 'bg-green-500' 
                : module.status === 'current'
                ? 'bg-blue-500'
                : 'bg-gray-400'
            }`}>
              {module.status === 'completed' ? '✓' : module.id}
            </div>
            <div>
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {module.title}
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {module.lessons} lecciones • {module.duration}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`text-sm px-3 py-1 rounded-full ${
              module.status === 'completed' 
                ? 'bg-green-100 text-green-800' 
                : module.status === 'current'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {module.progress}% completado
            </div>
            <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
              ⬇️
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                module.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
              }`}
              style={{ width: `${module.progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Module Content */}
      {isExpanded && (
        <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="p-6">
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Lecciones del Módulo
            </h4>
            <div className="space-y-3">
              {lessons.map((lesson) => (
                <div 
                  key={lesson.id}
                  className={`p-4 rounded-lg border ${
                    lesson.completed 
                      ? `${isDark ? 'bg-green-900/20 border-green-500/30' : 'bg-green-50 border-green-200'}` 
                      : `${isDark ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`
                  } transition-colors cursor-pointer`}
                  onClick={() => onStartLesson && onStartLesson(lesson)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        lesson.completed 
                          ? 'bg-green-500 text-white' 
                          : `${isDark ? 'bg-gray-600 text-gray-300' : 'bg-gray-300 text-gray-600'}`
                      }`}>
                        {lesson.completed ? '✓' : getTypeIcon(lesson.type)}
                      </div>
                      <div>
                        <h5 className={`font-medium ${
                          lesson.completed 
                            ? `${isDark ? 'text-green-400' : 'text-green-800'}` 
                            : `${isDark ? 'text-white' : 'text-gray-900'}`
                        }`}>
                          {lesson.title}
                        </h5>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`text-sm ${
                            lesson.completed 
                              ? `${isDark ? 'text-green-300' : 'text-green-700'}` 
                              : `${isDark ? 'text-gray-400' : 'text-gray-500'}`
                          }`}>
                            {lesson.duration}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(lesson.type)}`}>
                            {lesson.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {lesson.completed && (
                        <span className={`text-sm ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                          Completada
                        </span>
                      )}
                      <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        lesson.completed
                          ? `${isDark ? 'bg-gray-600 hover:bg-gray-500 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}>
                        {lesson.completed ? 'Revisar' : 'Comenzar'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseModule;

