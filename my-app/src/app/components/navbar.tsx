import Link from "next/link"
export default function Navbar() {
  return (
    <div>
      <div className="w-full max-w-[1322px] h-[91px] mx-auto flex items-center justify-between px-4">
        <div className="text-bold">
          <h3 className="font-montserrat font-bold text-2xl leading-[32px] text-white">
            BrandName
          </h3>
        </div>
        <div className="flex justify-between items-center gap-[100px]">
          <div>
            <ul className="flex gap-[21px] font-montserrat text-white">
              <li className="hover:text-custom-blue"><Link href="" >Home</Link></li>
              <li className="hover:text-custom-blue"><Link href="" >Product</Link></li>
              <li className="hover:text-custom-blue"><Link href="" >Pricing</Link></li>
              <li className="hover:text-custom-blue"><Link href="" >Contact</Link></li>
            </ul>
          </div>
          <div className="flex items-center gap-[45px]">
            <div>
              <button className="font-montserrat font-bold text-sm text-white hover:text-custom-blue">
                Login
              </button>
            </div>
            <div>
              <button className="w-[110px] h-[52px] rounded-[5px] py-[15px] px-[25px] font-montserrat text-[14px] font-bold leading-[22px] bg-custom-blue text-white hover:bg-sky-600">
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}