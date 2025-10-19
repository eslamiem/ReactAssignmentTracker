import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

// Define the new Props interface including the id and onDelete handler
type Props = {
  id: string; // Add ID so we know which assignment to delete
  title: string;
  completed: boolean;
  onDelete: (id: string) => void; // Function to call when delete button is clicked
  onToggleCompletion: (id: string) => void; // Add handler for future completion toggle
};

export function Assignment({ id, title, completed, onDelete, onToggleCompletion }: Props ) {
  return (
    <div className={styles.assignment}>
      {/* Connect this button to onToggleCompletion */}
      <button 
        className={styles.checkContainer} 
        onClick={() => onToggleCompletion(id)} // Applying the toggle function here
        aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
      >
        <div className={completed ? styles.checkedIcon : styles.uncheckedCircle} />
      </button>

      <p className={completed ? styles.textCompleted : ''}>{title}</p>

      {/* Attach the onDelete handler and pass the assignment's ID */}
      <button 
        className={styles.deleteButton} 
        onClick={() => onDelete(id)}
        aria-label="Delete assignment"
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
