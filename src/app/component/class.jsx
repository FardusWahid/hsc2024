'use client'
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useMediaQuery } from 'react-responsive';

const API_KEY = 'AIzaSyBRxPt8NOlqBUKrNvUtHeuCjs9Z3MWUzrs';
const videosPerPage = 9; 
function Neo(props) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const maxLength =100;


  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${props.playid}&key=${API_KEY}&maxResults=150`);
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

      <h1 className='text-center font-extrabold mt-1 md:mt-0 text-2xl'>{props.chapter} </h1><br />

      {loading && <p className=" flex justify-center items-center font-extrabold tracking-tight text-lg text-white">Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="w-full flex flex-wrap justify-center 2xl:w-[1490px] 2xl:m-auto 2xl:justify-start  gap-5  ">
          {currentVideos.map(video => (

            <div key={video.id} >
  <p className='m-auto text-center text-[13px] tracking-tighter font-bold text-cyan-100 font-sans w-[350px] lg:w-[480px]'>{video.snippet.title}</p>



<div className="bg-black  lg:w-[480px]">
              <section className='w-full flex justify-center'>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                  controls={true}
                  width={isLargeScreen ? 475 : 344}
                  height={isLargeScreen ? 290 : 220}
                  light={`https://img.youtube.com/vi/${video.snippet.resourceId.videoId}/hqdefault.jpg`}
                 playing={true}
                 
className="ring-[0.6px] ring-gray-800"
                
                />

              </section></div>
            </div>
          ))}
        </div>
      )}
      {/* Pagination */}
      <div className="flex justify-center m-8 gap-2">
        {[...Array(Math.ceil(videos.length / videosPerPage))].map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={`mx-1 italic px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-white ring-1 ring-white text-black font-extrabold' : 'bg-black ring-white ring-1 text-white  font-extrabold'}`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Neo;