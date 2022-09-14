import React from 'react'

export default function Loader() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="spinner-border fs-5 text-primary " role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </>
    )
}
