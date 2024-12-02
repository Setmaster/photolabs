import React, { createContext } from 'react';
import useApplicationData from '../hooks/useApplicationData';

export const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
    const applicationData = useApplicationData();

    return (
        <ApplicationContext.Provider value={applicationData}>
            {children}
        </ApplicationContext.Provider>
    );
};

export default ApplicationProvider;
