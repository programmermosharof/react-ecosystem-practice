
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOption from './Components/PricingOption/PricingOption'

const pricingPromise = fetch('PricingData.json')
.then(res => res.json())
function App() {

  return (
    <>
    <header>
      <Navbar></Navbar>
       {/* <DaisyNav></DaisyNav> */}
       <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PricingOption pricingPromise={pricingPromise}>

        </PricingOption>
       </Suspense>
    </header>
    <main>

    </main>
    <footer>

    </footer>
   
  
    </>
  )
}

export default App
