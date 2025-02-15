import { useState } from "react";
import Image from './Image';

export default function PlaceGallery({ place }) {
    const [showallphotos, setshowallphotos] = useState(false);

    if (showallphotos) {
        return (
            <div className="mt-7 bg-black rounded-3xl px-8 py-8 max-w-5xl mx-auto">
                <div className="p-8 grid gap-4">
                    <div>
                        <button onClick={() => setshowallphotos(false)} className="flex gap-2 fixed right-64 rounded-2xl py-2 px-4 shadow-md shadow-gray-500 bg-slate-200 opacity-90">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                            </svg>
                            Close photos
                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map((photo, index) => (
                        <div key={index}>
                            <Image src={photo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-xl overflow-hidden">
                <div>
                    {place.photos?.[0] && (
                        <div>
                            <Image onClick={() => setshowallphotos(true)} className="aspect-square cursor-pointer object-cover" src={place.photos[0]} alt="" />
                        </div>
                    )}
                </div>
                <div className="grid">
                    {place.photos?.[1] && (
                        <Image onClick={() => setshowallphotos(true)} className="aspect-square cursor-pointer object-cover" src={place.photos[1]} alt="" />
                    )}
                    <div className="overflow-hidden">
                        {place.photos?.[2] && (
                            <Image onClick={() => setshowallphotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={place.photos[2]} alt="" />
                        )}
                    </div>
                </div>
            </div>
            <button onClick={() => setshowallphotos(true)} className="flex gap-2 absolute bottom-2 right-2 rounded-2xl py-2 px-4 shadow-md shadow-gray-500 bg-white opacity-90">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Show more photos
            </button>
        </div>
    );
}
