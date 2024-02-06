import { Button, styled } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTasks } from "./redux/slices/tasksSlice";

export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

export const defaultOptions = (lottie) => (
    {
        loop: true,
        speed:0.1,
        autoplay: true,
        animationData: lottie,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
});

export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ColorButton = styled(Button)(() => ({
    color: 'black',
    backgroundColor: '#ffbc64',
    fontWeight:'600',
    '&:hover': {
        backgroundColor: '#f67f30',
        color: 'white'
    },
}));

const serverURL = axios.create({
    baseURL: "http://localhost:5000/api",
});

export default serverURL;