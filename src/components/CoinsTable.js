import React from 'react';
import CoinRow from './CoinRow';

const theads = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

const CoinsTable = ({ coins, search }) => {

    const filteredCoins = coins.filter(
        (coin) => 
        coin.name.toLowerCase().includes(search.toLowerCase()) |
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <table className="table table-dark table-hover text-center">
            <thead>
                <tr>
                    {
                        theads.map((valor, index) => (
                            <td key={index}>{valor}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index} />
                ))}
            </tbody>
        </table>
    )
}

export default CoinsTable;  