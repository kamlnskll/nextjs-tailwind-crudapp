import React from 'react'

const EmployeeModalForm = () => {
  const handleSubmit = async (e) => {
    // Stop the form from submitting and refreshing the page.
    e.preventDefault()
  }

  return (
    <form
      action='/api/form.js'
      method='post'
      className='px-16 my-16 max-w-3xl mx-auto'
      onSubmit={handleSubmit}
    >
      <div className='flex justify-evenly'>
        <div className='flex-col'>
          <label className='flex' htmlFor='firstName1'>
            First Name
          </label>
          <input
            className='flex border'
            required
            id='firstName1'
            name='firstName1'
          />
        </div>
        <div className='flex-col'>
          <label className='flex' htmlFor='lastName'>
            Last Name
          </label>
          <input
            className='flex border'
            required
            id='lastName'
            name='lastName'
          />
        </div>
      </div>
      <div className='flex justify-evenly'>
        <div className='flex-col'>
          <label className='flex' htmlFor='email'>
            Email
          </label>
          <input className='flex border' required id='email' name='email' />
        </div>
        <div className='flex-col'>
          <label className='flex' htmlFor='phone'>
            Phone Number
          </label>
          <input className='flex border' required id='phone' name='phone' />
        </div>
      </div>
      <div className='flex px-12'>
        <div className='flex-col w-full'>
          <label className='flex' htmlFor='address'>
            Address
          </label>
          <input
            className='flex border w-full'
            required
            id='address'
            name='address'
          />
        </div>
      </div>
      <div className='flex justify-evenlys'>
        <div className='flex-col'>
          <label className='flex' htmlFor='postal'>
            Postal Code
          </label>
          <input className='flex border' required id='postal' name='postal' />
        </div>
        <div className='flex-col'>
          <label className='flex' htmlFor='city'>
            City
          </label>
          <input className='flex border' required id='city' name='city' />
        </div>
        <div className='flex-col'>
          <label className='flex' htmlFor='province'>
            Province
          </label>
          <input
            className='flex border'
            required
            id='province'
            name='province'
          />
        </div>
      </div>

      {/* <div className='flex justify-center'>
        <button
          type='submit'
          className='bg-orange-500 rounded-3xl text-white font-bold w-64 py-2 mt-6 border border-gray-400 hover:translate-y-1'
        >
          Submit
        </button>
      </div> */}
    </form>
  )
}
export default EmployeeModalForm
