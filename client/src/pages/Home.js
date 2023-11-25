import React from "react";
import { Link } from "react-router-dom";
import Spring from '../Avitar/Spring.jpg'


function Home() {



  return (
    <>
      <div>
          <h3>
            <Link to = {`/enrolled`}><button type="admin">ADMIN</button></Link>
          </h3>
          <h2>
          Welcome to FIX'T GYM!
          </h2>
          <h5><code>...let's get started</code><h2>
              <Link to = {`/about`}><button>Click Me!</button></Link>
            </h2>
          </h5>
      </div>
      <section>
      <img src={Spring} className="Spring" alt="exercise" />
 

      </section>
    </>
  )
}

export default Home