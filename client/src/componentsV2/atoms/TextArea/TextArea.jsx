import React, { useState } from "react";
import styles from "./styles.module.css";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Label from "../Label/Label";
import WordCounter from "../WordCounter/WordCounter";

function errorMessage(errMsg) {
  return <div className={styles.errMsg}>{errMsg}</div>;
}

function showIcon(Icon, type, passwordViewer, visible) {
  if (type == "password")
    return (
      <span onClick={passwordViewer} className={styles.rightIcon}>
        {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
      </span>
    );

  if (Icon) {
    return (
      <span className={styles.rightIcon}>
        <Icon />
      </span>
    );
  }
}

function showCounter(focus, counter, _counter, maxLength) {
  if (counter && focus)
    return <WordCounter maxLength={maxLength} length={_counter} />;
  else return null;
}

function TextArea({
  placeholder = "Type here",
  autoFocus = false,

  errMsg = null,
  validatorFun = () => {
    error: false;
  },
  Icon = null,
  type = "text",
  width = "100%",
  label = "Label",
  counter = false,
  maxLength,
  minLength = 0,
  rowsMin = 3,
  props,
  noItalics,
}) {
  const [visible, setVisible] = useState(false);
  const [focus, setFocus] = useState(false);
  const [_counter, setCounter] = useState(0);

  function passwordViewer() {
    setVisible(!visible);
  }
  function getType(type) {
    if (type != "password") return type;
    else {
      return visible ? "text" : "password";
    }
  }

  return (
    <div>
      <Label
        required={props.required}
        label={label}
        className={styles.label}
      ></Label>
      <div style={{ width }} className={styles.inputContainer}>
        <TextareaAutosize
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          rowsMin={rowsMin}
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          onInput={(e) => setCounter(e.target.value.length)}
          type={getType(type, visible)}
          placeholder={placeholder}
          {...props}
          className={noItalics && styles.noItalics}
        />
        {showIcon(Icon, type, passwordViewer, visible)}
        {showCounter(focus, counter, _counter, maxLength)}
      </div>

      {errorMessage(errMsg)}
    </div>
  );
}

export default TextArea;
