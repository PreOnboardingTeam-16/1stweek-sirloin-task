import React, { useState, useEffect } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";

// const dateFormat = dayjs(date).format("YYYY-MM-DD");

const Date = (props) => {
  const [value, setValue] = useState([null, null]);
  const { state, setState } = props;

  useEffect(() => {
    setState(value);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        value={value}
        inputFormat="yyyy/MM/dd"
        mask="____/__/__"
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <>
            <input
              ref={startProps.inputRef}
              {...startProps.inputProps}
              style={{ width: "80px" }}
            />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default Date;