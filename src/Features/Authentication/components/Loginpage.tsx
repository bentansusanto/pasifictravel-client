import React from 'react'
import BgAuthentication from "@/assets/images/bg-authentication.jpg";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import Image from "next/image";
import Link from "next/link";
import IconProtectAccount from '@/assets/icon/icon-protect.svg'

const Loginpage = () => {
    const { isMobile } = Mobile();
  return (
    <div className={`${fonts.className}`}>
      {isMobile ? (
        // Mobile Device
        <></>
      ) : (
        // Desktop & Tablet Device
        <div className="flex items-center lg:space-x-20 md:space-x-10">
          <Image
            src={BgAuthentication}
            alt="bg-authentication"
            className="w-[50%] h-screen"
          />
          <div>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Login</h1>
              <p className="text-sm text-gray-500">
                Belum punya akun?{" "}
                <Link href={"/auth/register"} className="font-semibold text-orange-500">
                  Register Now
                </Link>
              </p>
            </div>
            {/* Form Register,  */}
            <div className="mt-10 lg:w-[32vw] md:w-[40vw]">
              <form>
                <div className="mb-3">
                  <input type="email" placeholder="Email" className=" placeholder:text-sm text-sm p-3 bg-transparent border focus:border-orange-500 rounded-md w-full"/>   
                </div>
                <div className="space-y-2 mb-5">
                  <input type="email" placeholder="Password" className=" placeholder:text-sm text-sm p-3 bg-transparent border focus:border-orange-500 rounded-md w-full"/>    
                </div>
                <div className="mb-3 flex justify-between">
                    <div/>
                    <Link href={'/auth/forgot-password'} className="font-medium text-sm">Forgot Password?</Link>
                </div>
                <div className="mb-3">
                    <button className="bg-orange-500 font-medium text-white py-3 w-full rounded-md border border-orange-500">Login Now</button>
                </div>
              </form>
              <div className="flex items-center space-x-2 mt-5">
                  <Image src={IconProtectAccount} alt="icon-protect-account"/>
                  <p className="text-xs text-gray-400">Data kamu akan dilindungi dan tidak akan dipergunakan tanpa persetujuanmu.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Loginpage