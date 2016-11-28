import React from "react";

export default class CalculatorAbv extends React.Component {
  constructor(props) {
    super(props);
    // abv is calculated separately
    this.state = {og: 0, fg: 0};
  }

  setValue(e) {
    let prop = {[e.target.name]: e.target.value};
    this.setState(prop);

    let {og, fg, abv} = this.state;

    switch(e.target.name) {
      case 'og': og = e.target.value;
                 break;
      case 'fg': fg = e.target.value;
                 break;
    }

  }

  calculateAbv() {

    let {og, fg, abv} = this.state;

    abv = (og > 0 && fg > 0)
            ? ((og - fg) * 131.25).toFixed(2)
            : 0;

    if(abv > 0) {
      return <h4>ABV: {abv}</h4>;
    }

    return null;

  }


  render() {
    let { og, fg } = this.state;
    
    return (
      <div>
        <h1>Calculator</h1>
        <form>
          <input name="og" type="number" value={og} onChange={this.setValue.bind(this)}/>
          <input name="fg" type="number" value={fg} onChange={this.setValue.bind(this)} />
          {this.calculateAbv()}
        </form>
      </div>
    );
  }
}
