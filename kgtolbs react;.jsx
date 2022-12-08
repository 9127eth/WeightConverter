import React from 'react';

class KgToLbsConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      unit: "",
      convWeight: 0
    };
  }

  handleWeightChange = weight => {
    this.setState({ weight });
  };

  handleUnitChange = unit => {
    this.setState({ unit });
  };

  handleConverter = () => {
    let { weight, unit } = this.state;
    if (unit === "kg") {
      let convWeight = weight * 2.2;
      this.setState({ convWeight });
      alert(`${convWeight} lbs`);
    } else if (unit === "lbs") {
      let convWeight = weight / 2.2;
      this.setState({ convWeight });
      alert(`${convWeight} kgs`);
    } else {
      alert("please enter valid units");
    }
  };

  render() {
    return (
      <div>
        <h2>kg to lbs converter</h2>
        <input
          type="number"
          placeholder="Enter Weight"
          onChange={e => this.handleWeightChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="kg or lbs?"
          onChange={e => this.handleUnitChange(e.target.value)}
        />
        <button onClick={this.handleConverter}>Convert</button>
      </div>
    );
  }
}

export default KgToLbsConverter;