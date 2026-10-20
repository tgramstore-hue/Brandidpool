"use client";

import Link from "next/link";
import UserLayout from "@/components/UserLayout";

const applicationsList = [
  {
    service: "Business name registration",
    ref: "BP-1042",
    date: "12 Oct",
    status: "With partner",
    tagClass: "tg o",
  },
  {
    service: "NIN slip",
    ref: "BP-1038",
    date: "08 Oct",
    status: "Ready",
    tagClass: "tg g",
  },
  {
    service: "FIRS TIN",
    ref: "BP-1021",
    date: "02 Oct",
    status: "Filed with agency",
    tagClass: "tg",
  },
  {
    service: "BVN verification",
    ref: "BP-0990",
    date: "25 Sep",
    status: "Ready",
    tagClass: "tg g",
  },
  {
    service: "Trademark registration",
    ref: "BP-0951",
    date: "14 Sep",
    status: "Submitted",
    tagClass: "tg",
  },
];

export default function ApplicationsPage() {
  return (
    <UserLayout title="Applications">
      <div className="cd">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Reference</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applicationsList.map((app) => (
              <tr key={app.ref}>
                <td>
                  <b>{app.service}</b>
                </td>
                <td>{app.ref}</td>
                <td>{app.date}</td>
                <td>
                  <span className={app.tagClass}>{app.status}</span>
                </td>
                <td>
                  <Link
                    href={`/dashboard/applications/${app.ref}`}
                    style={{ color: "#0B5F82", fontWeight: 600 }}
                  >
                    Open
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UserLayout>
  );
}
