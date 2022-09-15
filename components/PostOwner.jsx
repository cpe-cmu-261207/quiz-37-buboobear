import React from "react";
import Comment from "./Comment";

export default function PostOwner(props) {
    return (
        <div className="vstack gap-3">
            <div className="d-flex align-items-center gap-3">
                <img
                    src="/profileImages/110146857_3353871798170740_6103571106592671618_n.jpg"
                    width="48"
                    height="48"
                    className="rounded-circle"
                    style={{ objectFit: "cover" }}
                />
                <span className="fw-semibold fs-5">
                    Jedsadaporn Juntong 640612179
                </span>
            </div>
            <span>Jongin is God!!</span>
            <div className="d-flex align-items-center gap-1">
                <img src="/like.svg" width={20}></img>
                <span className="text-muted">5k คน</span>
            </div>
            <hr className="m-0" />
            {props.comment.map((data, index) => (
                <Comment data={data} key={index} />
            ))}
        </div>
    );
}
