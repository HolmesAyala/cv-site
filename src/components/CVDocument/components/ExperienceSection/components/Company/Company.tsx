import React, { useState, useCallback } from 'react';
// Styles
import './Company.css';
import zIndex from '../../../../../../styles/zIndex';
// Assets
import visibilityIcon from './assets/visibility-white-24dp.svg';
import navigateBeforeIcon from './assets/navigate-before-white-24dp.svg';
import navigateNextIcon from './assets/navigate-next-white-24dp.svg';
import closeIcon from './assets/close-icon.svg';
// Utils
import classnames from 'classnames';

interface IImageSliderDialodProps {
	open?: boolean;
	images: string[];
	currentIndex: number;
	onClose?: () => void;
	onBefore?: () => void;
	onNext?: () => void;
	onSelect?: (index: number) => void;
}

const ImageSliderDialog: React.FC<IImageSliderDialodProps> = ({
	open = false,
	images,
	currentIndex,
	onClose = () => {},
	onBefore = () => {},
	onNext = () => {},
	onSelect = () => {},
}) => {
	/**
	 * State
	 */

	const [style] = useState({
		zIndex: zIndex.modal,
	});

	const [closeButtonStyle] = useState({
		zIndex: 1,
	});

	/**
	 * Events
	 */

	const onClickInImageSelectorButton = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			const { index } = event.currentTarget.dataset;

			if (index) {
				onSelect(Number(index));
			}
		},
		[onSelect]
	);

	/**
	 * Helper variables
	 */

	const currentImage: string | undefined = images[currentIndex];

	/**
	 * Components
	 */

	const closeButton = (
		<button className='ImageSliderDialog-CloseButton' style={closeButtonStyle} onClick={onClose}>
			<img src={closeIcon} alt='close' />
		</button>
	);

	const beforeButton = (
		<button className='ImageSliderDialog-BeforeButton' onClick={onBefore}>
			<img className='ImageSliderDialog-BeforeIcon' src={navigateBeforeIcon} alt='before' />
		</button>
	);

	const nextButton = (
		<button className='ImageSliderDialog-NextButton' onClick={onNext}>
			<img className='ImageSliderDialog-NextIcon' src={navigateNextIcon} alt='next' />
		</button>
	);

	const buttonsToSelectImages = images.map((image, index) => {
		const className = classnames(
			'ImageSliderDialog-ImageSelectorButton',
			index === currentIndex ? 'ImageSliderDialog-ImageSelectorButton_selected' : ''
		);

		return (
			<button
				data-index={index}
				key={index}
				className={className}
				onClick={onClickInImageSelectorButton}
			></button>
		);
	});

	const imageSelector = (
		<div className='ImageSliderDialog-ImageSelector'>{buttonsToSelectImages}</div>
	);

	let currentImageToRender: React.ReactElement | undefined = undefined;

	if (currentImage) {
		currentImageToRender = (
			<img className='ImageSliderDialog-CurrentImage' src={currentImage} alt={currentImage} />
		);
	}

	return (
		<div
			className={classnames('ImageSliderDialog', !open ? 'ImageSliderDialog_closed' : '')}
			style={style}
		>
			{closeButton}

			{currentIndex > 0 && beforeButton}

			{currentIndex < images.length - 1 && nextButton}

			{imageSelector}

			{currentImageToRender}
		</div>
	);
};

interface IImageSliderProps {
	images: string[];
}

const ImageSlider: React.FC<IImageSliderProps> = ({ images }) => {
	/**
	 * State
	 */

	const [imageSliderDialogIsOpen, setImageSliderDialogIsOpen] = useState(false);

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	/**
	 * Events
	 */

	const onClickInButtonToOpenDialog = useCallback(() => {
		setImageSliderDialogIsOpen(true);
	}, []);

	const onCloseFromImageSliderDialog = useCallback(() => {
		setImageSliderDialogIsOpen(false);
	}, []);

	const onBeforeFromImageSliderDialog = useCallback(() => {
		setCurrentImageIndex((currentValue) => {
			return currentValue > 0 ? currentValue - 1 : currentValue;
		});
	}, []);

	const onNextFromImageSliderDialog = useCallback(() => {
		setCurrentImageIndex((currentValue) => {
			return currentValue < images.length - 1 ? currentValue + 1 : currentValue;
		});
	}, [images]);

	const onSelectFromImageSliderDialog = useCallback((index: number) => {
		setCurrentImageIndex(index);
	}, []);

	return (
		<>
			<ImageSliderDialog
				open={imageSliderDialogIsOpen}
				images={images}
				currentIndex={currentImageIndex}
				onClose={onCloseFromImageSliderDialog}
				onBefore={onBeforeFromImageSliderDialog}
				onNext={onNextFromImageSliderDialog}
				onSelect={onSelectFromImageSliderDialog}
			/>

			<div className='ImageSlider'>
				<div className='ImageSlider-Container'>
					<div className='ImageSlider-CurrentImageContainer'>
						<button
							className='ImageSlider-ButtonToOpenDialog'
							onClick={onClickInButtonToOpenDialog}
						>
							<img className='ImageSlider-VisibilityIcon' src={visibilityIcon} alt='visibility' />
						</button>

						<img
							className='ImageSlider-CurrentImage'
							src={images[currentImageIndex]}
							alt={images[currentImageIndex]}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

interface IProjectItem {
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
