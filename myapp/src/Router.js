import React from 'React';
import { HashRouter, Route, Switch} from 'react-router-dom';
import TablePri from './TablePri';
import Chart from './Chart';
import Echart from './Echart';

const BasicRoute = () => (
	<HashRouter>
	   <Switch>
	      <Route exact path="/table" component={ TablePri }/>
	      <Route exact path="/Chart" component={ Chart }/>
          <Route exact path="/Echart" component={ Echart }/>
	   </Switch>
	</HashRouter>
	);

export default BasicRoute