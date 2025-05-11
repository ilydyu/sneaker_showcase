import {useGLTF} from "@react-three/drei";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";


const SneakerModal = () => {
	 const model = useGLTF('./sneaker-draco.glb')
	 const modelRef = useRef(null)
	 const amplitude = 0.02
	 const speed = 1

	 useFrame(({clock}) => {
		 modelRef.current.position.y = Math.sin(clock.getElapsedTime() * speed) * amplitude + amplitude
		 modelRef.current.rotation.x = 1.5 + Math.cos(clock.getElapsedTime() * speed) * 0.05
	 })

	 return <primitive ref={modelRef} object={model.scene} rotation={[1.5, Math.PI * -0.4, 1.5]} />
 }

 export default SneakerModal