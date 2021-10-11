import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit aliquam
          architecto sed! Animi, quaerat laborum quasi nemo omnis magnam
          voluptates cum, ratione atque expedita repudiandae cumque nam, odit
          voluptatum. Provident, recusandae! Debitis suscipit sequi eaque eligendi
          odit esse sint animi repudiandae similique sit magnam ducimus rem, quo
          nam maiores placeat obcaecati corporis aperiam ratione incidunt commodi
          dolor! Consectetur enim impedit ad dolorum facere ea. Nesciunt
          aspernatur accusamus sunt! Rerum totam ex sint optio tenetur praesentium
          quos itaque provident maxime suscipit eius tempore voluptate quis enim
          est quisquam sequi atque nesciunt alias labore, quasi tempora ratione
          officia. Sint harum perferendis necessitatibus.
        </p>

        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit aliquam
          architecto sed! Animi, quaerat laborum quasi nemo omnis magnam
          voluptates cum, ratione atque expedita repudiandae cumque nam, odit
          voluptatum. Provident, recusandae! Debitis suscipit sequi eaque eligendi
          odit esse sint animi repudiandae similique sit magnam ducimus rem, quo
          nam maiores placeat obcaecati corporis aperiam ratione incidunt commodi
          dolor! Consectetur enim impedit ad dolorum facere ea. Nesciunt
          aspernatur accusamus sunt! Rerum totam ex sint optio tenetur praesentium
          quos itaque provident maxime suscipit eius tempore voluptate quis enim
          est quisquam sequi atque nesciunt alias labore, quasi tempora ratione
          officia. Sint harum perferendis necessitatibus.
        </p>
        <Link href="/ninjas/ninja">
          <a id={styles.btn}>See Ninja Listing!</a>
        </Link>
      </div>
    </>
  );
}
