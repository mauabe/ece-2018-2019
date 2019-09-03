// import React from 'react';
// import PropTypes from 'prop-types';

// import createAbsoluteGrid from './lib/AbsoluteGrid.jsx';

// // This is the component that will display your data
// import GridDisplayComponent from './GridDisplayComponent';


// export default class MyComponent extends Component {
// propTypes = {
//   items:	propTypes.array.isRequired, //[]	//The array of items in the grid
//   keyProp:	PropTypes.string,//'key',	//The property to be used as a key
//   filterProp:	PropTypes.string,   //'filtered',	//The property to be used for filtering, if the filtered value is true, the item won't be displayed.
//          // It's important to not remove items from the array because that will cause React to remove the DOM,
//          // for performance we would rather hide it then remove it.
//   sortProp:	PropTypes.string, //'sort',	//The property to sort on
//   itemWidth:	PropTypes.number,   //128,	//The width of an item
//   itemHeight:	PropTypes.number,   //128,	//The height of an item
//   verticalMargin:	PropTypes.number, //  -1,	//How much space between rows, -1 means the same as columns margin which is dynamically calculated based on width
//   responsive:	PropTypes.bool,  //true,	//If the container has a dynamic width, set this to true to update when the browser resizes
//   dragEnabled:	PropTypes.bool,  //false,	// drag and drop listeners, onMove will be called with the keys involved in a drag and drop
//   animation: PropTypes.string,	//'transform 300ms ease',	//The CSS animation to use on elements. Pass a blank string or false for no animation.
//   zoom:	PropTypes.number, //  1,	//Zooms the contents of the grid, 1 = 100%
//   onMove:	PropTypes.func,  // fn(from, to)	//This function is called when an item is dragged over another item.
//               // It is your responsibility to update the sort of all items when this happens.
//   onDragStart:	PropTypes.func, //fn(e),	//This function is called when an item starts dragging, this is NOT required.
//   onDragMove:	PropTypes.func, //fn(e),	//This function is called when as an item is being moved, this is NOT required.
//   onDragEnd: PropTypes.func, 	//fn(e),	//This function is called when an item has finished its drag, this is NOT required.

//   //Other options fro propTypes:
//   optionalEnum: PropTypes.oneOf(['News', 'Photos']),
//   optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
//   optionalObjectOf: PropTypes.objectOf(PropTypes.number),
//   requiredAny: PropTypes.any.isRequired,

//   }




    //  var sampleItems = [
    //   {key: 1, name: 'Test', sort: 0, filtered: 0},
    //   {key: 2, name: 'Test 1', sort: 1, filtered: 0},
    // ];


    // createAbsoluteGrid(DisplayComponent, displayProps = {}, forceImpure = false)
    // // DisplayComponent: is a react component to display in your grid
    // // displayProps: optional : are properties you want passed down to the DisplayComponent such as event handlers.
    // // forceImpure: optional : not recommended Will make this function as an impure component, meaning it always renders.

    // // Pass your display component to create a new grid
    // const AbsoluteGrid = createAbsoluteGrid(YourDisplayComponent, {someProp: 'my component needs this'});
    // React.render(<AbsoluteGrid items={sampleItems} />, document.getElementById('Container'));
// }