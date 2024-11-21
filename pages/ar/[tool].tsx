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
  footer,
} from "../../src/content/content-ar";
import { AddWatermarkHOWTO_ar } from "@/src/how-to";
import { OpenGraph } from "pdfequips-open-graph/OpenGraph";
import { Features } from "@/components/Features";
import { Footer } from "pdfequips-footer/components/Footer";
import { fetchSubscriptionStatus } from "fetch-subscription-status";
import { useState, useCallback, useEffect } from "react";
import HowTo from "@/components/HowTo";
import { howToType } from "@/src/how-to/how-to";
import { howToSchema } from "@/src/how-to/how-to-ar";

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
  initialPremiumStatus
}: {
  item: _tool["Add_Watermark"];
  lang: string;
  initialPremiumStatus: boolean;
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
  const [isPremium, setIsPremium] = useState(initialPremiumStatus);
  const [isLoaded, setIsLoaded] = useState(false);
  const checkStatus = useCallback(async () => {
    try {
      const status = await fetchSubscriptionStatus(); // Function to fetch subscription status
      setIsPremium(status);
      setIsLoaded(true);
    } catch (err) {
      console.error("Error checking subscription status:", err);
      setIsLoaded(true);

    }
  }, []);


  useEffect(() => {
    checkStatus();
  }, []);
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
        <meta name="keywords" content={item.keywords} />
        <link rel="icon" type="image/svg+xml" href="/images/icons/logo.svg" />
        {isLoaded && !isPremium ?
          <>
            <meta name="google-adsense-account" content="ca-pub-7391414384206267" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7391414384206267"
              cross-origin="anonymous"></script>
          </>
          : null}
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
      <div className="container">
        <Features features={item.features as { title: string; description: string }[]} />
      </div>
      <div className="container">
        <HowTo howTo={howToSchema as howToType} alt={item.seoTitle} imgSrc={item.to.replace("/", "")} />
      </div>
      <Footer lang={lang} title={item.seoTitle.split("-")[1]} />
    </>
  );
};

// export default ToolPage;
export const routes = {
  "/add-watermark": { item: tool["Add_Watermark"] },
};
