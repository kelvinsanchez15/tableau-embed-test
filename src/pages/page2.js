import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

function TestPage2() {
  return (
    <>
      <Head>
        <title>Test | Data for Community Trust</title>
        <meta name='description' content='Explore crime data in Hazel Crest, IL.' />
      </Head>

      <Script src='https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js' type='module' />

      <Link href='page1'>Go Page 1</Link>

      <div>
        {/* @ts-expect-error This is a Web Component */}
        <tableau-viz
          id='tableauViz'
          src='https://public.tableau.com/views/AnimalRights_17092289911360/AnimalRights?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'
        />
        {/* @ts-expect-error This is a Web Component */}
        <tableau-viz
          id='tableauViz'
          src='https://public.tableau.com/views/SanDiegosBlackPopulation/Viz?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'
        />
        {/* @ts-expect-error This is a Web Component */}
        <tableau-viz
          id='tableauViz'
          src='https://public.tableau.com/views/DescendantsoftheDragon/Map?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'
        />
      </div>
    </>
  );
}

export default TestPage2;
