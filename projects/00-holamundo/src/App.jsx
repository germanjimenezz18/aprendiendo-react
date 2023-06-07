import { TwitterFollowCard } from "./TwitterFollowCard";
import './app.css'


const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing : true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H,',
    isFollowing : false
  },
  {
    userName: 'baki_',
    name: 'German Jimenez',
    isFollowing : false
  },
  {
    userName: 's4vitar',
    name: 's4vitar',
    isFollowing : true
  }
]

function App() {
  /* tambien puedes pasar funciones como parametro */
  return (

    <section className="App">

      {
        users.map(({userName, name}) => (
          <TwitterFollowCard
          key={userName}
            userName={userName}
          >
            {name}
          </TwitterFollowCard>
        ))
      }

  
    </section>
  );
}

export default App;
