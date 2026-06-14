import type { Metadata } from "next";
import { BlogPageClient } from "./BlogPageClient";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Plastic Additives Blog | ARGIOPE Jindaquan",
  description:
    "Technical articles for plastic additives buyers, covering transparent impact modifiers, halogen-free flame retardants, light diffusion agents, matting agents and B2B procurement decisions.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main>
      <SiteHeader anchorPrefix="/" />
      <BlogPageClient />
    </main>
  );
}
