import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { SearchSvg } from "../svg/commonSvg";

import "./search.css";

function SearchField({ placeholder, bgcolor,value,onChange }) {
  const [isFocus, setIsFocus] = useState(true);

  document.addEventListener("click", (event) => {
    const element = document.getElementById("searchInputBox");
    const isClicked = element.contains(event.target);
    if (isClicked) {
      setIsFocus(false);
    } else {
      setIsFocus(true);
    }
  });

  return (
    <div className="w-100 fieldContainer " id="searchInputBox">
      <Form.Control
        placeholder={placeholder}
        style={{ backgroundColor: bgcolor }}
        value={value}
        onChange={onChange}
      />
      {isFocus && (
        <span className="fieldIcon">
         <SearchSvg></SearchSvg>
        </span>
      )}
    </div>
  );
}

export default SearchField;
