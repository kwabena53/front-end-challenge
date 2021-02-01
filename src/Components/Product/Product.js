import React from "react";
import styles from "./Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPills, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Product = ({ name, latestPrice }) => {
  return (
    <div className={styles.productCard}>
      <FontAwesomeIcon className={styles.icon} icon={faPills} size="3x" />
      <p className={styles.productName}>{name}</p>
      <p className={styles.productPrice}>{latestPrice}</p>
      <div className={styles.actionSection}>
        <FontAwesomeIcon className={styles.icon} icon={faEdit} />
        <FontAwesomeIcon className={styles.icon} icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default Product;
