import React, { useState } from 'react';
import { AboutMeCard } from '../cards/AboutMeCard';
import { AchievementCard } from '../cards/AchievementCard';
import { ExperienceCard } from '../cards/ExperienceCard';
import { OrganizationalCard } from '../cards/OrganizationalCard';
import { PortofolioCard } from '../cards/PortofolioCard';

export const Content = ({
  Achievements,
  Experiences,
  Organizationals,
  Profile,
  Projects,
}) => {
  return (
    <div>
      <AboutMeCard Profile={Profile}></AboutMeCard>
      <PortofolioCard Projects={Projects}></PortofolioCard>
      <ExperienceCard Experiences={Experiences}></ExperienceCard>
      <OrganizationalCard
        Organizationals={Organizationals}></OrganizationalCard>
      <AchievementCard Achievements={Achievements}></AchievementCard>
    </div>
  );
};
