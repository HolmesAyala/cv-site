import React from 'react';
// Styles
import './ExperienceSection.css';
// Assets
import arismaIcon from './assets/arisma/arisma-icon.jpg';
import arismaGiveAlert from './assets/arisma/give-alert.webp';
import alertGiven from './assets/arisma/alert-given-fire-alert.webp';
import manageAlerts from './assets/arisma/manage-alerts.webp';
// Topcoder assets
import topcoderLogo from './assets/topcoder/topcoder-logo.png';
// Topcoder assets - Slide manager
import presentations from './assets/topcoder/real-business-slide-manager/presentations.webp';
import fullScreenPresentation from './assets/topcoder/real-business-slide-manager/full-screen-presentation.webp';
import createPresentation from './assets/topcoder/real-business-slide-manager/create-presentation.webp';
// Topcoder assets - Digital identity app
import digitalIdentityLanding from './assets/topcoder/digital-identity-app/digital-identity-landing.webp';
import digitalIdentityDashboard from './assets/topcoder/digital-identity-app/digital-identity-dashboard.webp';
import digitalIdentityConnections from './assets/topcoder/digital-identity-app/digital-identity-connections.webp';
// Topcoder assets - Castrol search
import castrolWelcome from './assets/topcoder/castrol-application/welcome-message.webp';
import castrolSearch from './assets/topcoder/castrol-application/castrol-search.webp';
import castrolSearchResult from './assets/topcoder/castrol-application/castrol-search-result.webp';
// Topcoder assets - Supply app
import supplyAppLogin from './assets/topcoder/supply-app/supply-app-login.webp';
import supplyAppLoginIncorrect from './assets/topcoder/supply-app/supply-app-login-incorrect.webp';
import supplyAppLoginInactive from './assets/topcoder/supply-app/supply-app-login-inactive.webp';
import supplyAppLoginBlocked from './assets/topcoder/supply-app/supply-app-login-blocked.webp';
import supplyAppRegister from './assets/topcoder/supply-app/supply-app-register.webp';
import supplyAppRegisterSuccess from './assets/topcoder/supply-app/supply-app-register-success.webp';
// Components
import Company from './components/Company/Company';
import {
	ReactChip,
	NodeChip,
	SocketIOChip,
	SassChip,
	MqttChip,
	PostgresqlChip,
	TypescriptChip,
	JavascriptChip,
	ReduxChip,
	ElectronChip,
} from '../../components/predefinedChips';

const ExperienceSection = () => {
	return (
		<div className='ExperienceSection'>
			<h2 className='ExperienceSection-Title'>Experiencia</h2>

			<Company
				icon={arismaIcon}
				name='Arisma S.A.'
				projects={[
					{
						id: '1',
						title: 'Sigeme',
						description:
							'Sistema de gestión de emergencias. Aplicación web para la gestión y notificación de emergencias en tiempo real usando WebSockects y el protocolo MQTT.',
						images: [arismaGiveAlert, alertGiven, manageAlerts],
						technologyChips: [
							<ReactChip key='react' />,
							<SassChip key='Scss' />,
							<ReduxChip key='Redux' />,
							<NodeChip key='node' />,
							<TypescriptChip key='typescript' />,
							<SocketIOChip key='socket io' />,
							<MqttChip key='mqtt' />,
							<PostgresqlChip key='postgresql' />,
						],
					},
				]}
			/>

			<div className='ExperienceSection-CompanySeparator' />

			<Company
				icon={topcoderLogo}
				name='Topcoder'
				projects={[
					{
						id: '1',
						title: 'Administrador de diapositivas - Real Business SM',
						description:
							'Aplicación de escritorio para crear y presentar grupos de diapositivas con base en imágenes y videos preestablecidos por Real Business SM.',
						images: [presentations, fullScreenPresentation, createPresentation],
						technologyChips: [
							<NodeChip key='node' />,
							<TypescriptChip key='Typescript' />,
							<ElectronChip key='react' />,
							<SassChip key='scss' />,
							<ReduxChip key='Redux' />,
						],
					},
					{
						id: '2',
						title: 'Plataforma de gestión de credenciales digitales - MIII Wipro',
						description:
							'Aplicación web para gestionar las credenciales de acceso creadas por medio de la aplicacíon de credenciales de Wipro.',
						images: [digitalIdentityLanding, digitalIdentityDashboard, digitalIdentityConnections],
						technologyChips: [
							<ReactChip key='react' />,
							<SassChip key='scss' />,
							<JavascriptChip key='javascript' />,
							<ReduxChip key='Redux' />,
						],
					},
					{
						id: '3',
						title: 'Prototipo: Lubricantes Oracle - Castrol',
						description:
							'Implementación de rediseño de aplicación web para la búsqueda de productos ofrecidos por Castrol.',
						images: [castrolWelcome, castrolSearch, castrolSearchResult],
						technologyChips: [
							<ReactChip key='react' />,
							<SassChip key='scss' />,
							<TypescriptChip key='Typescript' />,
							<ReduxChip key='Redux' />,
						],
					},
					{
						id: '4',
						title: 'Caso de uso: Login y registro de aplicación de suministros',
						description: 'Implementación del caso de uso de registro y login de Supply App.',
						images: [
							supplyAppLogin,
							supplyAppLoginIncorrect,
							supplyAppLoginInactive,
							supplyAppLoginBlocked,
							supplyAppRegister,
							supplyAppRegisterSuccess,
						],
						technologyChips: [
							<ReactChip key='react' />,
							<SassChip key='scss' />,
							<TypescriptChip key='Typescript' />,
							<ReduxChip key='Redux' />,
						],
					},
				]}
			/>
		</div>
	);
};

export default ExperienceSection;
