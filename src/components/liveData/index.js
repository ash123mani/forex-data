import React from "react";
import "antd/dist/antd.css";
import { Form, Button } from "antd";

import TagLine from "../tagLine";
import SelectOption from "../selectOption";
import { queryType, fromCurrency, toCurrency, timeInterval } from "../constants";

class FormLiveData extends React.Component {
  state = {
    selectedOption: ""
  };

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
          case "intraday":
            this.props.fetchIntraDay({
              fromCurrency: values.fromCurrency.slice(0, 3).toUpperCase(),
              toCurrency: values.toCurrency.slice(0, 3).toUpperCase(),
              timeInterval: values.timeInterval
            });
            break;
          default:
        }
      }
    });
  };

  handleOptionsChange = value => {
    this.setState({ selectedOption: value });
    console.log(`live data selected ${value}`);
  };

  handleIntervalChange = value => {
    this.props.setTimeInterval(value);
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
          <SelectOption
            superData={queryType}
            getFieldDecorator={getFieldDecorator}
            handleOptionsChange={this.handleOptionsChange}
          />
          {this.state.selectedOption === "intraday" ? (
            <SelectOption
              superData={timeInterval}
              getFieldDecorator={getFieldDecorator}
              handleIntervalChange={this.handleIntervalChange}
            />
          ) : null}
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

const LiveData = Form.create({ name: "coordinated" })(FormLiveData);

export default LiveData;
