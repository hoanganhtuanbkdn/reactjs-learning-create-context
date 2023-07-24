/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useHomeContext } from '../context/HomeContext';
function List2() {
	const { list } = useHomeContext();
	console.log({ list });
	return (
		<div className="container">
			<div className="card">
				<a href={`/create`}>List2</a>
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
							></button>

							<Link to={'/detail/' + item.id} state={item}>
								<p>{item.email}</p>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default List2;
