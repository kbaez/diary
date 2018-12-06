import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import Header from './routes/Header';
import LoadingComponent from './components/LoadingComponent';
import AuthenticatedComponent from './components/AuthenticatedComponent';
import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';

//create redux store -> reducers -> 'actions'
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <LoadingComponent>
            <div>
                <Switch>
                    <Route path="/login" component={Login} exact={true}/>
                    <AuthenticatedComponent>
                        <Header/>
                        <Route path="/" component={App} exact={true}/>
                        <Route path="/:id" component={NoteDetail} exact={true} />
                        <Route path="/:id/edit" component={NoteEdit} exact={true} />
                    </AuthenticatedComponent>
                </Switch>
            </div>
        </LoadingComponent>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
