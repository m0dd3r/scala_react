import {React, Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import contactsApp from 'reducers';

const store = createStore(contactsApp);

import Client from "./Client";

import './App.css';

const Tech = ({match}) => {
    return <div>Current Route: {match.params.tech}</div>
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {title: ''};
    }

    async componentDidMount() {
        Client.getSummary(summary => {
            this.setState({
                title: summary.content
            });
        });
    }

    render() {
        return (
            //<Router>
            //    <div className="App">
            //        <h1>Welcome to {this.state.title}</h1>
            //        <Route path="/:tech" component={Tech}/>
            //        <div>
            //            <h2>Check out the project on GitHub for more information</h2>
            //            <h3>
            //                <a target="_blank" rel="noopener noreferrer" href="https://github.com/yohangz/scala-play-react-seed">
            //                    scala-play-react-seed
            //                </a>
            //            </h3>
            //        </div>
            //    </div>
            //</Router>
            <Provider store={store}>
                <App />
            </Provider>,
                document.getElementById('root')
        );
    }
}

export default App;
