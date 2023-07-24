/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHomeContext } from '../context/HomeContext';
function List() {
	const { list, setList } = useHomeContext();

	const getData = async () => {
		const response = await axios.get(
			'https://api.code4change.dev/newsletters',
			{
				params: {
					filter: {
						order: ['id DESC'],
					},
				},
			}
		);

		if (response.status === 200) {
			setList(response.data);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const onUpdateStatus = async (id, oldStatus) => {
		const newData = {
			status: oldStatus === '1' ? '0' : '1',
		};
		const res = await axios.patch(
			'https://api.code4change.dev/newsletters/' + id,
			newData
		);

		if (res.status === 200) {
			alert('Update status successful');
		}
		await getData();
	};

	const onDelete = async (id) => {
		let text = 'Are you sure you want to delete';

		if (confirm(text) === true) {
			const res = await axios.delete(
				'https://api.code4change.dev/newsletters/' + id
			);

			if (res.status === 200) {
				alert('Delete item successful');
			}
			await getData();
		}
	};
	return (
		<div className="container">
			<div className="card">
				<a href={`/create`}>List1</a>
				<div className="list">
					{list.map((item, index) => (
						<div className="item" key={index}>
							<button
								style={{
									backgroundColor:
										item.status === '1'
											? 'rgba(54, 207, 0, 1)'
											: 'transparent',
								}}
								className="button-1"
								onClick={() =>
									onUpdateStatus(item.id, item.status)
								}
							></button>

							<Link to={'/detail/' + item.id} state={item}>
								<p>{item.email}</p>
							</Link>

							<button
								className="button-2"
								onClick={() => onDelete(item.id)}
							>
								Delete
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default List;
