import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// desktop version
import Header from './Desktop/Components/Header';
import MainPage from './Desktop/Pages/MainPage';
import HomeworkNav from './Desktop/Pages/Homework_nav';
import About from './Desktop/Pages/About';

// mobile version
import MobileHeader from './Mobile/Components/Header';
import MobileMainPage from './Mobile/Pages/MainPage';
import MobileHomeworkNavPage from './Mobile/Pages/Homework_nav';
import MobileAboutPage from './Mobile/Pages/About';

import './App.css';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "#ffffff"
    }
  }
});
/*
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    }
  }
});
*/
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* pc version */}
      <BrowserView>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/hw" element={<HomeworkNav />} />
          </Routes>
        </BrowserRouter>
      </BrowserView>
      {/* mobile version */}
      <MobileView>
        <BrowserRouter>
          <MobileHeader />
          <Routes>
            <Route path="/about" element={<MobileAboutPage />} />
            <Route path="/hw" element={<MobileHomeworkNavPage />} />
            <Route path="*" element={<MobileMainPage />} />
          </Routes>
        </BrowserRouter>
      </MobileView>
      <ToastContainer 
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"/>
    </ThemeProvider>
  );
}

export default App;
