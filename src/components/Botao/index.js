import './Botao.css';

const Botao = (props) => {
    return (
        <div>
            <p className='btn-link listItem'> <a href="">{props.nome}</a> </p>
        </div>
    )
}

export default Botao;