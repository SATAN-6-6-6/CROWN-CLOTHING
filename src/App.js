import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCurrentUser
} from './utils/firebase/firebase.utils';

import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication.component';
import Shop from './components/routes/shop/shop.component';
import Checkout from './components/routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  getCurrentUser();
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;