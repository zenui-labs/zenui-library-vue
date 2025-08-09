import React from "react";

// components
import AllBlocks from "../../Components/Overview/SidebarContent/Blocks/AllBlocks.jsx";
import ContentPageLayout from "../../Shared/ContentPageLayout.jsx";

const AllBlocksPage = () => {
    return (
        <ContentPageLayout>
            <AllBlocks />
        </ContentPageLayout>
    );
};

export default AllBlocksPage;
