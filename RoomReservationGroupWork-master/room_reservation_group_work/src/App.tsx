import './App.scss';
import { RoomsPage } from './modules/rooms/components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Room } from './modules/rooms/components/Room';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/rooms" exact >
            <RoomsPage />
          </Route>
          <Route path="/rooms/:id" exact >
            <Room />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
