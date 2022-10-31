import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import AppHeader from "./components/Header";
import './style.css'
import List from './containers/List/index'
import Login from './components/Login/index'
import Test from './components/Test/index'
import Detail from './containers/Detail/index'
const { Header, Footer, Content } = Layout;
function App() {
  return (
    <Router>
      <Layout style={{ minWidth: 1200 }}>
        <Header className="header">
          <AppHeader />
        </Header>

        <Content className="content">
            <Login />
            <Test/>
            <Switch>
              <Route path="/detail/:id?" component={Detail} />
              <Route path="/:id?" component={List} />
            </Switch>
        </Content>

        <Footer className="footer">@copyright copyright-2022</Footer>
      </Layout>
    </Router>
  );
}

export default App;
