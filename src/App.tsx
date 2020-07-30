import React from 'react';
import logo from './logo.svg';
import Greetings from './Greetings';
import ReducerSample from './ReducerSample';

const App: React.FC = () => {
	const onSubmit = (form: { name: string; description: string }) => {
		console.log(form);
	};

	return <ReducerSample />;
};

export default App;
