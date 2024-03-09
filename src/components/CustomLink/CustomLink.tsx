import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./Link.module.css";

type Props = {
  to: string;
  children: ReactNode;
};

const CustomLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link href={to} className={styles.customLink}>
      {children}
    </Link>
  );
};

export default CustomLink;
