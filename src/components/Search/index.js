// src/components/Search/index.js

import "./search.css";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// React & Redux imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import actions
import { fetchBooksByTitle } from "../../store/search/actions";
import { initialBooks } from "../../store/search/actions";
import { createNewDiscussion } from "../../store/search/actions";

// Import Selectors
import { selectSearchBooks } from "../../store/search/selectors.js";
import Loading from "../Loading";

export default function Search() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState("");
  const options = useSelector(selectSearchBooks);
  const [value, setValue] = React.useState("");

  // check if search was done yet
  const [postSearch, setPostSearch] = useState(false);

  useEffect(() => {
    // TODO: this is not working, not urgent.
    dispatch(initialBooks);
  }, [dispatch]);

  function submitCreateDiscussion(event) {
    event.preventDefault();

    const coverId = `https://covers.openlibrary.org/b/id/${value.coverId}-M.jpg`;

    dispatch(
      createNewDiscussion(
        value.lccn[value.lccn.length - 1],
        value.label,
        coverId
      )
    );

    setInputValue("");
    setValue("");
    setPostSearch(true);
  }

  return (
    <div className="search-stack">
      {!postSearch ? (
      <h3 className="title">Search for a book</h3>
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
        <Button variant="contained" onClick={submitCreateDiscussion}>
          Create
        </Button>
      </Stack>
  )
}
    </div>
  );
}
