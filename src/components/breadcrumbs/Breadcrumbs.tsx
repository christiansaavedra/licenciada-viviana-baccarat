import styles from "./Breadcrumbs.module.css";

export type Crumb = {
  label: string;
  to?: string; // sin `to` = item activo (último)
};

type Props = {
  crumbs: Crumb[];
};

const Breadcrumbs = ({ crumbs }: Props) => {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.list}>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className={styles.item}>
              {!isLast && crumb.to ? (
                <>
                  <a href={crumb.to} className={styles.link}>
                    {crumb.label}
                  </a>
                  <span className={styles.sep} aria-hidden="true">
                    /
                  </span>
                </>
              ) : (
                <span className={styles.current} aria-current="page">
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
