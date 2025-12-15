import { Metadata } from "next";

import PlaygroundSurface from "@/components/PlaygroundSurface";
import styles from "@/styles";
import {
  absoluteUrl,
  buildOpenGraph,
  buildTwitter,
  defaultRobots,
} from "@/lib/seo";

const pagePath = "/playground";
const pageTitle = "效果查看 Playground | 开灯/关灯实时模拟";
const pageDescription =
  "在 Playground 中预览宇元新材发光材料的开灯/关灯表现，辅助快速评估灯效。";
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
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const PlaygroundPage = () => (
  <section className={`${styles.xPaddings} py-24`}>
    <div className={`${styles.innerWidth} mx-auto`}>
      <PlaygroundSurface />
    </div>
  </section>
);

export default PlaygroundPage;