
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stage, TorusKnot } from '@react-three/drei'
import { Model } from './Model'
export default function Viewer() {
  const ref = useRef()
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={0}  environment="dawn">
        false
          <Model />
        false
        </Stage>
      </Suspense>
      
      <OrbitControls ref={ref} minDistance={1}
      maxDistance={10}/>
    </Canvas>
  )
}