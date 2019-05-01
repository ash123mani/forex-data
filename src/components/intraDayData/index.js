import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

class IntraDayData extends React.Component {
  render() {
    const { intraDayMetaData, intraDayData } = this.props;
    console.log("props are", this.props);
    const lastRefreshed = intraDayMetaData["4. Last Refreshed"];

    const data = [
      { name: "open", pv: intraDayData["1. open"], amt: 2400 },
      { name: "close", pv: intraDayData["2. high"], amt: 2210 },
      { name: "high", pv: intraDayData["3. low"], amt: 2290 },
      { name: "low", pv: intraDayData["4. close"], amt: 2000 }
    ];
    return (
      <div className='intra-day-data'>
        <LineChart width={400} height={200} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Line type='monotone' dataKey='pv' stroke='#fffff' activeDot={{ r: 8 }} strokeDasharray='5 5' />
          <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
        </LineChart>
        <div>{}</div>
      </div>
    );
  }
}

export default IntraDayData;
