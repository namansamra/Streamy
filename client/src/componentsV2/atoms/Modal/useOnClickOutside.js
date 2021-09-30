import { useEffect } from "react";
export default function useOnClickOutside(ref, handler, toggle = true) {
  useEffect(
    () => {
      if (toggle) {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (
            !ref?.current?.children[0] ||
            ref?.current?.children[0].contains(event.target)
          ) {
            return;
          }
          console.log(event.target, "Target");
          console.log(ref, "REF VALUE");
          handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
