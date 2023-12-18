import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import Breadcrumbs from "@/components/moleculas/Breadcrumbs";

const pathname = '';

const IndexPage = async () => {
  const { page: {
    hero_Heading,
  } } = await query();

  return (
    <>
      <Breadcrumbs data={[
        { name: 'Homepage', path: pathname },
      ]} />
      {/* <Hero {...{
        heading: hero_Heading,
        paragraph: hero_Paragraph,
        cta: hero_Cta,
      }} /> */}
    </>
  )
}

export async function generateMetadata() {
  const { page: { seo } } = await query();
  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: pathname,
  })
}

const query = async () => {
  const { body: { data } } = await fetchData(/* GraphQL */`
    query {
      page: IndexPage(id: "IndexPage") {
        # Hero
        hero_Heading
        hero_Paragraph
        hero_Cta {
          theme
          text
          href
        }

        # SEO
        seo {
          title
          description
        }
      }
    }
  `)
  return data;
}

export default IndexPage;