import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from './pages/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Pages.HomePage />} />
          <Route path='programs' element={<Pages.ProgramsPage />} />
          <Route path='faq' element={<Pages.FaqPage />} />
          <Route path='about' element={<Pages.AboutPage />} />
          <Route path='contact' element={<Pages.ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
