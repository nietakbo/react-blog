import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import AddPost from "./components/pages/AddPost/AddPost";
import EditPost from "./components/pages/EditPost/EditPost";
import NotFound from "./components/pages/NotFound/NotFound";
import { Container } from 'react-bootstrap'
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import PostDetails from "./components/PostDetails/PostDetails";


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
