import 'remixicon/fonts/remixicon.css'
import Senior from './Senior'


function Explore() {
    return (
        <>
            <div className="m-10 bg-white-500 h-130 ">
                <h1 className="flex justify-end text-gray-400 mt-20">DIGITAL BANKING PLATFORM</h1>
                <div className="flex">

                    <div className="h-120  w-80 p-8 m-3 ">
                        <button className='bg-blue-100 rounded-2xl mb-8 text-blue-500 font-medium w-30' > <i class="ri-circle-fill"></i> OUR USERS </button>
                        <h1 className="font-medium text-5xl mb-5 ">Banking Made For</h1>
                        <h1 className="font-medium text-5xl text-blue-500 mb-5">every you</h1>
                        <p>Different people, different needs. That's why we offer personalized banking solutions for every stage of life</p>
                        <button className="bg-blue-500 rounded-2xl mt-9 w-50 h-10 text-white font-medium">Explore Accounts <i class="ri-arrow-right-line"></i></button>
                    </div>
                    <Senior/>
                </div>
            </div>
        </>
    )
}

export default Explore 