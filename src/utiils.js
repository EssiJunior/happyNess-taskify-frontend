import axios from "axios";

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

const serverURL = axios.create({
    baseURL: "http://localhost:5000/api",
});

export default serverURL;