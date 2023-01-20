import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/dataProvider';
function App() {
  /*  DataProvider se maine apne saare project ke components ko isliye wrap krr diya jisse
      mai apne pure project mai use krr pau data provider mai rakhi states aur values ko
  
  */
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </DataProvider>
  )
}

export default App;



