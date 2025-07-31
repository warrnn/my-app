const fruits = ['Apple', 'Banana', 'Cherry', 'Durian'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

function RenderingLists() {
    return (
        <ul>
            {
                fruits.map((fruit) => (
                    <li>{fruit}</li>
                ))
            }
        </ul>
    )
}

export default RenderingLists;