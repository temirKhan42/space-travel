import React from 'react';
import { Link } from 'react-router-dom';

function LargeBtn() {
  return (
    <div className="largeBtn">
      <Link to="/destination" className="largeBtnText largeBtn__largeBtnText">
        explore
      </Link>
    </div>
  );
}

export default LargeBtn;
