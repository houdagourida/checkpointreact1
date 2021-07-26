import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hader from './Hader/Hader';
import Profile from './Profilehou/Profile';
import Fulrname from './Fulname/Fulrname';

function App() {
 return(
    <div>
        <Hader/>
        <div className="center">
          <Profile/>
          <Fulrname/>
          </div>
    </div>
);
}

export default App;


