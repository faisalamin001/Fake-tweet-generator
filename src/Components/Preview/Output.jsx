import React, { createRef } from "react";
import "./output.css";
import Badge from "../../Assets/Images/badge.svg";
import { useScreenshot, createFileName } from "use-react-screenshot";

function Output({ user, name, detail, profileImg }) {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot();

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div>
      <div ref={ref} className='tweet-wrap'>
        <div className='tweet-header'>
          <img src={profileImg} alt='' className='avator' />
          <div className='tweet-header-info'>
            {name}{" "}
            <span>
              <img style={{ width: "20px" }} src={Badge} alt='' />
            </span>
            <p className='username'>@{user}</p>
            <p>{detail}</p>
          </div>
        </div>
        <div className='tweet-img-wrap'>
          <img src='#' alt='' className='tweet-img' />
        </div>
        <div className='tweet-info-counts'>
          <div className='comments'>
            <svg
              className='feather feather-message-circle sc-dnqmqq jxshSx'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              aria-hidden='true'
            >
              <path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'></path>
            </svg>
            <div className='comment-count'>353</div>
          </div>

          <div className='retweets'>
            <svg
              className='feather feather-repeat sc-dnqmqq jxshSx'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              aria-hidden='true'
            >
              <polyline points='17 1 21 5 17 9'></polyline>
              <path d='M3 11V9a4 4 0 0 1 4-4h14'></path>
              <polyline points='7 23 3 19 7 15'></polyline>
              <path d='M21 13v2a4 4 0 0 1-4 4H3'></path>
            </svg>
            <div className='retweet-count'>397</div>
          </div>

          <div className='likes'>
            <svg
              className='feather feather-heart sc-dnqmqq jxshSx'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              aria-hidden='true'
            >
              <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
            </svg>
            <div className='likes-count'>2.6k</div>
          </div>

          <div className='message'>
            <svg
              className='feather feather-send sc-dnqmqq jxshSx'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              aria-hidden='true'
            >
              <line x1='22' y1='2' x2='11' y2='13'></line>
              <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div className='w-full mt-4 text-center '>
        <button
          type='submit'
          onClick={downloadScreenshot}
          className='text-white  w-1/3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Download Tweet
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Output;
