const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "扬州宇元新材有限公司",
    "alternateName": "宇元新材",
    "description": "专注发光材料研发与生产的科技企业，提供长余辉发光粉、夜光粉、荧光材料的配方设计、晶体结构调控及量产工艺开发",
    "url": "https://cosmorigin.com",
    "logo": "https://cosmorigin.com/logo.png",
    "foundingDate": "2014",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "江苏省扬州市",
      "addressLocality": "扬州",
      "addressRegion": "江苏省",
      "postalCode": "225000",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-514-12345678",
      "contactType": "技术咨询",
      "areaServed": "CN",
      "availableLanguage": ["zh-CN", "en"]
    },
    "sameAs": [
      "https://www.tiktok.com/@cosmorigin"
    ],
    "knowsAbout": [
      "发光材料研发",
      "长余辉发光粉",
      "稀土发光材料",
      "配方设计",
      "晶体结构调控",
      "量产工艺开发"
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
    "@type": "ResearchProject",
    "name": "发光材料研发服务",
    "description": "提供发光材料配方设计、晶体结构调控、量产工艺开发的全流程研发服务",
    "provider": {
      "@type": "Organization",
      "name": "扬州宇元新材有限公司"
    },
    "specialty": [
      "高稳定性稀土长余辉体系",
      "环保配方开发",
      "智能化质量追溯",
      "量产工艺优化"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "长余辉发光粉系列",
    "description": "高性能稀土长余辉发光粉，具有高亮度、长余辉、环保无毒特性",
    "brand": {
      "@type": "Brand",
      "name": "宇元新材"
    },
    "category": "发光材料",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "面议",
      "priceCurrency": "CNY"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
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
    </>
  );
};

export default StructuredData;
