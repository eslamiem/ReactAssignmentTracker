import styles from "./assignment.module.css";
import { TbTrash, TbCircleCheckFilled, TbCircle } from "react-icons/tb";

type Props = {
  id: string; 
  title: string;
  completed: boolean;
  onDelete: (id: string) => void; 
  onToggleCompletion: (id: string) => void; 
};

export function Assignment({ id, title, completed, onDelete, onToggleCompletion }: Props ) {
  return (
    <div className={styles.assignment}>
      <button 
        className={styles.checkContainer} 
        onClick={() => onToggleCompletion(id)} 
        aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {completed ? (<TbCircleCheckFilled size={18} />) : (<TbCircle size={18} />)}
      </button>

      <p className={completed ? styles.textCompleted : ''}>{title}</p>

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
