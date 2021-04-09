import React from 'react';
import { Link } from "react-router-dom";

const Home = props => {

  return <>
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <h1 className="home__title">Coffee</h1>
          <h2 className="home__subtitle">Try the best coffee of <br /> the week.</h2>
          <Link to="/products"><a href="#" className="button">View Menu</a></Link>
        </div>
        <img src="images/img/home.png" alt="" className="home__img" />
      </div>
    </section>
  </>
}

export default Home;