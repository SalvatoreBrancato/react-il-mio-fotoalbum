import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DefaultLayout from './pages/DefaultLayout';
import HomePage from './pages/HomePage';
import PhotoPage from './pages/PhotoPage';
import SinglePhotoPage from './pages/SinglePhotoPage';
import ContactPage from './pages/ContactPage';

function App() {
  

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route element={<DefaultLayout/>}>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/photo' element={<PhotoPage/>}></Route>
                <Route path='/photo/:id' element={<SinglePhotoPage/>}></Route>
                <Route path='/contact' element={<ContactPage/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
