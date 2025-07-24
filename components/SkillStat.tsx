import React from "react";
import { Progress } from "@/components/ui/progress";

type SkillStatProps = {
  type: string;
  exp: number;
};

const SkillStat = ({ type, exp }: SkillStatProps) => {
  return (
    <div className="">
      <h1 className="text-sm">{type}</h1>
      <div className="flex items-center justify-between gap-1">
        <Progress value={exp} />
        <p className="text-neutral-300 text-sm w-5 text-center">{exp}</p>
      </div>
    </div>
  );
};

export default SkillStat;
