import { useState } from 'react'
import Hello from '../components/Hello'
import Fruits from '../components/Fruits'
import ConditionalComponent from '../components/ConditionalComponent'

function App() {
  
  return (
    <div>
      <Hello message="Hello there!" name="Arnold" />
      <Hello message = "Welcome" name="Joel"/>
      <Hello message = "Hello..." name="Mike"/>
      <Fruits />
      <ConditionalComponent />
    </div>
    
  )
}

export default App
