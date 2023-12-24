import Head from "next/head";
import NavBar from "pdfequips-navbar/NavBar";
import Tool from "../../components/Tool";
import {
  edit_page,
  tool,
  tools,
  downloadFile,
} from "../../src/content/content-hi";
import { errors } from "../../src/content/content-hi";
import { useRouter } from "next/router";
import { AddWatermarkHOWTO_hi } from "@/src/how-to";

type data_type = {
  title: string;
  description: string;
  color: string;
  type: string;
};

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

export default ({ item, lang }: { item: data_type; lang: string }) => {
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
        <title>{`PDFEquips | ${item.title}`}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(AddWatermarkHOWTO_hi),
          }}
        />
        <meta name="description" content={item.description} />
        <link rel="icon" href="/logo.png" />
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

export const routes = {
  "/add-watermark": { item: tool["Add_Watermark"] },
};
