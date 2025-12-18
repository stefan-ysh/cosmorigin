const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "扬州宇元新材有限公司",
    "alternateName": "宇元新材",
    "description": "专注新型柔性发光材料研发与生产，全球首个纳米级连续生产自发光材料",
    "url": "https://cosmorigin.com",
    "logo": "https://cosmorigin.com/logo.png",
    "foundingDate": "2014",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "江苏省扬州市邢江区开发西路213号609室",
      "addressLocality": "扬州",
      "addressRegion": "江苏省",
      "postalCode": "225000",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-185-7841-2005",
      "contactType": "技术咨询",
      "email": "contact@cosmorigin.com",
      "areaServed": "CN",
      "availableLanguage": ["zh-CN", "en"]
    },
    "sameAs": [
      "https://www.tiktok.com/@cosmorigin"
    ],
    "knowsAbout": [
      "柔性发光材料",
      "发光油漆",
      "发光纤维丝",
      "发光膜",
      "汽车发光应用",
      "智慧农业发光",
      "应急救援发光"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "宇元新材 - 发光材料专家",
    "description": "发光材料研发与生产专家",
    "url": "https://cosmorigin.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cosmorigin.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const researchServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "发光材料定制服务",
    "description": "提供发光油漆、发光纤维丝、发光膜的定制化解决方案",
    "provider": {
      "@type": "Organization",
      "name": "扬州宇元新材有限公司"
    },
    "areaServed": "CN",
    "serviceType": "材料研发与生产"
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "柔性发光材料系列",
    "description": "全球首个米级连续生产自发光材料，包括发光油漆、发光纤维丝、发光膜，3260小时水下稳定性认证，支持多色定制",
    "image": "https://cosmorigin.com/cosmorigin-logo.png",
    "brand": {
      "@type": "Brand",
      "name": "宇元新材"
    },
    "category": "发光材料",
    "material": "柔性光纤维/光漆/光膜",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "50",
      "priceCurrency": "CNY",
      "url": "https://cosmorigin.com/products"
    },
    "hasVariant": [
      {
        "@type": "Product",
        "name": "发光油漆",
        "url": "https://cosmorigin.com/products"
      },
      {
        "@type": "Product",
        "name": "发光纤维丝",
        "url": "https://cosmorigin.com/products"
      },
      {
        "@type": "Product",
        "name": "发光膜",
        "url": "https://cosmorigin.com/products"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  // 百度推荐使用数组形式的 SiteNavigationElement
  const navSchemaItems = [
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "解决方案",
      "url": "https://cosmorigin.com/solutions"
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "产品",
      "url": "https://cosmorigin.com/products"
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "案例",
      "url": "https://cosmorigin.com/cases"
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "关于我们",
      "url": "https://cosmorigin.com/about"
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "联系",
      "url": "https://cosmorigin.com/contact"
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://cosmorigin.com" },
      { "@type": "ListItem", "position": 2, "name": "解决方案", "item": "https://cosmorigin.com/solutions" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {navSchemaItems.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default StructuredData;
