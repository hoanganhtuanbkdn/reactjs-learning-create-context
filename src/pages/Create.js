import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Create() {
	const [email, setEmail] = useState('');
	const navigate = useNavigate();

	const onAdd = async () => {
		const response = await axios.post(
			'https://api.code4change.dev/newsletters',
			{
				email: email,
			}
		);

		if (response.status === 200) {
			alert('Create data successfully');
			// quay ve man hinh list
			navigate('/');
			// navigate(-1)
		}
	};

	return (
		<div className="container">
			<div className="card">
				<Link to={`/`}>List</Link>

				<div className="card-header">
					<h1>To Do Create</h1>

					<div className="card-input">
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button onClick={onAdd} disabled={!email}>
							<p>+</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Create;
