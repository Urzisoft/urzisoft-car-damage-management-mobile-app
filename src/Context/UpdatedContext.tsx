import React, { createContext, useContext, useState, ReactNode } from 'react';
import requestUrls from '../Backend/requestUrls';

interface UpdatedContextType {
    carsUrl: string;
    setCarsUrl: React.Dispatch<React.SetStateAction<string>>;
    updated: boolean;
    setUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdatedContext = createContext<UpdatedContextType | undefined>(undefined);

export function UpdatedProvider({ children }: { children: ReactNode }) {
    const [updated, setUpdated] = useState(false);
    const [carsUrl, setCarsUrl] = useState(requestUrls.cars);

    return (
        <UpdatedContext.Provider value={{ updated, setUpdated, carsUrl, setCarsUrl }}>
            {children}
        </UpdatedContext.Provider>
    );
}

export function useUpdated() {
    const context = useContext(UpdatedContext);
    if (context === undefined) {
        throw new Error('useUpdated must be used within an UpdatedProvider');
    }
    return context;
}
