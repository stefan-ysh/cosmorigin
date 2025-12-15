import { Metadata } from "next";
import PlaygroundSurface from "@/components/PlaygroundSurface";
import styles from "@/styles";

export const metadata: Metadata = {
  title: "效果查看 - 宇元新材发光体验场",
  description:
    "进入效果查看 Playground，自由切换开灯 / 关灯模式，查看宇元新材在温室、建筑立面、智能座舱等场景的发光表现。",
  alternates: {
    canonical: "/playground",
  },
};

const PlaygroundPage = () => (
  <section className={`${styles.xPaddings} py-24`}>
    <div className={`${styles.innerWidth} mx-auto`}>
      <PlaygroundSurface />
    </div>
  </section>
);

export default PlaygroundPage;