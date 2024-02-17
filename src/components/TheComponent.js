import React from 'react';
import { useParams } from 'react-router-dom';
import {WebDev} from '../pages/WebDev';
import {Ai} from '../pages/Ai';
import {MobileDev} from '../pages/MobileDev';


export function TheComponent(){
  const components=[<WebDev/>,<MobileDev/>,<Ai/>/*,<DataScienceAndMachineLearning/>,<CloudComputing/>,<SoftwareEngineering/>,<GameDevelopment/>,<Design/>,<Priting3D/>,<BlockChain/>,<IOT/>,<Hardware/>,<PhysicalHealth/>,<MentalHealth/>,<PersonalDevelopment/>,<Relationships/>,<FinancialWellness/>,<HealthyHabits/>,<BoardGames/>,<VideoGames/>,<CardGames/>,<Math/>,<Science/>,<History/>,<Engineering/>,<Literature/>,<Languages/>,<SocialSciences/>,<ArtHistory/>,,<Music/>,<Theatre/>,<Cinema/>,<Dancing/>,<Drawing/>,<Cooking/>,<Travel/>,<Hobbies/>*/]
  const id=useParams().id
  return (
    <>
      {components[id-1]}
    </>
    )
}