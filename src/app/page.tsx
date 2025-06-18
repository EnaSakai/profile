import Favorite from "../components/Favorite";
import Image from "next/image";



export default function Page() {
	return (
		<div>
			<Image src='/images/S__46317596.jpg' alt='私の画像' width={800} height={500} className="w-full max-w-2xl object-contain rounded-2xl" />
			<h1 className="text-5xl text-pink-200 font-bold">酒井映奈</h1>
			<Favorite name="佐藤璃果ちゃん" src="/images/S__46383168_0.jpg" alt="璃果ちゃんの画像" />
		</div>
	)
// }あいうえお