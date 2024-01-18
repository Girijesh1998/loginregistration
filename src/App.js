import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Layout from './componets/pages/Layout';
import Home from './componets/pages/Home';
import Contact from './componets/pages/Contact';
import Login from './componets/auth/Login'
import SendPasswordReset from './componets/auth/SendPasswordReset';
import ResetPassword from './componets/auth/ResetPassword';
import Dashboard from './componets/pages/Dashboard';

export default function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route index path='contact' element={<Contact />} />
            <Route index path='login' element={<Login />} />
            <Route index path='sendpasswordresetemail'element={<SendPasswordReset />} />
            <Route index path='reset'element={<ResetPassword />}/>
          </Route>
          <Route index path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<h1>Error 404 Page not found ||</h1>} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}
