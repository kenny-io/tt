import Head from "next/head";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          property="og:image"
          content="https://og-test-chi.vercel.app/api/dynamic-title?title=Contact Our Company"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <div>
        <h1>Contact Us</h1>
      </div>
    </>
  );
}
