import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

class ExchangeRateData extends React.Component {
  render() {
    const { exchangeData } = this.props;

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
          <p>1. From_Currency Code: {exchangeData["1. From_Currency Code"]}</p>
          <p>2. From_Currency Name: {exchangeData["2. From_Currency Name"]}</p>
          <p>3. To_Currency Code: {exchangeData["3. To_Currency Code"]}</p>
          <p>4. To_Currency Name: {exchangeData["4. To_Currency Name"]}</p>
          <p>5. Exchange Rate: {exchangeData["5. Exchange Rate"]}</p>
          <p>6. Last Refreshed: {exchangeData["6. Last Refreshed"]}</p>
        </Card>
      </div>
    );
  }
}

export default ExchangeRateData;
