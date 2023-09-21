'use client'

import React, { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

const Cobe = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    let phi = 0
    let width = 600

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: -0.1,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [{ location: [21.18541, 106.07503], size: 0.04 }],
      onRender: (state) => {
        state.phi = phi
        phi += 0.005
        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = '1'
      }
    })

    return () => {
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', aspectRatio: 1 }}
    />
  )
}

export default Cobe
