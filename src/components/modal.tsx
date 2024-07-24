import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

interface ModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    showModal,
    setShowModal,
    title = "Modal Title",
    children,
}) => {
    return (
        <>
            {showModal && (
                <>
                    <div className="justify-center bg-[#00000080] items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/* content */}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/* header */}
                                <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-xl text-black font-semibold">
                                        {title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <XMarkIcon className="h-6 w-6 text-2xl" />
                                    </button>
                                </div>
                                {/* body */}
                                <div className="relative px-6 pb-6 flex-auto">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    );
};

export default Modal;
