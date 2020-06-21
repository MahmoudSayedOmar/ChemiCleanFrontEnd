import React from "react";

import { List, Button, Spin, Space } from "antd";
import { ProductItem } from "../product-item";
import "./product-list.css";

export function ProductList({ products, loading, onLoadMore }) {
  const loadMore =
    loading == false ? (
      <div className="product-list__load-more">
        <Button onClick={onLoadMore} className="product-list__load-more-btn">
          Load more
        </Button>
      </div>
    ) : (
      <div></div>
    );

  return (
    <List
      header={<div className="product-list__header">Products</div>}
      className="product-list"
      loading={loading}
      itemLayout="vertical"
      loadMore={loadMore}
      dataSource={products}
      renderItem={(product) => (
        <List.Item className=".product-list__item">
          <ProductItem product={product}></ProductItem>
        </List.Item>
      )}
    />
  );
}
