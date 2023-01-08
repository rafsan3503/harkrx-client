import { useEffect, useState } from "react"

const useLoggedUser = email => {
    const [loggedUser, setLoggedUser] = useState({});

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/single-user?email=${email}`)
                .then((res) => res.json())
                .then((data) => {
                    setLoggedUser(data);
                });
        }
    }, [email]);
    return [loggedUser];
}

export default useLoggedUser;