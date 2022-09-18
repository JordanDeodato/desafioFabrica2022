import Botao from "../../components/Botao";
import { useEffect, useState } from "react";
import './Galeria.css';
import Footer from '../../components/Footer';

const Galeria = () => {

    const [animal, setAnimal] = useState("Animal");

    useEffect(() => {
        getAnimal();
    }, []);

    const getAnimal = async () => {
        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/5", {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        const data = await response.json();
        setAnimal(data);
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
                <h1 className="title">Galeria de Animais</h1>
                <div className="container-folder">
                    <section className="folder">
                        <img className="img" src={animal[0].image_link} alt="animal" />
                        <p><strong>Nome: </strong>{animal[0].name}</p>
                        <p><strong>Nome Científico: </strong>{animal[0].latin_name}</p>
                        <p><strong>Habitat: </strong>{animal[0].habitat}</p>
                        <p><strong>Alimentação: </strong>{animal[0].diet}</p>
                        <p><strong>Localização: </strong>{animal[0].geo_range}</p>
                    </section>
                    <section className="folder">
                        <img className="img" src={animal[1].image_link} alt="animal" />
                        <p><strong>Nome: </strong>{animal[1].name}</p>
                        <p><strong>Nome Científico: </strong>{animal[1].latin_name}</p>
                        <p><strong>Habitat: </strong>{animal[1].habitat}</p>
                        <p><strong>Alimentação: </strong>{animal[1].diet}</p>
                        <p><strong>Localização: </strong>{animal[1].geo_range}</p>
                    </section>
                    <section className="folder">
                        <img className="img" src={animal[3].image_link} alt="animal" />
                        <p><strong>Nome: </strong>{animal[3].name}</p>
                        <p><strong>Nome Científico: </strong>{animal[3].latin_name}</p>
                        <p><strong>Habitat: </strong>{animal[3].habitat}</p>
                        <p><strong>Alimentação: </strong>{animal[3].diet}</p>
                        <p><strong>Localização: </strong>{animal[3].geo_range}</p>
                    </section>
                    <section className="folder">
                        <img className="img" src={animal[4].image_link} alt="animal" />
                        <p><strong>Nome: </strong>{animal[4].name}</p>
                        <p><strong>Nome Científico: </strong>{animal[4].latin_name}</p>
                        <p><strong>Habitat: </strong>{animal[4].habitat}</p>
                        <p><strong>Alimentação: </strong>{animal[4].diet}</p>
                        <p><strong>Localização: </strong>{animal[4].geo_range}</p>
                    </section>
                    <section className="folder">
                        <img className="img" src={animal[2].image_link} alt="animal" />
                        <p><strong>Nome: </strong>{animal[2].name}</p>
                        <p><strong>Nome Científico: </strong>{animal[2].latin_name}</p>
                        <p><strong>Habitat: </strong>{animal[2].habitat}</p>
                        <p><strong>Alimentação: </strong>{animal[2].diet}</p>
                        <p><strong>Localização: </strong>{animal[2].geo_range}</p>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Galeria;