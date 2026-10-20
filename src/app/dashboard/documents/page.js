"use client";

import UserLayout from "@/components/UserLayout";

const documentsList = [
  {
    title: "NIN slip",
    desc: "PDF, 08 Oct",
  },
  {
    title: "BVN verification",
    desc: "PDF, 25 Sep",
  },
  {
    title: "FIRS TIN certificate",
    desc: "PDF, 20 Sep",
  },
];

export default function DocumentsPage() {
  const handleDownload = (title) => {
    alert(`Downloading ${title} (PDF)...`);
  };

  return (
    <UserLayout title="Documents">
      <div className="gr g3">
        {documentsList.map((doc, idx) => (
          <div className="cd" key={idx}>
            <div
              style={{
                height: 140,
                borderRadius: 16,
                background: "#EEF4F8",
                marginBottom: 16,
                display: "grid",
                placeItems: "center",
                color: "#1FA7D9",
              }}
            >
              <svg className="i" viewBox="0 0 24 24" style={{ width: 36, height: 36 }}>
                <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9zM14 3v6h6M8 13h8M8 17h6" />
              </svg>
            </div>
            <h3>{doc.title}</h3>
            <p className="mu" style={{ margin: "4px 0 16px" }}>
              {doc.desc}
            </p>
            <button
              className="bt f s"
              type="button"
              onClick={() => handleDownload(doc.title)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </UserLayout>
  );
}
