import React, { useEffect, useState } from 'react';

export default function Homepage() {
	const [ data, setData ] = useState([]);

	const getData = async () => {
		const response = await fetch('http://localhost:5000/data');
		const jsonData = await response.json();
        setData(jsonData);
        console.log("data returned : ",jsonData);
	};
	useEffect(() => {
		getData();
	}, []);
	return (<div>

    </div>);
}
