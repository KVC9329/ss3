import Image from "next/image";

const CompaniesList = [ 
    "/techm_logo.png", 
    "/Infosys_logo.png", 
    "/taskus-logo.png",
    "/concentrix_logo.png",
    "/wipro_logo.png",
    "/teleperformance_logo.png",
    "/telusInternational_logo.png",
    "/EXL_logo.png",
    "/Accor_logo.png",
    "/Amazon_logo.png",
    "/Capgemini_logo.png",
    "/credance_logo.png",
    "/IGT_logo.png",
    "/Transcom_logo.png",
    "/vertex_logo.png",
    "/image.png",
    "/aditya_logo.png",
    "/Altruist_logo.png"
];

export default function Companies() {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-10 items-center">
            {CompaniesList.map((image, index) => (
                <Image
                    key={index} // Using index as a fallback if image URLs are not guaranteed unique
                    src={image}
                    alt={image}
                    width={150}
                    height={150}
                />
            ))}
        </div>
    );
}
