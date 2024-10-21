import LeftSidebar from "../sidebar/LeftSidebar";
import Rightsidebar from "../sidebar/Rightsidebar";

const Root = () => {
    return (
        <div className="flex justify-between">
            <LeftSidebar/>
            <Rightsidebar/>
        </div>
    );
};

export default Root;