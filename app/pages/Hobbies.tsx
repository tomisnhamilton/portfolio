"use client";

import React from "react";

export default function Hobbies() {

    return (
        <div>
            <h2 className="sections pt-36">My Hobbies</h2>
            <ul>
                <li>
                    <h3 className="hobby-list-item">Programming</h3>
                    <p className="hobby-list-desc">
                        Since a young age, I have been fascinated in computers and technology. 
                        I first started coding in 5th grade on my school&apos;s robotics team,
                        and continued my learning through self-taught game and web development.
                        Throughout high school, I took AP Computer Science Principles, earned my CompTIA Sec+,
                        and was the Team Captain of my school&apos;s CyberPatriot and FIRST Robotics teams.
                        Currently, I am a member of USAFA&apos;s Cyber and HAVOC teams.
                    </p>
                </li>
                <li>
                    <h3 className="hobby-list-item">Gaming</h3>
                    <p className="hobby-list-desc">
                        Video games have always been a major part of my life, 
                        with my father first introducing me to the world of gaming via the Playstation 2.
                        I have spent many hours playing games like Minecraft, Space Engineers, and Halo with friends and family.
                        Though not having much time to play games, today, I still enjoy to spend a few hours each week relaxing and exploring new genres.
                    </p>
                </li>
                <li>
                    <h3 className="hobby-list-item">Music Production</h3>
                    <p className="hobby-list-desc">
                        Despite being new to the world of music production, 
                        I have always been interested in the creation of music.
                        I first started producing music in 2021 for my high school&apos;s news show.
                        It&apos;s been a while since making music, but I hope to get back into in the near future.
                    </p>
                </li>
            </ul>
        </div>
    )
}
