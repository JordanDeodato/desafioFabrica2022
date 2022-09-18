import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='image'>
                <h2 className='text-banner'>Venha conhecer a vida selvagem a centímetros de distância</h2>
            </div>

            <div className='container'>
                <section className='carrousel imagem1'>
                    <h1>Sobre o nosso espaço</h1>
                    <p>Nosso espaço é bastante amplo e com muitos lugares incríveis para descobrir. Temos diversas espécies de animais de todo o mundo.</p>
                </section>

                <section className='carrousel imagem2'>
                    <h1>Cuidados com os animais</h1>
                    <p>Nossos animais são tratados da melhor maneira possível. Realizamos a limpeza de seus respectivos recintos diariamente e suas dietas são balanceadas.</p>
                </section>

                <section className='carrousel imagem3'>
                    <h1>Recomendações aos visitantes</h1>
                    <p>Recomendamos que não alimentem os animais, pois os mesmos já são devidamente alimentados. Esse tipo de atitude podem causar intoxicações e até mesmo a sua morte.</p>
                </section>
            </div>
        </div>
    )
}

export default Banner;