import React, { useEffect, useRef } from 'react'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    // Set canvas size properly
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      ctx.scale(dpr, dpr)
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
    }

    // Initialize canvas size first
    resizeCanvas()

    // Animation parameters
    let time = 0
    const gridSize = 8
    const points = []

    // Create grid points
    const createPoints = () => {
      points.length = 0
      for (let x = 0; x <= gridSize; x++) {
        for (let y = 0; y <= gridSize; y++) {
          points.push({
            x: (x / gridSize) * canvas.offsetWidth,
            y: (y / gridSize) * canvas.offsetHeight,
            baseX: (x / gridSize) * canvas.offsetWidth,
            baseY: (y / gridSize) * canvas.offsetHeight,
            offsetX: (Math.random() - 0.5) * 100,
            offsetY: (Math.random() - 0.5) * 100,
            phase: Math.random() * Math.PI * 2
          })
        }
      }
    }

    createPoints()

    const animate = () => {
      time += 0.01
      
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      
      ctx.clearRect(0, 0, width, height)

      // Background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, width, height)
      bgGradient.addColorStop(0, '#4429bc')
      bgGradient.addColorStop(1, '#fcfbff')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, width, height)

      // Update points
      points.forEach((point, index) => {
        point.x = point.baseX + Math.sin(time + point.phase) * point.offsetX * 0.3
        point.y = point.baseY + Math.cos(time * 0.8 + point.phase) * point.offsetY * 0.3
      })

      // Draw animated mesh
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          const i = x * (gridSize + 1) + y
          
          if (x < gridSize && y < gridSize) {
            const p1 = points[i]
            const p2 = points[i + 1]
            const p3 = points[i + gridSize + 1]
            const p4 = points[i + gridSize + 2]

            if (p1 && p2 && p3 && p4) {
              // Create gradient for this quad
              const centerX = (p1.x + p2.x + p3.x + p4.x) / 4
              const centerY = (p1.y + p2.y + p3.y + p4.y) / 4
              
              const gradient = ctx.createRadialGradient(
                centerX, centerY, 0,
                centerX, centerY, 100
              )

              const alpha = 0.1 + Math.sin(time + x + y) * 0.05
              gradient.addColorStop(0, `rgba(168, 85, 247, ${alpha})`)
              gradient.addColorStop(1, `rgba(68, 41, 188, ${alpha * 0.5})`)

              ctx.fillStyle = gradient
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.bezierCurveTo(
                p1.x + 20, p1.y,
                p2.x - 20, p2.y,
                p2.x, p2.y
              )
              ctx.bezierCurveTo(
                p2.x, p2.y + 20,
                p4.x, p4.y - 20,
                p4.x, p4.y
              )
              ctx.bezierCurveTo(
                p4.x - 20, p4.y,
                p3.x + 20, p3.y,
                p3.x, p3.y
              )
              ctx.bezierCurveTo(
                p3.x, p3.y - 20,
                p1.x, p1.y + 20,
                p1.x, p1.y
              )
              ctx.closePath()
              ctx.fill()
            }
          }
        }
      }

      // Add floating orbs
      for (let i = 0; i < 15; i++) {
        const orbX = width * 0.5 + Math.sin(time * 0.5 + i) * width * 0.3
        const orbY = height * 0.5 + Math.cos(time * 0.3 + i) * height * 0.3
        const orbSize = 20 + Math.sin(time + i) * 10
        const orbAlpha = 0.1 + Math.sin(time + i) * 0.05

        const orbGradient = ctx.createRadialGradient(
          orbX, orbY, 0,
          orbX, orbY, orbSize
        )
        
        orbGradient.addColorStop(0, `rgba(168, 85, 247, ${orbAlpha})`)
        orbGradient.addColorStop(1, `rgba(168, 85, 247, 0)`)

        ctx.fillStyle = orbGradient
        ctx.beginPath()
        ctx.arc(orbX, orbY, orbSize, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      createPoints()
    }

    // Start animation
    animate()

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="w-full h-screen overflow-hidden bg-gradient-to-br from-purple-700 to-purple-50">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{
          width: '100vw',
          height: '100vh',
          display: 'block'
        }}
      />
    </div>
  )
}

export default App