





import { products } from "./constants/data.js"
import Product from "./model/product-schema.js"

const defaultData =async()=>{
try {
//    await Product.deleteMany({}) ;
  await Product.insertMany(products);
    console.log('Data imported successfully');
} catch (error) {
    console.log("error!!!!");
}

}

export default defaultData;