import React from 'react';

const MenuBoxSmall = props => {
  // console.log('%c PROPS at MenuBoxSmall', 'color:black;background:magenta;padding:6px;border:1px dashed black', props)
  return (
    <div className="menu-box-small">
      <h5 className="menu-item">{props.menuItem}</h5>
    </div>
  );
}
export default MenuBoxSmall;
