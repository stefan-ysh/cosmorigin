import JsonLd from '@/components/JsonLd';
import { company, sameAs } from '@/lib/site';

const SiteStructuredData = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.zhName,
    legalName: company.zhName,
    alternateName: ['宇元新材', company.brandName, company.enName],
    description: '研发柔性发光与轻量化防辐射复合材料，提供材料配方、复合结构、样件与应用验证服务',
    url: 'https://cosmorigin.com',
    logo: 'https://cosmorigin.com/cosmorigin-logo.png',
    foundingDate: '2014',
    areaServed: ['CN', 'Global'],
    knowsLanguage: ['zh-CN', 'en'],
    slogan: '先进功能材料与原创解决方案',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.addressZh,
      addressLocality: '扬州',
      addressRegion: '江苏省',
      postalCode: '225000',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.phoneHref,
      contactType: '技术咨询',
      email: company.email,
      areaServed: 'CN',
      availableLanguage: ['zh-CN', 'en'],
    },
    sameAs,
    knowsAbout: [
      '柔性发光材料',
      '发光油漆',
      '发光纤维丝',
      '发光膜',
      '电致发光线缆',
      '3D 打印发光辅材',
      '汽车发光应用',
      '智慧农业发光',
      '应急救援发光',
      '文旅夜游发光装置',
      '轻量化防辐射材料',
      '辐射屏蔽复合材料',
      '医用铅衣减重替代材料',
      'flexible luminescent materials',
      'luminescent paint',
      'luminescent fiber',
      'glow film',
      'electroluminescent wire',
      '3D-printing luminescent additives',
      'lightweight radiation-shielding composites',
      'lead apron alternative materials',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '宇元新材 - 发光材料专家',
    description: '发光材料研发与生产专家',
    url: 'https://cosmorigin.com',
  };

  const researchServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '先进功能材料定制服务',
    description: '提供柔性发光与轻量化防辐射复合材料的配方、结构、样件和联合验证服务',
    provider: {
      '@type': 'Organization',
      name: company.zhName,
    },
    areaServed: 'CN',
    serviceType: '先进功能材料研发与验证',
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: '柔性发光材料系列',
    description:
      '全球首个米级连续生产自发光材料，包括发光油漆、发光纤维丝、发光膜，3260小时水下稳定性认证，支持多色定制',
    image: 'https://cosmorigin.com/cosmorigin-logo.png',
    brand: {
      '@type': 'Brand',
      name: '宇元新材',
    },
    category: '发光材料',
    material: '柔性光纤维/光漆/光膜',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: 'https://cosmorigin.com/products',
    },
    hasVariant: [
      {
        '@type': 'Product',
        name: '发光油漆',
        url: 'https://cosmorigin.com/products',
      },
      {
        '@type': 'Product',
        name: '发光纤维丝',
        url: 'https://cosmorigin.com/products',
      },
      {
        '@type': 'Product',
        name: '发光膜',
        url: 'https://cosmorigin.com/products',
      },
    ],
  };

  const navSchemaItems = [
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: '解决方案',
      url: 'https://cosmorigin.com/solutions',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: '产品',
      url: 'https://cosmorigin.com/products',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: '案例',
      url: 'https://cosmorigin.com/cases',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: '关于我们',
      url: 'https://cosmorigin.com/about',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: '联系',
      url: 'https://cosmorigin.com/contact',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: 'https://cosmorigin.com' },
      { '@type': 'ListItem', position: 2, name: '解决方案', item: 'https://cosmorigin.com/solutions' },
    ],
  };

  return (
    <JsonLd
      data={[
        organizationSchema,
        websiteSchema,
        researchServiceSchema,
        productSchema,
        ...navSchemaItems,
        breadcrumbSchema,
      ]}
    />
  );
};

export default SiteStructuredData;
