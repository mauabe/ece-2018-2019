import React from 'react';

const MenuBoxLarge = props => {
  console.log('%c PROPS at MenuBoxLarge', 'color:black;background:magenta;padding:6px;border:1px dashed black', props)

	return (
    <div className="menu-box-large">
      <h5 className="menu-item">{props.menuItem}</h5>
    </div>
  );
}

export default MenuBoxLarge;
