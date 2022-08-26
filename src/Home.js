import React from 'react';
import TShirtPost from './components/TShirtPost';
import HoodiesPost from './components/HoodiesPost';
import { shirts, hoodies } from './utils/Shirts';

const Home = () => {
  return (
    <div className="Home">
      <h1>Ts4Teens</h1>
      <div className="picture-container">
        <img
          className="happy-people"
          src="https://t3.ftcdn.net/jpg/02/82/28/96/360_F_282289636_HdAsPhxkmI0U6rqRNPpp2Mr8ztj9u2D2.jpg"
        />
      </div>
      <section className="inventory">
        {shirts.map((shirt, index) => (
          <TShirtPost arrShirts={shirt} index={index} />
        ))}
        {hoodies.map((shirt, index) => (
          <HoodiesPost arrHoodies={shirt} key={index} />
        ))}
      </section>
    </div>
  );
};
export default Home;
