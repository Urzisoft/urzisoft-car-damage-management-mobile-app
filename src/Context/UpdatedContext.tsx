import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UpdatedContextType {
    updated: boolean;
    setUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdatedContext = createContext<UpdatedContextType | undefined>(undefined);

export function UpdatedProvider({ children }: { children: ReactNode }) {
    const [updated, setUpdated] = useState(false);

    return (
        <UpdatedContext.Provider value={{ updated, setUpdated }}>
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
