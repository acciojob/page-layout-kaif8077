import React from "react";

const App = () => {

  const PageLayout = ({ header, footer, children }) => {
    return (
      <div>
        <div>{header}</div>
        <div>{children}</div>
        <div>{footer}</div>
      </div>
    );
  };

  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}  
      footer={<p>© 2023 My Website. All rights reserved.</p>}  
    >
      <p>This is the content of my website.</p>  
    </PageLayout>
  );
};

export default App;
