import Botao from "../../components/Botao";
import { useEffect, useState } from "react";

const Galeria = () => {

    const [animal, setAnimal] = useState("Animal");

    useEffect(() => {
        getAnimal();
    }, []);

    const getAnimal = async () => {
        const response = await fetch("https://pokeapi.co/");
        const data = await response.json();
        setAnimal(data);
        console.log(data)
    };

    return (
        <div>
            <header className="header">
                <h1 className="h1">Zoologico Central City</h1>
                <div className='list'>
                    <Botao nome="Escolha seu Animal" />
                    <Botao nome="Página Inicial" />
                </div>
            </header>
            <main>
                <h1>Animais Aleatórios</h1>
                <section>
                    <img src={animal.image_link} alt="animal" />
                </section>
                <button onClick={getAnimal}>Gerar Novo Animal</button>
            </main>
        </div>
    )
}

export default Galeria;