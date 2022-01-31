// src/components/Search/index.js

import "./search.css";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

// React & Redux imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import actions
import { fetchBooksByTitle } from "../../store/search/actions";
import { initialBooks } from "../../store/search/actions";

// Import Selectors
import { selectSearchBooks } from "../../store/search/selectors.js";
import Loading from "../Loading";

export default function Search() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState("");
  const options = useSelector(selectSearchBooks);
  const [value, setValue] = React.useState("");

  // date pickers
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    // TODO: this is not working, not urgent.
    dispatch(initialBooks);
  }, [dispatch]);

  return (
    <div className="search-stack">
      <h3 className="title">Search</h3>
      <Stack spacing={2}>
        <Autocomplete
          disablePortal
          id="search-bar"
          value={value}
          // onChange is the actual value, meaning full book title
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              // fetch books
              dispatch(fetchBooksByTitle(inputValue));
            }
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Book" />}
        />
        {/* TODO: Add the book's cover */}
        {/* {value && value.lccn[0]} */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          onClick={() => {
            console.log(
              value.lccn[value.lccn.length - 1],
              value.label,
              value.coverId,
              startDate,
              endDate
            );
          }}
        >
          Create
        </Button>
      </Stack>
    </div>
  );
}
