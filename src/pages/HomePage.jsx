import SearchComponent from "../components/homePage/searchComponent";


const HomePage = () => {
    return (
        <div className="h-[100vh] w-full "
            style={{

                background: "radial-gradient(50vh 50vh at 0% 0%,rgba(191,155,203,0.47) 0%,rgba(191,155,203,0.00) 100%) , radial-gradient(50vh 50vh at 100% 100%,rgba(46,34,111,0.47) 0%,rgba(46,34,111,0.00) 100%)",
            }}
        >
            <div className="backdrop-blur-lg w-full h-[100vh] overflow-y-auto ">
                <SearchComponent />
            </div>
        </div>
    );
}
export default HomePage;