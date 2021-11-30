import React from 'react';
// Styles
import './CVDocument.css';
// Components
import DocumentHeader from './components/DocumentHeader/DocumentHeader';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';

const CVDocument = () => {
	return (
		<div className='CVDocument'>
			<DocumentHeader />

			<div className='CVDocument-SectionSeparator' />

			<ExperienceSection />
		</div>
	);
};

export default CVDocument;
