import { useState } from "react";
import { ReactComponent as Usericon } from "../assets/svg/userIcon.svg";
import { ReactComponent as LOGO } from "../assets/svg/logo.svg";

const click = "text-white rounded-full font-bold  px-5 py-1 bg-[#8328AE]";

export default function NavBar() {
    const [isLogin, setIsLogin] = useState(true);
    const LOGIN = ({ width }) => {
        if (isLogin) {
            return (
                <div className={`flex items-center justify-between bg-slate-200 ${width} rounded-full px-2`}>
                    <Usericon viewBox={"0 0 27 27"} height={"2em"} />
                    <div className="flex-1 text-center">
                        <span className>You</span>
                    </div>
                    
                </div>)
        }
        else {
            return (
                <div className="flex space-x-8 ">
                    <div className="bg-slate-400 p-1 px-4 rounded-full">

                        <span>Login In</span>
                    </div>
                    <div className="bg-slate-400 p-1 px-4 rounded-full">
                        <span>Sign Up</span>
                    </div>
                </div>)

        }
    }



    const ON_CURRENT = "bg-slate-200";

    const SETLOGIN = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className="font-sans lg:max-w-[1440px]  flex m-auto items-center justify-evenly ">
            <div className="">
                <LOGO />
            </div>
            <div className="w-3/5 flex justify-center ">
                <nav className="flex space-x-9 text-sm items-center">
                    <a className={`${click}`} href="">Home</a>
                    <a className={``} href="">University</a>
                    <a className={``} href="">Scholarship</a>
                    <a className={``} href="">About Us</a>
                </nav>
            </div>
            <div>
                <svg width="32" height="32" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="21" cy="19.6875" rx="21" ry="19.6875" fill="#8328AE" />
                    <ellipse cx="17.4" cy="16.3125" rx="7" ry="6.5625" fill="white" />
                    <ellipse cx="4.51059" cy="4.22945" rx="4.51059" ry="4.22945" transform="matrix(0.99938 0.0352112 -0.0400552 0.999197 12.9602 12.0228)" fill="#D9D9D9" />
                    <rect width="9.91608" height="3.89986" rx="1.94993" transform="matrix(0.655412 0.755271 -0.795127 0.606443 23.9009 20.625)" fill="white" />
                </svg>

            </div>

            <LOGIN width={"w-[10%]"} />

            
        </div>
        
    );
}