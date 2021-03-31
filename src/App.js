import React from "react"
import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import Strategy from "./Components/Strategy"
import Team from "./Components/Team"
import Footer from "./Components/Footer"
import NgoList from "./Components/NgoList"
import { Switch, Route } from "react-router"

function Landing(){
  return(
    <div class="App">
      <Header />
      <Home />
      <About />
      <Strategy />
      <Team />
      <Footer />
    </div>
  )
}

function Donate(){
  return(
    <div className="App">
      <Header />
      <NgoList />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/donate" component={Donate} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
