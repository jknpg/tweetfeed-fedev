import React from "react";

export default class Menu extends React.Component {
  	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
		  isCollapsed: true
		};
	}
	handleClick(e){
	    e.preventDefault(e);
	    console.log(this.state.isCollapsed);
	    console.log('The link was clicked.');
    	this.setState((prevState, props) => ({
		  isCollapsed: !prevState.isCollapsed
		}));
	}
    render() {
    	const isCollapsed = this.state.isCollapsed;
        return (
    		<button onClick={this.handleClick}>
   				Click Me! {isCollapsed ? 'currently' : 'not'}
   			</button>
 	    );
  	}
}
// Menu.defaultProps = {
//   	isCollapsed: true
// };
// Menu.PropTypes ={
// 	isCollapsed:React.PropTypes.bool.isRequired
// }
// const Demo = React.createClass({
//   getInitialState() {
//     return {
//       items: [{key: 'a', size: 10}, {key: 'b', size: 20}, {key: 'c', size: 30}],
//     };
//   },
//   componentDidMount() {
//     this.setState({
//       items: [{key: 'a', size: 10}, {key: 'b', size: 20}], // remove c.
//     });
//   },
//   willLeave() {
//     // triggered when c's gone. Keeping c until its width/height reach 0.
//     return {width: spring(0), height: spring(0)};
//   },
//   render() {
//     return (
//       <TransitionMotion
//         willLeave={this.willLeave}
//         styles={this.state.items.map(item => ({
//           key: item.key,
//           style: {width: item.size, height: item.size},
//         }))}>
//         {interpolatedStyles =>
//           // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
//           <div>
//             {interpolatedStyles.map(config => {
//               return <div key={config.key} style={{...config.style, border: '1px solid'}} />
//             })}
//           </div>
//         }
//       </TransitionMotion>
//     );
//   },
// });