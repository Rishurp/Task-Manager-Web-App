import Navbar from "./Components/Navbar";
import TaskManager from "./Components/TaskManager";

export const config = {
  backendEndpoint :"https://task-manager-web-app-kigp.onrender.com"
}

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
