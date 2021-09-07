import React from 'react'

 const SuccessAlertBox = ( { alert , setAlert } ) => {
    return (
        // <!-- component -->
        <div class=" z-10 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  style={{backgroundImage: "url(`https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1582&q=80`) "}}>
               <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
              {/* <!--content--> */}
              <div class="">
                {/* <!--body--> */}
                <div class="text-center p-5 flex-auto justify-center">
              { alert.registered ? <i class="fas fa-exclamation-triangle text-4xl"></i> :alert.isValid == false ?  <i class="fas fa-exclamation-triangle text-4xl"></i> : <i class="fas fa-thumbs-up"></i> }
                                <p class="text-lg text-gray-500 px-8"> {alert.message} </p>    
                </div>
                {/* <!--footer--> */} 
                <div class="p-3  mt-2 text-center space-x-4 md:block">
                    <button onClick={ ()=> setAlert({status:false,message:""})} class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white  bg-red-500 rounded-full hover:shadow-lg hover:bg-red-600">
                        OKAY
                    </button>
                </div>
              </div>
            </div>
          </div>
    )
}
export default SuccessAlertBox;