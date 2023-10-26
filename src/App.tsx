import './App.css'
import DestinationDetails from './components/DestinationDetails'
import DestinationSearch from './components/DestinationSearch'

function App() {

  return (

    <div className="flex flex-col justify-center items-center">
      <DestinationSearch/>
      <DestinationDetails/>
    </div>

  )
}

export default App
