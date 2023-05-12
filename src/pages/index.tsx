import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';

//libs
import { client } from "../libs/cms_client";
//components
import Header from "../components/header";

export default function Home({contents} : {contents:any}) {
  return (
    <>
      <Head>
        <title>SkotaBlog</title>
        <meta name="description" content="Skota Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://avatars.githubusercontent.com/u/91359399" />
      </Head>
      <main className=''>
        <Header />
        <div className='text-base mt-4 px-4'>
          Welcome! <br /> このブログは技術系やプログラミングの記事を投稿しています
        </div>
        <div className='p-4'>
          <span className='text-xl border-b-4 border-b-blue'>SelfIntroduction</span>
          <div className='pt-4 flex gap-x-4'>
          <Avatar className='my-4' alt="Skota11" src="https://avatars.githubusercontent.com/u/91359399" />
          <div>
          <p>Skota11 / Web開発や自宅鯖運営をしている中学生。NodeやDenoを使って開発してます。</p>
            <p>さらなるプロフィールは僕の <a href="https://skota11.com" target="_blank" rel="noopener noreferrer" >Website</a> までどうぞ！</p>
          </div>
          </div>
          <div>
          <span className='text-xl border-b-4 border-b-blue'>Link</span>
          <p><a href="https://skota11.com" target="_blank" rel="noopener noreferrer">MyWebsite</a> | 僕のWebsiteです。お問い合わせなどもこちらからお願いします。</p>
          <p><Link href="/policy">ポリシー</Link> | Cookieの使用や広告配信ツールなどに関するポリシー。必ずご確認ください。</p>
          </div>
        </div>
       <div className='p-4'>
        <h2 className='text-2xl pb-4'>最新記事</h2>
        <div className=''>
        {contents.map((content:any) => (
          <>
          <hr />
            <Link className='not_under' href={`/blog/${content.id}`}>
              <div className='p-8 flex grid'>
                <img className='' src={content.eyecatch.url} alt="" width={300}/>
                <div className=''>
                <p className='text-lg ml-4 text-gray-800 py-2'>{content.title}</p>
                <p className='text-sm'>カテゴリー:{content.category.name}</p>
                </div>
                <span className='text-white bg-blue rounded-lg p-2 text-center'>この記事を読む</span>
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
    revalidate : 120
  };
};