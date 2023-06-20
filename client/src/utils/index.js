import {surprisemePormpts } from '../contants';

export function getRandomPormpt(prompt){
    const randomIndex = Math.floor(Math.random() * surprisemePormpts.length);
    const randomPrompt = surprisemePormpts[randomIndex];

    if(randomPrompt === prompt) return getRandomPormpt(prompt); 
    return randomPrompt;
}