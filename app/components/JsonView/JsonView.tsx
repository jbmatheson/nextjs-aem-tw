"use client";

import "react18-json-view/src/style.css";
// Assets
import "./JsonView.css";

import PropTypes, { InferProps } from "prop-types";
import { useEffect, useState } from "react";

import ReactJsonView from "react18-json-view";

export function JsonView({ src }: InferProps<typeof JsonView.propTypes>) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "i") {
        setHidden(!hidden);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [hidden]);

  return (
    <ReactJsonView
      className={`${hidden ? "hidden" : ""}`}
      src={src}
      collapsed
    />
  );
}

JsonView.propTypes = {
  src: PropTypes.any.isRequired,
};
