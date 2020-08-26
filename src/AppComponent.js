import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListUserComponent from './Components/user/ListUserComponent';
import AddUserComponent from './Components/user/AddUserComponent';
import EditUserComponent from './Components/user/EditUserComponent';

function AppComponent() {
	return (
		<div className="container">
			<Router>
				<Suspense fallback={<div div className="col-md-12">Loading...</div>}>
					<h1 className="text-center" style={style}>React 001</h1>
					<Switch>
						<Route path="/" exact component={ListUserComponent} />
						<Route path="/list-users" component={ListUserComponent} />
						<Route path="/add-user" component={AddUserComponent} />
						<Route path="/edit-user" component={EditUserComponent} />
					</Switch>
				</Suspense>
			</Router>
		</div>
	);
}

const style = {
	color: 'red',
	margin: '10px'
}

export default AppComponent;