
import React, { useEffect, useState } from "react";
import axios from 'axios';
const Video = require('twilio-video');
const url = `${process.env.REACT_APP_BASE_URL}/stream`;
const StreamPage = function (props) {
    const [streamName, setStreamName] = useState();
    const [identity,setIdentity] = useState();
    const [roomId, setRoomId] = useState();
    const [streaming,setStreaming] = useState(false);
    useEffect(()=>{
        addLocalVideo().then(_=>true);
    },[]);
    const addLocalVideo =async function(){
        const videoTrack= await Video.createLocalVideoTrack();
        debugger
        const trackElement = videoTrack.attach();
        document.getElementById("stream").appendChild(trackElement);
    }
    const startStream = async function (streamName, identity) {
        try {
            const startStreamResponse = await axios.post(url + "/start", { streamName });
            const streamDetails = startStreamResponse.data.data;
            setRoomId(streamDetails.roomId);
            const token = await fetchStreamerToken(streamDetails.roomId, identity);
            const room = await Video.connect(token);
            setStreaming(true);
            document.getElementById("stream").insertBefore(createLiveNotification(),document.getElementsByTagName("video")[0]);
        } catch (error) {
            alert("Nah nah");
            console.log({error});
        }
    }
    const createLiveNotification = ()=>{
        let liveNotification = document.createElement('div');
        liveNotification.innerHTML = 'LIVE';
        liveNotification.id = 'liveNotification';
        liveNotification.classList.add('absolute', 'top-10', 'left-48', 'p-2', 'bg-red-500', 'text-white');
        return liveNotification;
    }
    const fetchStreamerToken = async function (roomId, identity) {
        const tokenResponse = await axios.post(url + "/streamerToken", { identity, room: roomId });
        const tokenData = tokenResponse.data.data.token;
        return tokenData;
    }
    const endStream = async function () {

    }

    const onStartButtonClick = function(e){
        startStream(streamName,identity);
    }

    return (
        <>
            <div id="stream"></div>
            <div id='controls' class='mt-10'>

                <input
                    class='bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id='identity' type='text' value={identity} onChange={e=>setIdentity(e.target.value)} placeholder='Your name' required />

                <input
                    class='bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id='streamName' type='text' value={streamName} onChange={e=>setStreamName(e.target.value)} placeholder='Livestream name' required/>

                    <button class='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 mr-2 rounded'
                        id='streamStartEnd' onClick={onStartButtonClick}>
                        start stream
                    </button>

            </div>
        </>
    );
}
export default StreamPage;