import React from 'react';
// Styles
import './Company.css';
// Components
import Project, { IProjectItem } from './components/Project/Project';

interface ICompanyProps {
	icon: string;
	name: string;
	projects: IProjectItem[];
}

const Company: React.FC<ICompanyProps> = ({ icon, name, projects }) => {
	/**
	 * Components
	 */

	const projectsToRender = projects.map((project) => (
		<Project key={project.id} project={project} />
	));

	return (
		<div className='Company'>
			<div className='Company-NameAndIcon'>
				<img className='Company-Icon' src={icon} alt={name} />

				<h3 className='Company-Name'>{name}</h3>
			</div>

			{projectsToRender}
		</div>
	);
};

export default Company;
