"use client"
import useSWR from 'swr';
import { getProducts } from '../serverAction/services';
import { useSession } from 'next-auth/react';


export default function ClientPage() {

    const { data, status } = useSession();

    const swr = useSWR('products', getProducts)

    console.log("render");
    return (
        <>
        </>
    )
}
