import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import AddPost from "./components/pages/AddPost/AddPost";
import NotFound from "./components/pages/NotFound/NotFound";
import { Container } from 'react-bootstrap'
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import PostDetails from "./components/PostDetails/PostDetails";
import EditPostForm from "./components/features/EditPostForm/EditPostForm";
import Categories from "./components/pages/Categories/Categories";
import Category from "./components/pages/Category/Category"


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPostForm />} />
        <Route path="/about" element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/:name' element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
