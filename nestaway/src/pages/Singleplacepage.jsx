import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../components/Bookingwidget";
import PlaceGallery from "../components/Placegallery";
import AddressLink from "../components/AddressLink";
import SocialIcons from "@/components/social-icons";



function SinglePlace() {
    const { id } = useParams();
    const [place, setPlace] = useState(null);

    useEffect(() => {
        if (!id) return;
        axios.get(`/places/${id}`).then((response) => setPlace(response.data));
    }, [id]);

    if (!place) return '';
    const shareUrl = `${window.location.origin}/places/${id}`;
    const shareText = `Check out this amazing place: ${place.title}`;

    const handleNativeShare = () => {
        if (navigator.share) {
            navigator.share({
                title: place.title,
                text: shareText,
                url: shareUrl,
            }).catch(err => console.log('Error sharing:', err));
        } else {
            navigator.clipboard.writeText(shareUrl);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <div className="mt-6 bg-gray-100 rounded-3xl px-8 py-8 max-w-5xl mx-auto shadow-lg shadow-gray-400">
            <h1 className="text-3xl">{place.title}</h1>
            <AddressLink>{place.address}</AddressLink>
            <PlaceGallery place={place} />

            <div className="mt-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>
                    <div className="my-4">
                        <h2 className="font-semibold text-2xl mt-4 mb-2">Description</h2>
                        {place.description}
                    </div>
                    <b className="font-semibold">
                        Check-In: {place.checkIn}<br />
                        Check-Out: {place.checkOut} <br />
                        Max number of guests: {place.maxGuests}
                    </b>
                </div>
                <div>
                    <BookingWidget place={place} />
                </div>
            </div>

            <div className="mt-3 text-lg text-gray-700 leading-4">
                <h3 className="font-semibold text-lg mt-4 mb-2">Perks</h3>
                <ul className="list-disc pl-5 text-lg">
                    {place.perks.map((perk, index) => (
                        <li className="mt-0" key={index}>{perk}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-3 text-sm text-gray-700 leading-4">
                <h3 className="font-semibold text-lg mt-4 mb-2">Extra Info</h3>
                {place.extraInfo}
            </div>

            {/* SHARE BUTTON SECTION */}
            <SocialIcons shareText= {shareText} shareUrl= {shareUrl} handleNativeShare={handleNativeShare} />
        </div>
    );
}

export default SinglePlace;
