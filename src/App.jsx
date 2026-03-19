
import { Suspense } from 'react'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import PricingOption from './Components/PricingOption/PricingOption'
import ResultChart from './Components/ResultChart/ResultChart'
import Data from './Components/ResultChart/data'
import axios from 'axios'
import Marks from './Components/ResultChart/Marks'



const marksPromise = axios.get('Marks.json')
const pricingPromise = fetch('PricingData.json')
.then(res => res.json())
function App() {

  return (
    <>
    <header>
      <Navbar></Navbar>
       {/* <DaisyNav></DaisyNav> */}
    
    </header>
    <main>
         <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PricingOption pricingPromise={pricingPromise}>

        </PricingOption>
       </Suspense>
       <Suspense fallback="Hi I am Coming">
        <Marks marksPromise={marksPromise}>

        </Marks>
       </Suspense>
      
      {/* <DaisyPricing></DaisyPricing> */}
       <ResultChart></ResultChart>
       {/* <Data></Data> */}

    </main>
    <footer>

    </footer>
   
  
    </>
  )
}

export default App
