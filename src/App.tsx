import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Me from './pages/Me';

function App() {
  return (
      <div className="">
        <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/me" element={<Me />} />
          <Route path="*" element={<Navigate to="/me" replace />} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
