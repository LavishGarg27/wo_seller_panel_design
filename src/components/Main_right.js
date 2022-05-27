import React from 'react';
import "./Main_right.css";
import Input from "../components/Input";
// import Input2 from "../components/Input2";
const Main_right = () => {
  return (
    <>
        <section className="main_right">
            <p className="form_heading tracking">Show In Store</p>
            <p className="descp">The product will be available on your store, when enabled.</p>
            <p className="form_heading tracking">Categories</p>
            <p className="descp">Choose a category for your product.</p>
            <div className="category">
                <input type="text" placeholder="Search..." className="search_box"/>
                {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                <div className="uncategies">
                    <i class="fa fa-minus-square-o" aria-hidden="true"></i>
                    <p>Uncategorized</p>
                </div>

                <div className="phone">
                    <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                    <p>Phone</p>
                </div>
                <div className="shoes">
                    <i class="fa fa-minus-square-o minus" aria-hidden="true"></i>
                    <p>Shoes</p>
                </div>
            </div>
            <Input title="Brand" placeholder="Enter Brand" descp="" />
            <p className="form_heading tracking">
                    Qualifies for return
            </p>
            <p className="form_heading tracking">
                    On Sale
            </p>
            <Input title="Dimensional Weight" placeholder="Enter Dimentional Weight" descp="" />
            <Input title="Width" placeholder="Enter Width" descp="" />
            <Input title="Height" placeholder="Enter Height" descp="" />
            <Input title="Length" placeholder="Enter Length" descp="" />

            <p className="form_heading tracking">
                    Product Identifiers
            </p>
            <Input title="ISBN" placeholder="Enter ISBN" descp="International Standard Book Number. This field is applicable only for books." />
            <Input title="UPC" placeholder="Enter UPC" descp="Universal Product Code. Enter your product’s 13-digit code, if available." />
            <Input title="EAN" placeholder="Enter EAN" descp="European Article Number. Enter your product’s 14-digit code, if available." />
            <Input title="MPN" placeholder="Enter MPN" descp="Manufacturer Part Number. Enter your product’s MPN, if available." />
        </section>
    </>
  )
}

export default Main_right;