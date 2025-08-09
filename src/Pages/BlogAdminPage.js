import React from "react";
import PageTransition from "../components/PageTransition";
import BlogAdmin from "../components/BlogAdmin";

// Blog admin page component
function BlogAdminPage() {
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
          <BlogAdmin />
        </div>
      </PageTransition>
    </>
  );
}

export default BlogAdminPage;
