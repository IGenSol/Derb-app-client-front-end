
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { DashboardLayoutStyle, SidebarStyle } from './stream.style';
import { GlobalContext } from "../../reducer/GlobalState";
const Video = require('twilio-video');
const url = `${process.env.REACT_APP_BASE_URL}/stream`;
const StreamPage = function (props) {
    const { userId } = useContext(GlobalContext);
    const [streamName, setStreamName] = useState();
    const [streamDetails, setStreamDetails] = useState();
    const [room, setRoom] = useState();
    const [identity, setIdentity] = useState();
    const [roomId, setRoomId] = useState();
    const [streaming, setStreaming] = useState(false);
    const [isLive, setIsLive] = useState(false);
    const [isStarting, setIsStarting] = useState(false);
    useEffect(() => {
        addLocalVideo().then(_ => true);
    }, []);
    const addLocalVideo = async function () {
        const videoTrack = await Video.createLocalVideoTrack();
        const trackElement = videoTrack.attach();
        trackElement.classList.add("w-100");
        document.getElementById("stream").innerHTML = '';
        document.getElementById("stream").appendChild(trackElement);
    }
    const startStream = async function (streamName, identity) {
        setIsStarting(true);
        try {
            const startStreamResponse = await axios.post(url + "/start", { streamName, userId });
            const streamDetails = startStreamResponse.data.data;
            setStreamDetails(streamDetails);
            setRoomId(streamDetails.roomId);
            const token = await fetchStreamerToken(streamDetails.roomId, streamDetails.roomId);
            const _room = await Video.connect(token);
            setRoom(_room);
            setStreaming(true);
            document.getElementById("stream").insertBefore(createLiveNotification(), document.getElementsByTagName("video")[0]);
            setIsLive(true);
            setIsStarting(false);
        } catch (error) {
            setIsStarting(false);
            alert("Can not go live. Contact developer.");
            console.log({ error });
        }
    }
    const createLiveNotification = () => {
        let liveNotification = document.createElement('div');
        liveNotification.innerHTML = 'LIVE';
        liveNotification.id = 'liveNotification';
        liveNotification.classList.add('position-absolute', 'top-10', 'left-48', 'p-2', 'bg-red-500', 'text-white');
        return liveNotification;
    }
    const removeLiveNotification = () => {
        document.getElementById("liveNotificaion").remove()
    }
    const fetchStreamerToken = async function (roomId, identity) {
        const tokenResponse = await axios.post(url + "/streamerToken", { identity, room: roomId });
        const tokenData = tokenResponse.data.data.token;
        return tokenData;
    }
    const endStream = async function () {
        const startStreamResponse = await axios.post(url + "/end", { streamDetails });
        //const startStream = startStreamResponse.data;        
        room?.disconnect();
        setIsLive(false);
        removeLiveNotification();
    }

    const onStartButtonClick = function (e) {
        startStream(streamName, identity);
    }

    return (
        <SidebarStyle>
            <div>
                {
                    !isLive && <button className='live-now'
                        id='streamStartEnd' onClick={onStartButtonClick}>
                        {
                            isStarting && "Going live..."
                        }{
                            !isStarting && "start stream"
                        }

                    </button>
                }
                {
                    isLive && <button className="live-now" onClick={endStream} style={{ backgroundColor: "red" }}>End stream</button>
                }

                {/* {isLive&&<div className="position-absolute" style={{background:"red",padding:"5px 10px",color:"white",fontSize:"24px"}}>Live</div>} */}
                <div id="stream"></div>
                <div id='controls' class='mt-10'>

                    {/* <input
                    class='bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id='identity' type='text' value={identity} onChange={e=>setIdentity(e.target.value)} placeholder='Your name' required /> */}

                    {/* <input
                    class='bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id='streamName' type='text' value={streamName} onChange={e=>setStreamName(e.target.value)} placeholder='Livestream name' required/> */}



                </div>
            </div>
        </SidebarStyle>
    );
}
export default StreamPage;