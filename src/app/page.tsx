import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
       <h1> Hello World</h1>
       <h2>I am doing great</h2>
       <Link href="/users"> Users </Link>
       <br/>
       <Link href="/users/new"> New </Link>

       <ProductCard/>
      
    </main>
  );
}
