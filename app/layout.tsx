import type {Metadata} from "next";import{Inter,Space_Grotesk}from"next/font/google";import"./globals.css";
const inter=Inter({subsets:["latin"],variable:"--font-inter"});
const space=Space_Grotesk({subsets:["latin"],variable:"--font-space"});
export const metadata:Metadata={title:"SignalNest — Customer intelligence, made human",description:"Turn customer feedback into your next best move."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${inter.variable} ${space.variable}`}>{children}</body></html>}
