export default function WhatWeDo() {
  return (
    <div
      className="py-9 px-20 gap-4 items-center flex-1 justify-center flex flex-col bg-white"
      id="what-we-do"
    >
      <div>
        <h1 className="text-center font-bold text-5xl  text-red-600">
          What We Do
        </h1>
      </div>
      <div className="flex w-full flex-col flex-2 lg:flex-row py-5 px-5">
        <div className="card bg-gray-600 rounded-box grid h-72 grow place-items-left p-16 sm:h-auto gap-4">
          <h1 className="font-semibold text-3xl text-white">
            - Data Labelling & Annotation
          </h1>
          <p>
            Structured, accurate data prepared by trained annotators across
            text, speech, image, and video.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card bg-gray-600 rounded-box grid h-72 grow place-items-left p-16 ">
          <h1 className="font-semibold text-3xl text-white">
            - Model Training Support
          </h1>
          <p>
            From pre-processing to large-scale training runs, we help models
            learn faster and better.
          </p>
        </div>
      </div>

      {/* second row */}
      <div className="flex w-full flex-col flex-2 lg:flex-row py-5 px-5">
        <div className="card bg-gray-600 rounded-box grid h-72 grow place-items-left p-16">
          <h1 className="font-semibold text-3xl text-white">
            - Reinforcement Learning with Human Feedback (RLHF)
          </h1>
          <p>
            Human-in-the-loop training to align models with ethical,
            context-aware, and safe outputs.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card bg-gray-600 rounded-box grid h-72 grow place-items-left p-16">
          <h1 className="font-semibold text-3xl text-white">
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
