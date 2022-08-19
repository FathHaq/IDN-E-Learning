import React from "react";
import logo from '../../assets/logo.png'
import Course from "../Pages/Hal/Course";
import Sidebar from "./Navbar/Sidebar";
import contoh from './Navbar/contoh';

const Navbar = () => {
	return (
		<>
			<div class="drawer sticky z-40">
				<input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
				<div class="drawer-content flex flex-col">
					{/* <!-- Navbar --> */}
					<div class="w-full navbar bg-base-300">
						<div class="flex-none">
							<label for="my-drawer-3" class="btn btn-square btn-ghost">
								<img src={logo} alt="logo" class="inline-block h-6 stroke-current"/>
							</label>
						</div> 
						<div class="flex-1 px-2 mx-2">E-Learning</div>
						<div class="flex-none ">
							<ul class="menu menu-horizontal">
								<button className="btn btn-ghost btn-circle">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
							</button>
							<button className="btn btn-ghost btn-circle">
								<div className="indicator">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
									<span className="badge badge-xs badge-primary indicator-item"></span>
								</div>
							</button>	
							<div class="dropdown dropdown-end">
								<label tabindex="0" class="btn btn-ghost btn-circle avatar">
									<div class="w-10 rounded-full">
										<img src="https://placeimg.com/80/80/people" />
									</div>
								</label>
								<ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
									<li>
										<a class="justify-between">
											Profile
											<span class="badge">New</span>
										</a>
									</li>
									<li><a>Settings</a></li>
									<li><a>Logout</a></li>
								</ul>
							</div>
							</ul>
						</div>
					</div>
					<Contoh />
				</div> 
				<div class="drawer-side">
					<label for="my-drawer-3" class="drawer-overlay"></label> 
					<ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
						<Sidebar />
					</ul>
					
				</div>
			</div>
		</>
	)
}

export default Navbar