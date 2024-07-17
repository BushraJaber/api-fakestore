const getproduct = async()=>{

    const {data} = await axios.get('https://dummyjson.com/products');
return data;}


const displayproducts = async()=>{
    try{
const data=await getproduct();
const products=data.products;
const result= products.map((product)=>{
    return `<div class="product">
    <h2>${product.title}</h2>
    <h3>${product.price}</h3>
    <img src="${product.thumbnail}"/>
    <a href='details.html?id=${product.id}'>show</a>
    <br>
    <br>
    <button onclick='DeleteProduct(${product.id})'>DELETE </button>
    </div>`;

}).join('');


document.querySelector('.products').innerHTML=result;
}catch(e){
    console.log(e);
    const r=`
    <h2>Error</h2>
    <p>${e.message}</p>`
    document.querySelector(".products").innerHTML=r;
}finally{
    document.querySelector(".overlay").classList.add('d-none');

}
}

displayproducts();
const DeleteProduct=async(id)=>{
    try{
      const {data}=  await axios.delete(`https://dummyjson.com/products/${id}`);
console.log(data);
alert("Successfully deleted product");
location.href='index.html';
    }catch(e){
        alert("Failed to delete product");
        console.log(e);
    }
 
}