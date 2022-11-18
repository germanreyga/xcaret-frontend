import styles from "./Modal.module.css";

function Modal({ handleClose, show, children, closeBtnText }) {
    const showHideClassName = show
        ? "overflow-hidden z-50 fixed top-0 left-0 w-full h-full bg-gray-800 block"
        : "overflow-hidden z-50 fixed top-0 left-0 w-full h-full bg-gray-800 hidden";

    return (
        <div className={` justify-center ${showHideClassName}`}>
            <section
                className={`flex flex-col items-center fixed bg-white w-4/5 h-auto ${styles.modalMain} text-xl p-8`}
            >
                {children}
                <button
                    type="button"
                    className="mt-4 w-full md:w-1/4 rounded border border-black py-2 mb-3 uppercase"
                    onClick={handleClose}
                >
                    {closeBtnText}
                </button>
            </section>
        </div>
    );
}

export default Modal;
