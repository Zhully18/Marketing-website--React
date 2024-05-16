import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
// import Pricing from "./Components/Pricing/Pricing"
import Service from "./Components/Services/Service"
import Feedback from "./Components/Feedback/Feedback"
import Faq from "./Components/FAQ/Faq"
import Footer from "./Components/Footer/Footer"
import More from "./Components/More/More"


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Feedback />
      <Faq />
      <More />
      <Contact />
      <Footer />
      {/* <Pricing /> */}
    </>
  )
}

export default App
