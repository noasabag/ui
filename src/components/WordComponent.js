import "../pages/word.css";
import React, { useCallback, useEffect, useState } from "react";
import "../pages/text.css";
import axios from "axios";
const WordComponent = (props) => {
  const [word, setWord] = useState("");
  const { wordNtranslate } = props;
  const onclickHandler = useCallback(async () => {
    const option = {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: { ...wordNtranslate },
    };

    await axios(`http://localhost:3001/word/addWordToTheList`, option)
      .then((response) => {})
      .catch((e) => {
        console.log("whhattt" + e);
      });
  }, [wordNtranslate]);
  return (
    <div className="text">
      <p>
        {props.wordNtranslate.nativeWord} : {props.wordNtranslate.translate}
      </p>
      <button onClick={onclickHandler}>save</button>
    </div>
  );
};
export default WordComponent;
