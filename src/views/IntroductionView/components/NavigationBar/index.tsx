import React, { HTMLAttributes } from "react";

import styles from "./index.module.scss";

const NavigationBar = ({
  onAbout,
  onExperience,
  onContact,
  className,
  ...props
}: {
  onAbout: () => void;
  onExperience: () => void;
  onContact: () => void;
} & HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`${className ?? ""} relative sm:p-8 sm:text-right text-center`}
      {...props}
    >
      <button
        className={`sm:text-2xl text-xl p-4 text-white`}
        onClick={onAbout}
      >
        <span className={`${styles.underline}`}>About</span>
      </button>
      <button
        className={`sm:text-2xl text-xl p-4 text-white`}
        onClick={onExperience}
      >
        <span className={`${styles.underline}`}>Experience</span>
      </button>
      <button
        className={`sm:text-2xl text-xl p-4 text-white`}
        onClick={onContact}
      >
        <span className={`${styles.underline}`}>Contact</span>
      </button>
    </div>
  );
};

export default NavigationBar;
