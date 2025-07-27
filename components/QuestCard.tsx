import React from "react";
import { QuestCategory, QuestDifficulty, QuestRepeat } from "@prisma/client";

// Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"

type QuestCardProps = {
  id: string;
  title: string;
  category: QuestCategory;
  difficulty: QuestDifficulty;
  repeat: QuestRepeat;
};

const QuestCard = ({ id, title, category, difficulty, repeat }: QuestCardProps) => {
  return (
    <div className="h-96 min-h-fit w-56 rounded-lg p-2 bg-white">
      <div className="image-container rounded-sm w-full h-40 p-1 bg-[#F3F3F3] mb-5">1</div>
      <div className="card-content px-3">
        <div className="header flex items-start justify-between gap-3">
          <h1 className="font-bold text-md leading-5 capitalize">{title}</h1>
          <Badge variant="default" className="capitalize text-xs h-fit w-fit">
            {category.toLocaleLowerCase()}
          </Badge>
        </div>
        <p>Difficulty: </p>
        <div className="actions flex gap-1">
          <Button variant="default" className="flex-3 w-fit">Completed</Button>
          <Button variant="default" className="flex-1 w-fit">A</Button>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
