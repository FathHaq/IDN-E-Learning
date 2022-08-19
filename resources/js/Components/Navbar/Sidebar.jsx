import React from 'react'
import logo from '../../../assets/logo.png'

const  Sidebar = () => {
	return (
		<div>
			<div className='flex items-center'>
				<div class="flex-none">
					<label for="my-drawer-3" class="btn btn-square btn-ghost">
						<img src={logo} alt="logo" class="inline-block h-6 stroke-current"/>
					</label>
				</div> 
				<div class="flex-1 px-2 mx-2">E-Learning</div>
			</div>



			<div>
				<div className='flex items-center justify-center'>
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people" class="inline-block h-6 stroke-current"/>
						</div>
					</label>
					<h1>Abdullah bin abd</h1>
				</div>
				<div className='flex items-center justify-center'>
					<div>----------Indikator----------</div>
				</div>
			</div>



			<div className='flex items-center'>
				<div className='btn btn-info w-full'>Course</div>
			</div>
		</div>
	)
}

export default Sidebar