import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

const VizURLs = {
  "CR-5": {
    dev: "https://public.tableau.com/views/Crimes_17059390129380/Dashboard11?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
    prod: "https://public.tableau.com/views/Crimes_17059390129380/Dashboard11?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
  },
  "CR-6": {
    dev: "https://public.tableau.com/views/Crimes_17059390129380/Dashboard10?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
    prod: "https://public.tableau.com/views/Crimes_17059390129380/Dashboard10?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
  },
  "CR-7": {
    dev: "https://public.tableau.com/views/Crimes_17059390129380/Dashboard12_1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
    prod: "https://public.tableau.com/views/Crimes_17059390129380/Dashboard12_1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
  },
  "CR-9": {
    dev: "https://public.tableau.com/views/CrimeVictim_17059391178000/Dashboard2?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
    prod: "https://public.tableau.com/views/CrimeVictim_17059391178000/Dashboard2?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
  },
  "CR-12": {
    dev: "https://public.tableau.com/views/CrimeOffender_17059391850310/Dashboard2?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
    prod: "https://public.tableau.com/views/CrimeOffender_17059391850310/Dashboard2?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
  },
  "CR-14": {
    dev: "https://public.tableau.com/views/CrimeOffender_17059391850310/Dashboard3?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
    prod: "https://public.tableau.com/views/CrimeOffender_17059391850310/Dashboard3?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
  },
  "CR-15": {
    dev: "https://public.tableau.com/views/ArrestDisparities_17059398297550/Dashboard5?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
    prod: "https://public.tableau.com/views/ArrestDisparities_17059398297550/Dashboard5?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
  },
  "CR-16": {
    dev: "https://public.tableau.com/views/ArrestDisparities_17059398297550/Dashboard6?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
    prod: "https://public.tableau.com/views/ArrestDisparities_17059398297550/Dashboard6?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
  },
  "CR-17": {
    dev: "https://public.tableau.com/views/ArrestDisparities_17059398297550/Dashboard7?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
    prod: "https://public.tableau.com/views/ArrestDisparities_17059398297550/Dashboard7?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
  },
};

const isProdEnv = false;

function TestPage2() {
  return (
    <>
      <Head>
        <title>Test | Data for Community Trust</title>
        <meta name='description' content='Explore crime data in Hazel Crest, IL.' />
      </Head>

      <Script src='https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js' type='module' />

      <Link href='/'>Go Page 1</Link>

      <div>
        {/* <tableau-viz
          id='tableauViz'
          src='https://public.tableau.com/views/AnimalRights_17092289911360/AnimalRights?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'
        />
        <tableau-viz
          id='tableauViz'
          src='https://public.tableau.com/views/SanDiegosBlackPopulation/Viz?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'
        />
        <tableau-viz
          id='tableauViz'
          src='https://public.tableau.com/views/DescendantsoftheDragon/Map?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'
        /> */}

        {/* <TableauEmbed sourceUrl='https://public.tableau.com/views/AnimalRights_17092289911360/AnimalRights?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link' />
        <TableauEmbed sourceUrl='https://public.tableau.com/views/SanDiegosBlackPopulation/Viz?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link' />
        <TableauEmbed sourceUrl='https://public.tableau.com/views/DescendantsoftheDragon/Map?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link' /> */}

        <TableauEmbed sourceUrl={VizURLs["CR-5"][isProdEnv ? "prod" : "dev"]} />

        <TableauEmbed sourceUrl={VizURLs["CR-6"][isProdEnv ? "prod" : "dev"]} />

        <TableauEmbed sourceUrl={VizURLs["CR-7"][isProdEnv ? "prod" : "dev"]} />

        <TableauEmbed sourceUrl={VizURLs["CR-9"][isProdEnv ? "prod" : "dev"]} />

        <TableauEmbed sourceUrl={VizURLs["CR-12"][isProdEnv ? "prod" : "dev"]} />

        <TableauEmbed sourceUrl={VizURLs["CR-14"][isProdEnv ? "prod" : "dev"]} />

        <TableauEmbed sourceUrl={VizURLs["CR-15"][isProdEnv ? "prod" : "dev"]} />

        <TableauEmbed sourceUrl={VizURLs["CR-16"][isProdEnv ? "prod" : "dev"]} />

        <TableauEmbed sourceUrl={VizURLs["CR-17"][isProdEnv ? "prod" : "dev"]} />
      </div>
    </>
  );
}

export default TestPage2;
