import {useControls} from "leva";

function App() {
  const {x, y, z} = useControls({
    x: {
      value: 1,
      min: 0,
      max: 100,
      step: 1
    },
    y: {
      value: 1,
      min: 0,
      max: 100,
      step: 1
    },
    z: {
      value: 1,
      min: 0,
      max: 100,
      step: 1
    },
  })
  return (
    <>
      <mesh scale={[x, y, z]} >
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  )
}

export default App
