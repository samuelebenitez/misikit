import Sidebar from "../../components/Sidebar";
import Player from "../../components/Player";
import MenuMobile from "../../components/MenuMobile";
import style from "./style.module.scss";
import Main from "../../components/Main";
import Layout from "../../components/Layout";
import Head from "next/head";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Home || Musikit</title>
      </Head>

      <Layout>
        <Main />
      </Layout>
    </>
  );
}
