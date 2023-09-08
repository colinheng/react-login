import React from 'react';

function Home() {

  return (
    <>
      <div className="container">
        <header>
          <div className="header">
            Miaow bids you welcome!
          </div>
        </header>

        <main>
          <form>
            <input type='email' className='emailInput' placeholder='email' id='email' autoComplete='email' />
            <input type='password' className='passwordInput' placeholder='password' id='password' />
          </form>
        </main>
      </div>      
    </>
  )
}

export default Home