import App from './App';
import "./style/index.scss";

const appElement = document.querySelector('#app');

appElement && new App(appElement)