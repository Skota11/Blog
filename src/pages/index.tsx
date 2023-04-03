import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Avatar from '@mui/material/Avatar';

//libs
import { client } from "../libs/cms_client";
//components
import Header from "../components/header";

export default function Home({contents} : {contents:any}) {
  console.log(contents)
  return (
    <>
      <Head>
        <title>SkotaBlog</title>
        <meta name="description" content="Skota Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://avatars.githubusercontent.com/u/91359399" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <main className=''>
        <Header />
        <div className='text-base mt-4 px-4'>
          Welcome! <br /> このブログは技術系やプログラミングの記事を投稿しています
        </div>
        <div className='p-4'>
          <span className='text-xl border-b-4 border-b-blue'>SelfIntroduction</span>
          <div className='pt-4 flex gap-x-4'>
          <Avatar className='my-4' alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/91359399" />
          <div>
          <p>Skota11 / Web開発や自宅鯖運営をしている中学生。NodeやDenoを使って開発してます。</p>
            <p>さらなるプロフィールは僕の <a href="https://skota11.com" target="_blank" rel="noopener noreferrer" >Website</a> までどうぞ！</p>
          </div>
          </div>
        </div>
       <div className='p-4'>
        <h2 className='text-2xl pb-4'>最新記事</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {contents.map((content:any) => (
          <>
            <Link className='not_under' href={`/blog/${content.id}`}>
              <div className='rounded-xl  bg-gray-300 p-8 shadow-lg duration-300'>
                <img src={content.eyecatch.url} alt="" />
                <p className='text-xl text-gray-800 py-2'>{content.title}</p>
                <p className=''>カテゴリー:{content.category.name}</p>
                <span className='text-white bg-blue rounded-lg p-2'>この記事を読む</span>
              </div>
            </Link>
          </>))}
        </div>
       </div>
      </main>
    </>
  )
}
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  return {
    props: {
      contents: data.contents,
    },
  };
};