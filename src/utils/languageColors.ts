export const getLanguageColor = (language: string | undefined) => {
    let colorClass = "bg-gray-500";
  
    switch (language) {
      case "HTML":
        colorClass = "bg-red-500";
        break;
      case "CSS":
        colorClass = "bg-indigo-700";
        break;
      case "JavaScript":
        colorClass = "bg-yellow-500";
        break;
      case "TypeScript":
        colorClass = "bg-blue-600";
        break
      default:
        break;
    }
  
    return colorClass;
  };
  