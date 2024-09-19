import Image from "next/image";
import logo from "public/images/logo.svg";

import Layout from "../Layout";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <Layout>
      <header className={styles.header}>
        <Image
          src={logo}
          alt="Logo FocalPoint"
          width={150}
          height={36}
          quality={100}
          priority
        />

        <h1>Bem-vindo de volta, Marcus</h1>

        <p>Segunda, 01 de dezembro de 2025</p>
      </header>
    </Layout>
  );
};

export default Header;
