const fruits = [
    { id: 1, name: 'Apple', weight: 2 },
    { id: 2, name: 'Banana', weight: 3 },
    { id: 3, name: 'Cherry', weight: 3 },
    { id: 4, name: 'Durian', weight: 3 },
    { id: 5, name: 'Apple', weight: 2 }
]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].id, fruits[i].name);
}

function RenderingKeys() {
    return (
        <ul>
            {
                fruits.map((fruit) => (
                    <li>{fruit.name} - {fruit.weight} kg</li>
                ))
            }
        </ul>
    )
}

export default RenderingKeys;