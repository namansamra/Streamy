import React from "react";
import { CircularProgress } from "@material-ui/core";
import styles from "./Button.module.css";

function getIcon(Icon, iconReverse, iconSize) {
  if (!Icon) return;
  return (
    <Icon
      style={{ fontSize: iconSize }}
      className={`${styles.buttonIcon} ${
        iconReverse ? styles.iconReverse : ""
      }`}
    />
  );
}

function getButtonContent(loading, text, Icon, iconReverse, iconSize) {
  if (loading) return <CircularProgress color={"white"} size={"1.1rem"} />;

  if (Icon) {
    return (
      <>
        <span>{text}</span> {getIcon(Icon, iconReverse, iconSize)}
      </>
    );
  } else return <span>{text}</span>;
}

export default function Button({
  text = "Confirm",
  Icon = null,
  loading = false,
  handler = () => {},
  secondary,
  tertiary,
  iconReverse,
  width = "100%",
  fontSize = 14,
  height = 40,
  fontWeight = 600,
  borderRadius = "4px",
  disabled,
  marginTop,
  style = {},
  iconSize,
  customClass = "",
  props,
}) {
  disabled = loading || disabled;
  return (
    <button
      className={`${styles.button} ${secondary ? styles.secondary : ""} ${
        tertiary ? styles.tertiary : ""
      } ${customClass} `}
      onClick={handler}
      type="submit"
      disabled={disabled}
      style={{
        width,
        fontSize,
        height,
        fontWeight,
        borderRadius,
        marginTop,
        ...style,
      }}
      {...props}
    >
      <div
        className={`${styles.buttonContent} ${
          iconReverse ? styles.iconReverse : ""
        }`}
      >
        {getButtonContent(loading, text, Icon, iconReverse, iconSize)}
      </div>
    </button>
  );
}
