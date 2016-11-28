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
      return <h4>ABV: {abv}%</h4>;
    }

    return null;

  }


  render() {
    let { og, fg } = this.state;

    return (
      <div>
        <h1>ABV Calculator</h1>
        <form className="row align-middle">
          <div className="small-12 medium-4 column">
            <label>Original Gravity (OG)
              <input name="og" type="number" step="0.001" max="1.5" value={og} onChange={this.setValue.bind(this)}/>
            </label>
          </div>
          <div className="small-12 medium-4 column">
            <label>Final Gravity (FG)
              <input name="fg" type="number" step="0.001" value={fg} onChange={this.setValue.bind(this)} />
            </label>
          </div>
          <div className="small-12 medium-4 column text-center">
            {this.calculateAbv()}
          </div>
        </form>
      </div>
    );
  }
}
