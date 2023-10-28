"use client"

import React from "react";
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Contact() {

    function linkLinkedIn() {
        window.location.href = "https://www.linkedin.com/in/tomisnhamilton";
    }
    function linkGitHub() {
        window.location.href = "https://github.com/CounterSpective";
    }
    function linkInstagram() {
        window.location.href = "https://www.instagram.com/tomisnhamilton/";
    }

    return (
        <div className="py-6">
        <h2 className="sections pt-12 pb-8">My Socials</h2>
            <ul className="flex justify-evenly text-4xl">
                <li onClick={linkLinkedIn} className="hover:animate-wiggle"><AiFillLinkedin/></li>
                <li onClick={linkGitHub} className="hover:animate-wiggle"><AiFillGithub/></li>
                <li onClick={linkInstagram} className="hover:animate-wiggle"><AiOutlineInstagram/></li>
            </ul>
            <ul className="flex justify-evenly text-xl">
                <li>
                    <p className="pl-4">LinkedIn</p>
                </li>
                <li>
                    <p>GitHub</p>
                </li>
                <li>
                    <p className="pr-1">Instagram</p>
                </li>
            </ul>
        </div>
    )
}