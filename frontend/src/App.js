import Feed from "./components/feed/Feed";
import Header from "./components/navbar/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widget/Widget";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;

// facebookUser
// z1s1QCQuWr7S8GJ0
