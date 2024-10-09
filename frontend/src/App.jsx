import Navbar from "./Components/Navbar";
import TaskManager from "./Components/TaskManager";

function App() {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col">
        <Navbar />
        <TaskManager />
      </div>
    </>
  );
}

export default App;
