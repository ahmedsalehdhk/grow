import React from "react";
import { QuestCategory, QuestDifficulty, QuestRepeat } from "@prisma/client";
import Image from "next/image";

import brain from '@/public/assets/questCard/brain.png'
type QuestCardProps = {
  id: string;
  title: string;
  category: QuestCategory;
  difficulty: QuestDifficulty;
  repeat: QuestRepeat;
};

const QuestCard = ({ id, title, category, difficulty, repeat }: QuestCardProps) => {

  const categoryImages: Record<string, string> = {
    LEARNING: "/assets/questCard/brain.png",
    FITNESS: "/assets/questCard/running.png",
    SELFCARE: "/assets/questCard/self-love.png",
    SOCIAL: "/assets/questCard/high-five.png",
    FINANCE: "/assets/questCard/money.png",
    CAREER: "/assets/questCard/career-path.png",
    CREATIVITY: "/assets/questCard/art.png",
    PRODUCTIVITY: "/assets/questCard/productivity.png",
    MISCELLANEOUS: "/assets/questCard/cubes.png",
  };

  const imageSrc = categoryImages[category] ?? "/assets/questCard/cubes.png";

  return (
    <div className="flex flex-col justify-between rounded-lg h-72 w-56 px-5 py-8 bg-white">
      <div className="content-top">
        <Image height={32} width={32} src={imageSrc} alt={category} />
      </div>
      <div className="content-bottom">
        <p className="capitalize">{repeat.toLocaleLowerCase()}</p>
        <h1 className="font-bold text-xl">{title}</h1>
      </div>
    </div>
  );
};

export default QuestCard;
