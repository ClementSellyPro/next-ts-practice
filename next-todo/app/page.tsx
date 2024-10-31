import TaskListContainer from './components/TaskListContainer';
import TaskCard from './components/TaskCard';
import TaskCardModify from './components/TaskCardModify';

export default function Home() {
  return (
    <div className="flex justify-center">
      <TaskListContainer>
        <TaskCardModify />

        <TaskCard title='Premiere tache' description="La premiere tache consiste a faire la premiere tache, afin de commencer la deuxieme. Je sais c'est (c'est marrant ca fait C C) pas facile." limit='24/07/2024' />
      </TaskListContainer>
    </div>
  );
}
