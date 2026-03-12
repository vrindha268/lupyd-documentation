import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
// Import pages (to be created)
import { Home } from './pages/Home';
import { Installation } from './pages/Installation';
import { UserGuide } from './pages/UserGuide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="installation" element={<Installation />} />
          <Route path="guide" element={<UserGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
