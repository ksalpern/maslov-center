import React from 'react'
import axios from 'axios'

const Home = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  return <div className=''></div>
}

export default Home
