import './App.css'
import NavigationBar from './components/NavigationBar'
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Superhero from "./components/Superhero"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* trendig section */}

      <div className="trending">
        <Trending />
      </div>
      {/* end of trending */}

      {/* superhero section */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* end of superhero */}
    </div>
  )
}

export default App
