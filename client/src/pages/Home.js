import React from "react";
import Spring from '../Avitar/Spring.jpg'


function Home() {



  return (
    <>
      <div>
        <h1>Home</h1>
          <h2>
          Welcome to FIX'T GYM!
          </h2>
          <h5><code>...let's get started</code></h5>
      </div>
      <section>
      <img src={Spring} className="Spring" alt="exercise" />
 

      </section>
    </>
  )
}

export default Home