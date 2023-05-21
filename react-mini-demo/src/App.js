import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>TODOs</h1>
      <Todo text="Task1" />
      <Todo text="Task2" />
      <Todo text="Task3" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
