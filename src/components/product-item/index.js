import React from "react";
import { Tag } from "antd";
import "./product-item.css";

export function ProductItem({ product }) {
  return (
    <div className="card">
      <div className="card__info">
        <h3 className="card__product-name">{product.productName}</h3>
        <p className="card__supplier-name">{product.supplierName}</p>
      </div>
      <div className="card__notes">
        <h3>Notes</h3>
        {product.isAvailable ? (
          <Tag color="green">data sheet is avaliable</Tag>
        ) : (
          <Tag color="red">data sheet not avaliable right now</Tag>
        )}
        {product.isUpdatedInLastThreeDays ? (
          <Tag color="blue">this file was updated in the last 3 days</Tag>
        ) : null}
      </div>
    </div>
  );
}
