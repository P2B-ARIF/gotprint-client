import React from "react";
import Hero from "../components/client_c/Home/Hero";
import CategoriesCarousel from "../components/client_c/Home/CategoriesCarousel";
import MarketingPrints from "../components/client_c/Home/MarketingPrints";
import Sign_Banners from "../components/client_c/Home/Sign_Banners";
import PersonalApparel from "../components/client_c/Home/PersonalApparel";
import BestSelling from "../components/client_c/Home/BestSelling";
import PersonalizedOffice from "../components/client_c/Home/PersonalizedOffice";
import WeddingInvitations from "../components/client_c/Home/WeddingInvitations";
import DesignCreate from "../components/client_c/Home/DesignCreate";
import CustomDesign from "../components/client_c/Home/CustomDesign";

import svg1 from "./../assets/demo/benefits_honest_pricing_icon.svg";
import svg2 from "./../assets/demo/new_satisfaction_guarantee.svg";
import svg3 from "./../assets/demo/free-sample-kit.svg";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const Home = () => {
	return (
		<div>
			<Hero />
			<div className='my-6 mx-14'>
				<CategoriesCarousel />
			</div>
			<MarketingPrints />
			<Sign_Banners />
			<PersonalApparel />
			<BestSelling />
			<PersonalizedOffice />
			<WeddingInvitations />
			<DesignCreate />
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

export default Home;
