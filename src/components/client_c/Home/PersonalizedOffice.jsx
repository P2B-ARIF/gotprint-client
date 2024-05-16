import React from "react";
import card from "./../../../assets/demo/card2.jpg";

const PersonalizedOffice = () => {
	return (
		<div className='container mx-auto my-20'>
			<div className='text-center'>
				<h1 className='text-3xl font-bold'>Personalized Office & Home Decor</h1>
				<p className='text-lg font-thin'>
					Make your space unique with awesome customized prints & wall art.
				</p>
			</div>

			<div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-44 gap-y-8'>
				{[1, 2, 3, 4, 5, 6].map(c => (
					<div
						key={c}
						className='hover:-translate-y-2 transition-all duration-200 ease-linear'
					>
						<img src={card} alt='' className='rounded-md' />
						<div className='text-center mt-3'>
							<h3 className='font-semibold text-gray-600 text-xl'>Postcards</h3>
							<h6 className='text-sm font-light'>Starting at $9.80</h6>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PersonalizedOffice;
