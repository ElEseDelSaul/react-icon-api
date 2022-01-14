import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

//Components
import CoinsTable from './components/CoinsTable';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const r = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
    console.log(r.data);
    setCoins(r.data) //Establecer nuevo valor al valor coins del estado
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="container">
      <div className="row">
        <h1>Crypto Market</h1>
        <input 
        type="text" 
        className="form-control text-center bg-dark text-light border-0 m-4" 
        placeholder="Search a Coin" 
        onChange={
          v => (
            //console.log(v.target.value)
            setSearch(v.target.value)
            )
        } />
        <CoinsTable coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;