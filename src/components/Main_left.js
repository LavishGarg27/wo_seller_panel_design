import React from 'react';
import "./Main_left.css";
import Input from "../components/Input";
import Input2 from "../components/Input2";
const Main_left = () => {
  return (
    <>
        <section className="main_left">
            <div className="logos">
            <i class="fa fa-home" aria-hidden="true"></i>
            <i class="fa fa-list" aria-hidden="true"></i>
            <i class="fa fa-cube" aria-hidden="true"></i>
            <i class="fa fa-search-plus" aria-hidden="true"></i>
            <i class="fa fa-cog" aria-hidden="true"></i>
            </div>
            <div className="form_section">
                <p className="form_heading">
                    General Details
                </p>
                <div className="form">
                    <Input title="Title" placeholder="Enter Title" descp= "" />
                    <Input title="Selling Price" placeholder="Enter Selling Price" descp="Enter the price at which you’re offering this product. If this is a discounted price, enter the product’s actual price under Retail Price." />
                    <Input title="Retail Price" placeholder="Enter Retail Price" descp="Enter the product’s original price. This price will be displayed next to the selling price and will be crossed out." 
                    />
                    <Input title="SKU" placeholder="Enter SKU" descp="Enter your product’s SKU. You’ll use it for maintaining your inventory." />
                    <Input2 title="Description" descp="Enter a concise description of the product. This will be displayed below the product’s title on your website’s product page." />
                    <Input2 title="Product Details" descp="Highlight your product’s functionality and features. These will be displayed on the product’s page." />
                </div>
                <p className="form_heading tracking">
                    Inventory Tracking
                </p>
                <div className="check_box">
                    <input type="checkbox" name="inventory" className="check_box_input"/>
                    <label for="inventory">Track Inventory</label>
                    <p>You cannot enable/disable inventory tracking once you have created transactions for this product.</p>
                </div>
                <Input title="Quantity" placeholder="Enter Quantity" descp="" />
                <div className="quality_check">
                <p className="form_heading tracking">
                    Quantity Restriction
                </p>
                <div className="center">
                    <input type="checkbox" name = "" className="check"/>
                </div>
                </div>
                <p className="descp">Specify the quantities to restrict purchase</p>
                <div className="max_min_quantity">
                    <Input title="Min" placeholder="Minimum Quantity" descp="" />
                    <Input title="Max" placeholder="Maximum Quantity" descp="" />
                </div>
                <Input title="Low Stock Limit" placeholder="Enter Low Stock Limit" descp="You'll receive a reminder when the product's stock goes below this value. Make sure you have enabled your low stock email notification in settings." />
            </div>
        </section>
    </>
  )
}

export default Main_left;