import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
// import tw from "twin.macro";

import SliderMeals from "../Slider/SliderMeals";

const StyledModal = styled.div`
  .modal {
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmpopUp 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmpopOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;

const Modal = ({ slideIndex, slides }) => {
  if (typeof window !== `undefined`) {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }

  return (
    <div>
      <StyledModal>
        <div
          className="modal relative hidden z-50"
          id="modal-meals"
          aria-hidden="false"
        >
          <div
            className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black/50 outline-none"
            tabIndex="-1"
            data-modal-close
          >
            <div
              className="content-wrapper w-full h-screen overflow-auto pt-24 pb-40 md:py-20 px-4 md:px-6"
              role="dialog"
              aria-modal="true"
            >
              <div className="relative bg-white py-12 px-6 md:p-14 max-w-[960px] mx-auto">
                <SliderMeals slideIndex={slideIndex} slides={slides} />
                <i
                  className="fal fa-times absolute top-0 right-0 mr-4 mt-4 text-gray-900 hover:text-primary-400 text-xl cursor-pointer transition-colors duration-300 ease-linear"
                  data-modal-close
                ></i>
              </div>
            </div>
          </div>
        </div>
      </StyledModal>
    </div>
  );
};

export default Modal;
