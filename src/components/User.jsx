

const User = ({ user }) => {
    return (


        <table className="table">
            <thead>
                <tr className="w-full lg:text-3xl">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr className="w-full lg:text-3xl">
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
                
            </tbody>
        </table>

    );
};

export default User;