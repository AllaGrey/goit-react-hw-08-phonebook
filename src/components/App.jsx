import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch()
  const {isRefreshing} = useAuth()

  useEffect(() => {
    dispatch(refreshUser())

  }, [dispatch])
  


  return isRefreshing ? <p>Loading....</p> : (
      <Routes>
        <Route path='/' element={<SharedLayout/> }>
          <Route index element={<HomePage/>} />
          <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
          <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
          <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        </Route>
      </Routes>
  );
};

