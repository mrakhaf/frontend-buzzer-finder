import React from "react";
import styles from "./index.module.css";
import { ButtonTypes, Props } from "./types";

const getButtonVariant = (variant: ButtonTypes) => {
  switch (variant) {
    case "primary":
      return styles.primary;
    case "secondary":
      return styles.secondary;
    default:
      return styles.primary;
  }
};

export default function Button({
  type,
  variant,
  onClick,
  children,
  as,
  className,
  ...otherprops
}: Props) {
  return (
    <button
      type={type}
      className={`${styles.button} ${getButtonVariant(variant)} ${className}`}
      onClick={onClick}
      {...otherprops}
    >
      {children}
    </button>
  );
}
