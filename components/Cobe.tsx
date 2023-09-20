'use client'

import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

export default function Cobe() {
  const canvasRef = useRef()

  useEffect(() => {
    let phi = 0
    let width = 0
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1.6,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [20.23, -15.44], size: 0.4 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.01
        state.width = width * 2
        state.height = width * 2
      },
    })
    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
    />
  )
}
