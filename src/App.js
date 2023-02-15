import React, {useState} from 'react'
import axios from 'axios'

const App = () => {
  const [bankName, setBankName] = useState('')
  const [accountName, setAccountName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  function HandleChange (){
    console.log('click')
    axios.get(`https://maylancer.org/api/nuban/api.php?account_number=${accountNumber}`)
    .then(data => {
      console.log(data)
      setBankName(data.data.Bank_name)
      setAccountName(data.data.account_name)
    })
  }
  // function HandleChange (){
  //   console.log('click')
  //   fetch(`https://maylancer.org/api/nuban/api.php?account_number=${accountNumber}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setBankName(data.Bank_name)
  //     setAccountName(data.account_name)
  //   })
  // }
  return (
    <div>
      <input type='text' value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />
      <button onClick={HandleChange}>Validate</button>
      <div className=''>
        <input type='text' value={bankName} readOnly/>
        <input type='text' value={accountName} readOnly/>
      </div>
    </div>
  )
}

export default App
