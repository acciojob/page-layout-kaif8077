import React from "react";

const App = () => {

  // Simple PageLayout Component
  const PageLayout = ({ header, footer, children }) => {
    return (
      <div>
        {header}
        {children}
        {footer}
      </div>
    );
  };

  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}
      footer={<p>© 2023 My Website. All rights reserved.</p>}
    >
      <p>This is the content of my website</p>
    </PageLayout>
  );
};

export default App;
