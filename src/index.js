import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {App} from "./Home/App";
import {Navigator} from "./Infrastructure/Navigator";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
	<div>
		<Navigator/>
		<App/>
	</div>);
registerServiceWorker();
