import React from 'react'

function TextReview({ title, content }) {
    return (
        <div>
            <p className="text-xl text-gray-700"> {title} :</p>
            <p className="text-base text-gray-500 pb-3"> {content} </p>
        </div>
    );
}

export default function Review(props) {

    return (
        <div className="container mx-auto bg-white rounded-xl shadow border p-8 m-10">
            <p className="text-3xl text-gray-700 font-bold mb-5 text-center">
                Review
            </p>
            <div class="grid grid-cols-2 pl-20">
                <img className="img-review object-top-right" src={props.screenshotHolder == null ? "https://osm.gs.mil/images/screenshots/slippymap.png" : props.screenshotHolder} alt="Map Screenshot" />
                <div className='pt-4'>
                    <TextReview title="Country" content={props.countryHolder.framework} />
                    <TextReview title="Area" content={props.areaHolder.current} />
                    <TextReview title="Date" content={props.periodHolder.startDate + " - " + props.periodHolder.endDate} />
                </div>
            </div>
        </div>
    )
}
