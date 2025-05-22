import HeaderComponent from '../components/HeaderComponent';

function BlogPage() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    console.log('¡Formulario enviado exitosamente!'); // Mensaje que aparecerá en la consola
  };

  return (
    <>
      <HeaderComponent />
      <div className="blogPage">
        <h1>Tu opinión</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nombre:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="comentar">Comentarios:</label>
          <input type="text" id="comentar" name="comentar" />

          <fieldset>
            <button type="submit">ENVIAR</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default BlogPage;