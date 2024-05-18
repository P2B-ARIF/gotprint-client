import React from "react";
import Hero from "../../../components/client_c/products/acrylic-boards/Hero";
import PopularSizes from "../../../components/client_c/products/acrylic-boards/PopularSizes";
import ShopByShape from "../../../components/client_c/products/acrylic-boards/ShopByShape";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import image from "./../../../assets/demo/acrylic_board_info_material_feature.jpg";
import image2 from "./../../../assets/demo/acrylic_boards_info_hole_drilling.jpg";
import YouMayAlsoLike from "../../../components/client_c/products/acrylic-boards/YouMayAlsoLike";
import CustomDesign from "../../../components/client_c/Home/CustomDesign";
import { MdChevronRight } from "react-icons/md";
import svg1 from "./../../../assets/demo/benefits_honest_pricing_icon.svg";
import svg2 from "./../../../assets/demo/new_satisfaction_guarantee.svg";
import svg3 from "./../../../assets/demo/free-sample-kit.svg";
import { FaAngleDown } from "react-icons/fa";

const Info = () => {
	return (
		<div>
			<Hero />

			<div className='bg-gray-100 mb-10 flex justify-center text-gray-700 text-[17px]'>
				<h4 className='px-6 py-3 border-b-4 border-gray-300 hover:border-primary'>
					<a href={"#popular"}>Popular Sizes</a>
				</h4>
				<h4 className='px-6 py-3 border-b-4 border-gray-300 hover:border-primary'>
					<a href={"#shape"}> Shop by Shape</a>
				</h4>
				<h4 className='px-6 py-3 border-b-4 border-gray-300 hover:border-primary'>
					<a href={"#features"}> Features</a>
				</h4>
			</div>
			<PopularSizes />
			<ShopByShape />

			<div id='features' className='container mx-auto my-24'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-44'>
					<div className='m-5 mt-20'>
						<h1 className='text-4xl font-extrabold text-gray-700'>
							Clear Cast Acrylic Material with Gloss Surface
						</h1>
						<h4 className='text-2xl my-2 text-gray-600'>
							Your go-to for modern, elegant signage
						</h4>

						<h5 className='text-lg text-gray-500 font-light'>
							Our ¼" thick clear Acrylic Boards are made of a transparent,
							glossy material and printed with UV ink for longer durability,
							making them suitable for both indoor and outdoor use. Create
							unique signage for businesses, events, and more.
						</h5>

						<Link className='flex items-center gap-2 text-secondary mt-10'>
							Order Now
							<FaArrowRightLong />
						</Link>
					</div>
					<div>
						<img src={image} alt='' />
					</div>
				</div>
			</div>

			<div className='container mx-auto my-24'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-1 mx-44'>
					<div className='w-full'>
						<img src={image2} alt='' className='w-full' />
					</div>

					<div className='m-10 mt-20'>
						<h1 className='text-4xl font-extrabold text-gray-700'>
							Hole Drilling & Accessory Options
						</h1>
						<h4 className='text-2xl my-2 text-gray-600'>
							Make your signage more permanent
						</h4>

						<h5 className='text-lg text-gray-500 font-light'>
							All of our rigid signs have the option of a hole drilling add-on,
							as well as accessory options such as 3M CommandTM Strips, Suction
							Cup N' Hooks, and Stainless-Steel Standoffs to display or hang
							your signs with confidence. Availability of accessory options is
							based on the specs you select on the order form.
						</h5>

						<Link className='flex items-center gap-2 text-secondary mt-8'>
							Order Acrylic Boards with Accessories
							<FaArrowRightLong />
						</Link>
					</div>
				</div>
			</div>

			<YouMayAlsoLike />
			<CustomDesign />

			<div className='container mx-auto'>
				<div className='mx-44'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
						<div className='flex items-center gap-3'>
							<img src={svg2} alt='' />
							<div>
								<h6 className='text-base font-bold leading-4'>
									Free Sample Kit
								</h6>
								<Link className='flex items-center gap-1'>
									Learn more
									<MdChevronRight />
								</Link>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<img src={svg3} alt='' />
							<div>
								<h6 className='text-base font-bold leading-4'>
									Honest Pricing Guarantee
								</h6>
								<Link className='flex items-center gap-1'>
									Request Now
									<MdChevronRight />
								</Link>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<img src={svg1} alt='' />
							<div>
								<h6 className='text-base font-bold leading-4'>
									Satisfaction Guarantee
								</h6>
								<Link className='flex items-center gap-1'>
									Learn more
									<MdChevronRight />
								</Link>
							</div>
						</div>
					</div>

					<div className='my-20'>
						<h3 className='font-bold text-lg'>
							The promotional experts for all your online printing needs:
						</h3>
						<p className='text-sm my-5'>
							At GotPrint, we are proud to offer the highest quality custom
							online printing services for businesses and creative individuals.
							Ordering prints online doesn't have to be an overwhelming process.
							Our competitive prices, top-quality print products and services,
							and friendly customer support team combined allow
						</p>
						<Link className='flex items-center gap-1 mt-10'>
							Learn more
							<FaAngleDown />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
