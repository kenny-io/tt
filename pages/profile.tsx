import Head from "next/head";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta
          property="og:image"
          content="https://og-test-chi.vercel.app/api/external-dynamic-images?username=kenny-io"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          name="description"
          content="Contact the company and it's employees"
        ></meta>
      </Head>
      <div>
        <h1> Profile Page</h1>
      </div>
    </>
  );
}
