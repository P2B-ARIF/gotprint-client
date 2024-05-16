import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import card from "./../../../assets/demo/card2.jpg";
import { Link } from "react-router-dom";

const DesignCreate = () => {
	const links = [
		{ id: 2, path: "/", name: "Business Cards" },
		{ id: 3, path: "/", name: "Marketing Materials" },
		{ id: 4, path: "/", name: "Signs & Banners" },
		{ id: 5, path: "/", name: "Invitations & Stationery" },
		{ id: 6, path: "/", name: "Sticker & Labels" },
		{ id: 7, path: "/", name: "Gifts & Decor" },
		{ id: 8, path: "/", name: "Apparel" },
		{ id: 9, path: "/", name: "Industry" },
		{ id: 10, path: "/", name: "Services" },
	];

	return (
		<div className='container mx-auto my-20'>
			<div className='text-center'>
				<h1 className='text-3xl font-bold'>Design - Create - Inspire</h1>
				<p className='text-lg font-thin'>
					Check us out on social media for creative ways to design your own
					products
				</p>
			</div>

			<Swiper
				slidesPerView={5}
				spaceBetween={20}
				freeMode={true}
				modules={[FreeMode, Navigation]}
				// navigation={true}
				className='mySwiper mt-10'
			>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => (
					<SwiperSlide
						key={id}
						className='hover:-translate-y-2 transition-all duration-200 ease-linear'
					>
						<div>
							<img src={card} alt='' className='rounded-md' />
							<div className='text-center mt-4'>
								<h3 className='font-semibold text-gray-600'>
									{links[id - 1]?.name}
								</h3>
								<h6 className='text-sm'>Starting at $9.80</h6>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className='text-center mt-5'>
				<h6 className='mb-5'>
					Share your designs and tag <strong>@GotPrint</strong> for a chance to
					be featured!
					<strong>#GotPrint</strong>
				</h6>
				<Link className='rounded-full py-2 px-5 border-[1px] border-gray-800 font-bold'>
					Follow Us
				</Link>
			</div>
		</div>
	);
};

export default DesignCreate;
