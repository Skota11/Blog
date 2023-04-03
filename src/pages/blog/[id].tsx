import Head from 'next/head'
import Link from 'next/link'

import Avatar from '@mui/material/Avatar';

import { useRouter } from "next/router";

//libs
import { client } from "../../libs/cms_client";
//components
import Header from "../../components/header";

export default function Home({content}) {
  const create_t = Date.parse(content.createdAt);
  const c_d = new Date(create_t);
  const update_t = Date.parse(content.updatedAt);
  const u_d = new Date(update_t)
  return (
    <>
      <Head>
        <title>SkotaBlog</title>
        <meta name="description" content="Skota Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://avatars.githubusercontent.com/u/91359399" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
{/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" /> */}
      </Head>
      <main className=''>
        <Header />
       <div className='p-4'>
        <div className='flex place-content-center'>
        <div className='w-7/8 max-w-screen-md'>
          <p> <Link href="/">トップへ</Link> </p>
          <div className='flex gap-x-4'>
          <p>作成日 : {c_d.toLocaleDateString()}</p>
        <p>更新日 : {u_d.toLocaleDateString()}</p>
        <div className='flex'><p className="mr-2">Auther</p> <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/91359399" /></div>
          </div>
        <h2 className='text-2xl pb-4 block'>{content.title}</h2>
        <hr />
        <div  dangerouslySetInnerHTML={{__html : content.content}}></div>
        </div>
        </div>
       </div>
      </main>
    </>
  )
}
export const getServerSideProps = async ({params}) => {
  const data = await client
  .get({
    endpoint: 'blogs',
    contentId: params.id,
  })
  .then((res) => {return res});
  return {
    props: {
      content: data,
    },
  };
};