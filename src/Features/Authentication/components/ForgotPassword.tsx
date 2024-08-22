import IconProtectAccount from "@/assets/icon/icon-protect.svg";
import BgAuthentication from "@/assets/images/bg-authentication.jpg";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import Image from "next/image";

const ForgotPasswordPage = () => {
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
              <h1 className="text-2xl font-semibold">Forgot Password</h1>
              <p className="w-[70%] text-sm text-gray-500">
                Don’t worry. We’ll reset your password and send you a link to
                create a new one
              </p>
            </div>
            {/* Form Register,  */}
            <div className="mt-10 lg:w-[32vw] md:w-[40vw]">
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md border bg-transparent p-3 text-sm placeholder:text-sm focus:border-orange-500"
                  />
                </div>
                <div className="mb-3">
                  <button className="w-full rounded-md border border-orange-500 bg-orange-500 py-3 font-medium text-white">
                    Send Email
                  </button>
                </div>
              </form>
              <div className="mt-5 flex items-center space-x-2">
                <Image src={IconProtectAccount} alt="icon-protect-account" />
                <p className="text-xs text-gray-400">
                  Data kamu akan dilindungi dan tidak akan dipergunakan tanpa
                  persetujuanmu.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
