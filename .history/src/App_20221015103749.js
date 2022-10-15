import { Layout } from "antd";
const { Header, Footer, Content } = Layout;
function App() {
  return (
    <div>
      <Layout style={{ minWidth: 1300 }}>
        <Header className="header">Header</Header>
        <Content className="content">Content</Content>
        <Footer className="">Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
