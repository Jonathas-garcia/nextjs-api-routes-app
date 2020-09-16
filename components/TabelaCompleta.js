export default function TabelaCompleta({ people }) {


    return (<div>
        <h1>Lista completa</h1>
        <table>

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Hair color</th>
                    <th>Skin color</th>
                    <th>Eye color</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>



                {people.map((p, i) => (
                    <tr>
                        <td>{p.name}</td>
                        <td>{p.height}</td>
                        <td>{p.mass}</td>
                        <td>{p.hair_color}</td>
                        <td>{p.skin_color}</td>
                        <td>{p.eye_color}</td>
                        <td>{p.gender}</td>
                    </tr>
                ))}


            </tbody>
        </table>
       
    </div>)
}

