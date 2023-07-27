import React from "react";

const BackButton = () => {
  const handleBack = () => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
    }
    // Go back to the AllRecipes page
    window.history.back();
  };

  return (
    <button onClick={handleBack}>Back to All Recipes</button>
  );
};

export default BackButton;
