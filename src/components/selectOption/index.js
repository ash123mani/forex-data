import React from "react";
import "antd/dist/antd.css";
import { Select, Form } from "antd";

const Option = Select.Option;

class SelectOption extends React.Component {
  onChange = value => {
    if (this.props.handleOptionsChange) {
      this.props.handleOptionsChange(value);
    }
    if (this.props.handleIntervalChange) {
      this.props.handleIntervalChange(value);
    }
  };
  render() {
    const {
      getFieldDecorator,
      superData: { errorMessage, name, placeholder, data, optionClass }
    } = this.props;
    return (
      <Form.Item>
        {getFieldDecorator(`${name}`, {
          rules: [{ required: true, message: `${errorMessage}` }]
        })(
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder={placeholder}
            optionFilterProp='children'
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
            filterOption={(input, option) => {
              console.log(input, option);
              return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
            }}
          >
            {data.map((item, index) => {
              return (
                <Option value={item.toLowerCase()} key={index} className={optionClass}>
                  {item}
                </Option>
              );
            })}
          </Select>
        )}
      </Form.Item>
    );
  }
}

export default SelectOption;
