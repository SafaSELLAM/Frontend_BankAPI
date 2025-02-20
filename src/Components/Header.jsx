import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUser, updateUser } from "../Components/Store/authSlice.js"
export const Header = () => {
    const { user, token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState(user?.firstName)
    const [lastName, setLastName] = useState(user?.lastName)

    const fetchUserProfile = async (token) => {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        if (response.status === 401) {
            dispatch(logout());
            alert("Votre session a expiré. Veuillez vous reconnecter.");
            return;
        }
        if (!response.ok) {
            const error = await response.json();
            throw new Error("Error API Profile: " + JSON.stringify(error))
        }

        const data = await response.json()
        dispatch(setUser(data.body));
        return data
    };


    useEffect(() => {
        if (token && !user) {
            fetchUserProfile(token);
        }
    }, [token, user]);


    const handleEditClick = () => setIsEditing(true);
    const handleCancel = () => {
        setFirstName(user?.firstName || "")
        setLastName(user?.lastName || "")
        setIsEditing(false)
    };

    const handleSave = async () => {

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ firstName, lastName }),
            });
            if (response.status === 401) {
                dispatch(logout());
                alert("Votre session a expiré. Veuillez vous reconnecter.");
                return;
            }
            if (!response.ok) throw new Error("Failed to update user")

            const updatedUser = await response.json()

            dispatch(updateUser(updatedUser.body))
            setIsEditing(false)

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="header">
            {isEditing ? (
                <>
                    <h1 className="header-title">Welcome back</h1>
                    <div className="input-container">
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="buttons">
                        <button className="save-button" onClick={handleSave}>
                            Save
                        </button>
                        <button className="cancel-button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="header-title">Welcome back, <br /> {user?.firstName} {user?.lastName}!</h1>
                    <button className="edit-button" onClick={handleEditClick}>
                        Edit Name
                    </button>
                </>
            )}
        </div>
    )
}