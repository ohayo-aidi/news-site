import { Layout } from "antd";
const { Header, Footer, Content } = Layout;
function App() {
  return (
    <div>
      <Layout style={{ minWidth: 1300 }}>
        <Header className="header">Header</Header>
        <Content >Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
