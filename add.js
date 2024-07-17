const prodform=document.querySelector("form");
prodform.onsubmit =async function(e){
    e.preventDefault();
    const ee = e.target.elements;
    const title = ee['title'].value;
    const price = ee['price'].value;
    console.log(title, price);
    const {data}=await axios.post(`https://dummyjson.com/products/add`,
        {
            title:title,
            price:price
        }
    );
    console.log(data);







}
   
