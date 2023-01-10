import React, { useCallback, useEffect, useState } from "react";
import "../pages/text.css";
import axios from "axios";
import Word from "./WordComponent";
import WordComponent from "./WordComponent";
const DisplayText = (props) => {
  const [wordNtranslate, setWordNtranslate] = useState({});

  const sendWordToTranslator = useCallback(async (nativeWord, sourceText) => {
    const option = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    await axios(`http://localhost:3001/word/translate/${nativeWord}`, option)
      .then((response) => {
        setWordNtranslate({ nativeWord, translate: response.data, sourceText });
      })
      .catch((e) => {
        console.log("ee" + e);
      });
  }, []);

  const { text, title } = props;
  const splitedText = text.split(" ");
  const displaytext = () =>
    splitedText.map((nativeWord) => (
      <span
        onClick={() => {
          sendWordToTranslator(nativeWord, title);
        }}
      >
        {nativeWord}{" "}
      </span>
    ));

  return (
    <div>
      <h1 className="title-text">{title}</h1>
      <p className="text"> {displaytext()}</p>
      <WordComponent title={title} wordNtranslate={wordNtranslate} />
    </div>
  );
};
export default DisplayText;
