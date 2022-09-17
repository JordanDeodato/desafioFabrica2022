import './App.css';
import Galeria from './pages/Galeria';

function App() {
  return (
    <div>
      <h1>Zoologico</h1>
      <ul>
        <a href=''> <li>Conheça nossos animais</li> </a>
        <a href=''> <li>Informações gerais</li> </a>
      </ul>
      <img src="https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="zebra"/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Galeria/>
    </div>
    
  );
}

export default App;
