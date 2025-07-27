// src/components/SearchForm.tsx

// Створимо додаток, в якому є: форма пошуку статей; HTTP-запит на API Hacker News;
// виведення результатів на сторінку; обробка станів завантаження та помилки.

import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: (topic: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;
    
    // Якщо текстове поле порожнє, виводимо повідомлення і припиняємо виконання функції.
    if (topic === "") {
      alert("Please enter search topic!");
      return;
    }
    
    // У протилежному випадку викликаємо пропс і передаємо йому значення поля
    onSubmit(topic);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <input className={css.input} type="text" name="topic" />
      <button className={css.button} type="submit">Search</button>
    </form>
  );
}
