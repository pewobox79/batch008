import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1';
import Button from './components/assetComponents/Button';

function App() {

const data={
  app: {
    title: "React Intro",
    body: "das ist mein paragraph"
  },
  section: {
    title: "Meine Section",
    body: "das ist mein text"
},
  button: {
    title: "Click"
  }
}

  return (
    <div>
      <h2>{`Das ist ${data.app.title}`}</h2>
      <p>{data.app.body}</p>
      <Button title={data.button.title} name={"Peter"}/>
      <Section1 title={data.section.title} body={data.section.body} button={data.button}/>
      
    </div>
  );
}

export default App;
