import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from "react-scroll-to-top";
import Announcements from '../components/UpcomingEvents';
import MainGrid from '../components/MainGrid';

export default function Home() {
  const mainStyle = {
    position: 'absolute',
    overflowX: 'clip',
    height: 'fit-content',
    top: '0',
    left: '0',
    width: '100%',
    margin: '0 auto'
  }

  const scrollStyle = {
    height: '65px',
    width: '65px',
    borderRadius: '50%',
  }

  return (
    <div style={mainStyle}>
      <Head>
        <title>NITH CSE</title>
        <meta name="description" content="Welcome to the Computer Science Department of NIT Hamirpur. Find faculty details, student information, academic programs, and more." />
        <link rel="canonical" href="https://nith-cse.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="NIT Hamirpur, CSE, Computer Science and Engineering, CSE Department, National Institute of Technology, Hamirpur, Akshay Garg" />
        <link rel="icon" href="/logo.png" />
        
         {/* JSON-LD for structured data */}
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NIT Hamirpur - CSE Department",
              "url": "https://nith-cse.vercel.app",
              "logo": "/logo.png",
              "sameAs": [
                "https://nith.ac.in",
                "https://twitter.com/nithamirpurhp",
                "https://www.facebook.com/Official.NITHamirpur"
              ]
            }),
          }}
        />
      </Head>
      <ScrollToTop smooth='true' width={30} height={30} style={scrollStyle} />
      <Header />
      <MainGrid />
      <Announcements />
      <Footer />
    </div>
  )
}
