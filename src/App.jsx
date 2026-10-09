import './navbar.css'
import './hero-section.css'
import './product.css'
import './aboutus.css'
import './contentus.css'

import Herosection from './componets/Herosection'
import Navbar from './componets/Navbar'
import Product from './componets/Products'
import Aboutus from './componets/Aboutus'
import Contactus from './componets/Contentus'

import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [products, setProducts] = useState([])
  const [search,setsearch]=useState("");
useEffect(() => {

    const getdata = async () => {

        const response = await fetch(
          "https://dummyjson.com/products/category/mens-shirts"
        )

        const data = await response.json()

        console.log(data)

        setProducts(data.products)
    }

    getdata()

}, [])


  return (
      
      <BrowserRouter>
      <Navbar search={search} setsearch={setsearch} />
      <Routes>
        <Route path='/' element={<Herosection/>}/>
        <Route  path='/product' element={<div className="product-grid">

                {products.filter((product)=>{
                  return(
                        product.title.toLowerCase().includes(search.toLowerCase())

                  )
                })
                .map((product) => (

                  <Product
                    key={product.id}
                        image={product.thumbnail}

                    title={product.title}
                    price={product.price}
                  />

                ))}

              </div>}/>
        <Route  path='/about' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contactus/>}/>
      </Routes>
      </BrowserRouter>
      
   

  )
}

export default App
