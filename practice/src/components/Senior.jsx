import 'remixicon/fonts/remixicon.css'


function Senior(){
    return(
        <div className="ml-3 mt-20 h-120 w-100 flex mr-4 ">
          <div className="h-100 w-80 bg-blue-50 p-4">
            <img className="rounded-lg mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQdjlm2SFxpV8RQWUQxkTFJlL_fQeYokvLPsmmJHxig&s=10"></img>
            <div className='h-6 w-6  text-center rounded-2xl absolute bottom-87 left-105 bg-white'>1</div>
            <h1 className="font-medium text-2xl mb-4">Students</h1>
            <p className="mb-6">Easy account opening,no minimum balance and special offers for a bright future.</p>
            <button className="bg-blue-200 text-blue-600 rounded-lg w-40 h-8">For students <i class="ri-arrow-right-circle-line"></i></button>
          </div>
          <div className="h-100 w-80 bg-green-50 p-4 ml-4">
            <img className="rounded-lg mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4whcDxY0Tnhs-tihL0zU6Ow-VFv74Pqts3pCV4xf3g&s=10"></img>
             <div className='h-6 w-6  text-center rounded-2xl absolute bottom-87 left-158 bg-white'>2</div>
            <h1 className="font-medium  mb-2  ">Working Professionals</h1>
            <p className="mb-5">Manages your salary,payments and investments with smart tools and exclusive benefits</p>
            <button className="bg-blue-200 text-green-500 rounded-lg w-40 h-8">For Professionals <i class="ri-arrow-right-circle-line"></i></button>
          </div>
          <div className="h-100 w-80 bg-orange-50 p-4 ml-4">
            <img className="rounded-lg mb-4"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlmueD__qsmBsSG2xzEbZBjDN-Dijt29pDCGSuTn-BQ&s=10"></img>
             <div className='h-6 w-6  text-center rounded-2xl absolute bottom-87 left-210 bg-white'>3</div>
            <h1 className="rounded-lg mb-4  font-medium" >Senior citizens</h1>
            <p className="mb-9">Secure banking ,higher interest rates and dedicated support for a worry-free tomorrow</p>
            <button className="bg-blue-200 text-orange-500 rounded-lg w-40 h-8">For Senior Citizens <i class="ri-arrow-right-circle-line"></i></button>
          </div>
        </div>
    )
}

export default Senior