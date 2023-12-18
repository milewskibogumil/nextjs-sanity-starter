import fetchData from "@/utils/fetchData";

// Change domain to project domain
export const domain = 'https://milewski.me';
export const locale = "en";

const Seo = async ({ title, description, path, ...props }) => {
  const { global: {
    robotsIndex,
    seo: {
      og_Img
    }
  }} = await query();

  const seo = {
    title: title || '',
    description: description || '',
    url: `${domain}${path}` || '',
    ogImage: og_Img?.asset?.url || ''
  }

  const metadata = {
    ...!robotsIndex && {
      robots: {
        index: false,
      },
    },
    metadataBase: new URL(domain),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      siteName: seo.title,
      url: seo.url,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
    ...props
  }

  return metadata;
}

export default Seo;

const query = async () => {
  const { body: { data } } = await fetchData(`
    query {
      global: Global(id: "global") {
        seo {
          og_Img {
            asset {
              url
            }
          }
        }
        robotsIndex
      }
    }
  `)
  return data;
}