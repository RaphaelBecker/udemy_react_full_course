import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <p></p>
      <Todo text="Learn more" />
      <p></p>
      <Todo text="Learn till you feel satisfied" />
      <p></p>
      <Todo text="Learn till you master it" />
    </div>
  );
}

export default App;
