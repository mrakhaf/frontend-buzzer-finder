import Axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import React, { FormEvent, useState } from "react";

import { SearchBuzzer } from "@/modules";

import { useBuzzerStore } from "../services/zustand";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    useBuzzerStore.getState().setSearchResult(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("keyword", keyword);

    Axios({
      method: "post",
      url: "http://127.0.0.1:5000/buzzerfinder",
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        useBuzzerStore.getState().setBuzzer(res.data);
        return Router.push("/result");
      })
      .catch((err) => {
        console.log(err);
        alert("Tidak ada hashtag tersebut!");
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Buzzer Finder</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.mainContainer}>
        <SearchBuzzer handleChange={handleChange} handleSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default Home;