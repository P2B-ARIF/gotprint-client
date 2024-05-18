import React from "react";
import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import cardImage from "./../../../../assets/demo/card2.jpg";

const ShopByShape = () => {
	return (
		<div id="shape" className='container mx-auto my-20'>
			<Box position='relative' padding='10' mx={32}>
				<Divider />
				<AbsoluteCenter bg='white' px='4' fontSize={20} fontWeight={700}>
					Shop by shape
				</AbsoluteCenter>
			</Box>

			<div className='mx-44'>
				<Swiper
					slidesPerView={4}
					spaceBetween={20}
					navigation={true}
					pagination={{
						clickable: true,
					}}
					modules={[Navigation, Pagination]}
					className='mySwiper '
				>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
						<SwiperSlide key={item}>
							<div
								className='hover:-translate-y-2 transition-all duration-200 ease-linear flex items-end h-[200px] rounded-md shadow overflow-hidden'
								style={{
									backgroundImage: `url(${cardImage})`,
									backgroundPositionX: "center",
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
								}}
							>
								{/* <img src={card} alt='' className='rounded-md' /> */}
								<div className='text-center mt-3 bg-[#F1F6E9] w-full py-1'>
									<h3 className='font-semibold text-gray-600 text-lg'>
										Rectangle
									</h3>
									<h6 className='text-sm text-gray-700'>Starting at $9.80</h6>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ShopByShape;
