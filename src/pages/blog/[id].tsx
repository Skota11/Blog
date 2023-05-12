import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


import Avatar from '@mui/material/Avatar';

import { useRouter } from "next/router";

//libs
import { client } from "../../libs/cms_client";
//components
import Header from "../../components/header";

export default function Home(props: { content: {createdAt : string , updatedAt :string , title : string , id : string , content : string ,  eyecatch : {url : string}} }) {
  const {content} = props
  const create_t = Date.parse(content?.createdAt);
  const c_d = new Date(create_t);
  const update_t = Date.parse(content?.updatedAt);
  const u_d = new Date(update_t)
  return (
    <>
      <Head>
        <title>{content?.title} | SkotaBlog</title>
        <meta name="description" content="Skota Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://avatars.githubusercontent.com/u/91359399" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
{/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" /> */}

<meta property="og:url" content={`https://blog.skota11.com/blog${content?.id}`} />
 
<meta property="og:type" content="article" />
 
<meta property="og:title" content={content?.title} />
 
<meta property="og:description" content="このブログは技術系やプログラミングの記事を投稿しています。" />
 
<meta property="og:site_name" content="SkotaBlog" />
 
<meta property="og:image" content={content?.eyecatch.url} />

//twitter
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@Kota_pclive" />
      </Head>
      <main className=''>
        <Header />
       <div className='p-4'>
        <div className='flex place-content-center'>
        <div className='w-7/8 max-w-screen-md'>
          <p className='m-0'><Link href="/" className='border-b-2'>Top</Link> </p>
          <div className='flex gap-x-4 text-sm'>
          <p>作成日 : {c_d.toLocaleDateString()}</p>
        <p>更新日 : {u_d.toLocaleDateString()}</p>
        <div className='flex'><p className="mr-2">Auther</p> <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/91359399" /></div>
          </div>
          <h2 className='text-2xl block'>{content?.title}</h2>
          {/* <img className='border-8' src={content?.eyecatch.url} /> */}
        <hr />
        <div  dangerouslySetInnerHTML={{__html : content?.content}}></div>
        </div>
        </div>
        <div>

        </div>
       </div>
      </main>
    </>
  )
}
export const getStaticPaths = async () => {
  const data = await client.get({endpoint:"blogs" , queries: { limit: 3000 },}).then((res) => {
    return res;
  })
  console.log(data.contents)
  return {
    paths: data.contents.map((p: { id: any; }) => ({params : {id : p.id}})),
    fallback: true  // 上記以外のパスでアクセスした場合は 404 ページにする
  }
};

export const getStaticProps = async (context: { params: { id: any; }; }) => {
  let data = await client
  .get({
    endpoint: 'blogs',
    contentId: context.params!["id"],
  })
  .then((res) => {return res})
  .catch((err) => {return false})
  if (!data) {
    return { redirect: { destination: '/', permanent: false } }
  }
  return {
    props: {
      content: data,
    },
    revalidate : 60* 10
  };
};