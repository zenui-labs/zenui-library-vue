import React from "react";

// components
import Skeleton from "../../../Components/Overview/SidebarContent/Content/Feedback/Skeleton";
import ContentPageLayout from "../../../Shared/ContentPageLayout.jsx";

const SkeletonPage = () => {
  return (
    <ContentPageLayout>
        <Skeleton />
    </ContentPageLayout>
  );
};

export default SkeletonPage;
