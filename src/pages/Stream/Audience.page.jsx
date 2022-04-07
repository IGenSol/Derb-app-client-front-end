import axios from "axios";
import { Player } from '@twilio/live-player-sdk';
import { useEffect, useState } from "react";
const {
  host,
  protocol,
} = window.location;
const url = `${process.env.REACT_APP_BASE_URL}/stream`;
const AudiencePage = function (props) {
  const [liveStreamerList,setLiveStreamerList] = useState([]);
  const getLiveStreamer = async function(){
    try {
      const streamers = await axios.get(url+"/get-streamers");
      setLiveStreamerList(streamers.data.data);
    } catch (error) {
      alert("cannot get");
      console.log({getError:error});
    }
  }
  useEffect(()=>{
    getLiveStreamer().then(_=>true);
  },[]);
  const watchStream = async function (_id) {
    try {
      const response = await axios.post(url + "/audienceToken",{playerStreamerId:_id});
      const data = response.data.data;
      if (data.message) {
        alert(data.message);
        return;
      }
      const player = await Player.connect(data.token, { playerWasmAssetsPath: `${protocol}//${host}/livePlayer/` });
      player.play();
      document.getElementById('player').appendChild(player.videoElement);
    } catch (error) {
      alert("Cannot live stream");
      console.log({ error });
    }
  }
  const onWatchButtonClick = async function () {
    await runJs();

  }

  const runJs = function () {
    const streamPlayer = document.getElementById('player');
    const startEndButton = document.getElementById('streamStartEnd');

    let player;
    let watchingStream = false;

    // const watchStream = async () => {
    //   try {
    //     const response = await fetch(url+"/audienceToken", {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       }
    //     });

    //     const data = await response.json();

    //     if (data.message) {
    //       alert(data.message);
    //       return;
    //     }

    //     player = await Player.connect(data.token, {playerWasmAssetsPath: '../livePlayer'});
    //     player.play();
    //     streamPlayer.appendChild(player.videoElement);

    //     watchingStream = true;
    //     startEndButton.innerHTML = 'leave stream';
    //     startEndButton.classList.replace('bg-green-500', 'bg-red-500');
    //     startEndButton.classList.replace('hover:bg-green-500', 'hover:bg-red-700');

    //   } catch (error) {
    //     console.log(error);
    //     alert('Unable to connect to livestream');
    //   }
    // }

    const leaveStream = () => {
      player.disconnect();
      watchingStream = false;
      startEndButton.innerHTML = 'watch stream';
      startEndButton.classList.replace('bg-red-500', 'bg-green-500');
      startEndButton.classList.replace('hover:bg-red-500', 'hover:bg-green-700');
    }

    const watchOrLeaveStream = async (event) => {
      event.preventDefault();
      if (!watchingStream) {
        await watchStream();
      }
      else {
        leaveStream();
      }
    };

    startEndButton.addEventListener('click', watchOrLeaveStream);
  }
  const onWatchClick = async (id)=>{
    await watchStream(id);
  }

  return (
    <>
      <div class='container mx-auto mt-10 justify-center items-center text-center'>
        {
          liveStreamerList&&liveStreamerList.length&&liveStreamerList.length>0&&liveStreamerList.map(x=>{
            return(<>
              <div>
                <div>
                  {x.first_name} {x.last_name}
                </div>
                <div>
                  <button onClick={()=>{onWatchClick(x.playerStreamerId)}}>Watch</button>
                </div>
                </div>
              <br/>
            </>)
          })
        }
        <div id='player' class='mx-auto bg-gray-200 h-96 max-w-2xl'>
        </div>

        <button onClick={onWatchButtonClick} class='bg-green-500 hover:bg-green-700 text-white font-bold mt-10 py-2 px-6 mr-2 rounded' id='streamStartEnd'>
          watch stream
        </button>
      </div>
    </>
  );
}
export default AudiencePage