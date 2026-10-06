BeachRides4U SEO notes

Updated 2026-10-06 (airport-first revisions)
- Page title, meta description, Open Graph, and Twitter tags now lead with
  airport rides and name the five destinations: Pass-a-Grille, Treasure
  Island, Madeira Beach, Indian Rocks Beach, Clearwater Beach.
- Removed references to services no longer on the page (beach drop-off and
  pickup, group rides).
- New social share card: images/beachrides4u-social-share.jpg (1200x630 JPEG,
  "Airport rides made easy."). The old .png card is no longer referenced.
- LocalBusiness structured data: new description, all destinations in
  areaServed, priceRange ($50-$90), and an OfferCatalog with every rate from
  the pricing table.
- Added sitemap.xml and a Sitemap line in robots.txt.
- Page speed: hero now loads images/beach-rides-hero.webp (193 KB, was a
  2.2 MB PNG) with correct width/height and fetchpriority="high"; header
  logo now loads images/beachrides4u-logo-header.webp (30 KB, was 716 KB)
  with width/height set. The original PNGs are kept; the logo PNG is still
  used by the structured data.
- Removed unused images: sunset-palm-beach.jpg, beach-rides-hero-hd.png,
  beachrides4u-social-share.png, retro-beach-van.webp.

Keep in sync
- If a price changes, update BOTH the pricing table in index.html and the
  hasOfferCatalog offers (and priceRange) in the JSON-LD in the <head>.
- If a destination is added or removed, update the Destinations served list,
  the pricing table, the meta/OG/Twitter descriptions, and areaServed.
- Update <lastmod> in sitemap.xml when the page content changes.

Earlier SEO work (still in place)
- Robots meta, canonical URL, favicons, descriptive image alt text, robots.txt.

After launch
1. Add the site to Google Search Console and submit sitemap.xml.
2. Re-scrape the URL in the Facebook Sharing Debugger and LinkedIn Post
   Inspector so they pick up the new share card.
3. If a public street address exists, add it to the LocalBusiness data.
