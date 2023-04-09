import React, { FunctionComponent } from "react";

type ModalProps = {
  onClose: () => void;
};

const Modal: FunctionComponent<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal_wrapper">
      <div className="modal_container">
        <svg
          className="modal_close absolute top-5 right-5 cursor-pointer z-20"
          onClick={onClose}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <line x1="1" y1="11" x2="11" y2="1" stroke="black" strokeWidth="2" />
          <line x1="1" y1="1" x2="11" y2="11" stroke="black" strokeWidth="2" />
        </svg>
        <div className="modal_header mt-4">
          <h3 className="text-2xl">Create new group</h3>
        </div>
        <div className="modal_body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Group name</span>
            </label>
            <input
              type="text"
              placeholder="Group name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Group description</span>
            </label>
            <textarea
              className="textarea h-24 textarea-bordered"
              placeholder="Group description"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Group color</span>
            </label>
            <div className="flex flex-row">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-red-500"></div>
                <p className="text-xs">Red</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                <p className="text-xs">Blue</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-500"></div>
                <p className="text-xs">Green</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-500"></div>
                <p className="text-xs">Yellow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal_footer">
          <button className="btn btn-accent">Create</button>
          <button className="btn btn-outline" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
      <div className="modal_overlay" onClick={onClose}></div>
    </div>
  );
};

export default Modal;
