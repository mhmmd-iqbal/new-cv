import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import {
  Experiences,
  Organizationals,
  Achievements,
  Profile,
  Projects,
} from './services/GetDataServices';

function App() {
  return (
    <div className='App politics_version' id='page-top'>
      <Header></Header>
      <Content
        Experiences={Experiences}
        Organizationals={Organizationals}
        Achievements={Achievements}
        Profile={Profile}
        Projects={Projects}></Content>
      <Footer Profile={Profile}></Footer>
    </div>
  );
}

export default App;
