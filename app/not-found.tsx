import Link from 'next/link';

import styles from '@/styles';

const NotFoundPage = () => (
  <main className="site-main flex min-h-[70vh] items-center bg-[hsl(var(--surface-strong))] text-foreground">
    <div className={`${styles.innerWidth} mx-auto px-6 py-16 text-center`}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">页面不存在 / Page not found</h1>
      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
        您访问的链接可能已过期或输入有误。
        <br />
        The page you are looking for may have been moved or does not exist.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          返回首页
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-gray-50"
        >
          查看产品
        </Link>
        <Link
          href="/en"
          className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-gray-50"
        >
          English Site
        </Link>
      </div>
    </div>
  </main>
);

export default NotFoundPage;
