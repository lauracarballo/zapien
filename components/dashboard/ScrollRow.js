import { useState, useRef, useEffect } from "react";

const ScrollRow = ({ children }) => {
  const [isDisplayedLeft, setIsDisplayedLeft] = useState(false);
  const [isDisplayedRight, setIsDisplayedRight] = useState(false);
  const isScrollingFromCode = useRef(false);
  useEffect(() => {
    if (scrollRow.current.offsetWidth < scrollRow.current.scrollWidth) {
      setIsDisplayedRight(true);
    }
  }, []);

  const scrollRow = useRef(null);

  return (
    <>
      <div className="content-section">
        <div
          className="content-row"
          ref={scrollRow}
          onScroll={() => {
            console.log("isScrollingFromCode", isScrollingFromCode.current);
            if (!isScrollingFromCode.current) {
              setIsDisplayedLeft(false);
              setIsDisplayedRight(false);
            }
          }}
        >
          {children}
        </div>
        {isDisplayedLeft && (
          <div
            className="scroll__arrow-left"
            onClick={() => {
              isScrollingFromCode.current = true;
              scrollRow.current.scrollBy(-400, 0);
              setIsDisplayedRight(true);
              setTimeout(() => {
                isScrollingFromCode.current = false;
                if (scrollRow.current.scrollLeft === 0) {
                  setIsDisplayedLeft(false);
                }
              }, 400);
            }}
          >
            <i className="fas fa-angle-left"></i>
          </div>
        )}

        {isDisplayedRight && (
          <div
            onClick={() => {
              isScrollingFromCode.current = true;
              console.log(
                "rightClick - isScrollingFromCode",
                isScrollingFromCode.current
              );
              scrollRow.current.scrollBy(400, 0);
              setIsDisplayedLeft(true);
              setTimeout(() => {
                isScrollingFromCode.current = false;
                console.log(
                  "rightClickTimeout - isScrollingFromCode",
                  isScrollingFromCode.current
                );
                if (
                  scrollRow.current.scrollLeft +
                    scrollRow.current.offsetWidth ===
                  scrollRow.current.scrollWidth
                ) {
                  setIsDisplayedRight(false);
                }
              }, 400);
            }}
            className="scroll__arrow-right"
          >
            <i className="fas fa-angle-right"></i>
          </div>
        )}
      </div>
      <style jsx>{`
        .content-section {
          display: block;
          position: relative;
        }
        .content-row {
          display: flex;
          justify-content: left;
          height: fit-content;
          overflow-x: auto;
          scroll-behavior: smooth;
        }
        .scroll__arrow-left {
          position: absolute;
          top: 250px;
          font-size: 25px;
        }
        .scroll__arrow-right {
          position: absolute;
          top: 250px;
          right: 0px;
          font-size: 25px;
        }
      `}</style>
    </>
  );
};

export default ScrollRow;
