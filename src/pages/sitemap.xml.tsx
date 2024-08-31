import { getPosts } from "../apis/notion-client/getPosts"
import { CONFIG } from "site.config"
import { getStaticPropsSitemap, ISitemapField } from "next-sitemap"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPosts()
  const dynamicPaths = posts.map((post) => `${CONFIG.link}/${post.slug}`)

  // Create an array of fields, each with a loc and lastmod
  const fields: ISitemapField[] = dynamicPaths.map((path) => ({
    loc: path,
    lastmod: new Date().toISOString(),
    priority: 0.7,
    changefreq: "daily",
  }))

  // Include the site root separately
  fields.unshift({
    loc: CONFIG.link,
    lastmod: new Date().toISOString(),
    priority: 1.0,
    changefreq: "daily",
  })

  return getStaticPropsSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default () => {}
