import React from "react";
import PageTransition from "../components/PageTransition";
import BlogDetail from "../components/BlogDetail";

// Individual blog post page component
function BlogDetailPage() {
  return (
    <>
      <PageTransition>
        <div
          style={{
            marginTop: "100px",
            minHeight: "calc(100vh - 100px)",
            background: "#ffffff",
          }}
        >
          <BlogDetail />
        </div>
      </PageTransition>
    </>
  );
}

export default BlogDetailPage;
