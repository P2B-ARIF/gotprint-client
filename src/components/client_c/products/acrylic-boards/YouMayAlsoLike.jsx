import React from "react";
import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";
import card from "./../../../../assets/demo/card2.jpg";

const YouMayAlsoLike = () => {
	return (
		<div className='container mx-auto my-20'>
			<Box position='relative' padding='10' mx={32}>
				<Divider />
				<AbsoluteCenter bg='white' px='4' fontSize={20} fontWeight={700}>
					You May Also Like
				</AbsoluteCenter>
			</Box>

			<div className='mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-44 gap-y-8 items-center'>
				{[1, 2, 3, 4, 5, 6].map(c => (
					<div
						key={c}
						className='hover:-translate-y-2 transition-all duration-200 ease-linear flex items-end h-[300px] rounded-md shadow overflow-hidden'
						style={{
							backgroundImage: `url(${card})`,
							backgroundPositionX: "center",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					>
						{/* <img src={card} alt='' className='rounded-md' /> */}
						<div className='text-center mt-3 bg-[#F1F6E9] w-full py-3'>
							<h3 className='font-semibold text-gray-600 text-xl'>
								9&quot; x 24&quot;
							</h3>
							<h6 className='text-sm text-gray-700'>Starting at $9.80</h6>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default YouMayAlsoLike;
