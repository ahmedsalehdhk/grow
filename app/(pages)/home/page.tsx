import React from "react";
import goku from "@/public/assets/goku.gif";
import Image from "next/image";

// Components
import SkillStat from "@/components/SkillStat";
import { Progress } from "@/components/ui/progress";

const Home = () => {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-lg md:text-2xl font-bold mb-5 md:mb-10">Home</h1>
      <div className="home-content-container flex flex-col md:flex-row flex-1 gap-5">
        <div className="content-left flex flex-2 md:flex-3 flex-col gap-5 order-2 md:order-1">
          <div className="hidden md:block md:flex-1 rounded-lg px-10 py-6 bg-white">Calendar</div>
          <div className="flex-1 rounded-lg px-10 py-6 bg-white">Main</div>
        </div>
        <div className="content-right flex flex-3 md:flex-2 flex-col gap-5 order-1 md:order-2">
          <div className="player-and-stats flex-5 rounded-lg p-8 md:px-10 md:py-12 flex flex-col justify-between bg-white">
            <div className="header flex items-center font-bold gap-3">
              <h1 className="text-2xl">Goku</h1>
              <h2 className="px-2 py-0.5 text-sm rounded-sm bg-black text-white">Lvl 1</h2>
            </div>
            <p className="description text-neutral-400 text-sm mb-3">A marketing and sales executive at Alliance Properties Ltd</p>
            <hr className="border-neutral-200" />
            <Image src={goku} alt="goku" className="w-64 self-center" />
            <ul className="stats flex gap-3">
              <div className="col-1 flex-1 space-y-1">
                <SkillStat type="Discipline" exp={0} />
                <SkillStat type="Fitness" exp={0} />
                <SkillStat type="Satisfaction" exp={0} />
              </div>
              <div className="col-2 flex-1 space-y-1">
                <SkillStat type="Creativity" exp={0} />
                <SkillStat type="Intelligence" exp={0} />
                <SkillStat type="Charisma" exp={0} />
              </div>
            </ul>
          </div>
          <div className="exp-bar flex-2 rounded-lg px-10 py-6 bg-white">
            <h1 className="font-bold mb-3">Exp remaining till next level: <span className="font-normal">{100-0}</span></h1>
            <div className="flex items-center justify-between gap-1">
              <Progress value={0} className="h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
