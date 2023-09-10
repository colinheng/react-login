import React from 'react';

function Home() {

  return (
    <>
      <div className="container mx-auto">
        <header>
          <div className="header ">
            Miaow says hello!
          </div>
        </header>

        <main>
          <form>
            <div className="form-group">
              <input 
                type='email'
                className='emailInput'
                placeholder='email'
                id='email'
                autoComplete='email'
                />
            </div>
            <div className="form-group">
              <input 
                type='password' 
                className='passwordInput' 
                placeholder='password' 
                id='password' />
            </div>
            <div className="form-group">
              <button className="btn btn-block">
                Hello!
              </button>
            </div>
          </form>
        </main>
      </div>      
    </>
  )
}

export default Home