'use client'

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';
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
        console.error('Error fetching playlist data:', error);
        setError('Failed to fetch data');
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
    <div>

      <h1 className='text-center font-bold mt-2 text-2xl'>{props.chapter} </h1><br />

      {loading && <p className=" flex justify-center items-center font-extrabold tracking-tight text-lg text-black">Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="w-full h-full flex flex-wrap justify-center gap-5  ">
          {currentVideos.map(video => (

            <div key={video.id} >
                <p className='m-auto text-center text-[12px]  font-bold font-mono w-[345px] lg:w-[475px]'>{video.snippet.title}</p>



<div className="card2  lg:w-[480px]">
              <section className='w-full flex justify-center '>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                  controls={true}
                  width={isLargeScreen ? 475 : 340}
                  height={isLargeScreen ? 290 : 230}
                  lazy={true} 
                 playing={true}
                 light={`https://img.youtube.com/vi/${video.snippet.resourceId.videoId}/hqdefault.jpg`}


                
                />

              </section></div>
            </div>
          ))}
        </div>
      )}
      {/* Pagination */}
      <div className="flex justify-center m-8 gap-3">
        {[...Array(Math.ceil(videos.length / videosPerPage))].map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={`mx-1 italic  shadow-inner shadow-gray-600 px-3 py-1 rounded-xl ${currentPage === index + 1 ? 'bg-cyan-300 text-black font-extrabold' : 'bg-purple-500 text-black font-extrabold'}`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Neo;