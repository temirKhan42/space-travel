import React from 'react';

import Header from './parts/Header';
import Intro from './parts/Intro';
import LargeBtn from './parts/LargeBtn';

export default function Home() {
  const width = window.innerWidth;

  const className = width >= 1440 ? 'main flex jc-sa ai-fe' : 'main';

  return (
    <div className="home">
      <div className="container background-home home__container">
        <Header />
        <div className={className}>
          <Intro />
          <LargeBtn />
        </div>
      </div>
    </div>
  );
}
