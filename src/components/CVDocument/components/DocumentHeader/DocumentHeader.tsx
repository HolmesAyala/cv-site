import React from 'react';
// Styles
import './DocumentHeader.css';
// Assets
import profileImage from './assets/profile-image.jpeg';
import javascriptLogo from '../../../../assets/javascript-logo.png';
import reactLogo from '../../../../assets/react-logo.png';
import electronJs from '../../../../assets/electron-js.png';
import nodeJsLogo from '../../../../assets/node-js-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';
import githubLogo from './assets/github-logo.png';
// Components
import TechnologyChip from '../../components/TechnologyChip/TechnologyChip';

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
					<TechnologyChip
						className='DocumentHeader-TechnologyChip'
						logo={javascriptLogo}
						text='Javascript'
					/>

					<TechnologyChip
						className='DocumentHeader-TechnologyChip'
						logo={reactLogo}
						text='React JS'
					/>

					<TechnologyChip
						className='DocumentHeader-TechnologyChip'
						logo={electronJs}
						text='Electron JS'
					/>

					<TechnologyChip
						className='DocumentHeader-TechnologyChip'
						logo={nodeJsLogo}
						text='Node JS'
					/>
				</div>
			</div>
		</div>
	);
};

export default DocumentHeader;
