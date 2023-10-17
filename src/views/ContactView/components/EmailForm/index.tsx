import { HTMLAttributes } from "react";

import styles from "./index.module.scss";

const EmailForm = (props: HTMLAttributes<HTMLFormElement>) => (
  <form
    action={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
    method="get"
    {...props}
    className={`${styles.emailForm} ${props.className ? props.className : ""}`}
  >
    <p>Email Address</p>
    <input type="email" name="email" />
    <br />
    <p>Subject </p>
    <input type="text" name="subject" />
    <br />
    <p>Message</p>
    <textarea
      name="body"
      rows={5}
      cols={30}
      placeholder="Type your message here..."
    />
    <br />
    <div style={{ textAlign: "right" }}>
      <button type="submit">Send</button>
    </div>
  </form>
);

export default EmailForm;
