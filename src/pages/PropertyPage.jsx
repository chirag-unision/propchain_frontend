import TopBar from "../components/common/topBar"



const PropertyPage = () => {
    return (
        <div>
            <TopBar />
            <div className="p-5 w-full">
                <div className="flex flex-row justify-evenly rounded-2xl bg-[#181A1B]">
                    <div className='w-1/5'>
                        {/* <Button
                            className="w-full h-"
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            >
                            Upload file
                            <VisuallyHiddenInput type="file" />
                        </Button> */}
                    </div>
                    <div className='w-full'></div>
                </div>

            </div>
        </div>
    )
}