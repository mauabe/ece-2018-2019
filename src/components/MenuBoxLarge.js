import React from 'react';

const MenuBoxLarge = props => {
  console.log('%c PROPS at MenuBoxLarge', 'color:black;background:magenta;padding:6px;border:1px dashed black', props)

	return (
    <div className="container">
      <div className="menu-box-large">
        <div className="menu-item">{props.menuItem}</div>
      </div>
      <div className="menu-box-large">
        <div className="menu-item">menu-box-large</div>
      </div>
      <div className="menu-box-small">
        <div className="menu-item">menu-box-small</div>
      </div>
    </div>

  );
}

export default MenuBoxLarge;
