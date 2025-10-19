import { TAssignment } from "../../App";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: TAssignment[];
  onDelete: (id: string) => void; 
};

export function Assignments({ assignments, onDelete }: Props) {
  const completedCount = assignments.filter(a => a.completed).length;
  const totalCount = assignments.length;
  
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{totalCount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{`${completedCount} of ${totalCount}`}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment) => (
          <Assignment 
            key={assignment.id} 
            id={assignment.id} 
            title={assignment.title} 
            completed={assignment.completed}  
            onDelete={onDelete} 
          />
        ))}
      </div>
    </section>
  );
}
