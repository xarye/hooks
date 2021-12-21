import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <div>
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </div>
    );
};

export default withLogin;
