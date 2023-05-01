import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './auth/AuthContext';
import Light from './styles/themes/light';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <ThemeProvider theme={Light}>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;