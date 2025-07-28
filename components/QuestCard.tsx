import React from "react";
import { QuestCategory, QuestDifficulty, QuestRepeat } from "@prisma/client";
import Image from "next/image";

// Components
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

  let repeatMsg = ''
  switch (repeat) {
    case 'NEVER':
      repeatMsg = 'Just this once'
      break;
    case 'DAILY':
      repeatMsg = 'Everyday'
      break;
    case 'WEEKLY':
      repeatMsg = 'Every week'
      break;
    case 'MONTHLY':
      repeatMsg = 'Every month'
      break;
    case 'YEARLY':
      repeatMsg = 'Once every year'
      break;
    default:
      repeatMsg = 'No Match'
      break;
  }

  return (
    <div className="flex flex-col justify-between rounded-lg h-72 w-56 px-5 py-6 shadow-sm bg-white">
      <div className="content-top flex flex-col justify-between">
        <div className="icon-header flex justify-between">
          <HoverCard>
            <HoverCardTrigger className='mb-3'>
              <Image height={32} width={32} src={imageSrc} alt={category} /></HoverCardTrigger>
            <HoverCardContent>
              <p className='capitalize'>Category: {category.toLocaleLowerCase()}</p>
            </HoverCardContent>
          </HoverCard>
          <Badge variant="default" className='h-fit capitalize'>{difficulty.toLocaleLowerCase()}</Badge>
        </div>
        <p className="capitalize text-sm">{repeatMsg}</p>
        <h1 className="font-bold text-lg">{title}</h1>
      </div>
      <div className="content-bottom flex justify-between gap-2">
        <Button variant="ghost" className='block w-fit hover:bg-red-500 px-2'>Abandon</Button>
        <Button variant="default" className='block w-fit px-2'>Completed</Button>
      </div>
    </div>
  );
};


export default QuestCard;
