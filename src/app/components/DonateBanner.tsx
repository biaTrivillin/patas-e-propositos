import { BiSolidDonateHeart } from "react-icons/bi";

const DonateBanner = () => {
    return (
        <div className="shadow-xl p-6 mx-auto max-w-xl flex flex-col rounded-xl mb-40  ">
            <BiSolidDonateHeart className="text-5xl mb-4" />
            <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:flex-3">
                    <h1 className="text-2xl font-bold mb-1">Faça uma doação</h1>
                    <p className="text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ex turpis.
                    </p>
                </div>
                <div className="flex flex-col gap-2 md:flex-1">
                    <button className="py-2 px-4 bg-dark-blue text-white rounded-md w-full md:w-auto flex-1 text-center">
                        PicPay
                    </button>
                    <button className="py-2 px-4 bg-gray-300 rounded-md w-full md:w-auto flex-1 text-center">
                        Pix
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DonateBanner;
