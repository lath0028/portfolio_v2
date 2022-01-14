import React from "react";

function Work() {
  return (
    <div className="experience-section">

      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Manager on Duty</p>
        <p className="company__name">Kentucky Fried Chicken</p>
        <ul className="job__points">
          <li> Responsible for coordinating, planning, and leading Team-members in an organization. </li>
          <li> Conducting training of team members to maximize their potential. </li>
          <li> Empowering team members with skills to improve their confidence, product knowledge, and communication skills. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">UI/UX Developer Intern</p>
        <p className="company__name">MASV.io</p>
        <ul className="job__points">
          <li> Leveraged expertise in user preferences and accessibility requirements to establish design specifications and optimize approaches. </li>
          <li> Corresponded and devised personas and scenarios after conducting interviews with clients. </li>
          <li> Coordinated production across stages from concept and design development through final testing and optimization. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Junior Database Developer Intern</p>
        <p className="company__name">Acute Informatics PVT LTD</p>
        <ul className="job__points">
          <li> Got knowledge of database internals such as locking, wait events, consistency, logging, and recovery </li>
          <li> Gained experience working directly with internal and external customers in database software development and support. </li>
          <li> Worked in database systems architecture, including networking, security, scaling, and fault-tolerance. </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
