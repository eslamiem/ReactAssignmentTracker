import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

export type TAssignment = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [assignments, setAssignments] = useState([
    { id: "1", title: "Sample Assignment 1", completed: false },
    { id: "2", title: "Sample Assignment 2", completed: true },

  ]);

  return (
    <>
      <Header setAssignments={setAssignments} />
      <Assignments 
        assignments={assignments} 
        onDelete={(id) => setAssignments(assignments.filter(a => a.id !== id))} 
        onToggleCompletion={(id) => setAssignments(assignments.map(a => a.id === id ? { ...a, completed: !a.completed } : a))}
      />
    </>
  );
}

export default App;
