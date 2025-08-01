import { notFound } from "next/navigation";

export default async function page({params}:{
    params: Promise<{productId:string,reviewId:string}>
}) {
    const {productId,reviewId} = await params;
    if(parseInt(reviewId)>1000){
        notFound()
    }
    return (
        <div>
         <h1> welcome to {reviewId} review of {productId} product.</h1>   
        </div>
    );
}
