import React, { useState } from "react";
import "./SignUp.css";
import { FaGoogle } from "react-icons/fa";
import {
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const googleLogin = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				navigate("/dashboard");

				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	const EmailLogin = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate("/dashboard")
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};
	return (
		<div className="bg">
			<div className="signup">
				<div className="signup-connect">
					<h1 style={{ color: "#E73B91" }}>Login with Google</h1>
					<a href="#" className="btn btn-google" onClick={googleLogin}>
						<FaGoogle style={{ marginRight: "10px" }} /> 
					</a>
				</div>
 
			</div>
		</div>
	);
};

export default Login;
