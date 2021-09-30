import React from "react";
import { FcSynchronize } from "react-icons/fc";
import Button from "../../atoms/Button/Button";
import styles from "./styles.module.css";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("ERROR****ERROR****ERROR***ERROR", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={styles.container}>
          <img
            src="https://gifimage.net/wp-content/uploads/2018/11/something-went-wrong-gif.gif"
            alt=""
            srcset=""
          />
          <Button
            handler={() => {
              location.reload();
            }}
            text="Refresh"
            Icon={FcSynchronize}
            tertiary
            width="200px"
          ></Button>
          ;
        </div>
      );
    }

    return this.props.children;
  }
}
