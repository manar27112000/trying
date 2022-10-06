import { Provider } from 'react-redux';
import configureStore from './redux_store/store';
import Index from './components/Index';

const store = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <Index/>
        </Provider>
    );
}