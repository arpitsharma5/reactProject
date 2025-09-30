import React, {useEffect, useState} from "react";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch categories
        const catRes = await fetch(
            "https://fakestoreapi.com/products/categories"
        );
        if (!catRes.ok) throw new Error("Failed to fetch categories");
        const catData = await catRes.json();
        setCategories(catData);

        // Fetch products (all or by category)
        let url = "https://fakestoreapi.com/products";
        if (selectedCategory !== "all") {
          url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
        }
        const prodRes = await fetch(url);
        if (!prodRes.ok) throw new Error("Failed to fetch products");
        const prodData = await prodRes.json();
        setProducts(prodData);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
      <div style={{ maxWidth: 900, margin: "auto", padding: 20, fontFamily: "Arial" }}>
        <h1>Product Listing</h1>

        {/* Category Filter */}
        <div style={{ marginBottom: 20 }}>
          <button
              onClick={() => setSelectedCategory("all")}
              disabled={selectedCategory === "all"}
              style={{ marginRight: 8 }}
          >
            All
          </button>
          {categories.map((cat) => (
              <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  disabled={selectedCategory === cat}
                  style={{ marginRight: 8, textTransform: "capitalize" }}
              >
                {cat}
              </button>
          ))}
        </div>

        {/* Loading & Error States */}
        {loading && <p>Loading products...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Product Grid */}
        <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
              gap: 20,
            }}
        >
          {!loading && products.length === 0 && <p>No products found.</p>}
          {products.map((product) => (
              <div
                  key={product.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
              >
                <img
                    src={product.image}
                    alt={product.title}
                    style={{ height: 150, objectFit: "contain", marginBottom: 10 }}
                />
                <h3 style={{ fontSize: 16, marginBottom: 6 }}>{product.title}</h3>
                <p style={{ marginBottom: 6, fontWeight: "bold" }}>
                  ${product.price.toFixed(2)}
                </p>
                <p style={{ fontStyle: "italic", color: "#555", textTransform: "capitalize" }}>
                  {product.category}
                </p>
              </div>
          ))}
        </div>
      </div>
  );
}

export default ProductListing;