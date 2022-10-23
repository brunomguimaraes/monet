import React from 'react';

import { ReactComponent as BoneIcon } from 'assets/icons/bone.svg';

import * as Styled from "./index.styles";

const emptyGrocery = { name: "", isChecked: false };

const GroceryList = () => {
	const [groceries, setGroceries] = React.useState(() => []);
	const [newGrocery, setNewGrocery] = React.useState(() => emptyGrocery);

	const createGrocery = (grocery) => {
		setGroceries([...groceries, grocery])
		setNewGrocery(emptyGrocery)
	}

	const onNewGroceryChange = (field) => {
		// the reason of this complexity is to add more fields on grocery in the future
		return (ev) => {
			setNewGrocery({
				...newGrocery,
				[field]: ev.target.value
			})
		}
	}

	const handleSelectGrocery = ({ name }) => {
		setGroceries(
			groceries.map(
				grocery => grocery.name === name ? {
					...grocery, isChecked: !grocery.isChecked
				} : grocery
			)
		)
	}

	// TODO: isMobile version
	return (
		<Styled.List>
			<Styled.Title>
				Grocery List
			</Styled.Title>

			<Styled.ListSection>
				<Styled.ItemList>
					{groceries.map(({ name, isChecked }) => {
						return (
							//todo: fix possible duplicate key-value with id from api
							<Styled.Item
								key={name}
								selected={isChecked}
								// use id in the future
								onClick={() => handleSelectGrocery({ name })}
							>
								<BoneIcon
									width={14}
									height={14}
								/>
								{name}
							</Styled.Item>
						)
					})}
				</Styled.ItemList>
			</Styled.ListSection>

			<Styled.FormSection>
				<Styled.TextInput value={newGrocery.name} onChange={onNewGroceryChange("name")} />
				<Styled.Button onClick={() => createGrocery(newGrocery)}>+</Styled.Button>
			</Styled.FormSection>
		</Styled.List>
	);
};

export default GroceryList;
