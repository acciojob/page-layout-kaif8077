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
      header={<h1>Header</h1>}
      footer={<p>Footer</p>}
    >
      <p>This is the content of my website.</p>
    </PageLayout>
  );
};

export default App;
