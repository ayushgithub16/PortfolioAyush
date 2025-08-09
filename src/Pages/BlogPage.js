import React from "react";
import PageTransition from "../components/PageTransition";
import BlogList from "../components/BlogList";

// Blog page component
function BlogPage() {
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
          <BlogList />
        </div>
      </PageTransition>
    </>
  );
}

export default BlogPage;
