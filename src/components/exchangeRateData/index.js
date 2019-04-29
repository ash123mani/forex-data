import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { connect } from "react-redux";
// import ing from '../../assets'

class ExchangeRateData extends React.Component {
  render() {
    console.log("hi", this.props);
    return (
      <div className='exchange-data'>
        <Card
          title='Realtime Currency Exchange Rate'
          bordered={false}
          style={{ width: 500 }}
          bodyStyle={{
            textAlign: "left",
            fontSize: "18px",
            color: "white",
            background: "black",
            border: "1px solid white"
          }}
          headStyle={{ fontWeight: "bolder", fontSize: "24px", border: "1px solid white" }}
        >
          <p>1. From_Currency Code: {this.props.exchangeData["1. From_Currency Code"]}</p>
          <p>2. From_Currency Name: {this.props.exchangeData["2. From_Currency Name"]}</p>
          <p>3. To_Currency Code: {this.props.exchangeData["3. To_Currency Code"]}</p>
          <p>4. To_Currency Name: {this.props.exchangeData["4. To_Currency Name"]}</p>
          <p>5. Exchange Rate: {this.props.exchangeData["5. Exchange Rate"]}</p>
          <p>6. Last Refreshed: {this.props.exchangeData["6. Last Refreshed"]}</p>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exchangeData: state.exchangeRates["Realtime Currency Exchange Rate"]
  };
};

export default connect(
  mapStateToProps,
  null
)(ExchangeRateData);
