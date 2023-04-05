import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Avatar from '@mui/material/Avatar';

//libs
import { client } from "../libs/cms_client";
//components
import Header from "../components/header";
import Line from "../components/line";

export default function Home({contents} : {contents:any}) {
  return (
    <>
      <Head>
        <title>SkotaBlog</title>
        <meta name="description" content="Skota Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://avatars.githubusercontent.com/u/91359399" />
{/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" /> */}
      </Head>
      <main className=''>
        <Header />
        <div className='flex place-content-center'>
        <div className='w-full p-4 max-w-screen-md'>
            <h1 className='text-center'>ポリシー<br /><span className='text-lg'>Policy</span></h1>
            <div className='border-4 p-8 rounded-xl my-8'>
            <h2 className='text-xl mb-0'>プライバシーポリシー</h2>
            <p className='mt-0'>PrivacyPolicy</p>
            <Line content="個人情報の利用目的" />
            <p>当ブログでは、お問い合わせやの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。<br /> 取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。</p>
            <Line content="広告について" />
            <p>当ブログでは、第三者配信の広告サービス（Googleアドセンス）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。<br />クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。<br />Cookieを無効にする方法やGoogleアドセンスに関する詳細は「広告 – ポリシーと規約 – Google」をご確認ください。</p>
            <Line content="アクセス解析ツールについて" />
            <p>当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
            </div>
            <div className='border-4 p-8 rounded-xl my-8'>
            <h2 className='text-xl mb-0'>免責事項</h2>
            <p className='mt-0'>Disclaimer</p>
            <p>当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。<br />また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。<br />当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
            </div>
            <div className='border-4 p-8 rounded-xl my-8'>
            <h2 className='text-xl mb-0'>著作権について</h2>
            <p className='mt-0'>AboutCopyright</p>
            <p>当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止します。<br />当ブログは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。</p>
            </div>
            <div className='border-4 p-8 rounded-xl my-8'>
            <h2 className='text-xl mb-0'>リンクについて</h2>
            <p className='mt-0'>AboutLink</p>
            <p>当ブログは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。</p>
            </div>
            </div>
        </div>
      </main>
    </>
  )
}