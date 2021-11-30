import React from 'react';
// Styles
import './TechnologyChip.css';
// Utils
import classnames from 'classnames';

interface ITechnologyChipProps {
	className?: string;
	logo: string;
	text: string;
}

const TechnologyChip: React.FC<ITechnologyChipProps> = ({ className, logo, text }) => {
	return (
		<div className={classnames('TechnologyChip', className)}>
			<img className='TechnologyChip-Image' src={logo} alt={text} />

			<p className='TechnologyChip-Text'>{text}</p>
		</div>
	);
};

export default TechnologyChip;
