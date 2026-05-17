import { Metadata } from "next";

import PlaygroundSurface from "@/components/PlaygroundSurface";
import styles from "@/styles";
import {
  absoluteUrl,
  buildAlternates,
  buildOpenGraph,
  buildTwitter,
  defaultRobots,
} from "@/lib/seo";

const pagePath = "/playground";
const pageTitle = "宇元新材发光材料效果展示";
const pageDescription =
  "预览宇元新材发光材料的直观表现，辅助快速评估灯效。";
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "发光效果预览",
    "开灯关灯模拟",
    "柔性发光体验",
    "扬州宇元新材有限公司产品发光效果预览",
    "宇元新材 playground",
    "发光材料 demo",
  ],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const PlaygroundPage = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <section className={`${styles.xPaddings} py-16`}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <PlaygroundSurface />
      </div>
    </section>
  </main>
);

export default PlaygroundPage;
