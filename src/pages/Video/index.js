import React from 'react';
import InnerHTML from 'dangerously-set-html-content';


const Video = () => {
  document.title = "Video | Call for Civility"

  const video1 = `
  
  <iframe width="660" height="415" src="https://www.youtube.com/embed/XFGXVwYIuF8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

`

  const video2 = `
  
<iframe width="660" height="415" src="https://www.youtube.com/embed/NHyQgG178pM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

`



  return (
    <>
      <main className="mb-24">
        <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-20 sm:pt-24 lg:pt-24">

            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Videos
              </h1>
              <p>Watch videos of events, including interviews with Sam Bushman, Richard Mack, and other Civility Advocates.</p>
              <br />
              <br />

              <div className="bg-white justify-center flex m-5 pb-5">
                <InnerHTML html={video1} />
              </div>
              <div className="bg-white justify-center flex m-5 pt-5">
                <InnerHTML html={video2} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Video