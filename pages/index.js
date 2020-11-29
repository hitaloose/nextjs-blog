import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

const whastAppLink = "https://api.whatsapp.com/send?phone=5528992799949";
const gitHubLink = "https://github.com/hitaloose";
const linkedInLink = "https://www.linkedin.com/in/hitaloose/";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Olá, bem vindo ao meu site pessoal.</p>
        <p>
          Aqui econtrará formas de falar diretamente comigo, e um pequeno blog
          de infomações uteis.
        </p>
      </section>

      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Contato</h2>

        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <a href={whastAppLink} target="new">
              WhatsApp
            </a>
            <br />
            <small className={utilStyles.lightText}>(28) 99279-9949</small>
          </li>

          <li className={utilStyles.listItem}>
            <a href={gitHubLink} target="new">
              GitHub
            </a>
            <br />
            <small className={utilStyles.lightText}>hitaloose</small>
          </li>

          <li className={utilStyles.listItem}>
            <a href={linkedInLink} target="new">
              LinkedIn
            </a>
            <br />
            <small className={utilStyles.lightText}>hitaloose</small>
          </li>
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
