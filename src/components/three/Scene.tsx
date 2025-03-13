"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import YCube from './YCube'
import { OrbitControls } from '@react-three/drei'
import DebugUI from './DebugUI'

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <YCube/>
      <OrbitControls/>
      <DebugUI/>
    </Canvas>
  )
}
