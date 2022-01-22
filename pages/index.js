import Head from 'next/head'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import FrontPage from '../components/FrontPage'
import About from '../components/About'
import Courses from '../components/Courses'
import Highlights from '../components/Highlights'
import Events from '../components/Events'
import IndustryPartners from '../components/IndustryPartners'
import Awards from '../components/Awards'
import Career from '../components/Career'
import ContactUs from '../components/ContactUs'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sai Tecknova</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen overflow-x-hidden">
        <div className="h-screen lg:h-auto">
            <Header/>
            <FrontPage />
        </div>
        <About/>
        <Courses />
        <Highlights />
        <Events />
        <IndustryPartners />
        <Awards />
        <Career />
        <div className=" mt-24 bg-cover bg-[url('/backblue.jpg')]">
          <div className="xl:max-w-6xl xl:mx-auto mx-5 text-white py-16 text-3xl font-extrabold text-center">
            <p>Send your CV: email_id</p>
          </div>
        </div>
        <ContactUs />
      </div>
    </div>
  )
}
