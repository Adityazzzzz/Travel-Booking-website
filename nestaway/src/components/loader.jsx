import React from "react";
import { cn } from "@/lib/utils";
import "../styles/loader.css";

const Loader = ({
  variant = "spinner",
  size = "md",
  className,
}) => {
  const renderLoader = () => {
    switch (variant) {
      case "dots":
        return (
          <div className={cn("loader-dots", `loader-${size}`, className)}>
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
          </div>
        );
      case "pulse":
        return (
          <div className={cn("loader-pulse", `loader-${size}`, className)}>
            <div className="pulse-ring"></div>
          </div>
        );
      case "spinner":
      default:
        return (
          <div className={cn("loader-spinner", `loader-${size}`, className)}>
            <div className="spinner-ring"></div>
          </div>
        );
    }
  };

  return (
    <div className="loader-container" data-testid="loader">
      {renderLoader()}
    </div>
  );
};

export default Loader;
