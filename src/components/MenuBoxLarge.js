import React from 'react';

//HAVE A STRONG FEELING THIS COMPONENT WILL NOT BE USED


const MenuBoxLarge = props => {
  // console.log('%c PROPS at MenuBoxLarge', 'color:black;background:magenta;padding:6px;border:1px dashed black', props)

	return (
    <div className="container">
      <div className="menu-box-large">
        <div className="menu-item">{props.menuItem}</div>
      </div>
    </div>

  );
}

export default MenuBoxLarge;
