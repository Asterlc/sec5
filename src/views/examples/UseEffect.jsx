import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState('Impar');

    function calcFatorial(number) {
        const n = parseInt(number);
        if (n < 0) return -1;
        if (n === 0) return 1;
        return n * calcFatorial(n - 1);
    }

    useEffect(() => {
        setFatorial(calcFatorial(number));
    }, [number]);

    useEffect(() => {
        if (fatorial > 10 ** 6) {
            document.title = 'Eita!';
            window.alert(document.title);
        }
    }, [fatorial]);

    useEffect(() => {
        setStatus(number % 2 === 0 ? 'Par' : 'Impar')
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title='Exercício #01'></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>

                </div>
                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <SectionTitle title='Exercício #02'></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    );
}

export default UseEffect
