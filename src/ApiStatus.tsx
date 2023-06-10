type Args = { status: "idle" | "success" | "error" | "loading" };

export const ApiStatus = ({status}: Args) => {
    switch (status) {
        case "idle":
            return <div className="apiIdle"></div>
        case "success":
            return <div className="apiSuccess"></div>
        case "error":
            return <div className="apiError"></div>
        case "loading":
            return <div className="apiLoading"></div>
        default:
            throw Error("Unknown API State");
    }
};