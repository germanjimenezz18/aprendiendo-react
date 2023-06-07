import { TwitterFollowCard } from "./TwitterFollowCard";

function App() {
  /* tambien puedes pasar funciones como parametro */
  return (

    <div className="App">
    <TwitterFollowCard name={"Germán Jimenez"} userName={"baki_"}/>
    <TwitterFollowCard name={"Miguel Ángel Durán"} userName={"midudev"}/>
    <TwitterFollowCard name={"s4vitar"} userName={"s4vitar"}/>
    <TwitterFollowCard name={"s4vitar"} userName={"s4vitar"}/>

    </div>
  );
}

export default App;
