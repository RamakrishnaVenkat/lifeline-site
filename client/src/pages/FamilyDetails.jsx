import { useState, useEffect } from "react";

// Assume you've got the familyMembers array from the backend API call

function FamilyMembersComponent() {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // Pad month and day with leading zeros if needed
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  }

  const [familyMembers, setFamilyMembers] = useState([]);

  useEffect(() => {
    const fetchFamily = async () => {
      const res = await fetch("/api/family/get-family-details", {
        method: "GET",
      });

      const data = await res.json();
      console.log(data);
      setFamilyMembers(data);
    };
    fetchFamily();
  }, []);

  return (
    <div className="grid grid-cols-3 h-screen custom-padding">
      <main className="col-span-2 border-r-2 border-slate-400 dark:bg-slate-900 dark:text-white font-poppins">
        {familyMembers.length > 0 ? (
          <div className="flex flex-col gap-4 mt-4 px-4">
            {familyMembers.map((member, index) => (
              <div
                key={index}
                className="border border-slate-700 py-3 px-4 rounded-md bg-slate-100 dark:bg-slate-800"
              >
                <h3 className="font-bold text-2xl font-poppins my-3">
                  {member.relationship.toUpperCase()}
                </h3>

                <h4 className="mt-2 text-xl font-semibold text-slate-600 dark:text-slate-400 ">
                  Medical Conditions:
                </h4>
                <ul className="list-disc list-inside text-lg font-bold">
                  {member.medical_details.medical_conditions.map(
                    (condition, i) => (
                      <li key={i}>
                        {condition.condition_name} - {condition.treatment}
                      </li>
                    )
                  )}
                </ul>
                <h4 className="mt-5 text-xl font-semibold text-slate-600 dark:text-slate-400">
                  Allergies:
                </h4>
                <ul className="list-disc list-inside text-lg font-bold">
                  {member.medical_details.allergies.map((allergy, i) => (
                    <li key={i}>
                      {allergy.allergy_name} - {allergy.severity}
                    </li>
                  ))}
                </ul>
                <h4 className="mt-5 text-xl font-semibold text-slate-600 dark:text-slate-400">
                  Past Surgeries:
                </h4>
                <ul className="list-disc list-inside text-lg font-bold">
                  {member.medical_details.past_surgeries.map((surgery, i) => (
                    <li key={i}>
                      {surgery.surgery_name} | Date of Surgery:{" "}
                      {formatDate(surgery.date)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-3xl mt-10 font-semibold font-poppins text-slate-600">No family members available</p>
        )}
      </main>
      <aside className="dark:bg-slate-900 dark:text-white">
        {familyMembers.length > 0 ? (
          <>
            <p className="font-poppins font-semibold text-center mt-5 text-[40px]">
              Family Members
            </p>
            <ul className="font-poppins flex flex-col mt-5 gap-8 px-4">
              {familyMembers.map((member, index) => (
                <li
                  key={index}
                  className="self-center border border-slate-700 text-[25px] w-full text-center py-5 rounded-md bg-slate-100 dark:bg-slate-800"
                >
                  <span className="font-extrabold">
                    {member.relationship.toUpperCase()}
                  </span>{" "}
                  :{" "}
                  <span className="font-poppins font-semibold text-slate-600 dark:text-slate-400">
                    {member.medical_id}
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-center text-3xl mt-10 font-semibold font-poppins text-slate-600">add family members to display</p>
        )}
      </aside>
    </div>
  );
}

export default FamilyMembersComponent;
