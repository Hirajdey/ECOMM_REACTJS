
export const fetchProduct = async (endpoint:string) =>{
    const response = await fetch(`https://fakestoreapi.com/${endpoint}`);

    if(!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const productData = await response.json();
    return productData;
}




