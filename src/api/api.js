import axios from "axios";

export const main = axios.create({
    withCredentials: false,
    baseURL: 'https://www.googleapis.com/youtube/',
});
export const YoutubeAPI = {
    getInfo(id){
        return main.get('v3/videos?key=AIzaSyC8ds5hTLaFtO3EWQ-vdsjdJsc8kMJ5hzY&part=snippet,contentDetails,statistics,status,recordingDetails,player&id='+id).then(res => res.data).catch(err=>err.response);
    },

//
}