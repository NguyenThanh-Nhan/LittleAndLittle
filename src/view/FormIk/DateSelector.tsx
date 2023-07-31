import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../FormIk/DateSelector.css";
interface DateConstructor {
  startDate: Date;
}

export class DateSelector extends React.Component<{}, DateConstructor> {
  constructor(props: {}) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(date: Date) {
    console.log("date is here!", date);
    this.setState({
      startDate: date,
    });
  }

  public render() {
    const { startDate } = this.state;
    return (
      <DatePicker
        id="date"
        className="form-control date_picker"
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={this.handleChange}
      />
    );
  }
}
