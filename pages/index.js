import Head from 'next/head'
import dynamic from 'next/dynamic';
import ScrollToTop from "react-scroll-to-top";
import Header from '../components/Header';
const MainGrid = dynamic(() => import('../components/MainGrid'), { ssr: false });
const UpcomingEvents = dynamic(() => import('../components/UpcomingEvents'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

const Home = () => {
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
        <title>NITH CSE WEBSITE</title>
        <meta name="description" content="Welcome to the Computer Science and Engineering Department of NIT Hamirpur (NITH CSE). Discover CSE@NITH, find faculty details, student information, academic programs, research opportunities, and more." />
        <link rel="canonical" href="https://nith-cse.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="NIT Hamirpur, CSE, NITH, Computer Science and Engineering, CSE@NITH, CSE Department, National Institute of Technology, Hamirpur, Akshay Garg" />
        <link rel="icon" href="https://thumbsnap.com/i/CZmvhUcX.png" type="image/png" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="NITH CSE WEBSITE" />
        <meta property="og:description" content="Welcome to the Computer Science and Engineering Department of NIT Hamirpur (NITH CSE). Find faculty details, student information, academic programs, and more." />
        <meta property="og:url" content="https://nith-cse.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thumbsnap.com/i/CZmvhUcX.png" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NITH CSE WEBSITE" />
        <meta name="twitter:description" content="Welcome to the Computer Science and Engineering Department of NIT Hamirpur (NITH CSE). Find faculty details, student information, academic programs, and more." />
        <meta name="twitter:image" content="https://thumbsnap.com/i/CZmvhUcX.png" />

        {/* JSON-LD for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NIT Hamirpur - Computer Science and Engineering Department (NITH CSE)",
              "url": "https://nith-cse.vercel.app",
              "logo": "https://thumbsnap.com/i/CZmvhUcX.png",
              "sameAs": [
                "https://nith.ac.in",
                "https://twitter.com/nithamirpurhp",
                "https://www.facebook.com/Official.NITHamirpur"
              ]
            }),
          }}
        />

        {/* JSON-LD for VideoObject structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "NIT Hamirpur - Computer Science and Engineering Department (NITH CSE)",
              "description": "An introduction to the Computer Science Department of NIT Hamirpur.",
              "thumbnailUrl": "https://res.cloudinary.com/dz1vsgxm5/image/upload/Portfolio/ovhdvxa9hqx7tl0ray5p.jpg",
              "uploadDate": "2024-10-01T08:00:00+08:00",
              "contentUrl": "https://res.cloudinary.com/dz1vsgxm5/video/upload/v1716225403/nith-cse-website/kkgeccdwvo1rvxvbiwmt.mp4",
              "embedUrl": "https://nith-cse.vercel.app",
              "duration": "PT1M33S",
              "publisher": {
                "@type": "Organization",
                "name": "NITH",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://thumbsnap.com/i/CZmvhUcX.png"
                }
              }
            }),
          }}
        />

      </Head>
      <ScrollToTop smooth='true' width={30} height={30} style={scrollStyle} />
      <Header />
      <MainGrid />
      <UpcomingEvents />
      <Footer />

    </div>
  )
}

export default Home;
