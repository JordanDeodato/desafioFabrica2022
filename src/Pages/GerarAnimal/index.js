import Botao from '../../components/Botao';
import './GerarAnimal.css';
import { useEffect, useState } from "react";
import Footer from '../../components/Footer';

const GerarAnimal = () => {
    const [animal, setAnimal] = useState("Animal");

    useEffect(() => {
        getAnimal();
    }, []);

    const getAnimal = async () => {
        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        const data = await response.json();
        setAnimal(data);
    };


    return (
        
        <main>
            <header className="header">
                <h1 className="h1">Zoologico Central City</h1>
                <div className='list'>
                    <Botao nome="Galeria" />
                    <Botao nome="Página Inicial" />
                </div>
            </header>
            <section className="new-folder">
                <img className="img-folder" src={animal.image_link} alt="animal" />
                <p><strong>Nome: </strong>{animal.name}</p>
                <p><strong>Nome Científico: </strong>{animal.latin_name}</p>
                <p><strong>Habitat: </strong>{animal.habitat}</p>
                <p><strong>Alimentação: </strong>{animal.diet}</p>
                <p><strong>Localização: </strong>{animal.geo_range}</p>
            </section>
            <div className="botao-gerar">
                <Botao onClick={getAnimal} nome="Gerar Novo Animal" />
            </div>
            <Footer />
        </main>
    )
}

export default GerarAnimal;