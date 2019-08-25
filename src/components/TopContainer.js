import React, {Component} from 'react';
import './App.css';

import TopContainer from './TopContainer';
import Content from './Content';
import Footer from './Footer';

class App extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'feature'
    }
		console.log('%c PROPS at APP constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
	}

	componentDidMount() {
		const props = this.props;
  }

  BUILD MENU HERE

  GET LOCATION AND UPDATE PAGE VIEw

  render() {
    return (
      <div className="App">
        <TopContainer> </TopContainer>
        <Content
          pageView={this.state.pageView}
        ></Content>
        <Footer></Footer>

        <div className="App section">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>

          <button className="button is-danger is-outlined">
            Hello
          </button>
        </div>
      </div>
    );
  }
}

export default App;
