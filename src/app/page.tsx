import Favorite from "../components/Favorite";
import Image from "next/image";



export default function Page() {
	const favorites = [
		{
			name: "佐藤璃果ちゃん",
			src: "/images/S__46383168_0.jpg",
			alt: "璃果ちゃんの画像",
		},
		{
			name: "筒井あやめちゃん",
			src: "/images/S__46383170_0.jpg",
			alt: "あやめちゃんの画像",
		},
		{
			name: "村井優ちゃん",
			src: "/images/S__46383173.jpg",
			alt: "優ちゃんの画像",
		}
]
	return (
		<div>
			<div className="flex justify-center">
			   <Image src='/images/S__46317596.jpg' alt='私の画像' width={800} height={500} className="w-full max-w-2xl object-contain rounded-2xl" />
		    </div>
		        <h1 className="text-5xl text-pink-200 font-bold underline p-10">酒井映奈</h1>
			    <h1 className="text-3xl text-pink-300 font-bold px-10 pt-10">好きなもの</h1>
		        <div className="flex justify-center gap-10 bg-teal-100 p-10 m-10 rounded-2xl ">
		            {favorites.map((favorite, index) => (
			            <Favorite key={index} name={favorite.name} src={favorite.src} alt={favorite.alt} className="w-60" />
		   ))}
         </div>
    </div>
	)
}