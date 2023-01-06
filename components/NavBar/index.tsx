type Props = {}

const NavBar = (props: Props) => {
  return (
   <div className="w-[100vw] flex justify-center">
     <div className="h-[64px] w-[90vw] flex items-center justify-between">
      <img src="assets/LogoMain.png" className="h-[45px]" alt="Lazyweb Main Logo"/>
      <div className="md:flex hidden gap-[2rem]">
      <p className="cursor-pointer text-gray">Home</p>
      <p className="cursor-pointer text-gray">Services</p>
      </div>
      <button className="bg-gray md:block hidden text-white rounded-[5px] px-[25px] h-[45px] whitespace-nowrap">Start Using</button>
    </div>
   </div>
  )
}

export default NavBar