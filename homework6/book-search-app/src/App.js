import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import {BookProvider} from "./context/MainContext"
function App() {
  return (
    <BookProvider>
      <Header />
      <Content />
    </BookProvider>
  );
}

export default App;
