
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Stripe from './components/Stripe'
import Services from './components/Services'
import Tools from './components/Tools'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
<>
<div className=' select-none scroll-smooth'>
<Navbar/>
<Hero/>
<Stripe title={'Services I Provide'}/>
<Services/>
<Stripe title={'Tools I use often'}/>
<Tools/>
<Stripe title={'Who is me?'}/>
<About/>
<Stripe title={'Projects Overview'}/>
<Projects/>
<Footer/>
</div>
</>
  )
}

export default App
