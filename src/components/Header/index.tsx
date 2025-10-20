import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { TAssignment } from "../../App";

type Props = {
  setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>;
};

export function Header({ setAssignments }: Props) {
  const [text, setText] = useState("");
  
  const isTitleEmpty = text.trim().length === 0;

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isTitleEmpty) {
      setAssignments((assignments) => [
        ...assignments, 
        {
          id: crypto.randomUUID(),
          title: text,
          completed: false,
        },
      ]);
      setText("");
    }
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={(e) => handleCreate(e)}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new assignment" type="text" />
        <button disabled={isTitleEmpty}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
