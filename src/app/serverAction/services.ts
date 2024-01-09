'use server'
import { authOptions } from "../auth/authOptions";
import { getServerSession } from "next-auth/next";


export const getProducts = async () => {
    let userSession = await getServerSession(authOptions);

    let request = await fetch(`https://fakestoreapi.com/products`, {});
    const products = await request.json();
    return products;
}
