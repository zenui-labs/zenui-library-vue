import React from "react";

// components
import GithubActivityGraph from "../../../Components/Overview/SidebarContent/Content/Data Display/GithubActivityGraph/Index.jsx";
import ContentPageLayout from "../../../Shared/ContentPageLayout.jsx";

const GithubActivityGraphPage = () => {
    return (
        <ContentPageLayout>
            <GithubActivityGraph />
        </ContentPageLayout>
    );
};

export default GithubActivityGraphPage;
