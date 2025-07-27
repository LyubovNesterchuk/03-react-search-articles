import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.spinnerContainer}>
      <svg className={css.spinner} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="#a0846a" strokeWidth="6" fill="none" strokeDasharray="188" strokeDashoffset="60"/>
        <circle cx="50" cy="50" r="25" fill="#e4c9a1" />
        <path d="M50 15 L55 30 L70 30 L57 40 L62 55 L50 45 L38 55 L43 40 L30 30 L45 30 Z" fill="#d8a47f" />
      </svg>
    </div>
  );
}