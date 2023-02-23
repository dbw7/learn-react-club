import { useState } from 'react'
import './App.css'
import FormHolder from './components/Form/FormHolder/FormHolder'
import ProfileBox from './components/Profile/ProfileBox/ProfileBox'

function App() {
  return (
    <div className="App">
      {/* <ProfileBox name="Danny" bio="This is my bio" image="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"></ProfileBox> */}
      <FormHolder></FormHolder>
    </div>
  )
}

export default App
