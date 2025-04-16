import { useState } from "react";
import axios from 'axios'

function PhotosUploader({setAddedPhotos,addedPhotos}){
    const [photolink, setphotolink] = useState('')

    async function Addphotobylink(e){
        e.preventDefault()
        const response=await axios.post('/upload-by-link',{link:photolink})
        const {success, filename} =response.data;

        if(success){
            setAddedPhotos(prev=>{
                return [...prev, filename];
            });
        }
        setphotolink('')
    }

    function Uploadphoto(e){
        const files= e.target.files
        const data = new FormData()
        
        for(let i=0; i< files.length; i++){
            data.append('photos',files[i]);
        }

        axios.post('/uploads',data,{
            headers: {'Content-type':'multipart/form-data'}
        }).then(response=>{
            const {data:filenames} = response;
            setAddedPhotos(prev=>{
                return [...prev, ...filenames];
            });
        })
    }

    function Removephoto(e,fs) {
        e.preventDefault()
        setAddedPhotos(prevPhotos => prevPhotos.filter(item => item !== fs));
    }
    function Selectmainphoto(e, fs) {
        e.preventDefault();
        setAddedPhotos(prev => {
            const updatedPhotos = prev.filter(item => item !== fs);
            return [fs, ...updatedPhotos]; 
        });
    }
    

    return <>
        <div className="flex gap-2">
            <input value={photolink} onChange={e=>setphotolink(e.target.value)} type="text" placeholder={'Add using a link ..... jpg'} ></input>
            <button onClick={Addphotobylink}  className="bg-gray-300 px-4 rounded-2xl">Add&nbsp;photos</button>
        </div>
        
        <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
            {addedPhotos.length > 0 && addedPhotos.map((link, index) => (
                <div className="h-32 flex relative" key={link}>
                    <img src={`${import.meta.env.VITE_API_BASE_URL}/uploads/`+link} alt={link} className="rounded-lg object-cover h-full w-full"/>
                    <button onClick={(e)=>Removephoto(e,link)} className="cursor-pointer absolute bottom-0 right-0 text-white bg-black bg-opacity-30 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 p-1 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>

                    <button onClick={(e)=>Selectmainphoto(e,link)} className="cursor-pointer absolute bottom-0 left-0 text-white bg-black bg-opacity-30 rounded-2xl">
                        {link === addedPhotos[0] && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 p-1">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                        )}
                        {link !== addedPhotos[0] && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 p-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        )}
                        
                    </button>
                </div>   
            ))}
            <label className="cursor-pointer flex items-center border bg-transparent rounded-2xl text-lg gap-1 text-gray-600">
                <input type="file" multiple className="hidden" onChange={Uploadphoto} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                </svg>
                Upload
            </label>
        </div>
    </>
}

export default PhotosUploader 