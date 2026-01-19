export default function WhatWeDo() {
  return (
    <div
      className=" px-20 gap-4 items-center flex-1 justify-center flex flex-col bg-white scroll-mt-96 lg:scroll-mt-80 py-20"
      id="what-we-do"
    >
      <div>
        <h1 className="text-center font-bold text-5xl  text-red-600">
          What We Do
        </h1>
      </div>
      <div className="flex w-full flex-col flex-2 lg:flex-row ">
        <div className="card bg-gray-600 rounded-box grid h-auto grow place-items-left p-8 sm:h-auto sm:p-32 sm:mb-12 lg:mb-0 lg:p-16 gap-2">
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white leading-tight break-words">
            - Data Labelling & Annotation
          </h1>
          <p>
            Structured, accurate data prepared by trained annotators across
            text, speech, image, and video.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card bg-gray-600 rounded-box grid h-auto grow place-items-left p-8 sm:h-auto sm:p-32 sm:mb-12 lg:mb-0 lg:p-16 gap-2">
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white leading-tight break-words">
            - Model Training Support
          </h1>
          <p>
            From pre-processing to large-scale training runs, we help models
            learn faster and better.
          </p>
        </div>
      </div>

      {/* second row */}
      <div className="flex w-full flex-col flex-2 lg:flex-row ">
        <div className="card bg-gray-600 rounded-box grid h-auto grow place-items-left p-8 sm:h-auto sm:p-32 sm:mb-12 lg:mb-0 lg:p-16 gap-2">
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white leading-tight break-words">
            - Reinforcement Learning with Human Feedback (RLHF)
          </h1>
          <p>
            Human-in-the-loop training to align models with ethical,
            context-aware, and safe outputs.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card bg-gray-600 rounded-box grid h-auto grow place-items-left p-8 sm:h-auto sm:p-32 sm:mb-12 lg:mb-0 lg:p-16 gap-2">
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white leading-tight break-words">
            - Custom Data Platforms
          </h1>
          <p>
            From pre-processing to large-scale training runs, we help models
            learn faster and better.
          </p>
        </div>
      </div>
    </div>
  );
}
