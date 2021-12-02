import React from 'react';
// Assets
import reactLogo from '../../../../assets/react-logo.png';
import javascriptLogo from '../../../../assets/javascript-logo.png';
import electronJs from '../../../../assets/electron-js.png';
import nodeJs from '../../../../assets/node-js-logo.png';
import socketIOLogo from '../../../../assets/socket-io-logo.png';
import sassLogo from '../../../../assets/sass-logo.png';
import mqttLogo from '../../../../assets/mqtt-logo.png';
import postgresqlLogo from '../../../../assets/postgresql-logo.png';
import typescriptLogo from '../../../../assets/typescript-logo.png';
import reduxLogo from '../../../../assets/redux-logo.png';
// Components
import TechnologyChip, { ITechnologyChipProps } from '../TechnologyChip/TechnologyChip';

export const ReactChip: React.FC<ITechnologyChipProps> = ({ logo, text, ...props }) => {
	return <TechnologyChip logo={logo || reactLogo} text={text || 'React JS'} {...props} />;
};

export const JavascriptChip: React.FC<ITechnologyChipProps> = ({ logo, text, ...props }) => {
	return <TechnologyChip logo={logo || javascriptLogo} text={text || 'Javascript'} {...props} />;
};

export const ElectronChip: React.FC<ITechnologyChipProps> = ({ logo, text, ...props }) => {
	return <TechnologyChip logo={logo || electronJs} text={text || 'Electron JS'} {...props} />;
};

export const NodeChip: React.FC<ITechnologyChipProps> = ({ logo, text, ...props }) => {
	return <TechnologyChip logo={logo || nodeJs} text={text || 'Node JS'} {...props} />;
};

export const SocketIOChip: React.FC<ITechnologyChipProps> = ({ logo, text, ...props }) => {
	return <TechnologyChip logo={logo || socketIOLogo} text={text || 'Socket IO'} {...props} />;
};

export const SassChip: React.FC<ITechnologyChipProps> = ({ logo, text, ...props }) => {
	return <TechnologyChip logo={logo || sassLogo} text={text || 'Sass'} {...props} />;
};

export const MqttChip: React.FC<ITechnologyChipProps> = ({ logo, text, ...props }) => {
	return <TechnologyChip logo={logo || mqttLogo} text={text || 'MQTT'} {...props} />;
};

export const PostgresqlChip: React.FC<ITechnologyChipProps> = ({ logo, text, ...props }) => {
	return <TechnologyChip logo={logo || postgresqlLogo} text={text || 'PostgreSQL'} {...props} />;
};

export const TypescriptChip: React.FC<ITechnologyChipProps> = ({ logo, text, ...props }) => {
	return <TechnologyChip logo={logo || typescriptLogo} text={text || 'Typescript'} {...props} />;
};

export const ReduxChip: React.FC<ITechnologyChipProps> = ({ logo, text, ...props }) => {
	return <TechnologyChip logo={logo || reduxLogo} text={text || 'Redux'} {...props} />;
};
