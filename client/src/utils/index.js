import { surpriseMePrompts } from '../contants';

export function getRandomPormpt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPormpt(prompt); 
    return randomPrompt;
}