import { Provider } from 'react-redux';
import Home from './pages/Home';
import { GlobalStyle } from './styles';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home />
    </Provider>
  );
}

export default App;
