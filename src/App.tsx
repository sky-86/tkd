import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from './pages/pages';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<Pages.HomePage />} />
          <Route path='programs' element={<Pages.ProgramsPage />} />
          <Route path='faq' element={<Pages.FaqPage />} />
          <Route path='about' element={<Pages.AboutPage />} />
          <Route path='contact' element={<Pages.ContactPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
