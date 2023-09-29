import React from 'react'
import { ColorRing } from 'react-loader-spinner'
import './sucsessAlert.css'
export default function SucsessAlert({text,isvisible}) {
  return (
    <div className='AlertContainer'>
        <container className='Alert'> 
        <ColorRing
         visible={true}
         height="150"
         width="80"
         ariaLabel="blocks-loading"
         wrapperStyle={{}}
         wrapperClass="blocks-wrapper"
  colors={['green','green','green','green','green']}
/>
<h1>Your Reservation Has Done </h1>
</container>

    </div>
  )
}
