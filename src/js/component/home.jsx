import React, { useState } from "react";


const Home = () => {
	const [isRed, setRed] = useState(false)
	const [isYellow, setYellow] = useState(false)
	const [isGreen, setGreen] = useState(false)
	const [isPurple, setPurple] = useState(false)
	const [isCycle, setCylce] = useState(1)
	const [isShowButton, setShowButton] = useState(false)


	
	return (
		
		<div className="container vh-100 ">

			<div className="poleForLights d-flex bg-dark mx-auto " style={{width: 50, height: 200}}></div>

			<div className="boxForLights bg-dark  d-flex flex-column mx-auto rounded m-0" style={{width: 250, height: 450}}>
				
				<button type="button" className={`redLight btn bg-${isRed ? "danger" : "danger-subtle"} rounded-circle w-50 h-25 mx-auto mb-2 mt-5`}onClick={()=>{
					setRed(!isRed), setYellow(false), setGreen(false), setPurple(false);
				}}></button>

				<button type="button" className={`yellowLight btn bg-${isYellow ? "warning" : "warning-subtle"} rounded-circle w-50 h-25 mx-auto mb-2`}onClick={()=>{
					setYellow(!isYellow), setRed(false), setGreen(false), setPurple(false);
					}}></button>

				<button type="button" className={`greenLight btn bg-${isGreen ? "success" : "success-subtle"} rounded-circle w-50 h-25 mx-auto`}onClick={()=>{
					setGreen(!isGreen), setRed(false), setYellow(false), setGreen(true), setPurple(false);;
				}}></button>

				{isShowButton ? <button type="button" className={`purpleLight  ${isPurple ? "purple" : "purple-subtle"} rounded-circle w-50 h-25 mx-auto mb-4 mt-2`}onClick={()=>{
						setPurple(!isPurple), setRed(false), setYellow(false), setGreen(false), setPurple(true);
				}}></button> : null}
				
			</div>

			<button type="button" className="btn btn-success d-flex mx-auto  mt-2"onClick={()=>{

				if (isCycle === 1) setRed(true), setYellow(false), setGreen(false), setPurple(false);
				else if (isCycle === 2) setRed(false), setYellow(true), setGreen(false), setPurple(false);
				else if (isCycle === 3) setRed(false), setYellow(false), setGreen(true), setPurple(false);
				else setRed(false), setYellow(false), setGreen(false), setPurple(true);
				
				setCylce((isCycle % 4) + 1);

			}}>Cycle</button>

			<button type="button" className="btn btn-danger d-flex mx-auto  mt-2" onClick={() => {
				setShowButton(!isShowButton)
			}}>Purple</button>

		</div>
	);
};

export default Home;
					