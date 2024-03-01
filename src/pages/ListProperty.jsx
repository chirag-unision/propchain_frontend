import TopBar from "../components/common/topBar";
import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { TextField, TextareaAutosize } from "@mui/material";
import { Textarea } from "@mui/joy";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


const AddPropertyPage = () => {

    const [locality, setLocality] = React.useState('urban');

    const handleAlignment = (
        e,
        data
    ) => {
        setLocality(data);
    };


    useEffect(() => {
        console.log(locality)
    }  
    ,[locality])

    return (
        <div>
            <TopBar />
            <div className="px-[10vw] py-10 w-full">
                <div className="flex flex-row justify-evenly rounded-2xl bg-[#181A1B]">
                    <div className='w-1/5 py-8 flex flex-col gap-y-6'>
                        <Button
                            className="w-[18vw] h-[18vw]"
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            >
                            Upload Document
                            <VisuallyHiddenInput type="file" />
                        </Button>
                        <Button
                            className="w-[18vw] h-[18vw]"
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            >
                            Upload Document
                            <VisuallyHiddenInput type="file" />
                        </Button>

                    </div>
                    <div className='w-3/5 py-8 flex flex-col gap-y-6 text-white'>
                        <TextField
                            id="outlined-basic"
                            label="Property Name"
                            sx={{
                                "& fieldset": { border: 'white' },
                                input: { color: 'white' },

                              }}
                            variant="outlined"
                            className="w-full bg-[#2D2D2D] rounded-lg "
                            InputLabelProps={{
                                style: { color: '#ADADAD'},
                            }}
                        
                            
                            />
                        <textarea className=" bg-[#2D2D2D] p-3 rounded-md " rows={3} placeholder="Description... "/>
                        
                        <div className="flex flex-row gap-x-5 justify-between">
                        <TextField
                            id="outlined-basic"
                            label="Rent (per Month)"
                            sx={{
                                "& fieldset": { border: 'white' },
                                input: { color: 'white' },

                              }}
                            variant="outlined"
                            className="w-full bg-[#2D2D2D] rounded-lg "
                            InputLabelProps={{
                                style: { color: '#ADADAD'},
                            }}
                        
                            />
                            
                            <ToggleButtonGroup
                                value={locality}
                                exclusive
                                onChange={handleAlignment}
                                className="bg-[#2D2D2D] rounded-lg "
                                aria-label="text alignment"
                                
                                >
                                <ToggleButton value="urban" color="success" aria-label="centered">
                                    Urban
                                </ToggleButton>
                                <ToggleButton value="rural" color="error" aria-label="centered">
                                    Rural
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        
                        
                    </div>

                </div>

            </div>
        </div>
    );
    }
    export default AddPropertyPage;