import Head from "next/head";
import NavBar from "pdfequips-navbar/NavBar";
import Tool from "../../components/Tool";
import { useRouter } from "next/router";
import type { tool as _tool } from "../../content";
import {
  edit_page,
  errors,
  tool,
  tools,
  downloadFile,
} from "../../src/content/content-ar";
import { AddWatermarkHOWTO_ar } from "@/src/how-to";
import { OpenGraph } from "pdfequips-open-graph/OpenGraph";

export async function getStaticPaths() {
  const paths = Object.keys(routes).map((key) => ({
    params: { tool: key.substring(1) },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: {
    tool: string;
  };
}) {
  const item = routes[`/${params.tool}` as keyof typeof routes].item;
  return { props: { item } };
}

export default ({
  item,
  lang,
}: {
  item: _tool["Add_Watermark"];
  lang: string;
}) => {
  const router = useRouter();
  const { asPath } = router;
  const websiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: `PDFEquips ${item.title}`,
    description: item.description,
    url: `https://www.pdfequips.com${asPath}`,
  };
  return (
    <>
      <Head>
        <title>{item.seoTitle}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(AddWatermarkHOWTO_ar),
          }}
        />
        <meta name="description" content={item.description} />
        <link rel="icon" type="image/svg+xml" href="/images/icons/logo.svg" />
        <OpenGraph
          ogUrl={`https://www.pdfequips.com/ar${item.to}`}
          ogDescription={item.description}
          ogLocale="ar_AR"
          ogImageWidth="1200"
          ogImageHeight="630"
          ogTitle={item.seoTitle}
          ogImage={`https://www.pdfequips.com/images/ar${item.to}.png`}
        />
      </Head>
      <NavBar path="add-watermark" lang={lang} />
      <Tool
        tools={tools}
        data={item}
        lang={lang}
        errors={errors}
        edit_page={edit_page}
        pages={edit_page.pages}
        page={edit_page.page}
        downloadFile={downloadFile}
      />
    </>
  );
};

// export default ToolPage;
export const routes = {
  "/add-watermark": { item: tool["Add_Watermark"] },
};
