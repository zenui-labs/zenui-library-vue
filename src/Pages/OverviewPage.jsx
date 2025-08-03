import React from "react";

// Components
import Overview from "@/Components/Overview/SidebarContent/Content/Overview";
import ContentPageLayout from "@shared/ContentPageLayout.vue";

const OverviewPage = () => {
    return (
        <ContentPageLayout>
            <Overview/>
        </ContentPageLayout>
    );
};

export default OverviewPage;
