import { Layout } from "antd";
import './style.css'
const { Header, Footer, Content } = Layout;
function App() {
  return (
    <div>
      <Layout style={{ minWidth: 1300 }}>
        <Header className="header">
          <A
        </Header>
        <Content className="content">Content</Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
