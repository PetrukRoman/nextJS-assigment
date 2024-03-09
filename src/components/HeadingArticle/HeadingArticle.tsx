import React from "react";
import styles from "./Heading.module.css";

type Props = {
  title: string;
};

const HeadingArticle: React.FC<Props> = ({ title }) => {
  return (
    <header className={styles.heading}>
      <h2>{title}</h2>
    </header>
  );
};

export default HeadingArticle;
