import React from "react";
import styles from "./Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPills, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { deleteProduct } from "../../Pages/ProductListPage/duck/actions";
import { useDispatch } from "react-redux";

const Product = ({ product, latestPrice }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    history.push(`/edit-product/${product.id}`);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(product.id));
  };
  return (
    <div className={styles.productCard}>
      <FontAwesomeIcon className={styles.icon} icon={faPills} size="3x" />
      <p className={styles.productName}>{product.name}</p>
      <p className={styles.productPrice}>{latestPrice.price}</p>
      <div className={styles.actionSection}>
        <Link to={""}>
          <FontAwesomeIcon
            onClick={handleEdit}
            className={styles.icon}
            icon={faEdit}
          />
        </Link>
        <Link to={""}>
          <FontAwesomeIcon
            onClick={handleDelete}
            className={styles.icon}
            icon={faTrashAlt}
          />
        </Link>
      </div>
    </div>
  );
};

export default Product;
