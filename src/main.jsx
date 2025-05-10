import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import {Perf} from "r3f-perf";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas camera={{
      position: [0, 1, 4]
    }}>
      <OrbitControls />
      <Perf position="top-left" />
      <Stage adjustCamera={false}>
        <App />
      </Stage>
    </Canvas>
  </StrictMode>,
)
