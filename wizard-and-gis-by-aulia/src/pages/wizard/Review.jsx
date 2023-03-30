import React from 'react'

function TextReview({ title, content }) {
    return (
        <div>
            <p className="text-xl text-gray-700"> {title} :</p>
            <p className="text-base text-gray-500 pb-3"> {content} </p>
        </div>
    );
}

export default function Review() {

    return (
        <div className="container mx-auto bg-white rounded-xl shadow border p-8 m-10">
            <p className="text-3xl text-gray-700 font-bold mb-5 text-center">
                Review
            </p>
            <div class="grid grid-cols-2 pl-20">
                <img className="img-review object-top-right" src="https://osm.gs.mil/images/screenshots/slippymap.png" alt="OpenStreetMap" />
                <div className='pt-4'>
                    <TextReview title="Country" content="Indonesia" />
                    <TextReview title="Area" content="Duong Lam" />
                    <TextReview title="Date" content="01/01/2023 - 10/01/2027" />
                </div>
            </div>

        </div>
    )
}
