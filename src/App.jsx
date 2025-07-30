import React, { useState, useEffect } from 'react'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Simulate component loaded
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header dengan animasi slide down */}
      <header className={`py-6 px-4 ${isLoaded ? 'animate-slide-down' : 'opacity-0'}`}>
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-indigo-600 hover-lift gpu-accelerated">
            ⚡ FastReact
          </div>
          <div className="space-x-6">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 animate-smooth">Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 animate-smooth">About</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 animate-smooth">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl px-4 py-16 mx-auto">
        <section className={`text-center ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="mb-6 text-5xl font-bold text-gray-800 md:text-7xl animate-float">
            Super Fast
            <span className="block text-indigo-600 animate-pulse-soft">React Static</span>
          </h1>
          
          <p className="max-w-2xl mx-auto mb-8 text-xl leading-relaxed text-gray-600">
            Website statis dengan React dan Tailwind yang super cepat, animasi smooth, 
            dan ringan tanpa overhead framework yang tidak perlu.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row">
            <button 
              onClick={() => setCount(count + 1)}
              className="px-8 py-3 font-semibold text-white transform bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover-lift animate-smooth gpu-accelerated hover:shadow-xl active:scale-95"
            >
              Click Me! ({count})
            </button>
            
            <button className="px-8 py-3 font-semibold text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white animate-smooth hover-lift gpu-accelerated">
              Learn More
            </button>
          </div>

          {/* Animated Cards */}
          <div className="grid gap-8 mt-16 md:grid-cols-3">
            {[
              { title: "⚡ Super Fast", desc: "Build time minimal dengan Vite", delay: "0s" },
              { title: "🎨 Smooth Animations", desc: "60fps dengan GPU acceleration", delay: "0.2s" },
              { title: "📦 Lightweight", desc: "Bundle size yang sangat kecil", delay: "0.4s" }
            ].map((card, index) => (
              <div 
                key={index}
                className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl 
                           animate-smooth hover-lift gpu-accelerated
                           ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: card.delay }}
              >
                <h3 className="mb-3 text-2xl font-bold text-gray-800">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Performance Stats */}
          <div className={`mt-16 p-8 bg-white rounded-2xl shadow-lg ${isLoaded ? 'animate-bounce-soft' : 'opacity-0'}`}>
            <h2 className="mb-6 text-3xl font-bold text-gray-800">Performance Metrics</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { label: "First Paint", value: "< 100ms", icon: "🎯" },
                { label: "Bundle Size", value: "< 50KB", icon: "📦" },
                { label: "Lighthouse", value: "100/100", icon: "🚀" },
                { label: "Animation", value: "60 FPS", icon: "✨" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-3xl animate-float">{stat.icon}</div>
                  <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`mt-16 py-8 text-center text-gray-600 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
        <p>Built with React + Vite + Tailwind CSS | Deployed on Vercel</p>
      </footer>
    </div>
  )
}

export default App