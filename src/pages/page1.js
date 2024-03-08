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
          src='https://public.tableau.com/views/BigGameCensus2024/BigGameCensus?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'
        />
        {/* @ts-expect-error This is a Web Component */}
        <tableau-viz
          id='tableauViz'
          src='https://public.tableau.com/views/AnthonyBourdainTravels_17056586957790/viz?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'
        />
        {/* @ts-expect-error This is a Web Component */}
        <tableau-viz
          id='tableauViz'
          src='https://public.tableau.com/views/JustBeYourself-DataPlusMovies/ActionJustBeYourself?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'
        />
      </div>
    </>
  );
}

export default TestPage;
