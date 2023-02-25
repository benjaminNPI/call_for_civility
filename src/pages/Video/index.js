import React from 'react';
import InnerHTML from 'dangerously-set-html-content';


const Video = () => {
  document.title = "Video | Call for Civility"

  const video1 = `
  <iframe width="420" height="315"
src="https://www.youtube.com/watch?v=XFGXVwYIuF8">
</iframe>`

const video2 = `
  <iframe width="420" height="315"
src="https://www.youtube.com/watch?v=NHyQgG178pM&t=2s">
</iframe>`



  return (
    <>
      <h2>Videos</h2>
      <p>Watch videos of events, including interviews with Sam Bushman, Richard Mack, and other Civility Advocates.</p>
      <div className="bg-white justify-center flex">
        <InnerHTML html={video1} className="w-1/2" />
      </div>
      <div className="bg-white justify-center flex">
        <InnerHTML html={video2} className="w-1/2" />
      </div>
      <iframe width="420" height="315"
src={`https://www.youtube.com/watch?v=NHyQgG178pM&t=2s`}>
</iframe>
    </>
  )
}

export default Video