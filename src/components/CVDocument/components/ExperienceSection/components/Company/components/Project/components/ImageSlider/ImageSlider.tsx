import React, { useState, useCallback, useRef } from 'react';
// Styles
import './ImageSlider.css';
// Assets
import visibilityIcon from './assets/visibility-white-24dp.svg';
// Components
import ImageSliderDialog from '../ImageSliderDialog/ImageSliderDialog';

interface IImageSliderProps {
	images: string[];
}

const ImageSlider: React.FC<IImageSliderProps> = ({ images }) => {
	const buttonToOpenDialogRef = useRef<HTMLButtonElement | null>(null);

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

		const buttonToOpenDialog = buttonToOpenDialogRef.current;

		if (buttonToOpenDialog) {
			setTimeout(() => {
				buttonToOpenDialog.focus();
			}, 1);
		}
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
							ref={buttonToOpenDialogRef}
							className='ImageSlider-ButtonToOpenDialog'
							onClick={onClickInButtonToOpenDialog}
						>
							<img className='ImageSlider-VisibilityIcon' src={visibilityIcon} alt='visibility' />
						</button>

						<img
							className='ImageSlider-CurrentImage'
							src={images[currentImageIndex]}
							alt={images[currentImageIndex]}
							loading='eager'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageSlider;
