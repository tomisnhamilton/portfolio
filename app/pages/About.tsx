"use client"

import React from "react";
import Image from "next/image";


export default function About() {

  var age = new Date().getFullYear() - 2004;
  if (new Date().getMonth() < 1) {
    age--;
  }

  var grade = "cadet";
  if (new Date().getFullYear() == 2026 || new Date().getFullYear() == 2025 && new Date().getMonth() >= 6) 
  {
    grade = "senior";
  } 
  else if (new Date().getFullYear() == 2025 && new Date().getMonth() < 6 || new Date().getFullYear() == 2024 && new Date().getMonth() >= 6) 
  {
    grade = "junior";
  }
  else if (new Date().getFullYear() == 2024 && new Date().getMonth() < 6 || new Date().getFullYear() == 2023 && new Date().getMonth() >= 6) 
  {
    grade = "sophomore";
  }
  else if (new Date().getFullYear() == 2023 && new Date().getMonth() < 6 || new Date().getFullYear() == 2022 && new Date().getMonth() >= 6) 
  {
    grade = "freshman";
  }

  return (
    <div className="pt-16">
      <h2 className="sections"> <span className="animate-wiggle pr-4">👋🏾</span>I am Tomis N. Hamilton</h2>
      <div className="about-img">
        <Image className="rounded-full border-4 border-cyan-900"
            src = "/images/portrait.png"
            alt="Self Portrait"
            width={405}
            height={405}
        />
      </div>
      <div className="about-text">
        <p className="about-text-outline">
          I am {age} and from the United States of America.
          I am currently a {grade} at the United States Air Force Academy in Colorado.
          I am majoring in Computer Science and minoring in Japanese.
          I began my military journey in 2016 as a member of the Civil Air Patrol, 
          soon after attending Riverside Military Academy (RMA) in Gainesville, GA in 2017.
          During my time at RMA, I was able to continuously develop myself as a student, leader, and athlete.
          Ultimately, rising in the ranks to become the Cadet Battalion Commander
          and graduated with many honors in 2022. While RMA was tough, 
          I look fondly on my time there and cherish the memories and relatonships I made.
          Upon commissioning, I hope to be a Cyberwarfare Officer (17SX) in the Air Force. 
          And, afterwards, join the industry as a software security specialist.
        </p>
      </div>
    </div>
  );
}
