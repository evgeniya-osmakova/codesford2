import React from 'react';
import Iframe from 'react-iframe';
import './Map.scss';

function App() {
  return (
    <section className="map">
      <Iframe className="map__iframe" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.7684975402503!2d144.91644641531485!3d-37.678147179777206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65a884af12a1f%3A0xcc6725131d70e540!2s59-69%20Pearcedale%20Parade%2C%20Broadmeadows%20VIC%203047!5e0!3m2!1sen!2sau!4v1590832676337!5m2!1sen!2sau"
              frameBorder="0" style="border:0;" allowFullScreen="" aria-hidden="false" tabIndex="0"/>
    </section>
  );
}

export default App;
