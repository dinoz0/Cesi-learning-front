import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

export interface Props {
  id: string;
  name: string;
  description: string;
}

function ListeCours(props: Props) {
  return (
    <div className={styles.grid}>
      <Link href={`/cours/${props.id}`}>
        <a className={styles.card}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </a>
      </Link>
    </div>
  );
}

export default ListeCours;
