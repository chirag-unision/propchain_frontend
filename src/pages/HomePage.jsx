

const HomePage = () => {
    return (
        <div className="h-[100vh] w-full bg-[#1E1E1E] fixed">
            <div className="h-[100vh] w-full flex justify-center items-center overflow-y-auto "
                style={{

                    background: "radial-gradient(50vh 50vh at 0% 0%,rgba(191,155,203,0.47) 0%,rgba(191,155,203,0.00) 100%) , radial-gradient(50vh 50vh at 100% 100%,rgba(46,34,111,0.47) 0%,rgba(46,34,111,0.00) 100%)",
                }}
            >   
                <div className="absolute backdrop-blur-lg w-full h-[150%]">
                    <div className=" w-1/2 h-[100%]">
                        <p className="text-lg"> PropChain</p>
                    </div>
                    <div className=" w-1/2 h-[100%]"></div>
                </div>

               
               
            </div>
        </div>
    );
}
export default HomePage;