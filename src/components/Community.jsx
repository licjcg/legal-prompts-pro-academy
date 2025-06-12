import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Community = () => {
  const { user } = useAuth();
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('discussions');
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    // Simular carga de posts de la comunidad
    setPosts([
      {
        id: 1,
        author: 'María González',
        avatar: '👩‍💼',
        title: '¿Cómo optimizar prompts para análisis de contratos?',
        content: 'He estado experimentando con diferentes estructuras de prompts para análisis contractual. ¿Alguien ha encontrado patrones que funcionen especialmente bien?',
        timestamp: '2 horas',
        likes: 12,
        replies: 5,
        tags: ['contratos', 'análisis', 'prompts'],
        category: 'Técnicas'
      },
      {
        id: 2,
        author: 'Carlos Mendoza',
        avatar: '👨‍💻',
        title: 'Caso de éxito: Reducí 70% el tiempo en due diligence',
        content: 'Quería compartir mi experiencia implementando IA en procesos de due diligence. Usando la metodología INFUSE logré resultados increíbles...',
        timestamp: '5 horas',
        likes: 28,
        replies: 12,
        tags: ['due-diligence', 'caso-éxito', 'INFUSE'],
        category: 'Casos de Éxito'
      },
      {
        id: 3,
        author: 'Ana Rodríguez',
        avatar: '👩‍⚖️',
        title: 'Consideraciones éticas en IA legal',
        content: 'Estoy trabajando en un protocolo interno para uso ético de IA. ¿Qué aspectos consideran más importantes para mantener la responsabilidad profesional?',
        timestamp: '1 día',
        likes: 15,
        replies: 8,
        tags: ['ética', 'responsabilidad', 'protocolo'],
        category: 'Ética'
      },
      {
        id: 4,
        author: 'Roberto Silva',
        avatar: '👨‍💼',
        title: 'Integración con software existente',
        content: 'Para quienes ya tienen sistemas de gestión, ¿cómo han integrado las herramientas de IA sin disrumpir los workflows actuales?',
        timestamp: '2 días',
        likes: 9,
        replies: 6,
        tags: ['integración', 'software', 'workflow'],
        category: 'Implementación'
      }
    ]);
  }, []);

  const categories = [
    { id: 'discussions', name: 'Discusiones', icon: '💬', count: 45 },
    { id: 'success-stories', name: 'Casos de Éxito', icon: '🏆', count: 12 },
    { id: 'qa', name: 'Preguntas y Respuestas', icon: '❓', count: 28 },
    { id: 'resources', name: 'Recursos Compartidos', icon: '📚', count: 15 },
    { id: 'networking', name: 'Networking', icon: '🤝', count: 8 }
  ];

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      author: user?.name || 'Usuario',
      avatar: '👤',
      title: newPost.length > 50 ? newPost.substring(0, 50) + '...' : newPost,
      content: newPost,
      timestamp: 'Ahora',
      likes: 0,
      replies: 0,
      tags: ['nuevo'],
      category: 'Discusiones'
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            👥 Comunidad Legal Prompts Pro
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Conecta con otros profesionales, comparte experiencias y aprende de la comunidad más avanzada en IA legal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 sticky top-8`}>
              {/* User Profile */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-3">
                  👤
                </div>
                <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {user?.name || 'Usuario'}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Miembro desde {user?.joinDate || 'Enero 2024'}
                </p>
                <div className="flex justify-center space-x-4 mt-3 text-sm">
                  <div className="text-center">
                    <div className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>15</div>
                    <div className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Posts</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>42</div>
                    <div className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Likes</div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Categorías
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activeTab === category.id
                          ? 'bg-blue-600 text-white'
                          : `${isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span>{category.icon}</span>
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activeTab === category.id
                            ? 'bg-blue-500 text-white'
                            : `${isDark ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-600'}`
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className={`${isDark ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg p-4`}>
                <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Estadísticas de la Comunidad
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Miembros activos</span>
                    <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Posts esta semana</span>
                    <span className={`font-semibold ${isDark ? 'text-green-400' : 'text-green-600'}`}>89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Respuestas promedio</span>
                    <span className={`font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>6.2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* New Post Form */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Compartir con la Comunidad
              </h3>
              <form onSubmit={handleSubmitPost}>
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="¿Qué quieres compartir con la comunidad? Comparte tu experiencia, haz una pregunta, o inicia una discusión..."
                  className={`w-full p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  rows="4"
                />
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className={`px-3 py-1 text-sm rounded-full border ${
                        isDark 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                          : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      #pregunta
                    </button>
                    <button
                      type="button"
                      className={`px-3 py-1 text-sm rounded-full border ${
                        isDark 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                          : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      #experiencia
                    </button>
                    <button
                      type="button"
                      className={`px-3 py-1 text-sm rounded-full border ${
                        isDark 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                          : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      #ayuda
                    </button>
                  </div>
                  <button
                    type="submit"
                    disabled={!newPost.trim()}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Publicar
                  </button>
                </div>
              </form>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-lg">
                        {post.avatar}
                      </div>
                      <div>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {post.author}
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {post.timestamp} • {post.category}
                        </p>
                      </div>
                    </div>
                    <button className={`text-sm ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
                      ⋯
                    </button>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {post.title}
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                      {post.content}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs rounded-full ${
                          isDark 
                            ? 'bg-blue-900/30 text-blue-400' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-6">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-2 ${
                          isDark 
                            ? 'text-gray-400 hover:text-red-400' 
                            : 'text-gray-500 hover:text-red-500'
                        } transition-colors`}
                      >
                        <span>❤️</span>
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className={`flex items-center space-x-2 ${
                        isDark 
                          ? 'text-gray-400 hover:text-blue-400' 
                          : 'text-gray-500 hover:text-blue-500'
                      } transition-colors`}>
                        <span>💬</span>
                        <span className="text-sm">{post.replies}</span>
                      </button>
                      <button className={`flex items-center space-x-2 ${
                        isDark 
                          ? 'text-gray-400 hover:text-green-400' 
                          : 'text-gray-500 hover:text-green-500'
                      } transition-colors`}>
                        <span>🔄</span>
                        <span className="text-sm">Compartir</span>
                      </button>
                    </div>
                    <button className={`text-sm font-medium ${
                      isDark 
                        ? 'text-blue-400 hover:text-blue-300' 
                        : 'text-blue-600 hover:text-blue-700'
                    } transition-colors`}>
                      Ver conversación →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <button className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}>
                Cargar más publicaciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

