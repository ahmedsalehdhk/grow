import React from 'react'
import Form from "next/form";
import { prisma } from "@/lib/prisma";

// actions
import { createQuest } from '@/app/actions/createQuest'

// Componenets
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import QuestCard from '@/components/QuestCard';


const Quests = async () => {

  const quests = await prisma.quest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className='h-full flex flex-col'>
      <h1 className="text-lg md:text-2xl font-bold mb-5 md:mb-10">Quests</h1>
      <div className="quest-content-container flex flex-col md:flex-row flex-1 gap-5">
        <div className="content-left flex-2 flex flex-wrap gap-2 order-2 md:order-1">
          {quests.map((quest) => (
            <QuestCard key={quest.id} id={quest.id} title={quest.title} category={quest.category} difficulty={quest.difficulty} repeat={quest.repeat} />
          ))
          }
        </div>
        <div className="content-right flex-1 flex flex-col justify-center rounded-lg p-8 md:px-10 md:py-12 order-1 md:order-2 bg-white">
          <h1 className='text-xl font-bold'>Found a new conquest?</h1>
          <p className='text-neutral-400 text-sm mb-3'>Log in your quests down below</p>
          <hr className='mb-8 border-neutral-200' />
          {/* FORM */}
          <Form action={createQuest} className=''>
            <div className="title-content mb-5">
              <Label htmlFor="title" className='mb-2'>Title</Label>
              <Input name='title' />
            </div>
            <div className="category-content mb-5">
              <Label htmlFor="title" className='mb-2'>Category</Label>
              <Select name="category">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="LEARNING">Learning</SelectItem>
                  <SelectItem value="FITNESS">Fitness</SelectItem>
                  <SelectItem value="SELFCARE">Seflcare</SelectItem>
                  <SelectItem value="SOCIAL">Social</SelectItem>
                  <SelectItem value="FINANCE">Finance</SelectItem>
                  <SelectItem value="CAREER">Career</SelectItem>
                  <SelectItem value="CREATIVITY">Creativity</SelectItem>
                  <SelectItem value="PRODUCTIVITY">Productivity</SelectItem>
                  <SelectItem value="MISCELLANEOUS">Miscellaneous</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="difficulty-content mb-5">
              <Label htmlFor="title" className='mb-2'>Complexity</Label>
              <Select name="difficulty">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SIMPLE">Simple</SelectItem>
                  <SelectItem value="EASY">Easy</SelectItem>
                  <SelectItem value="MODERATE">Morderate</SelectItem>
                  <SelectItem value="HARD">Hard</SelectItem>
                  <SelectItem value="INSANE">Insane</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="repeat-content mb-8">
              <Label htmlFor="title" className='mb-2'>Repeat</Label>
              <Select name="repeat">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select when to repeat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NEVER">Never</SelectItem>
                  <SelectItem value="DAILY">Daily</SelectItem>
                  <SelectItem value="WEEKLY">Weekly</SelectItem>
                  <SelectItem value="MONTHLY">Monthly</SelectItem>
                  <SelectItem value="YEARLY">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="default" type='submit' className='w-full'>Activate Quest</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Quests
