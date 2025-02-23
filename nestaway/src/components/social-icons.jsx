import { FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";

export default function SocialIcons({handleNativeShare ,shareUrl, shareText}){
    return <>
        <div className="mt-6 border-t pt-4 flex flex-col items-center">
                <h3 className="font-semibold text-lg mb-2">Share This Place</h3>
                <div className="flex space-x-4">
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-600 text-white rounded-full"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-400 text-white rounded-full"
                    >
                        <FaTwitter size={24} />
                    </a>

                    <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-green-500 text-white rounded-full"
                    >
                        <FaWhatsapp size={24} />
                    </a>

                    <a
                        href={`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`}
                        className="p-2 bg-red-500 text-white rounded-full"
                    >
                        <FaEnvelope size={24} />
                    </a>

                    <button
                        onClick={handleNativeShare}
                        className="p-2 bg-gray-500 text-white rounded-full"
                    >
                        <FaLink size={24} />
                    </button>
                </div>
            </div>
    </>
}