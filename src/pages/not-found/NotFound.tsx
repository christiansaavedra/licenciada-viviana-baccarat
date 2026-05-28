import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Esta página no existe</h1>
        <p className={styles.message}>
          El enlace puede haber cambiado o la dirección fue escrita de forma
          incorrecta. No hay nada que temer — el inicio está a un clic.
        </p>
        <a href="/" className={styles.button}>
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
