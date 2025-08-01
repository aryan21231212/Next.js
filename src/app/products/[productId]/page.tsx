export default async function productdetails({params}:{
    params: Promise<{productId:String}>
}) {
    const productId = (await params).productId;
    return (
        <div>
            <h1>
            welcome to product details {productId}
            </h1>
            
        </div>
    );
}
 