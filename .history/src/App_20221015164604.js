import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppHeader from "./components/Header";
import './style.css'
const { Header, Footer, Content } = Layout;
function App() {
  return (
    <div>
      <Layout style={{ minWidth: 1200 }}>
        <Header className="header">
          <AppHeader/>
        </Header>
        <Content className="content">
          <Router>
            <Switch>
              <Route path=''> 
              </Route>
            </Switch>
          </Router>
        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;