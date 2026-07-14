import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, FileText, Search } from "lucide-react";
import { SiteHeader } from "../../components/SiteHeader";
import { getProductBySlug, productCatalog } from "../../lib/product-catalog";
import { getGradeGroupsByProductSlug } from "../../lib/product-grades";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return productCatalog.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | ARGIOPE Jindaquan`,
    description: product.summary,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const gradeGroups = getGradeGroupsByProductSlug(product.slug);

  return (
    <main>
      <SiteHeader anchorPrefix="/" />

      <section className="product-detail-hero">
        <div className="product-detail-copy">
          <span>{product.category}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="product-detail-actions">
            <a className="button button-primary" href="/#contact">
              Request quotation
              <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="/tds">
              <FileText size={18} />
              Request TDS / SDS
            </a>
          </div>
        </div>
        <div className="product-detail-media">
          <img src={product.image} alt={`${product.name} product sample`} />
        </div>
      </section>

      <section className="product-detail-section">
        <article>
          <span>Product Overview</span>
          <h2>{product.summary}</h2>
          <p>{product.description}</p>
        </article>

        {gradeGroups.length > 0 ? (
          <div className="product-grade-panel">
            <span>Representative Grades</span>
            <h3>Available model references for this product family</h3>
            <div className="product-grade-groups">
              {gradeGroups.map((group) => (
                <article key={group.product}>
                  <strong>{group.product}</strong>
                  <p>{group.summary}</p>
                  <div className="product-grade-tags">
                    {group.grades.map((grade) => (
                      <span key={grade}>{grade}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        <div className="product-detail-grid">
          <div>
            <h3>Applicable Materials</h3>
            <ul>
              {(product.materials || ["General-purpose plastic systems"]).map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Typical Applications</h3>
            <ul>
              {product.applications.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Key Benefits</h3>
            <ul>
              {product.benefits.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Selection Notes</h3>
            <ul>
              {product.processing.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="product-search-strip">
        <div>
          <Search size={22} />
          <strong>Need another additive?</strong>
          <span>Search every product page, keyword and application scenario in the ARGIOPE catalog.</span>
        </div>
        <a className="button button-primary" href="/search">
          Search products
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}
