const StructuredData = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '扬州宇元新材有限公司',
    url: 'https://cosmorigin.com',
    logo: 'https://cosmorigin.com/logo.png',
    description: '扬州宇元新材有限公司专注长余辉与光电功能材料研发制造，提供面向照明、安全与显示领域的高性能发光解决方案。',
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
    name: '扬州宇元新材有限公司',
    url: 'https://cosmorigin.com',
    description: '扬州宇元新材有限公司专注长余辉与光电功能材料研发制造',
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
};

export default StructuredData;
