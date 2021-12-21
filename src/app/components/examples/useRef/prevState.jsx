import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev state: {prevState.current}</p>
            <p>current State: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                toggle
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
