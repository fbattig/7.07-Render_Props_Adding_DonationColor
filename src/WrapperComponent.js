import { Component } from "react";

class WrapperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { donationColor: "black" };
  }

  componentDidMount() {
    const donationAmout = this.props.donationAmount;
    const donationColor = donationAmout > 50 ? "green" : "red";
    this.setState({ donationColor });
  }

  render() {
    return this.props.render({
      donationColor: this.state.donationColor
    });
  }
}

export default WrapperComponent;
