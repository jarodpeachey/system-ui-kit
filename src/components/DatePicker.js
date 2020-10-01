import React, { useState } from 'react';
import styled from 'styled-components';
import DatePickerComponent from 'react-datepicker';
import DatePickerComponent2 from 'react-datepicker2';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Input from './Input';

const DatePicker = (props) => {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(moment());

  const handleChange = (newDate) => {
    setDate(newDate);
    if (props.onChange) {
      props.onChange();
    }
  };

  const CustomInput = ({ value, onClick }) => {
    return <Input value={value} onClick={onClick} />;
  };

  return (
    <>
      <DatePickerComponent
        // showTodayButton={false}
        // timePicker={false}
        selected={date}
        onChange={(newDate) => setDate(newDate)}
        {...props}
        customInput={<Input {...props} />}
      />
      {/* <DatePickerComponent2
        showTodayButton={false}
        timePicker={false}
        value={date2}
        onChange={(value) => setDate2(value)}
        {...props}
      /> */}
    </>
  );
};

const Wrapper = styled.div`
  ${(props) => props.customStyles};
`;

export default DatePicker;
