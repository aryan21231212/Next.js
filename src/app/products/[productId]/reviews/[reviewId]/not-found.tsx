"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
    const pathName = usePathname();
    const [productId, setProductId] = useState("");
    const [reviewId, setReviewId] = useState("");

    useEffect(() => {
        if (pathName) {
            const parts = pathName.split("/");
            setProductId(parts[2] || "unknown");
            setReviewId(parts[4] || "unknown");
        }
    }, [pathName]);

    return (
        <div>
            <h1>Error on review {reviewId} for product {productId}</h1>
        </div>
    );
}
