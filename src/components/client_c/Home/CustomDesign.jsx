import React from "react";
import banner from "./../../../assets/demo/design_services_banner.jpg";
import text from "./../../../assets/demo/design_services_text.svg";
import { Link } from "react-router-dom";

const CustomDesign = () => {
	return (
		<div className='my-20'>
			<div
				className=' w-full flex items-center justify-center'
				style={{ backgroundImage: `url(${banner})` }}
			>
				<div className='bg-gray-100 m-5 p-12 px-20 w-[51%] text-center rounded-md'>
					<h1 className='text-3xl font-extrabold'>Custom Design Services</h1>
					<h4 className='text-xl font-light'>
						A design made just for you! Our in-house design team is ready to
						assist you in creating the prints you&apos;ve envisioned.
					</h4>
					<img src={text} alt='' className='mx-auto my-10' />
					<Link className='rounded-full py-2 px-10 border-[1px] border-gray-800 font-bold'>
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CustomDesign;
