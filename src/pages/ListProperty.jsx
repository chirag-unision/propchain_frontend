import TopBar from "../components/common/topBar";
import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Slider, TextField, TextareaAutosize } from "@mui/material";
import { Textarea } from "@mui/joy";
import axios from "axios";
import { BASE_URL } from "../constants";

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
    const [highlights, setHighlights] = React.useState([]);
    const [highlight, setHighlight] = React.useState('');
    const [members, setMembers] = React.useState(4);

    const handleAlignment = (e, data) => {
        if (data == null) return;
        setLocality(data);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = document.getElementsByTagName('form')[0];
        let data = new FormData(form);
        data.append("uid",1)
        data.append("locality", locality);
        data.append('images',  document.getElementsByName('images')[0].files[0]);
        data.append('docs',  document.getElementsByName('docs')[0].files[0]);
        data.append('highlights', highlights);
        


   
        axios.post(BASE_URL+"api/owner/addprops", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        // fetch("https://05aa-103-139-191-218.ngrok-free.app/", {
        //     method: 'POST',
        //     body: {
        //         property_name: "hi",
        //         highlights: highlights
        //     }
        //     });

        // axios.post("https://05aa-103-139-191-218.ngrok-free.app/", {
        //     data: 
        // })
        // console.log(data.get('highlights'));
        console.log("Submitted");
    }


    const handleHighlights = (e) => {
        e.preventDefault();
        if (highlight == '') return;

        for (let i = 0; i < highlights.length; i++) {
            if (highlights[i] == highlight) return;
        }

        setHighlights([...highlights, highlight]);
        setHighlight('');
    }

    const removeHighlight = (index) => {
        let newHighlights = highlights.filter((highlight, i) => {
            return i != index;
        })
        setHighlights(newHighlights);
    }

    const handleSlider = (e, value, activethumb) => {
        setMembers(value);
    }

    useEffect(() => {
        // console.log(highlights)
    }
        , [highlights])

    return (
        <div>
            <TopBar showAdd={false} />
            <div className="px-[15vw] py-10 ">
                <form>
                    <div className="flex flex-row justify-evenly rounded-2xl  bg-nak-dark-gray">

                        <div className='w-1/5 py-8 flex flex-col gap-y-6'>
                            <Button
                                style={{ backgroundColor: '#2D2D2D', borderRadius: "1rem", color: 'white' }}
                                className="w-[15vw] h-[15vw]"
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Add Images
                                <VisuallyHiddenInput type="file" accept=".jpg,.png,.jpeg" name="images" />
                            </Button>
                            <Button
                                style={{ backgroundColor: '#60121D', borderRadius: "1rem", color: 'white' }}
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                onClick={handleSubmit}
                                type="submit"
                                name="submit"
                            >
                                Submit
                            </Button>

                        </div>
                        <div className='w-3/5 py-8 flex flex-col gap-y-4 text-white'>
                            <TextField
                                id="outlined-basic"
                                label="Property Name"
                                name="title"
                                sx={{
                                    "& fieldset": { border: 'white' },
                                    input: { color: 'white' },

                                }}
                                variant="outlined"
                                className="w-full bg-[#2D2D2D] rounded-lg "
                                InputLabelProps={{
                                    style: { color: '#ADADAD' },
                                }}


                            />
                            <TextField
                                id="outlined-basic"
                                label="Property Address"
                                name="address"
                                sx={{
                                    "& fieldset": { border: 'white' },
                                    input: { color: 'white' },

                                }}
                                variant="outlined"
                                className="w-full bg-[#2D2D2D] rounded-lg "
                                InputLabelProps={{
                                    style: { color: '#ADADAD' },
                                }}


                            />
                            <textarea name="description" className=" bg-[#2D2D2D] p-3 rounded-md " rows={3} placeholder="Description... " />

                            <div className="flex flex-row gap-x-5 justify-between">
                                <TextField
                                    id="outlined-basic"
                                    name="price"
                                    label="Rent (per Month)"
                                    sx={{
                                        "& fieldset": { border: 'white' },
                                        input: { color: 'white' },

                                    }}
                                    variant="outlined"
                                    className="w-full bg-[#2D2D2D] rounded-lg "
                                    InputLabelProps={{
                                        type: 'number',
                                        style: { color: '#ADADAD' },
                                    }}

                                />

                                <TextField
                                    id="outlined-basic"
                                    name="property_id"
                                    label="Property Number"
                                    sx={{
                                        "& fieldset": { border: 'white' },
                                        input: { color: 'white' },

                                    }}
                                    variant="outlined"
                                    className="w-full bg-[#2D2D2D] rounded-lg "
                                    InputLabelProps={{
                                        type: 'number',
                                        style: { color: '#ADADAD' },
                                    }}

                                />

                                <ToggleButtonGroup
                                    name="locality"
                                    value={locality}
                                    exclusive
                                    onChange={handleAlignment}
                                    className="bg-[#2D2D2D] rounded-xl "
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

                            <div className="flex flex-row  rounded-md justify-stretch bg-[#2D2D2D] overflow-hidden">
                                {highlights.length != 0 &&
                                    <div className="flex flex-wrap p-3 mx-0 w-max">
                                        {highlights.map((highlight, index) => {
                                            return (
                                                <div key={index} className="bg-[#2D2D2D] border border-[#202020] px-3 py-1   rounded-md">
                                                    {highlight}
                                                    <span className="ml-2 cursor-pointer px-1 rounded-sm hover:bg-[#f00] " onClick={() => { removeHighlight(index) }}>x</span>
                                                </div>
                                            )
                                        })}
                                    </div>}
                                <input type="text" value={highlight} onChange={(e) => { setHighlight(e.target.value) }} placeholder="Add Highlights/Features" className={`bg-[#2D2D2D] ${highlights.length == 0 ? "w-full" : "w-1/2"} outline-none p-3`} />
                                <button onClick={handleHighlights} className="bg-[#2D2D2D] p-3 hover:bg-[#202020] ml-auto">Add</button>
                            </div>

                            <div className="flex flex-row rounded-md justify-stretch items-center gap-x-4">
                                <TextField
                                    id="outlined-basic"
                                    label="No. of People Allowed"
                                    sx={{
                                        "& fieldset": { border: 'white' },
                                        input: { color: 'white' },

                                    }}
                                    name="people"
                                    variant="outlined"
                                    className="w-full bg-[#2D2D2D] rounded-lg "
                                    InputLabelProps={{
                                        style: { color: '#ADADAD' },
                                    }}
                                    value={members}
                                    onChange={(e) => { setMembers(e.target.value) }}

                                />
                                <Slider defaultValue={members} step={1} onChange={handleSlider} min={1} max={20} />
                            </div>

                            <div className="flex flex-row gap-x-5" >
                                <div className="text-[#ADADAD] bg-[#2d2d2d] p-3 rounded-lg">
                                    Kindly add your Scanned Property Papers.
                                </div>

                                <Button
                                    style={{ backgroundColor: '#2D2D2D', borderRadius: "1rem", color: 'white' }}
                                    className="w-[5vw] h-[5vw]"
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Add
                                    <VisuallyHiddenInput type="file" name="docs" />
                                </Button>

                            </div>

                            <div className="text-[#ADADAD] bg-[#2d2d2d] p-3 text-sm rounded-lg">
                                *Note: This is only for authentication purpose to verify that the property you lease is owned by you. We assure you that this information will not be disclosed in any case, to any third party.
                            </div>



                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
}
export default AddPropertyPage;