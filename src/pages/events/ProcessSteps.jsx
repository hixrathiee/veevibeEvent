import { useEffect, useState } from "react";

export default function ProcessSteps({ steps = [] }) {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger staggered entrance once mounted
    setMounted(true);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-6 py-10">
        {steps.map((process, index) => {
          const isActive = index === active;
          return (
            <div
              key={index}
              // keep w-72 and border unchanged per your request
              className={`group relative flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 w-72 border border-transparent
                 bg-[length:200%_200%] bg-gradient-to-r from-[#800000] via-[#FFD700] to-[#800000]
                 transition-all duration-500 ease-out
                 ${isActive ? "scale-105 z-20" : "z-10"}
                 ${
                   mounted
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 translate-y-6"
                 }`}
              style={{
                // staggered entrance delay
                animationDelay: `${index * 120}ms`,
                // attach a CSS animation defined below that handles initial fade+up
                animationFillMode: "forwards",
              }}
            >
              {/* gradient border layer (outer) - animation class applied on hover via group-hover */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-[length:200%_200%] bg-gradient-to-r from-[#800000] via-[#FFD700] to-[#800000] pointer-events-none">
                {/* inner mask to keep card white while showing border */}
                <div className="h-full w-full rounded-2xl bg-white"></div>
              </div>

              {/* Step Circle */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#800000] to-[#FFD700] text-white font-bold text-lg flex items-center justify-center shadow-md mb-3">
                {process.step}
              </div>

              {/* Content: show extra description fully for active card, minimal otherwise */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#800000] mb-1">
                  {process.title}
                </h3>

                <p
                  className={`text-[#5A0000]/80 text-sm transition-all duration-400 ${
                    isActive
                      ? "max-h-40 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
                  }`}
                >
                  {process.description}
                </p>
              </div>

              {/* Hover effects: animate border and zoom on hover */}
              <style jsx>{`
                .group:hover {
                  transform: scale(1.05);
                }
                .group:hover .p\\[1px\\] {
                  /* when hovered, shift gradient background-position for visible movement */
                  animation: gradientMove 3s linear infinite;
                }
              `}</style>
            </div>
          );
        })}
      </div>

      {/* Controls to step through content */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="px-4 py-2 rounded-lg border shadow-sm"
          onClick={() => setActive((s) => Math.max(0, s - 1))}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 rounded-lg border shadow-sm"
          onClick={() => setActive((s) => Math.min(steps.length - 1, s + 1))}
        >
          Next
        </button>
      </div>

      {/* Keyframes and utility classes - place in component or global CSS */}
      <style jsx>{`
        @keyframes enterUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* used for stacked entrance - the inline style uses animationDelay */
        .mounted {
          animation: enterUp 420ms ease forwards;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}
