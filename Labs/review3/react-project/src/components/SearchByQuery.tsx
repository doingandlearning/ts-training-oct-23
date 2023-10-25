import { useState } from "react";
import { Person } from "../api/types";
import { searchPeople } from "../api/starwars";

export default function SearchByQuery() {
	const [results, setResults] = useState<Person[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>('');

	const fetchDataBySearch = async () => {
		if (!searchTerm.trim()) {
			alert("Please enter a search term!");
			return;
		}
		try {
			const searchResults = await searchPeople(searchTerm);
			setResults(searchResults);
		} catch (error) {
			console.error("Error fetching data:", error);
			alert("An error occurred while fetching data. Please try again.");
		}
	};
	return <div>
		<input
			type="text"
			value={searchTerm}
			onChange={(e) => setSearchTerm(e.target.value)}
			placeholder="Search for a character..."
		/>
		<button onClick={fetchDataBySearch}>Search</button>
		{results.map((result, index) => (
			<div key={index}>
				<p>
					{result.name} was born on {result.homeworld} in the year {result.birth_year}.
				</p>
				<p>
					They have {result.hair_color} hair and {result.eye_color} eyes.
				</p>
			</div>))}
	</div>

}