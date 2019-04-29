import React from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Form, Button } from "antd";

import TagLine from "../tagLine";
import SelectOption from "../selectOption";
import { fetchExchangeRates } from "../../redux/actions/exchangeRates";
import { queryType, fromCurrency, toCurrency } from "../constants";

class LiveDatas extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        switch (values.choiceType) {
          case "exchange rate":
            this.props.fetchExchangeRates({
              fromCurrency: values.fromCurrency.slice(0, 3).toUpperCase(),
              toCurrency: values.toCurrency.slice(0, 3).toUpperCase()
            });
            break;
          default:
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='live-data'>
        <TagLine
          classNaam='live-data__tagline'
          text='Select your options to get Exchange Rates,Intraday, Daily, Weekly, Monthly Data.'
        />
        <Form onSubmit={this.handleSubmit}>
          <SelectOption superData={queryType} getFieldDecorator={getFieldDecorator} />
          <SelectOption superData={fromCurrency} getFieldDecorator={getFieldDecorator} />
          <SelectOption superData={toCurrency} getFieldDecorator={getFieldDecorator} />
          <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchExchangeRates: currency => dispatch(fetchExchangeRates(currency))
  };
};

const FormLiveData = Form.create({ name: "coordinated" })(LiveDatas);

const LiveData = connect(
  null,
  mapDispatchToProps
)(FormLiveData);

export default LiveData;
