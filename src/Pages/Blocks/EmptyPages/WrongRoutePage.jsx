// components
import WrongRoute from "../../../Components/Overview/SidebarContent/Blocks/EmptyPages/WrongRoute.jsx";
import ContentPageLayout from "../../../Shared/ContentPageLayout.jsx";

const WrongUrlErrorPage = () => {
    return (
        <ContentPageLayout>
            <WrongRoute />
        </ContentPageLayout>
    );
};

export default WrongUrlErrorPage;
