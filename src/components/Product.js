import React from "react";
import "./Product.css";

import allobaby from "../images/allobaby.jpg";
import allodoc from "../images/allodoc.jpg";
import allogate from "../images/allogate.jpg";
import allolab from "../images/allolab.jpg";

const products = [
  {
    name: "AlloBaby",
    image: allobaby,
  },
  {
    name: "AlloDoc",
    image: allodoc,
  },
  {
    name: "AlloGate",
    image: allogate,
  },
  {
    name: "AlloLab",
    image: allolab,
  },
];

const ProductGallery = () => {
  return (
    <section className="product-section" id="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="highlight-text">
          Empowering maternal healthcare through innovation
        </p>
        <p className="product-description">
          At Savemom, we offer a suite of digital healthcare products designed
          to support mothers from pregnancy to postpartum. Our products ensure
          access to medical support, monitoring, and guidance — all in one
          place.
        </p>

        <div className="product-grid">
          {products.map((product, index) => (
            <div className={`product-card product-card-${index}`} key={index}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <button className="btn">Product Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
