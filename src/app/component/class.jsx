'use client'
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import LoadingScreen from './loading';

const API_KEY = 'AIzaSyBRxPt8NOlqBUKrNvUtHeuCjs9Z3MWUzrs';
const videosPerPage = 12; 

function Neo({ playid, chapter }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playid}&key=${API_KEY}&maxResults=150`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error.message || 'Failed to fetch data');
        }

        setVideos(data.items);
        setLoading(false);
      } catch (error) {
        setError('Not Found. Chapter hasnt Started yet');
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div className='select-none'>
      <h1 className='text-center font-sans tracking-tight text-cyan-200 font-extrabold mt-4 md:mt-[-5px] text-2xl'>{chapter}</h1>
      <br />
      {loading && <p className=" flex justify-center items-center font-extrabold tracking-tight text-lg text-white">Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="flex flex-wrap w-full justify-center gap-3">
          {currentVideos.map(video => (

            <div key={video.id} className="w-[99%] md:w-[95%] lg:w-[32.55%]">
              <p className="text-center text-cyan-200 font-sans italic text-sm md:text-[15px] font-extrabold bg-gray-950 truncate overflow-hidden mb-1 py-1 whitespace-nowrap active:whitespace-normal active:overflow-visible active:text-clip">
                {video.snippet.title}
              </p>
              <div className="relative pb-[56.25%]">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                  controls
                  width="100%"
                  height="100%"
                  light={`https://img.youtube.com/vi/${video.snippet.resourceId.videoId}/hqdefault.jpg`}
                  playing
                  className="absolute border-2 border-gray-900 rounded-md"

                />
              </div>
            </div>
          ))}
        </div>
      )}
      
      
      <div className="flex justify-center m-8 gap-2">
        {[...Array(Math.ceil(videos.length / videosPerPage))].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 italic px-[11px] py-1 font-sans font-extrabold rounded-[5px]  ${
              currentPage === index + 1
                ? 'bg-cyan-100 text-black'
                : 'bg-gray-900 text-white shadow-[0px_0px_8px] hover:shadow-none shadow-cyan-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Neo;
