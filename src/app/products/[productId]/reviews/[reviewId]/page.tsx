export default async function page({params}:{
    params: Promise<{productId:String,reviewId:String}>
}) {
    const {productId,reviewId} = await params;
    return (
        <div>
         <h1> welcome to {reviewId} review of {productId} product.</h1>   
        </div>
    );
}
