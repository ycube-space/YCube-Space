"use client"

import { useControls } from 'leva'

export default function DebugUI() {
  const { color, position } = useControls({
    color: '#ff0000',
    position: { x: { value: 0, min: -5, max: 5 } , y: { value: 0, min: -5, max: 5 }, z: { value: 0, min: -5, max: 5 }},
  })

  return (
    <></>
  )
}
