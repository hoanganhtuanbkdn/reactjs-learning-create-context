import './App.css';
import { useParams } from 'react-router-dom';
function Update() {
	let { id } = useParams();

	return (
		<div className="container">
			<div className="card">
				<a href={`/create`}>Update</a>
				<div className="list">
					<div className="item">
						<h1>{id}</h1>
						<p>Update a new design</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Update;
