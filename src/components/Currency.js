import React from 'react'

const Currency = () => {
  return (
    // <div className='currency'>
        //  <div className='alert alert-secondary'>
       <select className='alert alert-success' id="inputGroupSelect01" >
                        <option defaultValue>Currency</option>
                        <option value="Marketing" name="marketing"> $ Dollar</option>
                <option value="Sales" name="sales">Pound</option>
                <option value="Finance" name="finance">Euro</option>
                <option value="HR" name="hr">Rupee</option>
                  </select>
                //   </div>
    // </div>
  )
}

export default Currency