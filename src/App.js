import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import BoxSet from './pages/BoxSet/BoxSet';
import BestSeller from './pages/BestSellers/BestSellers';
import FeaturedAuthors from './pages/FeaturedAuthors/FeaturedAuthors';
import FictionsBooks from './pages/FictionsBooks/FictionsBook';
import AwardWinners from './pages/AwardWinners/AwardWinners';
import RequestBook from  './pages/RequestDeal/RequestDeal';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Home />
    ),
  },
  {
    path: '/new-arrivals',
    element: (
      <NewArrivals />
    ),
  },
  {
    path: '/box-set',
    element: (
      <BoxSet />
    ),
  },
  {
    path: '/request-book',
    element: (
      <RequestBook />
    ),
  },
  {
    path: '/fiction-books',
    element: (
      <FictionsBooks />
    ),
  },
  {
    path: '/best-sellers',
    element: (
      <BestSeller />
    ),
  },
  {
    path: '/award-winners',
    element: (
      <AwardWinners />
    ),
  },
  {
    path: '/featured-authors',
    element: (
      <FeaturedAuthors />
    ),
  },
  {
    path: '/login',
    element: (
      <LogIn />
    ),
  },
  {
    path: '/signup',
    element: (
      <SignUp />
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
