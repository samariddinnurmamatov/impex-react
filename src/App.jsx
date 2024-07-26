import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import BaseLayout from './components/layouts'
import Home from './views/Home'
import Osago from './views/osago/Osago'
import OsagoDanni from './views/osago/Osago-Danni'
import News from './views/news/News'
import NewsOne from './views/news/NewsOne'
import { About } from './views/aboutUs/About'
import { Vacancy1 } from './views/vacancy/Vacancy1'
import { Vacancy2 } from './views/vacancy/Vacancy2'
import { Vacancy3 } from './views/vacancy/Vacancy3'
import EditHome from './views/EditHome'

function App() {

  return (
    <BrowserRouter>
      {/* <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path='edit-home' element={<EditHome />} />
          <Route path='osago' element={<Osago />} />
          <Route path='osago-danni' element={<OsagoDanni />} />
          <Route path='news' element={<News />} />
          <Route path='newsone' element={<NewsOne />} />
          <Route path="about-us" element={<About />} />
          <Route path="vacancy-1" element={<Vacancy1 />} />
          <Route path="vacancy-2" element={<Vacancy2 />} />
          <Route path="vacancy-3" element={<Vacancy3 />} />
          {/* <Route path="pricing" element={<Pricing />} /> */}
          {/* <Route path="confirmation" element={<Confirmation />} />
          <Route path="typography" element={<Typography />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Savat />} />
          <Route path="buttons" element={<Buttons />} /> */}
        </Route>
        {/* <Route path="login-page" element={<Login />} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
