import { set } from "lodash";
import { useState } from "react";

const AddNewProduct= () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");

    const [isShowDetail, setIsShowDetail] = useState(true)

    const handleHideForm = (status) => {
        // { isShowDetail ? setIsShowDetail(false) : setIsShowDetail(true)}
        // setIsShowDetail(!isShowDetail)
        setIsShowDetail(status);
    }

    const handleClickBtn = () => {
        // let object = {
        //     name, price, size, color
        // }

        let object = {
            name1: name,
            price: price,
            size: size,
            color: color
        }

        let productList = localStorage.getItem("productList");
        if(productList) {
            let arr = JSON.parse(productList)
            arr.push(object)
            localStorage.setItem("productList", JSON.stringify(arr))
        } else {
            localStorage.setItem("productList", JSON.stringify([object]))
        }

        setName("");
        setPrice(0);
        setSize(0);
        setColor("");
    }



    return (
        <div>
            {
                isShowDetail === true &&

            <fieldset>
                <legend>Add A New Product</legend>
                <div className="input-product">
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="input-product">
                    <label>Price: </label>
                    <input type="text" value={price} onChange={(event) => setPrice(event.target.value)} />
                </div>
                <div className="input-product">
                    <label>Size: </label>
                    <input type="text" value={size} onChange={(event) => setSize(event.target.value)} />
                </div>
                <div className="input-product">
                    <label>Color: </label>
                    <input type="text" value={color} onChange={(event) => setColor(event.target.value)} />
                </div>
                <div>
                    <button onClick={handleClickBtn}>+Add New</button>
                </div>
            </fieldset>
            }

            {/* {
                isShowDetail === true && <div onClick={() => handleHideForm(false)}> Hire this form </div>
            }
            {
                isShowDetail === false && <div onClick={() => handleHideForm(true)}> Show the form </div>
            } */}

            {
                isShowDetail === true ? <div onClick={() => handleHideForm(false)}> Hire this form </div> : <div onClick={() => handleHideForm(true)}> Show the form </div>
            }

            <div>
                Product list:
                <div>
                    {localStorage.getItem("productList")}
                </div>
            </div>


            
        </div>



    ) 
}


export default AddNewProduct;