import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            LogOut
        </button>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) return false;
    return true;
}

const MemoizedLogOut = React.memo(LogOutButton, (prevProps, nextProps) => {
    areEqual(prevProps, nextProps);
});

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(
        (props) => {
            localStorage.removeItem("auth");
        },
        [props]
    );
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initiate rerender
            </button>
            <MemoizedLogOut onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
