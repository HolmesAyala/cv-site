import React, { useState, useEffect, useCallback, useRef } from 'react';
// Styles
import './ImageSliderDialog.css';
import zIndex from '../../../../../../../../../../styles/zIndex';
// Assets
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
	const closeButtonRef = useRef<HTMLButtonElement | null>(null);

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
	 * Effects
	 */

	useEffect(() => {
		if (open) {
			const onKeyDown = (event: KeyboardEvent) => {
				const key = event.key;

				if (key === 'Escape') {
					onClose();
				} else if (key === 'ArrowLeft') {
					onBefore();
				} else if (key === 'ArrowRight') {
					onNext();
				}
			};

			document.addEventListener('keydown', onKeyDown);

			return () => {
				document.removeEventListener('keydown', onKeyDown);
			};
		}
	}, [open, onClose, onBefore, onNext]);

	useEffect(() => {
		if (open && closeButtonRef.current) {
			closeButtonRef.current.focus();
		}
	}, [open]);

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
		<button
			ref={closeButtonRef}
			className='ImageSliderDialog-CloseButton'
			style={closeButtonStyle}
			onClick={onClose}
		>
			<img className='ImageSliderDialog-CloseIcon' src={closeIcon} alt='close' />
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

	if (!open) return null;

	return (
		<div className={classnames('ImageSliderDialog')} style={style}>
			{closeButton}

			{currentIndex > 0 && beforeButton}

			{currentIndex < images.length - 1 && nextButton}

			{imageSelector}

			{currentImageToRender}
		</div>
	);
};

export default ImageSliderDialog;
