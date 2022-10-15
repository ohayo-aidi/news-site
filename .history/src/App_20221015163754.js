import { Layout } from "antd";
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
        <Content className="content">Content</Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
