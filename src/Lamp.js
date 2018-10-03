import React, { Component } from 'react';

class Lamp extends Component 
    {
    constructor(props)
        {
        super(props);
        this.state = {
            etatLamp: props.on
          };
        }
    handleClick = () => {
        console.log('Button clicked');
        this.setState({ etatLamp: !this.state.etatLamp });
        };
  render() {
    const light = this.state.etatLamp ? 'on' : 'off';
    return (
      <div className="Lamp">
        <button onClick={this.handleClick} className={light}>{light.toUpperCase()}</button>
        <figure className={light} />
      </div>
    );
  }
}

export default Lamp;