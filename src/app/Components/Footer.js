import Link from "next/link";

const Footer = () => {
  return (
     <footer className="w-screen bg-black px-4">
        <h1 className="text-3xl font-semibold text-white py-5">SS CONSULTANTS LTD.</h1>
        <div className='grid sm:grid-cols-2'> 
            <div className=''>
                <div className="my-3 text-white">
                    <p className="font-bold py-2">JABALPUR RECRUITMENT CENTER:</p>
                    <p>178, Manmohan Nagar, Madhotal, Near New ISBT, Jabalpur MP (482002)</p>
                    <p>+91 9628373762; +91 9628373764</p>
                    <p><span className="font-bold">Phone : </span>+91 7999557006</p>
                    <p><span className="font-bold">Email : </span>prajit@kvcconsultantsltd.com</p>
                </div>
            </div>
            <div>
                <p className="font-bold text-white py-2"> Quick Links : </p>
                <div className="sm:grid sm:grid-cols-6 py-2">
                    <p className="text-white hover:font-semibold py-1"><Link href="/">about us</Link></p>
                    <p className="text-white hover:font-semibold py-1"><Link href="/">contact us</Link></p>
                    <p className="text-white hover:font-semibold py-1"><Link href="/">Job postings</Link></p>
                    <p className="text-white hover:font-semibold py-1"><Link href="#">gallary</Link></p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;