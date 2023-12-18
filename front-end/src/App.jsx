import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './pages/DefaultLayout';
import HomePage from './pages/HomePage';
import PhotoPage from './pages/PhotoPage';
import SinglePhotoPage from './pages/SinglePhotoPage';
import ContactPage from './pages/ContactPage';
import { AuthProvider } from './contexts/AuthContext';
import LogInPage from './pages/LogInPage';
import DashboardLayout from './pages/DashboardLayout';
import DashboardPage from "./pages/DashboardPage";
import PrivatePages from "./middlewares/PrivatePages";
import CreatePage from './pages/authPages/CreatePage';
import UpdatePage from './pages/authPages/UpdatePage';
import MessagePage from './pages/authPages/MessagePage';
function App() {


  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/photo' element={<PhotoPage />}></Route>
              <Route path='/photo/:id' element={<SinglePhotoPage />}></Route>
              <Route path='/contact' element={<ContactPage />}></Route>
              <Route path='/login' element={<LogInPage />}></Route>
            </Route>
            <Route
              path="/admin"
              element={
                <PrivatePages>
                  <DashboardLayout />
                </PrivatePages>
              }
            >
              <Route index element={<DashboardPage />}></Route>
              <Route path='/admin/create' element={<CreatePage/>}></Route>            
              <Route path='/admin/update' element={<UpdatePage/>} ></Route>
              <Route path='/admin/message' element={<MessagePage/>} ></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </>
  )
}

export default App
