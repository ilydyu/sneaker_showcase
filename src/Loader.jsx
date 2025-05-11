import {useEffect} from "react";
import { DefaultLoadingManager } from 'three'

const Loader = ({ setLoading}) => {
	useEffect(() => {
		const handleStart = () => {
			setLoading(true)
		}

		const handleLoad = () => {
			setLoading(false)
		}

		DefaultLoadingManager.onStart = handleStart
		DefaultLoadingManager.onLoad = handleLoad

		return () => {
			DefaultLoadingManager.onStart = null
			DefaultLoadingManager.onLoad = null
		}
	}, [setLoading])

	return (
		<div className={`loader-screen`}>
			<div className="spinner"></div>
		</div>
	)
}

export default Loader;