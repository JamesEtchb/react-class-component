import React, { useState, useEffect } from 'react'

export default function FunctionalComponent() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)

  const [coffeeList, setCoffeeList] = useState([])

  useEffect(() => {
    getCoffeeSync()
  },[])

  const getCoffeeSync = async (temperature) => {
    if (!temperature) {
        temperature = "hot"
    }
    try {
      const results = await fetch(
        `https://api.sampleapis.com/coffee/${temperature}`
      )
      const data = await results.json()
      setCoffeeList(data)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <>
      <h1>This is a functional component {count}</h1>
      <button onClick={handleClick}>Add one</button>
      <button onClick={() => getCoffeeSync('hot')}>HOT</button>
      <button onClick={() => getCoffeeSync('iced')}>ICED</button>
      <h2>Coffee List</h2>
      <>
        {coffeeList.map((coffee) => (
          
          <ui>
            <ui key={coffee.id}>
              <b>
                <i>{coffee.title}</i>
              </b>
            </ui>
            <br />
            <li key={coffee.id}>{coffee.description}</li>
            <br />
          </ui>
        
        ))}
      </>
      
    </>
  )
}
