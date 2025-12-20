# 官网展示 (Sitelinks) SEO 优化指南

## 已完成的工作

✅ **结构化数据更新**
- [components/StructuredData.tsx](components/StructuredData.tsx) 已加入两个新 schema：
  - `SiteNavigationElement` - 主导航结构
  - `BreadcrumbList` - 面包屑导航

✅ **首页 HTML 验证**
- 生产构建已完成，新 schema 成功渲染到 `/index.html`
- 确认包含：`解决方案` → `https://cosmorigin.com/solutions` 等链接

✅ **基础设施**
- `public/sitemap.xml` 已覆盖全部页面 (9 个 URL)
- `public/robots.txt` 配置正确，包含 Baidu 和 Google 特殊指令
- Baidu 站点验证已配置 (codeva-da22ppmgjE)

---

## 下一步行动计划

### 1. 验证结构化数据 (Rich Results 测试)

**Google 富媒体结果测试：**
```bash
# 在以下地址使用 Google 的富媒体结果测试工具
# https://search.google.com/test/rich-results

# 输入你的网址：https://cosmorigin.com
# 点击"测试网址"，检查是否通过，重点看：
# ✓ Organization schema 是否识别
# ✓ SiteNavigationElement 是否被认可
# ✓ BreadcrumbList 是否正确显示
```

**Baidu 结构化数据验证：**
```bash
# 使用百度结构化数据工具
# https://zhanzhang.baidu.com/tools/stancheck

# 输入你的网址：https://cosmorigin.com
# 检查以下几点：
# ✓ 能否正确识别 Organization、WebSite
# ✓ 能否识别 SiteNavigationElement（百度可能不完全支持，但要有）
# ✓ 能否正确识别 BreadcrumbList
```

### 2. 重新提交 Sitemap 并推送

**Google Search Console：**
```bash
1. 访问 https://search.google.com/search-console
2. 进入你的 cosmorigin.com 资源
3. 左菜单 → "网站地图" → "新增网站地图"
4. 输入：https://cosmorigin.com/sitemap.xml
5. 点击"提交"（如果已提交过，点击"重新下载"强制刷新）
6. 检查"状态"是否为"成功"
```

**Baidu 站长平台：**
```bash
1. 访问 https://zhanzhang.baidu.com
2. 进入你的站点 → 数据提交
3. 选择"网站地图" → 选择链接（推送网址）或选择 Sitemap
4. 输入或上传：https://cosmorigin.com/sitemap.xml
5. 点击"提交"
6. 返回"页面索引"检查收录情况

# 如果需要手动推送新 URL
# 复制以下链接到站长平台的"链接提交"：
https://cosmorigin.com/
https://cosmorigin.com/solutions
https://cosmorigin.com/products
https://cosmorigin.com/about
https://cosmorigin.com/cases
https://cosmorigin.com/contact
```

### 3. 完善机构资料（关键）

**Google Search Console：**
```bash
1. 进入 https://search.google.com/search-console
2. 左菜单 → "外观" → "品牌信息"（或"搜索外观"）
3. 上传网站 LOGO：推荐上传 /public/cosmorigin-logo.png
4. 填写组织简介和联系方式
5. 确保与 [lib/seo.ts] 和 [components/StructuredData.tsx] 数据一致
```

**Baidu 站长平台（重要）：**
```bash
1. 访问 https://zhanzhang.baidu.com
2. 进入你的站点 → 验证和服务
3. 点击"网站属性" → "企业/机构信息" 或 "官网保护"
4. 填写以下信息：
   ✓ 企业名称：扬州宇元新材有限公司 / 宇元新材
   ✓ ICP 备案号：（你的 ICP 号）
   ✓ 企业法人/负责人：（你的信息）
   ✓ 联系电话：+86-185-7841-2005
   ✓ 公司地址：江苏省扬州市邢江区开发西路213号609室
   ✓ 企业 LOGO：上传 /public/cosmorigin-logo.png
   ✓ 官方网站：https://cosmorigin.com

5. 点击"保存"并等待百度验证（通常 1-3 个工作日）
```

### 4. 申请"官网保护/展示"（Baidu Sitelinks）

**重要前置条件：**
- 站点运营至少 6 个月（或有足够的权重信号）
- 完成企业信息认证
- 结构化数据完整（已做 ✓）
- ICP 备案完整（需自己确认）
- 在百度统计和百度站长平台已正常运营

**官网展示申请流程：**
```bash
1. 访问 https://zhanzhang.baidu.com
2. 进入你的站点 → 搜索外观 / 品牌信息
3. 找到"官网保护" 或 "网站品牌展示"选项
4. 点击"申请官网展示"或"申请官网保护"
5. 按要求填写：
   ✓ 官网首选域：https://cosmorigin.com
   ✓ 官方网址列表（深链接）：
     - 解决方案：https://cosmorigin.com/solutions
     - 产品矩阵：https://cosmorigin.com/products  
     - 案例展示：https://cosmorigin.com/cases
     - 关于我们：https://cosmorigin.com/about
     - 联系我们：https://cosmorigin.com/contact
   ✓ 提交证明（营业执照、ICP 备案截图等）
6. 提交申请，通常 5-15 个工作日内有回复
```

---

## 加强 SEO 信号的额外建议

### 内容和链接优化

**在每个重点页面添加中文 H1/H2：**
- `/solutions` 页面：加入 H1 "柔性发光材料解决方案"
- `/products` 页面：加入 H1 "发光油漆、纤维丝、发光膜产品矩阵"
- `/about` 页面：加入 H1 "关于宇元新材"
- `/cases` 页面：加入 H1 "应用案例"

**内部链接检查：**
```bash
# 确保以下位置的链接都是普通 <a> 标签（非 JS-only）：
# 1. components/Navbar.tsx - 主导航
# 2. components/Footer.tsx - 底部导航和友链
# 3. 各个 section 组件中的 CTA 链接
# 4. 让爬虫能够轻易发现所有深层页面
```

### 性能和速度优化

```bash
# 这些会影响 Sitelinks 资格：
# 1. Core Web Vitals - 确保 LCP、FID、CLS 都在 "good" 范围
#    - 本站已使用 Next.js + Tailwind，应该不错
# 2. 移动端速度 - Google PageSpeed Insights 测试
#    - 访问 https://pagespeed.web.dev/
#    - 输入 https://cosmorigin.com
#    - 目标：移动端 > 75
# 3. 确保没有 404 错误、重定向链
```

### 定期监控和更新

**设置监控计划：**
```bash
# 每周检查一次：
1. Google Search Console → 覆盖范围：是否有新错误
2. Google Search Console → 性能报告：点击率和排名变化
3. Baidu 站长平台 → 数据概览 → 抓取配额、收录情况

# 每月检查一次：
1. 运行 https://search.google.com/test/rich-results（验证 schema）
2. 检查竞争对手有没有 Sitelinks，对标优化
3. 分析内部链接是否充分

# 检查官网展示申请进度：
1. Baidu 站长平台定期查看官网展示申请状态
2. 如被拒，查看拒绝原因并改进后再申请
3. 如已通过，监控 Baidu 搜索结果中是否显示 Sitelinks
```

---

## 预期效果

**成功指标：**
1. **Google**：1-4 周内，在搜索 "宇元新材" 或 "发光材料" 时，首页下方可能出现 2-4 个 Sitelinks
2. **Baidu**：2-8 周内，在百度搜索 "宇元新材" 或 "发光材料" 时，有机会显示"官网"标签 + Sitelinks

**CTR 提升预期：**
- Sitelinks 通常能提升首页 CTR 15-30%
- 帮助用户快速进入所需页面，降低跳出率

---

## 文件参考

- [components/StructuredData.tsx](components/StructuredData.tsx) - JSON-LD schema
- [app/layout.tsx](app/layout.tsx) - 主要元数据和 OG 配置
- [lib/seo.ts](lib/seo.ts) - SEO 工具函数
- [public/sitemap.xml](public/sitemap.xml) - Sitemap
- [public/robots.txt](public/robots.txt) - Robots.txt

---

## 常见问题

**Q: 为什么还没有看到 Sitelinks？**
A: Sitelinks 通常需要 4-12 周才能显示，前提是：
- 网站权重足够高
- 有清晰的导航结构（已做 ✓）
- 搜索引擎判断用户经常点击这些页面

**Q: 能强制显示 Sitelinks 吗？**
A: 不能强制，但可以通过：
- 完善结构化数据（已做 ✓）
- 确保每个深层页面都是高质量的
- 在 Search Console 中优化网站链接
- 增加内部链接权重

**Q: Baidu 和 Google Sitelinks 是否同时显示？**
A: 是的，两个搜索引擎有独立的算法，可能同时或先后显示。

---

## 下一阶段计划

待官网展示实现后，可继续优化：
1. **视频 schema** - 如果有产品演示视频
2. **FAQ schema** - 常见问题页面
3. **文章 schema** - 如果有博客/动态栏目
4. **本地商家 schema** - 如果需要地理位置优化

