import React from "react";
import card from "./../../../assets/demo/card2.jpg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";


const WeddingInvitations = () => {
	return (
		<div className='container mx-auto my-20'>
			<div className='relative h-[220px] w-[75%] mx-auto'>
				<img src={card} alt='' loading="lazy" className='h-full w-full rounded-md object-cover' />
				<div className='absolute top-[30%] left-[10%] -translate-x-[10%] -translate-y-[30%]'>
					<h1 className="text-3xl font-semibold">Wedding Invitations</h1>
					<h6 className="text-lg my-1">Customizable, modern templates for the big day.</h6>
					<Link className="flex items-center mt-3 gap-2 text-blue-600 underline">
						Get Started <MdKeyboardArrowRight />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default WeddingInvitations;
