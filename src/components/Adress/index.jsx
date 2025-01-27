import React from 'react'

function Adress(props) {
  const {region,zip} = props
  return (
    <div>
      <p><b>Address:</b>{region}{zip}</p>
    </div>
  )
}

export default Adress
