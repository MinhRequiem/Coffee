import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const About = props => {
  return <>

    <section className="about section bd-container" id="about">
      <div className="about__container  bd-grid">
        <div className="about__data">
          <span className="section-subtitle about__initial">About us</span>
          <h2 className="section-title about__initial">Me make the best<br />Coffee</h2>
          <p className="about__description">We cook the best food in the entire city, with excellent customer
              service and at the best price, visit us. </p>
          <a href="#" className="button">Explore history</a>
        </div>
        <img src="images/img/about.png" alt="" className="about__img" />
      </div>
      <h2 className="section-title service-title">Get coffee in 3 step</h2>
      <div className="services__container  bd-grid">
        <div className="services__content">
          <svg class="services__img" ><AddShoppingCartIcon /></svg>
          <p className="services__description"> Order any coffee from one of our many brands</p>
        </div>
        <div className="services__content">
          <svg class="services__img" ><HourglassEmptyIcon /></svg>
          <p className="services__description">Wait while our team pickup your order</p>
        </div>
        <div className="services__content">
          <svg class="services__img" ><LocalShippingIcon /></svg>
          <p className="services__description">Delivery of your order within 5-20 mins</p>
        </div>
      </div>
    </section>
  </>
}

export default About;