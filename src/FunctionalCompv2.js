import React, { useState, useEffect } from 'react'

export default function FunctionalCompv2({ passCount }) {
  const [count, setCount] = useState(passCount)
  const [coffee, setCoffee] = useState([])

  useEffect(() => {
    let url = 'https://api.sampleapis.com/coffee/hot'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCoffee(data)
      })
  }, [])

  return (
    <>
      <h1>This is a functional component {count} </h1>
      <button onClick={() => {setCount(count + 1)}}>add one</button>
      <button onClick={() => {setCount(count + 1)}}>subtract one</button>
      <>
        {coffee.map((coffee) => (
          <h1 key={coffee.id}>{coffee.title}</h1>
        ))}
      </>
    </>
  )
}
