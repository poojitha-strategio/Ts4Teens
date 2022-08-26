import React from 'react';
import TShirtPost from './components/TShirtPost';
import { shirts } from './utils/Shirts';

const Tshirt = () => {
  return (
    <div className="home">
      <h1 classname="tshirt">T-shirts</h1>
      <div className="picture-container">
        <img
          className="happy-people"
          src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fpositiveroutines.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fhappy-woman-in-field.jpg"
        />
      </div>
      <section className="inventory">
        {shirts.map((shirt, index) => (
          <TShirtPost arrShirts={shirt} index={index} />
        ))}
      </section>
    </div>
  );
};
export default Tshirt;
