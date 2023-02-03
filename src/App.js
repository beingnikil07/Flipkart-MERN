import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/dataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDescription from './Components/Details/productDescription';
function App() {
  /*  DataProvider se maine apne saare project ke components ko isliye wrap krr diya jisse
      mai apne pure project mai use krr pau data provider mai rakhi states aur values ko
  */
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDescription />} ></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App;



