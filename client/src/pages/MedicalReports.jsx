import React from 'react';

const MedicalReportsTable = () => {
  const reports = [
    { serialNumber: 1, reportType: 'Blood Test', date: '03/04/2022', fileURL: 'images/BloodTest.pdf' },
    { serialNumber: 2, reportType: 'X ray', date: '04/12/2020', fileURL: 'images/X-Rays.pdf' },
    { serialNumber: 3, reportType: 'CT Scan', date: '12/04/2020', fileURL: 'images/CTScan.pdf' },
    { serialNumber: 2, reportType: 'ECG', date: '06/11/2021', fileURL: 'images/ECG.pdf' }
    
  ];

  return (
    <div className=" custom-padding mt-10 min-h-screen px-10 pl-10 dark:bg-slate-900 ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              SNo
            </th>
            <th scope="col" className="px-6 py-3">
              Type of Report
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Report
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4">{report.serialNumber}</td>
              <td className="px-6 py-4">{report.reportType}</td>
              <td className="px-6 py-4">{report.date}</td>
              <td className="px-6 py-4">
                <a href={report.fileURL} target="_blank" rel="noopener noreferrer">
                  Open Report
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalReportsTable;