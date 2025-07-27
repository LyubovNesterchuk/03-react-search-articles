// src/components/SearchForm.tsx

import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: (topic: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;
    
    if (topic === "") {
      alert("Please enter search topic!");
      return;
    }
    
    onSubmit(topic);
  };

  return (
    <form className={css.form} action={handleSubmit}> 
      <input className={css.input} type="text" name="topic" />
      <button className={css.button} type="submit">Search</button>
    </form>
  );
}
