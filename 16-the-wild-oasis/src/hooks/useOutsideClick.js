import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          //   console.log("click outside");
          handler();
        }
      }
      // document.addEventListener("click", handleClick);

      // return () => document.removeEventListener("click", handleClick);
      document.addEventListener("mousedown", handleClick, listenCapturing);
      return () =>
        document.removeEventListener("mousedown", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
