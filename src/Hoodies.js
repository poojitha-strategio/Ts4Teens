import React from 'react';
import HoodiesPost from './components/HoodiesPost';
import { hoodies } from './utils/Shirts';

const Hoodies = () => {
  return (
    <div className="Hoodies">
      <h1>Hoodies</h1>
      <div className="picture-container">
        <img
          className="happy-people"
          src="https://businesspartnermagazine.com/wp-content/uploads/2021/04/Customized-Sweatshirts-For-Women-For-You-And-For-Me.jpg"
        />
      </div>
      <section className="inventory">
        {hoodies.map((hoodie, index) => (
          <HoodiesPost arrHoodies={hoodie} key={index} />
        ))}
      </section>
    </div>
  );
};
export default Hoodies;
