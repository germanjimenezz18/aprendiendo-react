import { useState } from "react";


export function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setFollow] = useState(false);
  const text = isFollowing ? "Siguiendo" : "Seguir"

   const buttonClassName = isFollowing 
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"

    const handleClick = () => {
        setFollow(!isFollowing)

    }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="Imagen de perfil"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{`@${userName}`}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
