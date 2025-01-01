import './App.css'
import './components/ForecastWeather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CurrentWeather />
    </>
  )
}

export default App
