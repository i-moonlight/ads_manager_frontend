import namor from 'namor';
import React from 'react';
import { Link } from 'react-router-dom';

const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const randomDate = (start, end) => {
    let today = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return yyyy + '-' + mm + '-' + dd;
};

const newPerson = () => {
    let nameEmail = namor.generate({ words: 2, saltLength: 0, saltType: 'number' });
    const name = (nameEmail.charAt(0).toUpperCase() + nameEmail.slice(1)).replaceAll('-', ' ');

    let department = namor.generate({ words: 2, saltLength: 0, saltType: 'number' });
    department = (department.charAt(0).toUpperCase() + department.slice(1)).replaceAll('-', ' ');

    const status = Math.floor(Math.random() * 5 + 1);

    const cryptoBitcoin = ['ANC', 'Bitcoin', 'ETC', 'ICN', 'MCO', 'ETH'];
    const cryptoEthereum = ['ARK', 'FRK', 'ICO', 'MRC', 'XRP', 'Litecoin'];
    const cryptoAsymmetrik = ['BC', 'BTA', 'GAME', 'JBS', 'NEO'];
    const cryptoCloudsmith = ['DCR', 'KORE', 'XMR', 'DASH', 'GNO'];

    const currency = Math.floor(Math.random() * 4 + 1);

    const totalCoin = [75, 80, 90, 100, 200, 300, 400, 470, 500, 630, 650, 700, 720, 750, 800, 850, 900, 1000];
    const coinPrice = [8, 10, 15, 40, 80, 100, 200, 300, 400];

    const coin = totalCoin[Math.floor(Math.random() * 17 + 0)];
    const price = coinPrice[Math.floor(Math.random() * 8 + 0)];

    const total = coin * price;
    const timeLabel = Math.floor(Math.random() * 2 + 1) > 1 ? 'am' : 'pm';
    const receiverLabel = Math.floor(Math.random() * 2 + 1) > 1 ? 'Bank' : 'Wallet';

    return {
        id: '#' + namor.generate({ words: 0, saltLength: 4, saltType: 'number' }),
        currency: (
            <React.Fragment>
                {currency === 1 && (
                    <div className="d-flex align-items-center">
                        {' '}
                        <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow" /> {cryptoBitcoin[Math.floor(Math.random() * 5 + 0)]}{' '}
                    </div>
                )}
                {currency === 2 && (
                    <div className="d-flex align-items-center">
                        {' '}
                        <i className="f-24 m-r-10 fab fa-ethereum text-c-red" /> {cryptoEthereum[Math.floor(Math.random() * 5 + 0)]}{' '}
                    </div>
                )}
                {currency === 3 && (
                    <div className="d-flex align-items-center">
                        {' '}
                        <i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue" /> {cryptoAsymmetrik[Math.floor(Math.random() * 4 + 0)]}{' '}
                    </div>
                )}
                {currency === 4 && (
                    <div className="d-flex align-items-center">
                        {' '}
                        <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green" /> {cryptoCloudsmith[Math.floor(Math.random() * 4 + 0)]}{' '}
                    </div>
                )}
            </React.Fragment>
        ),
        coin: coin,
        price: price,
        total: total,
        type: Math.floor(Math.random() * 2 + 1) > 1 ? <div className="text-success">Buy</div> : <div className="text-danger">Sell</div>,
        transType:
            Math.floor(Math.random() * 2 + 1) > 1 ? (
                <div className="badge badge-success badge-pill">Deposit</div>
            ) : (
                <div className="badge badge-danger badge-pill">Withdraw</div>
            ),
        amount: (
            <React.Fragment>
                {currency === 1 && (
                    <div className="amount">
                        <i className="fab fa-bitcoin m-r-5" />
                        {Math.floor(Math.random() * 9 + 0)}.{namor.generate({ words: 0, saltLength: 3, saltType: 'number' })}
                    </div>
                )}
                {currency === 2 && (
                    <div className="amount">
                        <i className="fab fa-ethereum m-r-5" />
                        {Math.floor(Math.random() * 9 + 0)}.{namor.generate({ words: 0, saltLength: 3, saltType: 'number' })}
                    </div>
                )}
                {currency === 3 && (
                    <div className="amount">
                        <i className="fab fa-asymmetrik m-r-5" />
                        {Math.floor(Math.random() * 9 + 0)}.{namor.generate({ words: 0, saltLength: 3, saltType: 'number' })}
                    </div>
                )}
                {currency === 4 && (
                    <div className="amount">
                        <i className="fab fa-cloudsmith m-r-5" />
                        {Math.floor(Math.random() * 9 + 0)}.{namor.generate({ words: 0, saltLength: 3, saltType: 'number' })}
                    </div>
                )}
            </React.Fragment>
        ),
        transPrice: Math.floor(total / 100) + '.' + namor.generate({ words: 0, saltLength: 2, saltType: 'number' }),
        usd: price + '.' + namor.generate({ words: 0, saltLength: 2, saltType: 'number' }),
        fee: '0.' + namor.generate({ words: 0, saltLength: 2, saltType: 'number' }),
        status: (
            <React.Fragment>
                {status === 1 && <span className="badge badge-primary inline-block mr-1">In Proccess</span>}
                {status === 2 && <span className="badge badge-warning inline-block mr-1">Delay</span>}
                {status === 3 && <span className="badge badge-success inline-block mr-1">Completed</span>}
                {status === 4 && <span className="badge badge-info inline-block">Pending</span>}
                {status === 5 && <span className="badge badge-danger inline-block">Cancelled</span>}
            </React.Fragment>
        ),
        time: Math.floor(Math.random() * 12 + 0) + ':' + Math.floor(Math.random() * 99 + 0) + ' ' + timeLabel,
        name: name,
        department: department,
        date: randomDate(new Date(2012, 0, 1), new Date()),
        receiver:
            cryptoBitcoin[Math.floor(Math.random() * 5 + 0)] +
            '-' +
            receiverLabel +
            ' ' +
            namor.generate({ words: 0, saltLength: 5, saltType: 'number' }),
        action: (
            <React.Fragment>
                <Link to="#" className="btn btn-icon btn-rounded btn-success mx-1">
                    <i className="feather icon-edit" />
                    &nbsp;Deposit
                </Link>
                <Link to="#" className="btn btn-icon btn-rounded btn-danger">
                    <i className="feather icon-trash-2" />
                    &nbsp;Withdraw
                </Link>
            </React.Fragment>
        )
    };
};

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map((d) => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
            };
        });
    };

    return makeDataLevel();
}
