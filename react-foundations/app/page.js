import LikeButton from './like-button.js';

// Este é o seu componente de Header, que não muda.
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

// Esta é a sua página principal.
// Note que ela continua a mesma, apenas importa e usa o novo LikeButton.
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      {/* Usando o seu novo componente de botão estilizado */}
      <LikeButton />
    </div>
  );
}

