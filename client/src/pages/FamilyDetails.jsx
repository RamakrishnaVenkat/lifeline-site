import { useState, useEffect } from 'react';

// Assume you've got the familyMembers array from the backend API call

function FamilyMembersComponent() {
  const [familyMembers, setFamilyMembers] = useState([]);

  useEffect(() => {
    const sampleFamilyMembers = [
      {
        relationship: 'mother',
        medical_id: 'MED2377',
        _id: '658563d3f466b3d9ff72beb1'
      },
      {
        relationship: 'father',
        medical_id: 'MED9699',
        _id: '6596956f6a74fe95eb0569d2'
      }
    ];

    setFamilyMembers(sampleFamilyMembers);
  }, []); 
  return (
    <div className='grid grid-cols-3 h-screen custom-padding'>
      <main className='col-span-2 border-r-2 border-slate-400 dark:bg-slate-900 dark:text-white'>
        hello
      </main>
      <aside className='dark:bg-slate-900 dark:text-white'>
        <p className='font-poppins font-semibold text-center mt-5 text-[40px]'>Family Members</p>
        <ul className='font-poppins flex flex-col mt-5 gap-8 px-4'>
          {familyMembers.map((member, index) => (
            <li key={index} className='self-center border border-slate-700 text-[25px] w-full text-center py-5 rounded-md bg-slate-100 dark:bg-slate-800'>
              <span className='font-bold'>{member.relationship.toUpperCase()}</span>{" "}: {member.medical_id}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default FamilyMembersComponent;
