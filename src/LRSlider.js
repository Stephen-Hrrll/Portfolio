import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LRSlider.css';;

const LRSlider = ({Route, left, right}) => {
  const [pageIndex, setPageIndex] = useState(0);

  const navigate = useNavigate();
  console.log("whats happening")
  const goLeft = () => navigate(left);
  const goRight = () => navigate(right);
  

  return (
    <div className="slider-container">
      {Route}
      <button onClick={goLeft} className="left-arrow"><i className="fa-solid fa-angle-left"></i></button>
      <button onClick={goRight} className="right-arrow"><i className="fa-solid fa-angle-right"></i></button>
    </div>
  );
};

export default LRSlider;
