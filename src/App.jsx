import SneakerModal from "./SneakerModal.jsx";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import {Perf} from "r3f-perf";
import Loader from "./Loader.jsx";
import {Suspense, useState} from "react";
import Start from "./Start.jsx";

function App() {
	const [started, setStarted] = useState(false);
	const [loading, setLoading] = useState(false)

	return (
		<>
			{started && !loading && (
				<Canvas>
					<OrbitControls/>
					<Suspense fallback={null}>
						<Stage environment="forest" intensity={0}>
							<SneakerModal/>
						</Stage>
					</Suspense>
				</Canvas>
			)}
			{started ? <Loader setLoading={setLoading} /> : <Start run={() => {
				setStarted(true)
			}} />}
		</>
	)
}

export default App
