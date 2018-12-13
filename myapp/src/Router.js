import React from 'React';
import { HashRouter, Route, Switch} from 'react-router-dom';
import TablePri from './TablePri';
import Chart from './Chart';

const BasicRoute = () => (
	<HashRouter>
	   <Switch>
	      <Route exact path="/table" component={ TablePri }/>
	      <Route exact path="/Chart" component={ Chart }/>
	   </Switch>
	</HashRouter>
	);

export default BasicRoute