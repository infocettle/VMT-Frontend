import { Printer, Share2, Upload, View } from "lucide-react";

export const handleExport = (reportData) => {
  if (!Array.isArray(reportData) || reportData.length === 0) {
    console.error("Invalid data");
    return;
  }

  // Extract headers from the first object
  const headers = Object.keys(reportData[0]);

  // Map the data to CSV format
  const csvRows = reportData.map((row) => {
    return headers.map((header) => row[header]).join(",");
  });

  // Join headers and rows
  let csvContent =
    "data:text/csv;charset=utf-8," +
    headers.join(",") +
    "\n" +
    csvRows.join("\n");

  // Create and download the CSV file
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "report.csv");
  document.body.appendChild(link); // Required for FF

  link.click();
  document.body.removeChild(link); // Cleanup
};

const handleShare = () => {
  // Logic to share report, e.g., using the Web Share API
  if (navigator.share) {
    navigator
      .share({
        title: "Report",
        url: window.location.href,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    // Fallback for browsers that do not support the Web Share API
    alert("Web Share API is not supported in your browser.");
  }
};

const handlePrint = () => {
  const scrollPosition = window.scrollY;

  setTimeout(() => {
    window.print();
    window.scrollTo(0, scrollPosition);
  }, 0);
};

export const ReportLinks = [
  // { id: 1, name: "View Report", icon: <View size={14} /> },
  {
    id: 2,
    name: "Export",
    icon: <Upload size={14} />,
  },
  { id: 3, name: "Share", icon: <Share2 size={14} />, Click: handleShare },
  { id: 4, name: "Print", icon: <Printer size={14} />, Click: handlePrint },
];
