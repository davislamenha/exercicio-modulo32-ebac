import { Provider } from 'react-redux';
import Home from './pages/Home';
import { GlobalStyle } from './styles';
import store from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Favorites from './pages/Favorites';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/favoritos',
    element: <Favorites />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
