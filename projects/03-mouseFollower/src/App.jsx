import "./App.css";
import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0 , y:0 })

    //pointer move
  useEffect( ()=>{
    console.log(enabled);

    const handleMove = (event) =>{
      const { clientX, clientY} = event
      console.log( 'handlemove: ',  { clientX, clientY});
      setPosition({x: clientX, y: clientY})
    }

    if(enabled){  
      window.addEventListener('pointermove', handleMove)
    }

    //  CLEANUP: se ejecuta 
    // --> cuando el componenete se desmoneta
    // --> cuando cambias las dependencias, antes de ejecutar el efecto de nuevo 
    return () =>{
      console.log('cleamup');
      window.removeEventListener('pointermove', handleMove)
    }

  } ,[enabled])

    // change body className
  useEffect( ()=>{
      document.body.classList.toggle('no-cursor', enabled)

      return ()=>{
        document.body.classList.remove('no-cursor') 
      }
  } ,[enabled] )

  // [] --> solo se ejecuta cuando se monta el componente
  // [enabled] --> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undeifned --> se eejcuta cada vez que se renderiza el componente


  return (
    <>
        <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />

      <button onClick={()=>{setEnabled(!enabled)}} >{enabled ? 'Desactivar' : 'Activar Seguir Puntero'}</button>
    </>

  )  

}

function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      <FollowMouse/>
    </main>
  )
}

export default App;
