import CopyRight from '@/components/btBanner'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>Kamident Clinic - Trusted Dental Care</title>
          <link rel="icon" href="/logo/favicon.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Welcome to Kamident Clinic, your trusted dental care provider in Githurai, Nairobi. Our dedicated team of experienced dentists is committed to delivering exceptional oral healthcare services to patients of all ages. At Kamident Clinic, we offer a comprehensive range of advanced dental treatments, including teeth whitening, dental implants, orthodontics, cosmetic dentistry, and more.

          We take pride in our state-of-the-art facility, equipped with the latest dental technology to ensure precise and comfortable treatments. Our skilled dentists in Githurai utilize cutting-edge techniques and adhere to strict sterilization protocols, ensuring your safety and well-being at all times.

          As a leading dental clinic in Nairobi, we understand the importance of patient comfort and satisfaction. Our friendly and caring team creates a warm and welcoming environment, helping patients feel at ease during their visit. We prioritize open communication and take the time to listen to your concerns, answering any questions you may have and customizing treatment plans to meet your specific needs.

          Conveniently located in Githurai, Nairobi, our clinic serves the local community and surrounding areas. We are passionate about oral health education and believe in empowering our patients to make informed decisions about their dental care. Our team will provide you with comprehensive oral hygiene instructions and preventive measures to maintain a healthy smile for years to come.

          At Kamident Clinic, we strive to be at the forefront of dental advancements. Our dentists regularly participate in continuing education and training programs, ensuring we offer the latest techniques and treatments available. From routine dental check-ups to complex restorative procedures, our goal is to deliver high-quality, long-lasting results that exceed your expectations.

          Discover the benefits of exceptional dental care at Kamident Clinic in Githurai, Nairobi. Book your appointment today and let our skilled team of dentists transform your oral health. We are dedicated to helping you achieve a beautiful, healthy smile that will boost your confidence and overall well-being.

          Keywords: Githurai dental clinic, Nairobi dental care, teeth whitening Nairobi, dental implants Githurai, orthodontics Nairobi, cosmetic dentistry Githurai, advanced dental treatments Nairobi, experienced dentists Kenya, oral health education, state-of-the-art facility, comfortable dental treatments." />
          
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
        <CopyRight />
      </body>
    </Html>
  )
}
