import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from "react";

import LinkedInIcon from "@/../public/linkedin.svg";
import GitHubIcon from "@/../public/github.svg";

import styles from "./index.module.scss";

import map from "lodash/map";
import EmailForm from "./components/EmailForm";
import ContactButton from "./components/ContactButton";
import type { ContactButtonProps } from "./components/ContactButton/types";

const buttons = [
  {
    title: "GitHub",
    href: `${process.env.NEXT_PUBLIC_GITHUB_URL}`,
    icon: GitHubIcon.src,
  },
  {
    title: "LinkedIn",
    href: `${process.env.NEXT_PUBLIC_LINKEDIN_URL}`,
    icon: LinkedInIcon.src,
  },
] as const;

const ContactView = forwardRef(
  (
    { className, ...props }: ComponentPropsWithoutRef<"div">,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      ref={ref}
      className={`${className ?? ""} ${styles.container}`}
      {...props}
    >
      <div className={`${styles.innerContainer}`}>
        <span
          style={{
            fontSize: "1.75rem",
            color: "#444",
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          Contact
        </span>
        {map(buttons, (buttonProps: ContactButtonProps, index: Number) => (
          <ContactButton key={`button-${index}`} {...buttonProps} />
        ))}

        <span style={{ fontSize: "1.2rem", color: "#444" }}>OR</span>

        <div className={`${styles.formContainter}`}>
          <EmailForm />
        </div>
      </div>
    </div>
  ),
);

ContactView.displayName = "ContactView";

export default ContactView;
