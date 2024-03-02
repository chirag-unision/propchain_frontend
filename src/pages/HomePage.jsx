import SearchComponent from "../components/homePage/searchComponent";


const HomePage = () => {
    return (
        <div className="h-[100vh] w-full "
            style={{

                background: "radial-gradient(50vh 50vh at 0% 0%,rgba(191,155,203,0.47) 0%,rgba(191,155,203,0.00) 100%) , radial-gradient(50vh 50vh at 100% 100%,rgba(46,34,111,0.47) 0%,rgba(46,34,111,0.00) 100%)",
            }}
        >
            <nav className="h-20 p-4 flex w-full justify-end absolute top-0">
                <button 
                    onClick={()=>{
                        localStorage.clear();
                        window.location.href="/";
                    }}
                 className="p-4 bg-white rounded-3xl my-auto">Logout</button>
            </nav>
            <div className="h-[100vh] w-full flex justify-end">
                <div className="w-[60%]">
                    <img src={'/src/assets/ghar.png'} className="absolute z-10" />
                </div>
            </div>
            <div className="absolute top-64 left-36 backdrop-blur-lg w-full h-[100vh] overflow-y-auto ">
                <SearchComponent />
            </div>
        </div>
    );
}
export default HomePage;