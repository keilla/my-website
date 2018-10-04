import React, { Component } from 'react';
import { Transition } from 'react-spring';

class GreetingSection extends Component {

  constructor(props) {
    super(props);
    // this.index = 0;
    // this.myVar = setInterval(this.myTimer, 1000);
    const text = "Hi, I'm Keilla";
    this.greeting = text.split('');

    this.state = {
      greetingChars: []
    }
  }

  myTimer = () => {
    if (this.index === this.greeting.length) {
      clearInterval(this.myVar);
    } else {
      this.setState({ greetingChars: [... this.greeting[this.index]] })
      this.index++;
    }
  }

  render() {
    
    return (
      <div className='greeting-section'>
        <div className='title'>
          {/* <Transition
            keys={this.greeting.map(item => item.index)}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{delay:100}}
            >
            {this.greeting.map((item) => styles => <span style={styles}>{item}</span>)}
          </Transition> */}
          <h1>Hi, I'm <b>Keilla</b></h1>
        </div>
      </div>
    )
  }
}

export default GreetingSection;