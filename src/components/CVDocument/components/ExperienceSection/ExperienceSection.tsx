import React from 'react';
// Styles
import './ExperienceSection.css';
// Components
import Company from './components/Company/Company';

const ExperienceSection = () => {
	return (
		<div className='ExperienceSection'>
			<h1 className='ExperienceSection-Title'>Experiencia</h1>

      <Company />
		</div>
	);
};

export default ExperienceSection;
