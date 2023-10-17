import type { ContactButtonProps } from "./types";

import styles from "./index.module.scss";
import Image from "next/image";

const ContactButton = ({ title, href, icon }: ContactButtonProps) => (
  <a
    className={`${styles.anchorButton}`}
    href={href}
    style={{
      position: "relative",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Image
      src={icon}
      alt={`${title}-icon`}
      width={40}
      height={40}
      style={{ marginRight: 8 }}
    />
    <span>{title}</span>
  </a>
);

export default ContactButton;
