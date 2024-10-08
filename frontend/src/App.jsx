import './App.css'
import '@mantine/core/styles.css'
import { MantineProvider, Grid, Button } from '@mantine/core'
import { InputField } from './components/InputField'
import { SubmitButton } from './components/SubmitButton'
import { useState } from 'react'

function App() {
  let [longUrl, setLongUrl] = useState('')
  let [redirectCode, setRedirectCode] = useState('')
  function getLongUrl(event) {
    setLongUrl(event.target.value)
  }
  function getRedirectCode(event) {
    setRedirectCode(event.target.value)
  }

  function handleSubmission() {
    // TODO: Call API 
  }
  
  return (
    <MantineProvider>
      <InputField placeholder="Example: https://www.youtube.com/" onChange={getLongUrl} />
      <InputField placeholder="Example: MyFavApp" onChange={getRedirectCode} />
      <SubmitButton onSubmit={handleSubmission} />
    </MantineProvider>

  )
}

export default App
