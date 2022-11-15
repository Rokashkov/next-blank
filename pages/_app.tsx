import { Provider } from 'react-redux'
import store from '../redux/store'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
	return (
		<Provider store={ store }>
			<Component { ...pageProps }/>
		</Provider>
	)
}