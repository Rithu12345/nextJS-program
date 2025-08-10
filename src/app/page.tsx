import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
       <h1> Hello World</h1>
       <h2>I am doing great</h2>
       <Link href="/users"> Users </Link>
       <br/>
       <ProductCard/>
      
    </main>
  );
}
