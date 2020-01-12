import React, { Component } from 'react';
import Navbar from "./components/navbar/navbar.jsx";
import MainComponent from "./components/MainComponent/MainComponent.jsx";
import Footer from "./components/footer/footer.jsx";
import { getAdvices as getAdvicesService } from "./services/advices";
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      advices: null
    };
    this.updateAdvicesHandler = this.updateAdvicesHandler.bind(this);  
  }

  async componentDidMount() {    
    const advice = await getAdvicesService();
    this.setState({
      advices: advice
    })        
  };

  updateAdvicesHandler(data) {
     this.setState({
      advices: data
    });  
  }  

  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>  
        <main>
          <div className="background"></div>
            <MainComponent currentAdvice={this.state.advices} updateAdvice={this.updateAdvicesHandler} />
        </main>  
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
};

export default App;
