import React from "react";
import Datepicker from "@themesberg/tailwind-datepicker/Datepicker";

function Input({
  user,
  setUser,
  name,
  setName,
  detail,
  setDetail,
  imageHandler,
}) {
  return (
    <>
      <form
        className='w-4/5 m-auto rounded-xl p-8 mt-6 '
        style={{ background: "#1F2937" }}
      >
        <p className='text-white text-2xl -mt-5 mb-10 text-center font-extrabold'>
          Tweet Generator
        </p>
        <label
          for='website-admin'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          User name
        </label>
        <div className='flex mb-4'>
          <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'>
            @
          </span>
          <input
            type='text'
            value={user}
            onChange={(e) => setUser(e.target.value)}
            id='website-admin'
            className='rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500  block flex-1 min-w-0 w-full text-sm  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:border-blue-500'
            placeholder='faysal001'
          />
        </div>
        <label
          for='name-icon'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Full Name
        </label>

        <input
          type='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
          placeholder='Faisal Amin'
        />
        <label
          for='name-icon'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Date
        </label>
        <input
          id='date'
          label='Choose your birthdate'
          type='date'
          defaultValue='2017-05-24'
          className='bg-gray-700 text-white rounded p-2 mb-4'
        />

        <label
          for='name-icon'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Tweet
        </label>
        <textarea
          id='message'
          rows='4'
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2'
          placeholder="What's in your mind?"
        ></textarea>

        <div>
          <label
            for='name-icon'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Profile pic
          </label>
          <div className='mt-1 flex items-start justify-around mb-4'>
            <span className='block h-10 w-10 rounded-full overflow-hidden bg-gray-600'>
              <svg
                className='h-full w-full text-gray-900'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
              </svg>
            </span>
            <input
              className='block text-sm text-gray-900 w-1/2 rounded cursor-pointer bg-gray-700 dark:text-gray-400 focus:outline-none dark:bg-gray-700 p-2  dark:placeholder-gray-400 mb-4'
              aria-describedby='user_avatar_help'
              id='user_avatar'
              type='file'
              onClick={imageHandler}
            />
          </div>
        </div>

        <div className='flex items-start mb-6'>
          <div className='flex items-center h-5'>
            <input
              id='terms'
              type='checkbox'
              value=''
              className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
              required
            />
          </div>

          <label
            for='terms'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            I agree with the{" "}
            <a
              href='#'
              className='text-blue-800 hover:underline dark:text-blue-500'
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type='submit'
          className='text-white text-center w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Next
        </button>
      </form>
    </>
  );
}

export default Input;
