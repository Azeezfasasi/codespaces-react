import React, { useState } from "react";

const AppDirectory = () => {
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);

  const tenants = {
    BayelsaPrime: [
      { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)." },
      { name: "Head Teacher Application", description: "For school leaders to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
      { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
      { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
      { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)."},
      { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)."},
      { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory."}
    ],
    'Bridge Andhra Pradesh': [
      { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
      { name: "Academy Manager App", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
      { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
      { name: "Bridge Dashboard", description: "" },
      { name: "Bridge Portal", description: "" },
      { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
      { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
      { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
      { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
      { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
      { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
      { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    'Bridge Kenya': [
        { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
        { name: "Academy Manager App", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
        { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
        { name: "Bridge Dashboard", description: "" },
        { name: "Bridge Portal", description: "" },
        { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
        { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
        { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
        { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
        { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
        { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
        { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    'Bridge Liberia': [
        { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
        { name: "Academy Manager App", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
        { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
        { name: "Bridge Dashboard", description: "" },
        { name: "Bridge Portal", description: "" },
        { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
        { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
        { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
        { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
        { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
        { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
        { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    'Bridge Nigeria': [
        { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
        { name: "Academy Manager App", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
        { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
        { name: "Bridge Dashboard", description: "" },
        { name: "Bridge Portal", description: "" },
        { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
        { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
        { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
        { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
        { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
        { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
        { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    'Bridge Uganda': [
        { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
        { name: "Academy Manager App", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
        { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
        { name: "Bridge Dashboard", description: "" },
        { name: "Bridge Portal", description: "" },
        { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
        { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
        { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
        { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
        { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
        { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
        { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    EdoBEST: [
        { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
        { name: "Head Teacher Application", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
        { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
        { name: "Bridge Dashboard", description: "" },
        { name: "Bridge Portal", description: "" },
        { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
        { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
        { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
        { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
        { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
        { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
        { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    EKOEXCEL: [
        { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
        { name: "Head Teacher App", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
        { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
        { name: "Bridge Dashboard", description: "" },
        { name: "Bridge Portal", description: "" },
        { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
        { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
        { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
        { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
        { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
        { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
        { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    EXPOIR: [
        { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
        { name: "Academy Manager App", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
        { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
        { name: "Bridge Dashboard", description: "" },
        { name: "Bridge Portal", description: "" },
        { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
        { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
        { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
        { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
        { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
        { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
        { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    KwaraLEARN: [
        { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
        { name: "Head Teacher Application", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
        { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
        { name: "Bridge Dashboard", description: "" },
        { name: "Bridge Portal", description: "" },
        { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
        { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
        { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
        { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
        { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
        { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
        { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    'RwandaEQUIP': [
        { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
        { name: "Head Teacher Application", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
        { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
        { name: "Bridge Dashboard", description: "" },
        { name: "Bridge Portal", description: "" },
        { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
        { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
        { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
        { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
        { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
        { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
        { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    'STAR Education Manipur': [
        { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
        { name: "Head Teacher Application", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
        { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
        { name: "Bridge Dashboard", description: "" },
        { name: "Bridge Portal", description: "" },
        { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
        { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
        { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
        { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
        { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
        { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
        { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    Training: [
        { name: "Academic Calendar", description: "For support staff to define the start and end dates of terms, semesters, holidays and exams (computer)" },
        { name: "Academy Manager App", description: "For academy managers to run the operation of their school, including marking their own attendance, registering and managing pupils, managing school staff, as well as the vendor payment activities within Bridge schools (smartphone)." },
        { name: "bRegistrar", description: "For school staff to enter the details of pupil leads and their parents or guardians as part of each school's community outreach work (tablet)." },
        { name: "Bridge Dashboard", description: "" },
        { name: "Bridge Portal", description: "" },
        { name: "Instructional Leadership App", description: "For support staff and school leaders to identify areas of good and poor teacher performance related to lesson completion (phone & tablet).The application is accessible now." },
        { name: "Let's Mark", description: "Android app for school staff to scan pupils' answer sheets, mark their answers, and upload the results." },
        { name: "Payment Deadlines", description: "For support staff to define the deadlines by when various fee payments need to be made (computer)." },
        { name: "Reports", description: "For support staff to view and download detailed historical datasets for everything we do in our schools, including staffing, pupils, teaching and academic performance (computer)." },
        { name: "Spotlight", description: "For school and support staff, as well as senior government managers, to view a wide range of actionable data about schools, staff, pupils and teaching to help staff analyse issues and problem solve (all devices)." },
        { name: "Teacher Tech", description: "For teachers to carry out all of their teaching activities, including marking attendance for themselves and pupils, as well as delivering lessons and recording pupils? assessment results (teacher tablet)." },
        { name: "Web Application Hub", description: "Collection of apps for managing Grade Promotions, Staff Assignments and CourseForge for a given territory." },
    ],
    // Add more tenants and their apps here
  };

  const apps = {
    // Apps for BayelsaPRIME
    'Academic Calendar': [
      { title: "Academic Calendar", name: "Production", description: "Production environment is where the software and other products are actually put into operation for their intended uses by end users. Version: 1.0.1447", link: "https://testing.com/release10" },
      { name: "Testing", description: "Testing environment for Academic Calendar", link: "https://testing.com/release2" },
    ],
    'Head Teacher Application': [
      { title: "Head Teacher Application", name: "Production", description: "Production environment is where the software and other products are actually put into operation for their intended uses by end users. Version: 1.0.1447", link: "https://example.com/release3" },
      { name: "Testing", description: "Testing environment for Head Teacher Application", link: "https://example.com/releasenew" },
    ],
    'Instructional Leadership App': [
      { title: "Instructional Leadership App", name: "Production", description: "Production environment for Instructional Leadership App", link: "https://example.com/release3" },
      { name: "Testing", description: "Testing environment for Instructional Leadership App", link: "https://example.com/release4" },
    ],
    "Let's Mark": [
      { title: "Let's Mark", name: "Production", description: "Production environment for Let's Mark Application", link: "https://example.com/release3" },
      { name: "Testing", description: "Testing environment for Let's Mark Application", link: "https://example.com/release4" },
    ],

    "Reports": [
      { title: "Reports", name: "Production", description: "Production environment for Reports Server.", link: "https://example.com/release3" },
      { name: "Testing", description: "Testing environment for Reports Server.", link: "https://example.com/release4" },
    ],
    "Teacher Tech": [
      { title: "Teacher Tech", name: "Production", description: "Production environment for Teacher Tech.", link: "https://example.com/release3" },
      { name: "Testing", description: "Testing environment for Teacher Tech.", link: "https://example.com/release4" },
    ],
    "Web Application Hub": [
      { title: "Web Application Hub", name: "Production", description: "Production environment for Web Application Hub.", link: "https://example.com/release3" },
      { name: "Testing", description: "Testing environment for Web Application Hub.", link: "https://example.com/release4" },
    ],
    'Academy Manager App': [
      { title: "Head Teacher Application", name: "Production", description: "Production environment is where the software and other products are actually put into operation for their intended uses by end users. Version: 1.0.1447", link: "https://example.com/release2" },
      { name: "Testing", description: "Testing environment for Head Teacher Application", link: "https://example.com/release4" },
    ],
    'Bridge Dashboard': [
      { title: "Bridge Dashboard", name: "Production", description: "Production environment is where the software and other products are actually put into operation for their intended uses by end users. Version: 1.0.1447", link: "https://example.com/release2" },
      { name: "Testing", description: "Testing environment for Head Teacher Application", link: "https://example.com/release4" },
    ],
    'Bridge Portal': [
      { title: "Bridge Portal", name: "Production", description: "Production environment is where the software and other products are actually put into operation for their intended uses by end users. Version: 1.0.1447", link: "https://example.com/release2" },
      { name: "Testing", description: "Testing environment for Head Teacher Application", link: "https://example.com/release4" },
    ],
    'Payment Deadlines': [
      { title: "Payment Deadlines", name: "Production", description: "Production environment is where the software and other products are actually put into operation for their intended uses by end users. Version: 1.0.1447", link: "https://example.com/release2" },
      { name: "Testing", description: "Testing environment for Head Teacher Application", link: "https://example.com/release4" },
    ],
    'bRegistrar': [
      { title: "bRegistra", name: "Production", description: "Production environment is where the software and other products are actually put into operation for their intended uses by end users. Version: 1.0.1447", link: "https://example.com/release2" },
      { name: "Testing", description: "Testing environment for Head Teacher Application", link: "https://example.com/release4" },
    ],
    "Spotlight": [
      { title: "Spotlight", name: "Production", description: "Production environment for Web Application Hub.", link: "https://example.com/release3" },
      { name: "Testing", description: "Testing environment for Web Application Hub.", link: "https://example.com/release4" },
    ],
  };

  const handleTenantClick = (tenant) => {
    setSelectedTenant(tenant);
    setSelectedApp(null); // Reset selected app when tenant changes
  };

  const handleAppClick = (app) => {
    setSelectedApp(app);
  };

  return (
    <>
    <div className="app-container">
      <div className="tenant-wrapper">
        <div className="title">
          <h2>Tenants</h2>
        </div>
        <div className="tenant-lists">
          {Object.keys(tenants).map((tenant) => (
            <h3 key={tenant} onClick={() => handleTenantClick(tenant)}>
              {tenant} <i className="fa-solid fa-angle-right" />
            </h3>
          ))}
        </div>
      </div>
      <div className="apps-wrapper">
        <div className="title">
          <h2>Apps</h2>
        </div>
        <div className="app-lists">
          {selectedTenant && tenants[selectedTenant].map((app) => (
            <div className='app-select' key={app.name}>
                <p className='app-name' onClick={() => handleAppClick(app.name)}>
                    {app.name} <i className="fa-solid fa-angle-right" /> <br /> 
                    <p className='app-desc'>{app.description}</p> 
                </p>
            </div>
          ))}
        </div>
      </div>
      <div className="releases-wrapper">
        <div className="title">
          <h2>Releases</h2>
        </div>
        <div className="release-lists">
          {selectedApp && apps[selectedApp].map((release) => (
            <div className='release-select' key={release.name}>
                <h3>{release.title}</h3>
                <a className='release-link' href={release.link} target="_blank" rel="noopener noreferrer">
                  {release.name}
                  <i class="fa-solid fa-up-right-from-square"></i>
                  <p className='release-desc'>{release.description}</p>
                </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default AppDirectory;
