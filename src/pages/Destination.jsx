import React from 'react';

import Header from './parts/Header.jsx';

function Title() {
  return (
    <div>Title</div>
  );
}

function PlanetImg() {
  return (
    <div>planet image</div>
  );
}

function DestDescription() {
  return (
    <div>description</div>
  );
}

export default function Destination() {
  return (
    <div className="dest-container">
      <div className="container background-dest home__container">
        <Header />
        <Title />
        <div>
          <PlanetImg />
          <DestDescription />
        </div>
      </div>
    </div>
  );
}
