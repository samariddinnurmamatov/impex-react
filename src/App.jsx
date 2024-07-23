import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import BaseLayout from './components/layouts'
import Home from './views/Home'
import Osago from './views/osago/Osago'
import OsagoDanni from './views/osago/Osago-Danni'
import News from './views/news/News'
import NewsOne from './views/news/NewsOne'

function App() {

  return (
    <BrowserRouter>
      {/* <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path='osago' element={<Osago />} />
          <Route path='osago-danni' element={<OsagoDanni />} />
          <Route path='news' element={<News />} />
          <Route path='newsone' element={<NewsOne />} />
          {/* <Route path="pricing" element={<Pricing />} /> */}
          {/* <Route path="confirmation" element={<Confirmation />} />
          <Route path="typography" element={<Typography />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
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
