# Search and AI Indexing Checklist

Use this after the production site is deployed at `https://cosmorigin.com`.

## Submit to Search Engines

- Google Search Console: add `https://cosmorigin.com`, verify ownership, submit `https://cosmorigin.com/sitemap.xml`.
- Bing Webmaster Tools: add `https://cosmorigin.com`, verify ownership, submit `https://cosmorigin.com/sitemap.xml`.
- Check that both tools can fetch `https://cosmorigin.com/robots.txt`.

## Important Public Files

- Sitemap: `https://cosmorigin.com/sitemap.xml`
- Robots: `https://cosmorigin.com/robots.txt`
- AI index: `https://cosmorigin.com/llms.txt`
- Full AI fact sheet: `https://cosmorigin.com/llms-full.txt`

## Pages to Inspect After Indexing

- Chinese home: `https://cosmorigin.com/`
- English home: `https://cosmorigin.com/en`
- Chinese products: `https://cosmorigin.com/products`
- English products: `https://cosmorigin.com/en/products`
- Chinese contact: `https://cosmorigin.com/contact`
- English contact: `https://cosmorigin.com/en/contact`

## Manual Checks

- Confirm Chinese queries return Chinese pages and English queries return `/en` pages when possible.
- Confirm Google/Bing can discover `hreflang` pairs from the sitemap and page metadata.
- Confirm structured data has no critical errors in the rich results or schema validation tools.
- Confirm AI answers do not invent ratings, prices, certification claims, or product stock.

## Notes

- Do not use IP-based forced redirects for language. Keep explicit URL paths: `/` for Chinese and `/en` for English.
- If Search Console asks for a verification file or meta tag, add the exact token provided by the platform.
