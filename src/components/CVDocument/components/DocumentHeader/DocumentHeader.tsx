import React from 'react';
// Styles
import './DocumentHeader.css';
// Assets
import profileImage from './assets/profile-image.jpeg';
import linkedinLogo from './assets/linkedin-logo.png';
import githubLogo from './assets/github-logo.png';
// Components
import {
	TypescriptChip,
	ReactChip,
	ElectronChip,
	NodeChip,
} from '../../components/predefinedChips';

const DocumentHeader = () => {
	return (
		<div className='DocumentHeader'>
			<div className='DocumentHeader-ExternalLinks'>
				<a
					className='DocumentHeader-ExternalLink'
					href='https://www.linkedin.com/in/holmes-yesid-ayala-yaguara-305aa9115'
					target='_blank'
					rel='noreferrer'
				>
					<img className='DocumentHeader-ExternalLink-Image' src={linkedinLogo} alt='linkdin' />
				</a>

				<a
					className='DocumentHeader-ExternalLink'
					href='https://github.com/HolmesAyala'
					target='_blank'
					rel='noreferrer'
				>
					<img className='DocumentHeader-ExternalLink-Image' src={githubLogo} alt='github' />
				</a>
			</div>

			<img className='DocumentHeader-ProfileImage' src={profileImage} alt='profile' />

			<div>
				<h1 className='DocumentHeader-Name'>Holmes Yesid Ayala Yaguara</h1>

				<div className='DocumentHeader-TechnologiesContainer'>
					<TypescriptChip className='DocumentHeader-TechnologyChip' />

					<ReactChip className='DocumentHeader-TechnologyChip' />

					<ElectronChip className='DocumentHeader-TechnologyChip' />

					<NodeChip className='DocumentHeader-TechnologyChip' />
				</div>
			</div>
		</div>
	);
};

export default DocumentHeader;
