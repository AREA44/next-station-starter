'use client'

import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

export default function Cobe() {
  const canvasRef = useRef()

  useEffect(() => {
    let phi = 0
    let width = 600

    // Full API: https://cobe.vercel.app/docs/api
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
        phi += 0.01
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
