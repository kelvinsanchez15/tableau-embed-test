import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

function TestPage() {
  return (
    <>
      <Head>
        <title>Test | Data for Community Trust</title>
        <meta name='description' content='Explore crime data in Hazel Crest, IL.' />
      </Head>

      <Script src='https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js' type='module' />

      <Link href='page2'>Go Page 2</Link>

      <div>
        <tableau-viz
          id='tableauViz'
          src='https://public.tableau.com/views/CrimeVictim_17059391178000/Dashboard2?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link'
        />
        {/* @ts-expect-error This is a Web Component */}
        <tableau-viz
          id='tableauViz'
          src='https://public.tableau.com/views/CrimeOffender_17059391850310/Dashboard2?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link'
        />
        {/* @ts-expect-error This is a Web Component */}
        <tableau-viz
          id='tableauViz'
          src='https://public.tableau.com/views/CrimeOffender_17059391850310/Dashboard3?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link'
        />
      </div>
    </>
  );
}

export default TestPage;
