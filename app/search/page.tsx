"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { getCatalogStats, getProductsByCategory, searchProducts } from "../lib/product-catalog";

export default function ProductSearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchProducts(query), [query]);
  const catalogStats = getCatalogStats();
  const categoryGroups = getProductsByCategory();

  return (
    <main>
      <SiteHeader anchorPrefix="/" />

      <section className="search-hero">
        <span>Product Search</span>
        <h1>Search ARGIOPE product information</h1>
        <p>
          Search by product name, application, polymer type, performance benefit or processing requirement. Every
          product detail page is included in this catalog search.
        </p>
        <label className="search-box">
          <Search size={22} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search transparent impact modifier, flame retardant, light diffusion agent..."
          />
        </label>
      </section>

      <section className="catalog-framework-section" aria-label="Product catalog structure">
        <div className="catalog-framework-heading">
          <span>Catalog Framework</span>
          <h2>Built to expand product pages without mixing source materials</h2>
          <p>
            Products are grouped by performance target. New TDS files, product photos and application notes can be added
            into the same structure while the homepage keeps only selected core products.
          </p>
        </div>
        <div className="catalog-stats-grid">
          <strong>{catalogStats.totalProducts} products</strong>
          <strong>{catalogStats.totalCategories} categories</strong>
          <strong>{catalogStats.featuredProducts} homepage highlights</strong>
        </div>
        <div className="catalog-category-list">
          {categoryGroups.map((group) => (
            <button key={group.category} type="button" onClick={() => setQuery(group.category)}>
              <span>{group.category}</span>
              <strong>{group.products.length}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="search-results-section">
        <div className="search-results-heading">
          <span>{results.length} products found</span>
          <h2>{query ? `Results for "${query}"` : "Complete product catalog"}</h2>
        </div>

        <div className="search-results-grid">
          {results.map((product) => (
            <article className="search-result-card" key={product.slug}>
              <img src={product.image} alt={`${product.name} product sample`} />
              <div>
                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <a href={`/products/${product.slug}`}>
                  View product page
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
