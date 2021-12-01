import React from 'react';
// Styles
import './ExperienceSection.css';
// Assets
import arismaIcon from './assets/arisma/arisma-icon.jpg';
import arismaGiveAlert from './assets/arisma/give-alert.png';
import topcoderLogo from './assets/topcoder/topcoder-logo.png';
// Components
import Company from './components/Company/Company';
import {
	ReactChip,
	NodeChip,
	SocketIOChip,
	SassChip,
	MqttChip,
	PostgresqlChip,
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
							'Sistema de gestión de emergencias. Aplicación web que permite gestionar la notificación de emergencias en tiempo real usando WebSockects y el protocolo MQTT.',
						images: [
							arismaGiveAlert,
							arismaGiveAlert,
							arismaGiveAlert,
							arismaGiveAlert,
							arismaGiveAlert,
						],
						technologyChips: [
							<ReactChip key='react' />,
							<SassChip key='Scss' />,
							<NodeChip key='node' />,
							<SocketIOChip key='socket io' />,
							<MqttChip key='mqtt' />,
							<PostgresqlChip key='postgresql' />,
						],
					},
				]}
			/>

      <div className='ExperienceSection-CompanySeparator' />

			<Company icon={topcoderLogo} name='Topcoder' projects={[]} />
		</div>
	);
};

export default ExperienceSection;
