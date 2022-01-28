import './App.css';
import Explore from './Componant/Explore';
import Feed from './Componant/Feed';
import Sidebar from './Componant/Sidebar';


function App() {
  return (
    <div className="app">
       {/* Twitter App Clone */}
       {/* SideBar Componant */}
       <Sidebar />

       {/* Feed Componant */}
       <Feed />

       {/* Explore Componant */}
       <Explore />
    </div>
  );
}

export default App;
