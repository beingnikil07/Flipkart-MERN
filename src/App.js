import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/dataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDescription from './Components/Details/productDescription';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDescription />} ></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App;



