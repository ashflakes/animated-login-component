import React from 'react'

const Marginer = (props) => {
  const { direction, margin } = props;

  const newMargin = typeof margin === "string" ? margin : `${margin}px`;

  const horizontalStyle = {
    display: 'flex',
    width: newMargin
  }

  const verticalStyle = {
    display: 'flex',
    height: newMargin  
  }

  if (direction === "vertical") {
    return (
      <span 
        style={verticalStyle}
      ></span>
  )} else {
    return (
      <span
        style={horizontalStyle}
      ></span>
  )}
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export { Marginer }


