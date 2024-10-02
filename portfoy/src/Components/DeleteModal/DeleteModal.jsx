import React from 'react'
import "./DeleteModal.css"

export default function DeleteModal({ setDeleteConfirm , post_title , post_id , handleDeleteConfirm}) {
    function stripHtmlTags(str) {
        const doc = new DOMParser().parseFromString(str, 'text/html');
        return doc.body.textContent || "";
    }

    const cleanShortContent = stripHtmlTags(post_title);
    


    return (
        <> 
            <div className="modal-overlay-delete">
                <div className="modal-content-delete">
                    <div className="delete-text">
                        <h2>"{cleanShortContent}" <span >Bu blogu silmek istediğinizden emin misiniz ?</span></h2>
                    </div>
                    <div className="delete-btns">
                        <button onClick={()=>setDeleteConfirm(false)}>Close</button>
                        <button onClick={handleDeleteConfirm} className='modal-delete-btn' >Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
