"use client";

import { createContext, useContext, useState } from "react";

interface BubbleConfig{
    position: [number, number, number];
    size?: number;
    icon?: string;
    iconRotation?: number;
    iconPosition?: [number, number, number];
    skillCategory?: string;
}

interface BubbleContextType {
    bubbles: BubbleConfig[];
}

const BubbleContext = createContext<BubbleContextType>({bubbles: []});

export function BubbleProvider({ children, bubbles} : {
    children: React.ReactNode;
    bubbles: BubbleConfig[];
}){
    return (
        <BubbleContext.Provider value={{bubbles}}>
            {children}
        </BubbleContext.Provider>
    );
}

export function useBubbles(){
    return useContext(BubbleContext);
}

export type {BubbleConfig};
