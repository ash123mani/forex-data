import React from "react";
import { connect } from "react-redux";

import LiveData from "../../components/liveData";
import IntraDayData from "../../components/intraDayData";
import ExchangeRateData from "../../components/exchangeRateData";

import { fetchIntraDay, setTimeInterval } from "../../redux/actions/intraDay";
import { fetchExchangeRates } from "../../redux/actions/exchangeRates";

class LiveDataConatiner extends React.Component {
  render() {
    const {
      exchangeData,
      fetchExchangeRates,
      fetchIntraDay,
      intraDayData,
      intraDayMetaData,
      setTimeInterval,
      interval
    } = this.props;
    const dataArr = [];

    if (intraDayData && intraDayMetaData) {
      for (let index in intraDayData) {
        dataArr.push({ time: index, graphData: intraDayData[index] });
      }

      console.log("dataArr is", dataArr);
    }

    const renderGraph = dataArr.map((item, index) => {
      return (
        <div className='intra-day-content'>
          <IntraDayData
            intraDayData={item.graphData}
            index={index}
            intraDayMetaData={intraDayMetaData}
            interval={interval}
          />
          <div className='intra-day__date' style={{ color: "white" }}>
            {item.time}
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <LiveData
          fetchExchangeRates={fetchExchangeRates}
          fetchIntraDay={fetchIntraDay}
          setTimeInterval={setTimeInterval}
        />
        {this.props.exchangeData ? <ExchangeRateData exchangeData={exchangeData} /> : null}
        {this.props.intraDayData ? <div className='intra-day-wrapper'>{renderGraph}</div> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    exchangeData: state.exchangeRates.data["Realtime Currency Exchange Rate"],
    intraDayData: state.intraDay.data[`Time Series FX (${state.intraDay.interval})`],
    intraDayMetaData: state.intraDay.data["Meta Data"],
    interval: state.intraDay.interval
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchExchangeRates: currency => dispatch(fetchExchangeRates(currency)),
    fetchIntraDay: currency => dispatch(fetchIntraDay(currency)),
    setTimeInterval: interval => dispatch(setTimeInterval(interval))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveDataConatiner);
