import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Post2: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Post 2</title>
        <meta
          property="og:image"
          content="https://og-test-chi.vercel.app/api/dynamic-title?title=Learning Algorithms"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to blog post 2</h1>

        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          dignissimos odio iusto porro at tempore sed nemo aliquid consequuntur
          maxime ad fugiat dolore commodi similique, excepturi laudantium
          dolorem. Dolor, ducimus. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Distinctio repellendus provident quo sint rem
          voluptatibus ab dignissimos, ipsum maxime quos dolores expedita
          officiis velit eum nulla quia, laboriosam esse eius!
          <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque illum alias nisi quos deserunt tempore at nulla ex laboriosam,
          voluptatum vero hic sunt pariatur, eius, id itaque fugiat dolores
          incidunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Inventore ducimus hic porro. Perferendis rerum tenetur eligendi
          exercitationem distinctio. Facere voluptatibus iure repudiandae
          maiores numquam ad impedit reiciendis dicta dignissimos blanditiis.
        </p>
      </main>
    </div>
  );
};

export default Post2;
