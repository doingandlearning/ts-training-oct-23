
import { useState } from 'react';
import { SWAPICategory, SWAPICategoryTypes } from '../api/types';
import { searchSWAPI } from '../api/starwars';

export default function SearchById() {
	// State for selected category and ID
	const [category, setCategory] = useState<SWAPICategory>('people');
	const [id, setId] = useState(1);
	const [results, setResults] = useState<SWAPICategoryTypes | null>()

	// Handle category change
	const handleCategoryChange = (e) => {
		setCategory(e.target.value);
	};

	// Handle ID change
	const handleIdChange = (e) => {
		setId((e.target).value);
	};

	const handleFetchClick = async () => {
		const result = await searchSWAPI(category, id)
		setResults(result as SWAPICategoryTypes)
	};

	return (
		<>
			<select value={category} onChange={handleCategoryChange}>
				<option value="people">People</option>
				<option value="planets">Planets</option>
				<option value="species">Species</option>
				<option value="starships">Starships</option>
			</select>
			<input
				type="number"
				value={id}
				onChange={handleIdChange}
				placeholder="Enter ID"
			/>
			<button onClick={handleFetchClick}>Fetch</button>
			<p>
				{JSON.stringify(results)}
			</p>
		</>
	);
}
