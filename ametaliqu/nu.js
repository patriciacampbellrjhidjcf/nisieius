import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

const node_path = '/about';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={node_path} component={About} />
      </Switch>
    </Router>
  );
}

export default App;
