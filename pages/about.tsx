import Head from "next/head";
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="About the company and it's employees"
        />
        <meta property="og:image" content="/api/dynamic-title" />
      </Head>
      <div>
        <h1>About Us</h1>
      </div>
    </>
  );
}
