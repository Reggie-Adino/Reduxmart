import React, {useState, useEffect} from 'react'

const Products = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
      const getProducts = async() => {
            const response = await fetch("https://fakestoreapi.com/products")
            const result =  response.json()
            setData(result)
      }
      setLoading(false)
      getProducts()
    },[])

    console.log(data)
  return (
    <div>Products</div>
  )
}

export default Products