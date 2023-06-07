import { useState } from "react";


export function TwitterFollowCard({children, userName }) {
    const [isFollowing, setFollowing] = useState(false)
    let text = isFollowing ? 'siguiendo' : 'seguir'  
    let btnClassName = isFollowing 
      ? 'tw-followCard-button is-following'
      : 'tw-followCard-button'

    const handleClick = () => { setFollowing(!isFollowing) }



            
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="Imagen de perfil"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">{`@${userName}`}</span>
        </div>
      </header>

      <aside>
        <button className={btnClassName} onClick={handleClick}>
        <span className="tw-followCard-text" >{text}</span>
          <span className="tw-followCard-stopFollow" >Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
