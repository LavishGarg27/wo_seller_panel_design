import './App.css';
import Navbar from "./components/Navbar";
import MainLeft from "./components/Main_left";
import Input from "./components/Input";
import MainRight from "./components/Main_right";
import Input2 from "./components/Input2";
function App() {
  return (
    <div> 
      <Navbar/>
      <div className="products">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
      <h1>Add Products</h1>
      </div>
      <div className="main_section">
        <MainLeft/>
        <MainRight/>
      </div>
      <div className="pictures">
        <h1>Pictures</h1>
        <div className="drag_drop">
          <h1>Drag & Drop file here</h1>
          <br/>
          <p>or</p>
          <p class="choose">Choose file</p>
        </div>
      </div>

      <div className="Attributes">
        <h1>Attributes</h1>
        <div className="paragraph">
          <p>Create attributes to add variants to your product Attributes describe the characteristics of a product, such as size,color, or material. You can add a maximum of three attributes for every product.</p>
          <p class="Add">Add Attribute</p>
        </div>
      </div>
      <div className="Attributes seo_input">
        <h1>SEO</h1>
        <Input title="SEO Title" placeholder="Enter SEO Title" descp="" />
        <Input title="SEO Keywords" placeholder="Enter SEO Keywords" descp="Enter keywords related to your product." />
        <Input2 title="SEO Description" descp="" />
        <p class="seo_descp">Type a description that summarizes your product..</p>
        <button className="cancel_btn">Cancel</button>
        <button className="save_btn">Save</button>
      </div>
    </div>
  );
}
export default App;
