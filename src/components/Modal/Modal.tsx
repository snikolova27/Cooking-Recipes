import { useRef } from "react";
import { ModalProps } from "./types";

export const Modal = ({ header, buttons }: ModalProps) => {
    const modalRef = useRef<any>(null)
  
    function openModal() {
      modalRef.current.showModal()
    }
  
    function closeModal() {
      modalRef.current.close()
    }
  
    return (
      <div>
        <button onClick={openModal}>Open</button>
        <dialog ref={modalRef}>
          <h1>Are you sure you want to delete this recipe?</h1>
          <button onClick={closeModal}>Delete</button>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={closeModal}>Close</button>
        </dialog>
      </div>
    )

//     const showButton = document.getElementById('showDialog');
//     const favDialog  = document.getElementById('favDialog');
//     const outputBox = document.querySelector('output');
//     const selectEl = favDialog?.querySelector('select');
//     const confirmBtn = favDialog?.querySelector('#confirmBtn');
    
//     // "Show the dialog" button opens the <dialog> modally
//     showButton?.addEventListener('click', () => {
//         favDialog?.showModal();
//     });
    
    
//     // "Confirm" button triggers "close" on dialog because of [formmethod="dialog"]
//     favDialog?.addEventListener('close', (e) => {
//       outputBox?.value = favDialog?.returnValue === 'default' ? "No return value." : `ReturnValue: ${favDialog?.returnValue}.`; // Have to check for "default" rather than empty string
//     });

//     confirmBtn?.addEventListener('click', (event) => {
//       event.preventDefault(); // We don't want to submit this fake form
//       favDialog?.close(selectEl?.value); // Have to send the select box value here.
//     });

//   return (
//     <>
//       <dialog id="favDialog">
//         <form>
//           <p>
//             {header}
//           </p>
//           <div>
//             <button value="cancel" formMethod="dialog">
//               Cancel
//             </button>
//             <button id="confirmBtn" value="default">
//               Confirm
//             </button>
//           </div>
//         </form>
//       </dialog>
//       <p>
//         <button id="showDialog">Show the dialog</button>
//       </p>
//       <output></output>
//     </>
//   );
};
