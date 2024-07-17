const getproduct=async ()=>{



    const params =new URLSearchParams(window.location.search);
const id=params.get('id');
const {data} = await axios.get(`https://dummyjson.com/products/${id}`);


return data;





}
const displayproducts=async ()=>{
    const data=await getproduct();
    console.log(data);

    const result=`
    <h2> ${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.price}</p>
    
    `;
    const images=data.images.map((img)=>{
        return `<img src="${img}" width=200px/>`;
    }).join(' ');
    document.querySelector(".product").innerHTML=result;
    document.querySelector(".product-image").innerHTML=images;
    document.querySelector(".overlay").classList.add('d-none');

    
}   
    
    displayproducts();
    