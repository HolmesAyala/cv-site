import React, { useState } from 'react';
// Styles
import './Project.css';
// Components
import ImageSlider from './components/ImageSlider/ImageSlider';

export interface IProjectItem {
	id: string;
	images: string[];
	title: string;
	description: string;
	technologyChips: React.ReactElement[];
}

interface IProjectProps {
	project: IProjectItem;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
	/**
	 * State
	 */

	const [technologyChips] = useState(
		project.technologyChips.map((technologyChip) => {
			return React.cloneElement(technologyChip, { className: 'Project-TechnologyChip' });
		})
	);

	return (
		<div className='Project'>
			<div className='Project-ImagesSlider'>
				<ImageSlider images={project.images} />
			</div>

			<div>
				<h4 className='Project-Title'>{project.title}</h4>

				<p className='Project-Description'>{project.description}</p>

				<div className='Project-Technologies'>{technologyChips}</div>
			</div>
		</div>
	);
};

export default Project;
