import Image from 'next/image';
import styles from '@/styles';

const galleryItems = [
  {
    title: '发光油漆',
    subtitle: '低能耗 · 可定制',
    image: '/发光油漆.jpg',
  },
  {
    title: '发光纤维丝',
    subtitle: '柔性耐弯 · 织物级',
    image: '/发光纤维丝.jpg',
  },
  {
    title: '发光膜/薄膜',
    subtitle: '轻薄可贴合',
    image: '/发光膜.jpg',
  },
  {
    title: '3D 打印辅材',
    subtitle: '小批量验证',
    image: '/宇元新材发光材料制成的3D打印辅材.jpg',
  },
  {
    title: '应用场景',
    subtitle: '文旅 · 装置',
    image: '/宇元新材公司.png',
  },
  {
    title: '材料样品',
    subtitle: '稳定可靠',
    image: '/cover.jpg',
  },
];

const ProductGallery = () => (
  <section className={`${styles.paddings} bg-white border-t border-border/60`}>
    <div className={`${styles.innerWidth} mx-auto`}>
      <div className="section-title text-center">
        <h3>产品与应用一览</h3>
        <p>PRODUCTS & APPLICATIONS</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <div key={item.title} className="panel hover-card hover-zoom overflow-hidden">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              <h4 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductGallery;
