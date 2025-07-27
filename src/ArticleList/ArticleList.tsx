import type { Article } from '../types/Article';
import css from './ArticleList.module.css';

interface ArticleListProps {
  items: Article[];
}

export default function ArticleList({ items }: ArticleListProps) {
  return (
    <ul className={css.list}>
      {items.map(({ objectID, url, title }) => (
        <li className={css.item} key={objectID}>
          <a className={css.link} href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}