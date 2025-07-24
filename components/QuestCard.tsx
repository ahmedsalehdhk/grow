import React from 'react'
import { QuestCategory, QuestDifficulty, QuestRepeat } from "@prisma/client";

// Components
import { Separator } from "@/components/ui/separator"

type QuestCardProps = {
  id: string;
  title: string;
  category: QuestCategory;
  difficulty: QuestDifficulty;
  repeat: QuestRepeat;
};

const QuestCard = ({ id, title, category, difficulty, repeat }: QuestCardProps) => {
  return (
    <div className='h-64 w-52 p-5 rounded-xl flex flex-col bg-white'> 
        <h1 className='font-bold h-13'>{title}</h1>
        <Separator className='mb-5' />
        <p className='text-sm text-neutral-400 lowercase'><span className='uppercase'>C</span>ategory of {category} type, kinda {difficulty} and repeats {repeat}</p>
    </div>
  )
}

export default QuestCard
