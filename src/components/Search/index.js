// src/components/Search/index.js

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// React & Redux imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const handleTextChange = (e) => {};

export default function Search() {
  const [options, setOptions] = useState(["monday", "tuesday"]);

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  // sample dropdown options
  //   const options = ["monday", "tuesdar"];

  return (
    <div>
      <h3>Search</h3>
      <Autocomplete
        disablePortal
        id="search-bar"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Book" />}
      />
    </div>
  );
}
