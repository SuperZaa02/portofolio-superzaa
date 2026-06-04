export function Head() {
  return (
    <>
      {/* Basic */}
      <meta
        name="keywords"
        content="SuperZaa, Faeza Raziq, Portfolio, Full Stack Developer, Web Developer, React, Next.js, TypeScript, Node.js, Informatics Student"
      />

      <meta
        name="author"
        content="Faeza Raziq"
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="theme-color"
        content="#3c83f6"
      />

      {/* Canonical */}
      <link
        rel="canonical"
        href="https://superzaa.my.id"
      />

      {/* Favicon */}
      <link
        rel="icon"
        href="/favicon.ico"
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content="https://superzaa.my.id"
      />

      <meta
        property="og:title"
        content="SuperZaa | Full Stack Developer & Informatics Student"
      />

      <meta
        property="og:description"
        content="Official portfolio of SuperZaa (Faeza Raziq). Explore projects, skills, experience, and contact information."
      />

      <meta
        property="og:image"
        content="https://superzaa.my.id/assets/image/others/og-image.png"
      />

      <meta
        property="og:site_name"
        content="SuperZaa Portfolio"
      />

      <meta
        property="og:locale"
        content="en_US"
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content="SuperZaa | Full Stack Developer & Informatics Student"
      />

      <meta
        name="twitter:description"
        content="Official portfolio of SuperZaa (Faeza Raziq). Explore projects, skills, experience, and contact information."
      />

      <meta
        name="twitter:image"
        content="https://superzaa.my.id/assets/image/others/og-image.png"
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Faeza Raziq",
            alternateName: "SuperZaa",
            url: "https://superzaa.my.id",
            jobTitle: "Full Stack Developer",
            description:
              "Full Stack Developer, Informatics Student, and Open Source Enthusiast",
            sameAs: [
              "https://github.com/SuperZaa02",
              "https://www.linkedin.com/in/faeza-raziq-b5a645393",
            ],
          }),
        }}
      />
    </>
  );
}