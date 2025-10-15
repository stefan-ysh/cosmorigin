import Script from 'next/script';

const StructuredData = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '宇元新材',
    url: 'https://cosmorigin.com',
    logo: 'https://cosmorigin.com/logo.png',
    description: '宇元新材专注长余辉与光电功能材料研发制造，提供面向照明、安全与显示领域的高性能发光解决方案。',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
      addressLocality: '中国',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: '客户服务',
      availableLanguage: ['zh-CN'],
    },
    sameAs: [
      // 添加您的社交媒体链接
      // 'https://www.linkedin.com/company/cosmorigin',
      // 'https://twitter.com/cosmorigin',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '宇元新材',
    url: 'https://cosmorigin.com',
    description: '宇元新材专注长余辉与光电功能材料研发制造',
    inLanguage: 'zh-CN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cosmorigin.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: '长余辉发光材料',
    description: '高性能长余辉发光材料，适用于照明、安全标识、应急照明等领域',
    brand: {
      '@type': 'Brand',
      name: '宇元新材',
    },
    manufacturer: {
      '@type': 'Organization',
      name: '宇元新材',
    },
    category: '发光材料',
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
    </>
  );
};

export default StructuredData;
