import { Curriculum } from "@interfaces/curriculum.interface";
import React, { useContext } from "react";

type CurriculumContextState = {
  curriculums: Curriculum[];
  setCurriculums: React.Dispatch<React.SetStateAction<Curriculum[]>>;
};

const initialState: CurriculumContextState = {
  curriculums: [],
  setCurriculums: () => {},
};

export const CurriculumContext = React.createContext(initialState);

CurriculumContext.displayName = "Curriculum context";

type CurriculumProviderProps = {
  children: React.ReactNode;
};

export const CurriculumProvider = ({ children }: CurriculumProviderProps) => {
  const [curriculums, setCurriculums] = React.useState<Curriculum[]>([]);

  return (
    <CurriculumContext.Provider value={{ curriculums, setCurriculums }}>
      {children}
    </CurriculumContext.Provider>
  );
};

export const useCurriculum = () => {
  const { curriculums, setCurriculums } = useContext(CurriculumContext);

  return {
    curriculums,
    setCurriculums,
  };
};
