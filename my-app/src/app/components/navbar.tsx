import Link from "next/link"
export default function Navbar() {
  return (
    <div>
      <div className="w-[1290px] h-[91px] ml-[59px] mx-auto flex">
        <div className="w-[187px] h-[58px] mt-[17px] ml-[100px] text-bold">
          <h3 className="w-[152px] h-[32px] mt-[13px] font-montserrat font-bold text-2xl leading-[32px] text-white">
            BrandName
          </h3>
        </div>
        <div className="w-[815px] h-[58px] mt-[16px] ml-[100px] py-3 flex justify-between items-center">
          <div className="w-[275px] h-6 mt-[17]">
            <ul className="flex gap-[21px] font-montserrat text-white">
              <li className="hover:text-custom-blue"><Link href="" >Home</Link></li>
              <li className="hover:text-custom-blue"><Link href="" >Product</Link></li>
              <li className="hover:text-custom-blue"><Link href="" >Pricing</Link></li>
              <li className="hover:text-custom-blue"><Link href="" >Contact</Link></li>
            </ul>
          </div>
          <div className="w-[189px] h-[52px] mt-3 flex items-center gap-[45px]">
            <div>
              <button className="w-[41px] h-[22px] font-montserrat font-bold text-sm text-white hover:text-custom-blue">
                Login
              </button>
            </div>
            <div>
              <button className="w-[110px] h-[52px] rounded-[5px] py-[15px] px-[25px] gap-[15px] font-montserrat text-[14px] font-bold leading-[22px] bg-custom-blue text-white hover:bg-sky-600">
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}